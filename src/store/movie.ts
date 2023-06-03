//! movie.js
// Designate movie data that can be continuously changed and process according to the situation.
// It determines the format of movie data to use and has functions that can affect this format.

import { Store } from '../core/youjun';

export interface SimpleMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface DetailMovie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

interface Rating {
  Source: string;
  Value: string;
}

interface State {
  searchText: string;
  page: number;
  pageMax: number;
  movies: SimpleMovie[];
  movie: DetailMovie;
  loading: boolean;
  message: string;
}

const store = new Store<State>({
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: [],
  movie: {} as DetailMovie, // getMovieDetails 함수가 실행될 때 내용이 들어가므로 타입을 단언해준다.
  loading: false,
  message: 'Search for the movie title!',
});

export default store;
// search movie
export const searchMovies = async (page: number) => {
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
      store.state.pageMax = 1;
    }
  } catch (error) {
    console.log('searchMovies error:', error);
  } finally {
    store.state.loading = false;
  }
};

export const getMovieDetails = async (id: string) => {
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
