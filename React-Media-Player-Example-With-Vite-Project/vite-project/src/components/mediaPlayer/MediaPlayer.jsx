import React, { useState, useRef, useEffect } from "react";
import "./MediaPlayer.scss";

const MediaPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef();

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  useEffect(() => {
    audioRef.current.src = src;
    audioRef.current.load();

    const handleLoadedMetadata = () => {
      setDuration(audioRef.current.duration);
    };

    audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audioRef.current.removeEventListener(
        "loadedmetadata",
        handleLoadedMetadata
      );
    };
  }, [src]);

  useEffect(() => {
    const audioElement = audioRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(audioElement.currentTime);
    };

    const handleAudioEnd = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audioElement.addEventListener("timeupdate", handleTimeUpdate);
    audioElement.addEventListener("ended", handleAudioEnd);

    return () => {
      audioElement.removeEventListener("timeupdate", handleTimeUpdate);
      audioElement.removeEventListener("ended", handleAudioEnd);
    };
  }, []);

  const playPauseToggle = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const handleTimeChange = (event) => {
    const newTime = parseFloat(event.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className="MediaPlayer">
      <audio ref={audioRef} />
      <div className="controls">
        <button onClick={playPauseToggle} className="controlButton">
          {isPlaying ? (
            <i className="fas fa-pause"></i>
          ) : (
            <i className="fas fa-play"></i>
          )}
        </button>
      </div>
      <div className="volumeControl">
        <p>Volume: {Math.round(volume * 100)}%</p>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
        <i className="fas fa-volume-up"></i>
      </div>
      <div className="timeControl">
        <p>
          {formatTime(currentTime)} / {formatTime(duration)}
        </p>
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleTimeChange}
        />
      </div>
    </div>
  );
};

export default MediaPlayer;
