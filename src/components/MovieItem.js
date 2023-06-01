import { Component } from '../core/youjun';

export default class MovieItem extends Component {
  // 부모 컴포넌트(MovieList.js)를 통해 데이터를 받아서 사용하겠다. => props
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
    // img 태그로 출력하게 되면 각각 다른 Poster의 크기 때문에 layout이 깨질 수 있다.
    // 그래서 아래 코드 같이 지정한 후 a 태그의 크기를 결정해 통일한다.
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
