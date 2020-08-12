import React, { useState, useEffect } from 'react';
import requestURLs from '../constants/requestURLs';
import './Hero.css';

const Hero = () => {
  let [movie, setMovie] = useState([]);

  useEffect(() => {
    async function getHero() {
      let res = await fetch(`${requestURLs["Now Playing"]}`);
      let data = await res.json();
      setMovie(data.results[Math.floor(Math.random() * data.results.length)]);
      return;
    }
    getHero();
  },[])

  const strTruncate = (str) => {
    return str.substring(0, 300) + "...";
  }
  return (  
    <>
      <div className="hero" style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center center`,
        backgroundSize: 'cover',
        // objectFit: "contain"
      }}>
       <div className="hero-info">
        <h2 className="hero-title">{movie?.title}</h2>
        <div className="hero-btns">
          <button className="btn-play">Play</button>
          <button className="btn-myList">My List</button>
        </div>
        <p className="hero-descriptions">{movie.overview && movie.overview.length > 20? strTruncate(movie.overview): movie.overview }</p>
       </div>
      </div>
      <div className="fadeBottom"></div>
    </>
  );
}
 
export default Hero;