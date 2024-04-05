import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchMovie } from '../redux/actions/movieActions';
import { useSelector } from 'react-redux';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  

  const handleSearch = () => {
    dispatch(searchMovie(query));
  };
  
  return (
    <div className='search'>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button disabled={!query} onClick={handleSearch}>Search</button>
      
    </div>
  );
};

export default MovieSearch;

