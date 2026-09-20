-- 기술 사상검증구역 응답 테이블 (Cloudflare D1)
--
--   npx wrangler d1 execute tech-ideology-test --remote --file functions/api/schema.sql
--
-- 저장 값은 익명 응답뿐이다 — 이름·연락처·IP·User-Agent는 받지도 남기지도 않는다.
-- hex = O/X 45비트 + 3비트 패딩을 접은 12자리, code = 결과 코드(예: A2·O1·S2·U2·C1).

CREATE TABLE IF NOT EXISTS responses (
  id       INTEGER PRIMARY KEY AUTOINCREMENT,
  qset     TEXT NOT NULL,          -- 문항 판 (v5 …). 판이 다르면 비교 불가
  hex      TEXT NOT NULL,          -- 응답 45비트 → 12 hex
  code     TEXT NOT NULL,          -- 결과 코드 5자리
  ts       TEXT,                   -- 클라이언트가 보낸 완료 시각
  received TEXT NOT NULL           -- 서버 수신 시각 (ISO 8601)
);

CREATE INDEX IF NOT EXISTS idx_responses_qset_code ON responses (qset, code);
CREATE INDEX IF NOT EXISTS idx_responses_received ON responses (received);
