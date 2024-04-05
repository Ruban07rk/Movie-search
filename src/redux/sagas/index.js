import { takeLatest, put, call } from 'redux-saga/effects';
import { SEARCH_MOVIE, FETCH_MOVIE_DETAIL, setMovieList, setMovieDetail, setLoadingSearch, setLoadingMovieDetail } from '../actions/movieActions';

function* searchMovieSaga(action) {
  try {
    console.log(action)
    yield put(setLoadingSearch(true)); 
    
    const response = yield call(fetch, `https://www.omdbapi.com/?s=${action.payload ? action.payload : 'spiderman' }&apikey=3bd483f3`);
    const data = yield response.json();
    if(data.response===false){
      yield put(setMovieList([]));
    } else{
    yield put(setMovieList(data.Search));}
  } catch (error) {
    console.error('Error searching movie:', error);
  } finally {
    yield put(setLoadingSearch(false)); 
  }
}

function* fetchMovieDetailSaga(action) {
  try {
    yield put(setLoadingMovieDetail(true));
    const response = yield call(fetch, `https://www.omdbapi.com/?t=${action.payload}&apikey=3bd483f3`);
    const data = yield response.json();
    yield put(setMovieDetail(data));
  } catch (error) {
    console.error('Error fetching movie detail:', error);
  } finally {
    yield put(setLoadingMovieDetail(false)); 
  }
}

export default function* rootSaga() {
  yield takeLatest(SEARCH_MOVIE, searchMovieSaga);
  yield takeLatest(FETCH_MOVIE_DETAIL, fetchMovieDetailSaga);
}
