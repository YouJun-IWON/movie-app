//! app.js
// Specify movie-app to be shown in the part called 'router-view' before 'main.js'.
// This part exist as one file because Im making one app(movie-app) now,
// but there is room for the name to be changed if you create muliple apps in the future.
// Also, can specify the screen (header, footer, sidebar) to be fixed and displayed on all pages.

import { Component } from './core/youjun';

import TheHeader from './components/TheHeader';
import TheFooter from './components/TheFooter';

// router-view
export default class App extends Component {
  render() {
    const theHeader = new TheHeader().el;
    const routerView = document.createElement('router-view');
    const theFooter = new TheFooter().el;

    this.el.append(theHeader, routerView, theFooter);
  }
}
