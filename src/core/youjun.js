//! 'youjun.js' is in charge of the most fundamental logical structure.

///? Component ///
//* Interpretation :
// A class called 'component' receives a parameter called 'payload' when called.
// Get tagName, state, and props from 'payload'.
// Then, the contents stored in each variable are assigned to each corresponding variable using 'this'.
// By specifying it through 'this', all methods(render()) created in the class can refer to it with the keyword 'this'.
// To define this class, specify the tag to be displayed on the web page and define the data to be included in the tag.

export class Component {
  constructor(payload = {}) {
    const { tagName = 'div', state = {}, props = {} } = payload;
    this.el = document.createElement(tagName);
    // It declares so that it can be used in this render().

    // 'state' means the data that the child will affect the parent's data
    this.state = state;
    // 'props' means the data parents give to children.
    this.props = props;

    this.render();
    // The values set above can be changed through 'render()'. => Other components can have their own appearance based on the values and rules specified here.
  }
  render() {}
}

///? Router ///
//* Interpretation :
// Classify Web pages according to the route(address) entered by 'index.js' of 'routes'.
// Reflect the web components divided according to the separated routes to 'app.js'(router-view)
function routeRender(routes) {
  // Check if hash is attached to the address part, and blocks errors that occur '***'.
  // And automatically move to the screen where the component is located.
  if (!location.hash) {
    history.replaceState(null, '', '/#/'); // Moves a window without leaving history. -> Sets the address of the initial screen.
  }

  //* Scope the movie app specified in app.js
  const routerView = document.querySelector('router-view');
  // http://localhost:1234/#/about?name=youjun
  // location.hash = #/about?name=youjun
  const [hash, queryString = ''] = location.hash.split('?');

  const query = queryString.split('&').reduce((acc, cur) => {
    const [key, value] = cur.split('=');
    acc[key] = value;
    return acc; // => Return value according to key(Name) in object form.
  }, {});

  history.replaceState(query, ''); // The query is stored in the state property of the history object.
  // In other words, through the state of history, the query statement stored in the address can be preprocessed, stored, and then used.

  // Check if the hash entered in the current page actually exist => If so, render the page => if not, error
  const currentRoute = routes.find((route) =>
    new RegExp(`${route.path}/?$`).test(hash)
  );
  // Initialization of 'router-view'
  routerView.innerHTML = '';
  // Assign to routerView
  routerView.append(new currentRoute.component().el);

  // When moving the page, the scroll position is fixed at the top.
  window.scrollTo(0, 0);
}

//* It it used in 'index.js' of routes and receives data in the format of [{ path: '#/', component: Home }].
export function createRouter(routes) {
  return function () {
    window.addEventListener('popstate', () => {
      // popstate : Fire when address part changes
      routeRender(routes);
    });
    routeRender(routes);
  };
}

///? store ///
//* Interpretation:
// A 'store' that manages the common data state so that each component can communicate.
export class Store {
  constructor(state) {
    // state to save
    this.state = {};
    // state to observe
    this.observers = {};
    for (const key in state) {
      // Use 'defineProperty' to execute the necessary function whenever a new value is assigned to the existing data.
      // Through the 'get' function, you can get the data that the actual state has.
      // A new value is assigned using the 'set' function.
      Object.defineProperty(this.state, key, {
        get: () => state[key],
        set: (val) => {
          state[key] = val;

          // Checking whether 'this.observers[key]' is an array means that it determines whether or not to change/create a component with the changed data.
          // In other words, if data changed by a certain event creates a new component or changes an existing state, it is necessary to create 'this.observers[key]' as an array.
          if (Array.isArray(this.observers[key])) {
            // If there is a callback to call => prevent errors.
            this.observers[key].forEach((observer) => {
              observer(val);
            });
          }
        },
      });
    }
  }
  // cb = callback function
  // Through this function, specify the objects and events to observe

  // this.observers['message'] = () => {}
  // { message: () => {} } => Only one function can be registered.
  // That is, only one component/function can be performed. Cannot affect more than one component at the same time.

  // Can register and use various functions in the following way.
  // { message: [ () => {}, () => {}, () => {} ] }
  subscribe(key, cb) {
    Array.isArray(this.observers[key])
      ? this.observers[key].push(cb)
      : (this.observers[key] = [cb]);
  }
}
