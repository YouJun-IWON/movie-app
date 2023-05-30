/// Component ///
//* 해석:
// component 라는 클래스는 호출될 때 payload라는 매개변수를 받는다.
// payload에서 tagName, state, props를 꺼낸다.
// 그 다음 각각의 변수에 저장된 내용을 this를 사용해서 해당하는 각각의 변수에 할당해준다.
// this를 통해 지정함으로써 class 안에서 만들어지는 모든 메소드(render())에서 this 라는 키워드로 참조해서 쓸 수 있다.

//! 즉 가장 근간이 되는 논리구조를 담당한다.

export class Component {
  constructor(payload = {}) {
    const { tagName = 'div', state = {}, props = {} } = payload;
    this.el = document.createElement(tagName);
    // this.render()에서 사용할 수 있도록 선언을 해준다.
    this.state = state;
    this.props = props;
    this.render();
  }
  render() {}
}

/// Router ///
//? 페이지를 구분해주고 각 페이지를 routes 의 index.js를 통해 app.js 반영해줌
function routeRender(routes) {
  // 주소부분에 hash가 붙어 있는지 확인해서 *** 이 부분에서 발생할 수 있는 에러를 차단한다. 그리고 자동으로 component가 있는 화면으로 넘어갈 수 있게 된다.
  if (!location.hash) {
    history.replaceState(null, '', '/#/'); // history를 남기지 않으면서 창을 이동시킨다.
  }

  const routerView = document.querySelector('router-view');
  // http://localhost:1234/#/about?name=youjun
  // location.hash = #/about?name=youjun
  const [hash, queryString = ''] = location.hash.split('?');

  const query = queryString.split('&').reduce((acc, cur) => {
    const [key, value] = cur.split('=');
    acc[key] = value;
    return acc;
  }, {});

  history.replaceState(query, ''); // query가 history 객체의 state 속성에 저장된다. 즉, history의 state를 통해 주소에 저장된 query문을 전처리하여 저장후 쓸 수 있다.

  // 현재 페이지에 입력된 hash가 실제로 존재하는 지 확인 => 있으면 페이지 새로 랜더링 => *** 없으면 에러
  const currentRoute = routes.find((route) =>
    new RegExp(`${route.path}/?$`).test(hash)
  );
  // routerView의 초기화
  routerView.innerHTML = '';
  // routerView에 대입
  routerView.append(new currentRoute.component().el);
 
  // 페이지 이동시 스크롤 위치 상단으로 고정
  window.scrollTo(0, 0);
}

export function createRouter(routes) {
  return function () {
    window.addEventListener('popstate', () => {
      // popstate : 주소 부분이 바뀌면 실행됨
      routeRender(routes);
    });
    routeRender(routes);
  };
}

//? 각각의 컴포넌트가 통신할 수 있도록 상태를 관리해주는 store
/// store ///
export class Store {
  constructor(state) {
    this.state = {};
    this.observers = {};
    for (const key in state) {
      // 정의하고자 하는 데이터가 새로운 값이 할당될 때마다 필요한 함수를 실행하기 위해 defineProperty를 사용한다.
      // this.state에 key를 할당하고, 이를 조작할 함수를 정의한다.
      // get 함수를 통해서 실제 state가 갖고 있는 데이터를 얻을 수 있게 한다.
      // set 함수를 통해서 새로운 값을 지정한다.
      Object.defineProperty(this.state, key, {
        get: () => state[key], // state['message']
        set: (val) => {
          state[key] = val;
          // 아래와 같은 함수 실행
          // this.observers['message']()
          this.observers[key].forEach((observer) => observer(val));
        },
      });
    }
  }
  // cb = callback function
  // this.observers['message'] = () => {}
  // { message: () => {} } => 하나의 함수만을 등록할 수 있다.
  // 즉, 하나의 컴포넌트/기능만 할 수 있는 것이다. 두개 이상의 컴포넌트에 동시에 영향을 줄 수 없다.
  // 다음과 같은 방식으로 하면 다양한 함수를 등록하고 사용할 수 있다.
  // { message: [ () => {}, () => {}, () => {} ] }
  subscribe(key, cb) {
    Array.isArray(this.observers[key])
      ? this.observers[key].push(cb)
      : (this.observers[key] = [cb]);
  }
}
