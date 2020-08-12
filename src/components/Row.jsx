import React, { useState, useEffect } from 'react';
import './Row.css';
import requestURLs from '../constants/requestURLs';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const Row = ({ name, isLarge }) => {
  let [movies, setMovies] = useState([]);
  let [movieId, setMovieId] = useState("");


  useEffect(() => {
    async function getMovies() {
      let res = await fetch(requestURLs[name]);
      let data = await res.json();
      setMovies(data.results);
    }
    getMovies();
  }, [name])
  
  // console.log(movies)
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
    },
  }

  const handleClick = ( movie ) => {
    console.log(movie);
    if(movieId) {
      setMovieId("");
    } else {
      movieTrailer(movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setMovieId(urlParams.get('v'));
        })
        .catch(err => {
          console.log(err.message);
        })

    }
  }
  // backdrop_path
  return (
    <div className="row">
      <h3 className="row-title" style={{ zIndex: 10}}>{name}</h3>
      <div className="row-panel">
       {movies?.map((movie, index) => {
         return (
          <div className="movie" key={index} onClick={() => {handleClick(movie)}}>
            <img className="movie-img" src={`https://image.tmdb.org/t/p/original/${movie && isLarge? movie.backdrop_path:movie.poster_path}`} alt="girl"/>
          </div>
         )
       })}
      </div>
      {movieId && <YouTube className={`yt ${movieId? "ytt": ""}`} videoId={movieId} opts={opts}/>}
    </div>
  )
}

export default Row;