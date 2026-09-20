/// <reference types="@cloudflare/workers-types" />
/**
 * GET /api/stats — 수집된 응답의 코드 분포.
 *
 *   /api/stats            현재 qset 전체 분포
 *   /api/stats?qset=v5    특정 qset만
 *
 * 개인을 식별할 값은 애초에 저장하지 않으므로 공개 조회로 둔다.
 * 결과 페이지의 '같은 코드 비율' 표시에 쓴다.
 */

interface Env {
  DB: D1Database;
}

const QSET = /^v\d{1,3}$/;

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  const qset = new URL(request.url).searchParams.get('qset');
  if (qset !== null && !QSET.test(qset)) {
    return new Response(JSON.stringify({ error: 'bad_qset' }), {
      status: 400,
      headers: { 'content-type': 'application/json; charset=utf-8' }
    });
  }

  const where = qset ? 'WHERE qset = ?' : '';
  const bind = qset ? [qset] : [];

  try {
    const codes = await env.DB.prepare(
      `SELECT code, COUNT(*) AS n FROM responses ${where} GROUP BY code ORDER BY n DESC, code LIMIT 64`
    )
      .bind(...bind)
      .all<{ code: string; n: number }>();

    const total = await env.DB.prepare(`SELECT COUNT(*) AS n FROM responses ${where}`)
      .bind(...bind)
      .first<{ n: number }>();

    return new Response(
      JSON.stringify({ qset: qset ?? 'all', total: total?.n ?? 0, codes: codes.results ?? [] }),
      {
        headers: {
          'content-type': 'application/json; charset=utf-8',
          // 방송 중 조회가 몰려도 D1을 계속 때리지 않게 한다.
          'cache-control': 'public, max-age=60'
        }
      }
    );
  } catch {
    return new Response(JSON.stringify({ error: 'query_failed' }), {
      status: 500,
      headers: { 'content-type': 'application/json; charset=utf-8' }
    });
  }
};
