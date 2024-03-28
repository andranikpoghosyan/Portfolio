import React, { useState } from "react";
import MediaPlayer from "../mediaPlayer/MediaPlayer";

const SongRow = ({ song }) => {
  const [rowStyle, setRowStyle] = useState({});

  const handleHover = () => {
    setRowStyle({
      backgroundColor: "#333",
      cursor: "pointer",
    });
  };

  const handleLeave = () => {
    setRowStyle({
      backgroundColor: "transparent",
    });
  };

  return (
    <tr
      key={song.id}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      style={rowStyle}
    >
      <td>{song.trackNumber}</td>
      <td>{song.artistName}</td>
      <td>{song.songName}</td>
      <td>
        <MediaPlayer src={song.file} />
      </td>
    </tr>
  );
};

export default SongRow;
