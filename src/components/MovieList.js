//! MovieList.js
// home 화면의 movie list 컴포넌트를 구성한다.
// movieStore의 상태를 추적하다가 변화되는 값(입력된 값)이 있으면
// Search.js => movie.js => youjun.js 를 거쳐 나온
// movieStore.state.movies에 저장된 값을 보여준다.

import { Component } from '../core/youjun';
import movieStore from '../store/movie';
import MovieItem from './MovieItem';

export default class MovieList extends Component {
  // constructor를 만들어서 어떤 조건이 발생되면 movieStore.subscribe가 작동될 수 있도록(새로 검색할 때마다 웹페이지가 갱신될 수 있도록) 한다.
  constructor() {
    super();
    // movieStore에 저장된 값 중에서 movies 라는 대상을 감시한다.
    // 새로 movies가 갱신될 때마다 다시 render() 된다.

    movieStore.subscribe('movies', () => {
      this.render();
    });
    movieStore.subscribe('loading', () => {
      this.render();
    });
    movieStore.subscribe('message', () => {
      this.render();
    });
  }
  render() {
    this.el.classList.add('movie-list');
    this.el.innerHTML = /* html */ `
        ${
          movieStore.state.message
            ? `<div class="message">${movieStore.state.message}</div>`
            : '<div class="movies"></div>'
        }
        <div class="the-loader hide"></div>
        `;

    const moviesEl = this.el.querySelector('.movies');
    // 에러 제거
    moviesEl?.append(
      ...movieStore.state.movies.map(
        (movie) => new MovieItem({ movie }).el // movie = movie : movie
        // MovieItem 을 정리해서 보여줄 component를 만들어서 movie 데이터를 넣어준다.
        // MovieItem 컴포넌트에서 만들어진 각각의 형식을 moviesEl에 map을 통해 모두 보여준다.
      )
    );

    const loaderEl = this.el.querySelector('.the-loader');
    movieStore.state.loading
      ? loaderEl.classList.remove('hide')
      : loaderEl.classList.add('hide');
  }
}

//! 위와 같이 constructor를 지정한 이유
/*
class Polygon {
    constructor() {
      this.name = 'Polygon';
      this.render()
    }
    render() {
      console.log('hello')
      this.name = this.name.concat('-wow')
    }
  }
  
  const poly1 = new Polygon();
  
  console.log(poly1.name);
  */

// console.log =>
// "hello"
// "Polygon-wow"
//* 해석 :
// 위의 내용처럼 hello가 먼저 출력된 후 "Polygon"이 나온다.
// 즉, constructor에 지정된 함수가 실행된 후 나온 결과를 바탕으로 constructor에 정의된 변수들의 상태를 변경하여 결과를 보여주는 것이다.
// 이는 class의 constructor를 사용하면 사용할(지정된) 변수들을 다양한 함수를 통해 수정하고 new (className)을 통해 결과물을 얻을 수 있다는 것이다.
// 상황에 따라 변화되는 데이터를 나타낼 시 보여줄 초기 세팅을 이룬다음에 어떤 특정 조건이 달성되었을 때 subscribe 와 같은 함수를 통해 가공된 데이터를 보여줄 수 있는 것이다.
