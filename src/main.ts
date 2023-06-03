//! main.js
// Specify the element in html to designate the location where 'app.js' will be displayed.
// This file usually exists only as one file, and plays a role in placing various 'app.js' and files that make app.js work.

import App from './App';
import router from './routes';
// When set as above, find the index value by default.

const root = document.querySelector('#root');

// element composition
root?.append(new App().el);

// Need to have an element first.
// Then can make routes to assign to each element.

// Add function of each element
router();

// immediate function.
(async () => {
  const res = await fetch('/api/test');
  const json = await res.json();
  console.log('/api/test/', json);
})();
