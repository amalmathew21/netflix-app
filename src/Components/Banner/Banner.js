import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY,imageUrl } from '../../Constants/constants'


function Banner() {
  const [movie, setMovie] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log('Response:', response.data.results);
        setMoviesList(response.data.results);
        setMovie(response.data.results[currentIndex]);
      })
      .catch((error) => {
        console.error('Error:', error); 
      });
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % moviesList.length);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [moviesList.length]);

  return (
    
    <div className='banner' style={{backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : "No image"})`}}>
      <div className='content'>
        <h1 className='title'>{movie ? movie.title : "Movie Name"}</h1>
        <div className='banner_buttons'>
          <button className='button'>Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className='description'>{movie ? movie.overview : "Description"}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;