import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export function GET(event) {
  // 모든 헤더를 출력합니다.
  console.log(...event.request.headers);

  return json({
    // 특정 헤더의 값을 가져옵니다.
    userAgent: event.request.headers.get('user-agent')
  });
}