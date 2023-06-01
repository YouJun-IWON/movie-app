//! movie.js
// Designate movie data that can be continuously changed and process according to the situation.
// It determines the format of movie data to use and has functions that can affect this format.

import { Store } from '../core/youjun';

const store = new Store({
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: [],
  movie: {}, // Movie details
  loading: false,
  message: 'Search for the movie title!',
});

export default store;
// search movie
export const searchMovies = async (page) => {
  store.state.loading = true; // Setting the loading screen to be shown before the result screen.
  store.state.page = page; // When '더보기' is clicked, the page value that becomes + 1 is saved.
  // When a new search event occurs(when page = 1 is specified), the contents stored in the existing array are initialized.
  if (page === 1) {
    store.state.movies = [];
    store.state.message = '';
  }

  // Make it possible to handle errors so that javascript does not stop (due to network errors).
  try {
    const res = await fetch('/api/movie.js', {
      method: 'POST',
      body: JSON.stringify({
        title: store.state.searchText,
        page: page,
      }),
    });
    const { Search, totalResults, Response, Error } = await res.json();

    if (Response === 'True') {
      // Accumulate page content.
      store.state.movies = [...store.state.movies, ...Search];

      // Check the maximum outputable page through a variable called totalResults.
      store.state.pageMax = Math.ceil(Number(totalResults) / 10);
    } else {
      store.state.message = Error;
    }
  } catch (error) {
    console.log('searchMovies error:', error);
  } finally {
    store.state.loading = false;
  }
};

export const getMovieDetails = async (id) => {
  try {
    const res = await fetch('/api/movie.js', {
      method: 'POST',
      body: JSON.stringify({
        id: id,
      }),
    });
    store.state.movie = await res.json();
  } catch (error) {
    console.log('getMovieDetails error:', error);
  }
};
