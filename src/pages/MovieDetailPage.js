import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetail } from '../redux/actions/movieActions';
import MovieDetail from '../components/MovieDetail';
import { Link } from "react-router-dom";
const MovieDetailPage = () => {
  const { title } = useParams();
  const dispatch = useDispatch();
  const movieDetail = useSelector((state) => state.movieDetail);
  const loading=useSelector((state)=>state.loadingMovieDetail);
  

  useEffect(() => {
    dispatch(fetchMovieDetail(title));
  }, []);
  
  if(loading){
    return <div className='load'>Loading</div>
  } 

 

  return (
    <div className='MovieDetails'>
     <Link to='/'> <h1>Movie Detail</h1></Link>
      {movieDetail && <MovieDetail movieDetail={movieDetail} />}
    </div>
  );
};

export default MovieDetailPage;
