import React, { useState } from "react";
import SongList from "./components/SongList/SongList";
import "./App.scss";

const App = () => {
  const [audioFiles, setAudioFiles] = useState([]);
  return (
    <div className="App">
      <SongList audioFiles={audioFiles} setAudioFiles={setAudioFiles} />
    </div>
  );
};

export default App;
