/// <reference types="@cloudflare/workers-types" />
/**
 * POST /api/submit — 기술 사상검증구역 익명 응답 수집.
 *
 * 저장하는 값은 O/X 45비트를 접은 hex 12자리 · 결과 코드 · qset · 클라이언트 타임스탬프뿐이다.
 * 이름·연락처는 묻지 않고, IP·User-Agent도 저장하지 않는다.
 *
 * D1 바인딩 이름은 `DB`. 테이블은 functions/api/schema.sql 로 미리 만들어 둔다.
 */

interface Env {
  DB: D1Database;
}

const HEX = /^[0-9a-f]{12}$/;                              // 45bit + 3bit 패딩 = 12 hex
const CODE = /^[ADOPMSFUCW][12](·[ADOPMSFUCW][12]){4}$/;   // 예: A2·O1·S2·U2·C1
const QSET = /^v\d{1,3}$/;
const MAX_BODY = 2048;

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store'
    }
  });
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (Number(request.headers.get('content-length') ?? 0) > MAX_BODY) {
    return json({ error: 'too_large' }, 413);
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'bad_json' }, 400);
  }

  const hex = String(body.hex ?? '');
  const code = String(body.code ?? '');
  const qset = String(body.qset ?? '');
  const ts = String(body.ts ?? '').slice(0, 32);

  // 형식이 맞지 않는 것은 전부 버린다 — 공개 엔드포인트라 아무거나 들어올 수 있다.
  if (!HEX.test(hex)) return json({ error: 'bad_hex' }, 400);
  if (!CODE.test(code)) return json({ error: 'bad_code' }, 400);
  if (!QSET.test(qset)) return json({ error: 'bad_qset' }, 400);

  try {
    await env.DB.prepare(
      'INSERT INTO responses (qset, hex, code, ts, received) VALUES (?, ?, ?, ?, ?)'
    )
      .bind(qset, hex, code, ts, new Date().toISOString())
      .run();
  } catch {
    // 수집 실패가 응답자에게 보이는 일은 없어야 한다 — 결과는 #r= 링크로 이미 재현된다.
    return json({ error: 'store_failed' }, 500);
  }

  return json({ ok: true });
};
// POST 외의 메서드는 Pages가 알아서 405로 막는다 — onRequestPost만 내보낸다.
