//! MovieList.js
// Configure the movie list component of the home screen.
// If there is a value (input value) that changes while tracking the state of movieStore,
// Shows the movieStore.state.movies value obtained through 'Search.js => movie.js => youjun.js'.

import { Component } from '../core/youjun';
import movieStore from '../store/movie';
import MovieItem from './MovieItem';

export default class MovieList extends Component {
  // Create a constructor so that when a certain condition occurs, movieStore.subscribe can be run (so that the web page can be updated whenever a new search is made.)
  constructor() {
    super();
    // Among the values stored in the movieStore, the object named movies is monitored.
    // It is re-render() every time new movies are updated

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
    // ? : remove error
    moviesEl?.append(
      ...movieStore.state.movies.map(
        (movie) => new MovieItem({ movie }).el // movie = movie : movie
        // Each data created in the MovieItem component is shown through 'map'.
      )
    );

    const loaderEl = this.el.querySelector('.the-loader');
    movieStore.state.loading
      ? loaderEl?.classList.remove('hide')
      : loaderEl?.classList.add('hide');
  }
}

//! The reason for specifying the constructor as above.
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
//* Interpretation :
// Show the result of executing the function specified in the constructor.
// This means that if you use the class constructor, you can modify the variables to be used through various functions and get the result.
