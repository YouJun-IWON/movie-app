//! app.js
// main.js 이전에 router-view라는 부분에 보여줄 movie-app 을 지정
// 이부분은 지금에서는 하나의 앱 => movie app 을 만들기 때문에 하나의 파일로 존재하지만
// 추후 여러 앱을 만들어서 main.js에 반영할 경우 이름이 변경될 여지가 있음
// 또한, 모든 페이지에서 고정되어 보여질 화면 (header, footer side bar)을 지정할 수 있음

import { Component } from './core/youjun';

import TheHeader from './components/TheHeader';
import TheFooter from './components/TheFooter';

// router-view라는 html을 형성한다.
export default class App extends Component {
  render() {
    const theHeader = new TheHeader().el;
    const routerView = document.createElement('router-view');
    const theFooter = new TheFooter().el;

    this.el.append(theHeader, routerView, theFooter);
  }
}
