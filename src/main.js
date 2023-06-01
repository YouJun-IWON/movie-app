//! main.js
// html에 있는 요소를 지정하여 컴포넌트로 구성된 app.js에 표시될 위치를 지정한다.
// 이 파일은 보통 하나의 파일로만 존재하며 다양한 app.js를 html의 요소에 적재적소 하는 역할을 함

import App from './App';
import router from './routes';
// 위와 같이 설정시 index 값을 기본으로 찾아줌

const root = document.querySelector('#root');

// 요소 구성
root.append(new App().el);

// 요소가 먼저 있어야지 각 요소에 지정할 routes를 만들 수 있다. (즉, router-view가 있어야 한다.)

// 각 요소의 기능 추가
router();

// 즉시실행 함수
(async () => {
  const res = await fetch('/api/test');
  const json = await res.json();
  console.log('/api/test/', json);
})();
