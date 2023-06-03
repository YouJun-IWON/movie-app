//! Search.js
// Configure the search component of the home screen.
// As much as need to specify movie data based on search results,
// Connect with movie.js in the store folder.

import { Component } from '../core/youjun';
import movieStore, { searchMovies } from '../store/movie';
// movieStore = this.state

export default class Search extends Component {
  render() {
    this.el.classList.add('search');
    this.el.innerHTML = /* html */ `
    <!-- value: Prevents the value entered in the search box from being initialized when going back. -->
					<input value="${movieStore.state.searchText}" placeholder="Enter the movie title to search!" />
					<button class="btn btn-primary">
						Search!
					</button>
        `;

    const inputEl = this.el.querySelector('input');
    inputEl?.addEventListener('input', () => {
      movieStore.state.searchText = inputEl.value;
    });
    inputEl?.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && movieStore.state.searchText.trim()) {
        searchMovies(1);
      }
    });

    const btnEl = this.el.querySelector('.btn');
    btnEl?.addEventListener('click', () => {
      if (movieStore.state.searchText.trim()) {
        searchMovies(1);
      }
    });
  }
}
