import { SET_MOVIE_LIST, SET_MOVIE_DETAIL, SET_LOADING_SEARCH, SET_LOADING_MOVIE_DETAIL } from '../actions/movieActions';

const initialState = {
  movieList: [],
  movieDetail: null,
  loadingSearch: false,
  loadingMovieDetail: false,
};

const movieReducer = (state = initialState, action) => {
 
  switch (action.type) {
    
    case SET_MOVIE_LIST:
      return {
        ...state,
        movieList: action.payload,
        
      };
    case SET_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: action.payload,
      };
    case SET_LOADING_SEARCH:
      return {
        ...state,
        loadingSearch: action.payload,
      };
    case SET_LOADING_MOVIE_DETAIL:
      return {
        ...state,
        loadingMovieDetail: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
