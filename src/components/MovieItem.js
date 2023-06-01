import { Component } from '../core/youjun';

export default class MovieItem extends Component {
  // Will receive data through the parent component (MovieList.js) and use it. => props
  constructor(props) {
    super({
      props,
      tagName: 'a',
    });
  }
  render() {
    // console.log('this is state:' + JSON.stringify(this.state));
    console.log('this is props:' + JSON.stringify(this.props));

    const { movie } = this.props;

    this.el.setAttribute('href', `#/movie?id=${movie.imdbID}`);
    this.el.classList.add('movie');
    // When outputting with a img tag, the layout may be broken due to the size of each different poster.
    // So, designating as in the code below, determine the size of the 'a' tag and unify it.
    this.el.style.backgroundImage = `url(${movie.Poster})`;
    this.el.innerHTML = /* html */ `
    <div class="info">
        <div class="year">
            ${movie.Year}
        </div>
        <div class="title">
            ${movie.Title}
        </div>
    </div>
    `;
  }
}
