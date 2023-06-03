import { Component } from '../core/youjun';
import movieStore, { getMovieDetails } from '../store/movie';

export default class Movie extends Component {
  async render() {
    this.el.classList.add('container', 'the-movie');
    // Specifies the part to be displayed to insert the 'skeleton'.
    this.el.innerHTML = /* html */ `
      <div class="poster skeleton"></div>
        <div class="specs">
          <div class="title skeleton"></div>
          <div class="labels skeleton"></div>
          <div class="plot skeleton"></div>
        </div>
    `;

    // When entering the Movie page, the id value of 'history.state' saved by the query statement of the address is put into 'getMovieDetails'.
    // Then, the desired data is entered into 'movieStore.state.movie' through 'movie.js'.
    await getMovieDetails(history.state.id);
    // Since the id is stored as object data in the history state through the router function, the data can be retrieved as above.
    console.log(movieStore.state.movie);

    const { movie } = movieStore.state;
    // image resizing
    const bigPoster = movie.Poster.replace('SX300', 'SX700');

    this.el.innerHTML = /* html */ `
    <div style="background-image: url(${bigPoster})" class="poster"></div>
    <div class="specs">
      <div class="title">${movie.Title}</div>
      <div class="labels">
        <span>${movie.Released}</span>
        <!-- &nbsp; = space -->
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
