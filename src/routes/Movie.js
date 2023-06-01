import { Component } from '../core/youjun';
import movieStore, { getMovieDetails } from '../store/movie';

export default class Movie extends Component {
  async render() {
    this.el.classList.add('container', 'the-movie');
    // skeleton을 넣기 위해 표시할 부분을 지정해준다.
    this.el.innerHTML = /* html */ `
      <div class="poster skeleton"></div>
        <div class="specs">
          <div class="title skeleton"></div>
          <div class="labels skeleton"></div>
          <div class="plot skeleton"></div>
        </div>
    `;
    await getMovieDetails(history.state.id);
    // router 기능을 통해 history의 state에 객체데이터로 저장했기 때문에 위와 같이 데이터를 가져 올 수 있다.
    console.log(movieStore.state.movie);

    const { movie } = movieStore.state;
    // 이미지 리사이징
    const bigPoster = movie.Poster.replace('SX300', 'SX700');

    this.el.innerHTML = /* html */ `
    <div style="background-image: url(${bigPoster})" class="poster"></div>
    <div class="specs">
      <div class="title">${movie.Title}</div>
      <div class="labels">
        <span>${movie.Released}</span>
        <!-- &nbsp; = 띄어쓰기 특수기호 -->
        &nbsp;/&nbsp;
        <span>${movie.Runtime}</span>
        &nbsp;/&nbsp;
        <span>${movie.Country}</span>
      </div>
      <div class="plot">${movie.Plot}</div>
      <div>
        <h3>Ratings</h3>
        ${movie.Ratings.map((rating) => {
          return `<p>${rating.Source} - ${rating.Value}</p>`;
        }).join('')}
      </div>
      <div>
        <h3>Actors</h3>
        <p>${movie.Actors}</p>
      </div>
      <div>
        <h3>Director</h3>
        <p>${movie.Director}</p>
      </div>
      <div>
        <h3>Production</h3>
        <p>${movie.Production}</p>
      </div>
      <div>
        <h3>Genre</h3>
        <p>${movie.Genre}</p>
      </div>
    </div>
    `;
  }
}
