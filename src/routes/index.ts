//! routes :
// Specifies the web list to be displayed in the html part specified in 'app.js'.
// List each web page path through an array and designate a component to be displayed on each page through an object.
import { createRouter } from '../core/youjun';
import Home from './Home';
import Movie from './Movie';
import About from './About';
import NotFound from './NotFound';

// Here, the component designated according to the path becomes the 'router-view' of app.js.
export default createRouter([
  { path: '#/', component: Home },
  { path: '#/movie', component: Movie },
  { path: '#/about', component: About },
  { path: '.*', component: NotFound },
]);
