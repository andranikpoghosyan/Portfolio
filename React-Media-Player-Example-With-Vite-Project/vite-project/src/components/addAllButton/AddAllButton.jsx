import React from "react";
import "./AddAllButton.scss";

const AddAllButton = () => {
  const handleAddAll = () => {
    console.log("Clicked Add All Button");
  };

  return (
    <button onClick={handleAddAll} className="AddAllButtonClassName">
      Add All
    </button>
  );
};

export default AddAllButton;
