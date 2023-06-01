//! movie.js
// 계속해서 변화될 수 있는 movie 데이터를 지정하고 상황에 따라 가공한다.
// 사용할 movie 데이터의 형식을 결정하고 이 형식에 영향을 줄 수 있는 함수를 가진다.

import { Store } from '../core/youjun';

// 검색할 영화 입력 받기
const store = new Store({
  // this.state에 저장
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: [],
  movie: {}, // 영화 상세 정보
  loading: false,
  message: 'Search for the movie title!',
});

export default store;
// 영화 검색 기능
export const searchMovies = async (page) => {
  store.state.loading = true;
  store.state.page = page; // 더보기를 눌렀을 때 +1 이 된 page 값이 저장된다.
  // 새로운 검색 이벤트가 발생했을 때(page = 1이 지정됐을 때) 기존 배열에 저장된 내용을 초기화 한다.
  if (page === 1) {
    store.state.movies = [];
    store.state.message = '';
  }

  // error를 핸들링할 수 있게 만들어서 (네트워크 에러때문에) javascript가 멈추는 일이 없게 한다.
  try {
    // api 에 따라 수정됨
    const res = await fetch('/api/movie.js', {
      method: 'POST',
      body: JSON.stringify({
        title: store.state.searchText,
        page: page,
      }),
    });
    const { Search, totalResults, Response, Error } = await res.json();

    if (Response === 'True') {
      // 페이지 내용을 축적한다.
      store.state.movies = [...store.state.movies, ...Search];

      // totalResults 라는 변수를 통해 최대 출력 가능한 page를 확인한다.
      store.state.pageMax = Math.ceil(Number(totalResults) / 10);
    } else {
      store.state.message = Error;
    }
  } catch (error) {
    console.log('searchMovies error:', error);
  } finally {
    store.state.loading = false;
  }
};

export const getMovieDetails = async (id) => {
  try {
    // api 에 따라 수정됨
    const res = await fetch('/api/movie.js', {
      method: 'POST',
      body: JSON.stringify({
        id: id,
      }),
    });
    store.state.movie = await res.json();
  } catch (error) {
    console.log('getMovieDetails error:', error);
  }
};
