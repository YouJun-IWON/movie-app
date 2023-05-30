import { Store } from '../core/youjun';

const store = new Store({
  searchText: '',
  page: 1,
  movies: [],
});

export default store;
export const searchMovies = (page) => {
  fetch();
};
