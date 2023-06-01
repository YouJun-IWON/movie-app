import { Component } from '../core/youjun';
import movieStore, { searchMovies } from '../store/movie';

export default class MovieListMore extends Component {
  constructor() {
    super({
      tagName: 'button',
    });
    // 더보기 버튼을 상황에 따라 보여주는 함수
    // pageMax가 새로 갱신될 때 마다
    movieStore.subscribe('pageMax', () => {
      const { page, pageMax } = movieStore.state;
      pageMax > page
        ? this.el.classList.remove('hide')
        : this.el.classList.add('hide');
    });
  }
  render() {
    this.el.classList.add('btn', 'view-more', 'hide');
    this.el.textContent = 'View more..';

    this.el.addEventListener('click', async () => {
      // 영화 데이터가 존재하지 않을 시 '더보기' 버튼이 보여지는 것을 방지한다.
      this.el.classList.add('hide');
      await searchMovies(movieStore.state.page + 1);
    });
  }
}
