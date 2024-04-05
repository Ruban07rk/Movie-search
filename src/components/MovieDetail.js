import React from 'react';
import spider from '../components/spider.jpeg'

const MovieDetail = ({ movieDetail}) => {
  
  return (
    <div className='MovieDetail'>
      <img className='imgg' src={spider} alt={movieDetail.Title} style={{ width: '150px', height: '150px' }} />
      <h2 className='h'><u>{movieDetail.Title}</u></h2>
      <p>Year: {movieDetail.Year} </p>
      <p>Rated: {movieDetail.Rated}</p>
      <p>Released: {movieDetail.Released}</p>
      <p>Runtime: {movieDetail.Runtime}</p>
      <p>Genre: {movieDetail.Genre}</p>
      <p>Director: {movieDetail.Director}</p>
      <p>Writer: {movieDetail.Writer}</p>
      <p>Actors: {movieDetail.Actors}</p>
      <p>Plot: {movieDetail.Plot}</p>
      <p>Language: {movieDetail.Language}</p>
      


    </div>
  );
};

export default MovieDetail;
