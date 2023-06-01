//! youjun.js는 가장 근간이 되는 논리구조를 담당한다.

///? Component ///
//* 해석 :
// component 라는 클래스는 호출될 때 payload라는 매개변수를 받는다.
// payload에서 tagName, state, props를 꺼낸다.
// 그 다음 각각의 변수에 저장된 내용을 this를 사용해서 해당하는 각각의 변수에 할당해준다.
// this를 통해 지정함으로써 class 안에서 만들어지는 모든 메소드(render())에서 this 라는 키워드로 참조해서 쓸 수 있다.
// 정리하면 웹페이지에 나타낼 tag를 명시하고 tag안에 담길 데이터를 정의한다.

export class Component {
  constructor(payload = {}) {
    const { tagName = 'div', state = {}, props = {} } = payload;
    this.el = document.createElement(tagName);
    // this.render()에서 사용할 수 있도록 선언을 해준다.

    // state는 자식이 부모의 데이터에 영향을 줄 데이터를 의미한다.
    this.state = state;
    // props는 부모가 자식에게 줄 데이터를 의미한다.
    this.props = props; 

    // this.render를 통해 위에서 설정된 값들이 render() 를 통해 변화될 수 있도록 한다. => 다른 component들이 render()를 통해 여기에 지정된 값과 규칙을 근간으로 자신만의 모습을 가질 수 있게된다.
    this.render();
    // 또한, 가장 기본적인 규칙을 이루고 있는 만큼 this.render()이 호출되는 함수 밑으로는 code가 작동되지 않는다. 
  }
  render() {}
}

///? Router ///
//* 해석 :
// 입력된 주소에 따라 페이지를 구분해주고 각 페이지를 routes 의 index.js를 통해 app.js 반영해줌
// 주소에 입력받은 api와 query에 대한 데이터도 처리함
function routeRender(routes) {
  // 주소부분에 hash가 붙어 있는지 확인해서 *** 이 부분에서 발생할 수 있는 에러를 차단한다. 그리고 자동으로 component가 있는 화면으로 넘어갈 수 있게 된다.
  if (!location.hash) {
    history.replaceState(null, '', '/#/'); // history를 남기지 않으면서 창을 이동시킨다. => 초기화면의 주소를 설정해준다.
  }

  //* app.js에서 지정한 movie app의 범위를 잡는다.
  const routerView = document.querySelector('router-view');
  // http://localhost:1234/#/about?name=youjun
  // location.hash = #/about?name=youjun
  const [hash, queryString = ''] = location.hash.split('?');

  const query = queryString.split('&').reduce((acc, cur) => {
    const [key, value] = cur.split('=');
    acc[key] = value;
    return acc; // => key(name)에 따른 value값을 객체 형태로 반환
  }, {});

  history.replaceState(query, ''); // query가 history 객체의 state 속성에 저장된다.
  // 즉,위와 같이 history의 state를 통해 주소에 저장된 query문을 전처리하여 저장후 쓸 수 있다.

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

//* routes의 index.js 에서 사용되며 [{ path: '#/', component: Home }] 와 같은 형식의 데이터를 받는다.
export function createRouter(routes) {
  return function () {
    window.addEventListener('popstate', () => {
      // popstate : 주소 부분이 바뀌면 실행됨
      routeRender(routes);
    });
    routeRender(routes);
  };
}

///? store ///
//* 해석:
// 각각의 컴포넌트가 통신할 수 있도록 통용되는 데이터 상태를 관리해주는 store
export class Store {
  constructor(state) {
    // 저장할 상태
    this.state = {};
    // 지켜볼 상태
    this.observers = {};
    for (const key in state) {
      // 정의하고자 하는 데이터가 새로운 값이 할당될 때마다 필요한 함수를 실행하기 위해 defineProperty를 사용한다.
      // this.state에 key를 할당하고, 이를 조작할 함수를 정의한다.
      // get 함수를 통해서 실제 state가 갖고 있는 데이터를 얻을 수 있게 한다.
      // set 함수를 통해서 새로운 값을 지정한다.
      Object.defineProperty(this.state, key, {
        get: () => state[key],
        set: (val) => {
          state[key] = val;
          // 아래와 같은 함수 실행
          // this.observers['message']()
          console.log('core' + key);
          console.log('core' + val);
          console.log(this.observers);
          console.log(this.observers[key]);

          if (Array.isArray(this.observers[key])) {
            // 호출할 콜백이 있는 경우 => 에러방지
            this.observers[key].forEach((observer) => {
              observer(val);
            });
          }
        },
      });
    }
  }
  // cb = callback function
  // 이 함수를 통해 감시할 대상과 이벤트를 지정한다.

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
