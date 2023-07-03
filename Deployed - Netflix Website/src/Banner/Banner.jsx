import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import "./Banner.scss";
const base_url = "https://image.tmdb.org/t/p/original/";

export default function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(requests.fetchNetflixOriginals);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ]
      );
    };
    fetchData();
  }, []);

  const truncate = (str = "", symbolsCount) => {
    return str.length < symbolsCount
      ? str
      : str.slice(0, symbolsCount).concat("...");
  };

  return (
    <header className="banner" style={{
		backgroundImage: `url('${base_url}${movie?.backdrop_path}')`,
		backgroundSize:'cover'
	}}>
      <div className="banner__contects">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
	  <div className="banner__fadeBottom"></div>
    </header>
  );
}
