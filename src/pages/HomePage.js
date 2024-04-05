import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovie } from '../redux/actions/movieActions';
import MovieSearch from '../containers/MovieSearch';
import MovieList from '../components/MovieList';
import { useHistory } from 'react-router-dom'




const HomePage = () => {
  const movies = useSelector(state => state.movieList);
  const loading = useSelector((state) => state.loadingSearch);
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const history=useHistory();
 

  useEffect(()=>{
    dispatch(searchMovie());
  },[])
 
  const handleSearch = () => {
   if(!query){
    dispatch(searchMovie());
  }else{
    dispatch(searchMovie(query));
  }};
  const details=(title)=>{
    history.push(`/movie/${title}`);
  }
  if (loading) {
    return <div className='load'>Loading</div>
  }


  return (

    <div>
      <h1>Movie Search</h1>
      <div className='search'>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button disabled={!query} onClick={handleSearch}>Search</button>

      </div>
      
      <div className='errorr'> {movies && movies?.length > 0 && <MovieList movies={movies} onclick={details} /> || 'No record found'}</div>
    </div>
  );
};

export default HomePage;

