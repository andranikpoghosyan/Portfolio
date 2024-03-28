import React from "react";
import "./MusicUploadForm.scss";

export default function MusicUploadForm({ addAudioFile, fileInputRef }) {
  return (
    <div className="MusicUploadForm">
      <input type="file" accept="audio/*" ref={fileInputRef} multiple />

      <div className="buttonBody">
        <button className="glowButton" onClick={addAudioFile}>
          <span className="glowText">
            AD<span className="faulty-letter">D</span> TO{" "}
            <span className="blinkingLetter">L</span>IST
          </span>
        </button>
      </div>
    </div>
  );
}
