import React from 'react';
import { Link } from 'react-router-dom';
import spider from '../components/spider.jpeg'

const MovieList = ({ movies }) => {
  console.log("movies", movies);
  return (
    <div className='movieList'>
      {movies && movies.map((movie) => (
        <div className='ML'key={movie.imdbID}>
        <div>  <img src={spider} alt={movie.Title} style={{ width: '180px', height: '150px' }} /></div>
          <div className='TY'>
            <Link to={`/movie/${movie.Title}`}>{movie.Title}</Link>
            <p className='year'>Year: {movie.Year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
