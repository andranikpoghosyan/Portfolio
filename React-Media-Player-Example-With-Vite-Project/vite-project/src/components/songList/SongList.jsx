import React, { useState, useRef } from "react";
import SongRow from "../songRow/SongRow";
import PlayAllButton from "../playAllButton/PlayAllButton";
import AddAllButton from "../addAllButton/AddAllButton";
import MusicUploadForm from "../musicUploadForm/MusicUploadForm";
import "./SongList.scss";

const initialSongs = [
  {
    id: 1,
    trackNumber: 1,
    songName: "I'm Not The Only One",
    artistName: "Sam Smith",
    file: "../public/songs/Sam Smith - I'm Not The Only One.mp3",
  },
  {
    id: 2,
    trackNumber: 2,
    songName: "Fire On Fire",
    artistName: "Sam Smith",
    file: "../public/songs/Sam Smith Fire On Fire.mp3",
  },
  {
    id: 3,
    trackNumber: 3,
    songName: "How Do You Sleep",
    artistName: "Sam Smith",
    file: "../public/songs/Sam Smith Kim Petras Unholy.mp3",
  },
  {
    id: 4,
    trackNumber: 4,
    songName: "Unholy",
    artistName: "Sam Smith & Kim Petras",
    file: "../public/songs/Sam Smith Kim Petras Unholy.mp3",
  },
  {
    id: 5,
    trackNumber: 5,
    songName: "Stay With Me",
    artistName: "Sam Smith",
    file: "../public/songs/Sam Smith Stay With Me .mp3",
  },
];

const SongList = () => {
  const [audioFiles, setAudioFiles] = useState(initialSongs);
  const fileInputRef = useRef();

  const addAudioFile = () => {
    const fileInput = fileInputRef.current;
    const files = fileInput.files;

    if (files.length > 0) {
      const newAudioFiles = Array.from(files).map((file, id) => {
        const newId = audioFiles.length + id + 1;
        const newName = prompt(`Enter The Song Title`, `New Song`);
        const newSinger = prompt(
          `Enter the singer for ${newName}`,
          "New Singer"
        );

        return {
          id: newId,
          trackNumber: `${newId}`,
          songName: newName,
          artistName: newSinger,
          file: URL.createObjectURL(file),
        };
      });

      setAudioFiles((prevAudioFiles) => [...prevAudioFiles, ...newAudioFiles]);
      fileInput.value = null;
    }
  };

  return (
    <div className="SongList">
      <h1>Song List</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Artist</th>
            <th>Song Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {audioFiles.map((audio) => {
            return <SongRow key={audio.id} song={audio} />;
          })}
        </tbody>
      </table>

      <div className="controls">
        <PlayAllButton />
        <AddAllButton />
      </div>

      <MusicUploadForm
        fileInputRef={fileInputRef}
        addAudioFile={addAudioFile}
      />
      {/* <div className="chooseFiles">
        <input type="file" accept="audio/*" ref={fileInputRef} multiple />

        <div className="buttonBody">
          <button className="glowButton" onClick={addAudioFile}>
            <span className="glowText">
              AD<span className="faulty-letter">D</span> TO{" "}
              <span className="blinkingLetter">L</span>IST
            </span>
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default SongList;
