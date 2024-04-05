export const SEARCH_MOVIE = 'SEARCH_MOVIE';
export const FETCH_MOVIE_DETAIL = 'FETCH_MOVIE_DETAIL';
export const SET_MOVIE_LIST = 'SET_MOVIE_LIST';
export const SET_MOVIE_DETAIL = 'SET_MOVIE_DETAIL';
export const SET_LOADING_SEARCH = 'SET_LOADING_SEARCH';
export const SET_LOADING_MOVIE_DETAIL = 'SET_LOADING_MOVIE_DETAIL';

export const setLoadingSearch = (loading) => ({
  type: SET_LOADING_SEARCH,
  payload: loading,
});

export const setLoadingMovieDetail = (loading) => ({
  type: SET_LOADING_MOVIE_DETAIL,
  payload: loading,
});

export const searchMovie = (query) => ({
  type: SEARCH_MOVIE,
  payload: query,
});

export const fetchMovieDetail = (title) => ({
  type: FETCH_MOVIE_DETAIL,
  payload: title,
});

export const setMovieList = (movies) => ({
  type: SET_MOVIE_LIST,
  payload: movies,
});

export const setMovieDetail = (movieDetail) => ({
  type: SET_MOVIE_DETAIL,
  payload: movieDetail,
});
