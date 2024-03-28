import React from "react";
import "./PlayAllButton.scss";

const PlayAllButton = () => {
  const handlePlayAll = () => {
    console.log("Clicked Play All Button");
  };

  return (
    <button onClick={handlePlayAll} className="PlayAllButtonClassName">
      Play All
    </button>
  );
};

export default PlayAllButton;
