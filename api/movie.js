// 이 코드(serverless functions)가 동작하는 환경은 웹이 아니고 vercel package가 동작하는 nodejs 환경이다.
// fetch 함수는 nodejs에 없기 때문에 따로 설치가 필요하다.
// npm i node-fetch@2

// 그리고 환경변수에 api key를 숨긴다.
// npm i -D dotenv

import fetch from 'node-fetch';

const { APIKEY } = process.env;

export default async function handler(request, response) {
  const { title, page, id } = JSON.parse(request.body);
  const url = id
    ? `https://omdbapi.com?apikey=${APIKEY}&i=${id}&plot=full`
    : `https://omdbapi.com?apikey=${APIKEY}&s=${title}&page=${page}`;

  const res = await fetch(url);
  const json = await res.json();
  response.status(200).json(json);
}
