//! Search.js
// home 화면의 search 컴포넌트를 구성한다.
// 검색결과에 따른 movie 데이터를 지정해야 하는 만큼
// store 폴더에 있는 movie.js와 연결한다.

import { Component } from '../core/youjun';
import movieStore, { searchMovies } from '../store/movie';
// movieStore = this.state

export default class Search extends Component {
  render() {
    this.el.classList.add('search');
    this.el.innerHTML = /* html */ `
    <!-- value 요소를 지정해서 뒤로가기를 진행했을 때 검색창에 입력된 값이 초기화되지 않도록 한다.  -->
					<input value="${movieStore.state.searchText}" placeholder="Enter the movie title to search!" />
					<button class="btn btn-primary">
						Search!
					</button>
        `;

    const inputEl = this.el.querySelector('input');
    inputEl.addEventListener('input', () => {
      // input 값을 movie 검색 api에 전송한다.
      movieStore.state.searchText = inputEl.value;
    });
    inputEl.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && movieStore.state.searchText.trim()) {
        // trim() => 앞 뒤 공백문자 제거
        // 검색!
        searchMovies(1);
      }
    });

    const btnEl = this.el.querySelector('.btn');
    btnEl.addEventListener('click', () => {
      if (movieStore.state.searchText.trim()) {
        // trim() => 앞 뒤 공백문자 제거
        // 검색!
        searchMovies(1);
      }
    });
  }
}
