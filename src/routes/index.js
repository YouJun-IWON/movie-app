//! routes :
// (movie) app.js에서 지정한 (html) 부분에 표시할 웹(list)를 지정한다.
// 배열을 통해 각각의 웹페이지를 나열하고 객체를 통해 각 페이지에서 보여질 component를 지정한다.

import { createRouter } from '../core/youjun';
import Home from './Home';
import Movie from './Movie';
import About from './About';
import NotFound from './NotFound';

// 여기서 path에 따라 지정된 component가 app.js의 router-view가 된다.
export default createRouter([
  { path: '#/', component: Home },
  { path: '#/movie', component: Movie },
  { path: '#/about', component: About },
  { path: '.*', component: NotFound },
]);
