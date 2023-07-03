import React, { useState, useEffect, useRef } from "react";
import axios from "./axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { IoIosClose } from "react-icons/io";
import "./Row.scss";

const base_url = "https://image.tmdb.org/t/p/w500/";

export default function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  const [trailerUrl, setTrailerUrl] = useState("");
  const [timeToPlay, setTimeToPlay] = useState(false);

  const findTrailer = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || "").then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(fetchUrl);
      setMovies(response.data.results);
    };
    fetchData();
  }, [fetchUrl]);

  const options = {
    height: 490,
    width: "60%",
    playerVars: {
      autoplay: 1,
    },
  };

  const postersRef = useRef(null);
  useEffect(() => {
    const el = postersRef.current;
    if (el) {
      const onWheel = (e) => {
        console.log("jhj");
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters" ref={postersRef}>
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className="row__poster row_posterlarge"
              src={`${base_url}${movie?.poster_path}`}
              alt={movie?.title}
              onClick={() => {
                findTrailer(movie);
                setTimeToPlay(true);
              }}
            />
          );
        })}
      </div>

      {trailerUrl && timeToPlay && (
        <div className="video_box">
          <span onClick={() => setTimeToPlay(false)}>
            <IoIosClose />
          </span>
          <YouTube
            videoId={trailerUrl}
            onEnd={() => setTimeToPlay(false)}
            opts={options}
            className="player"
          />
        </div>
      )}
    </div>
  );
}
