import React from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import Body from "./components/body/Body";
import MyNewSlide from "./components/slide/MyNewSlide";
import "./App.scss";

export default function App() {
  const films = useSelector((store) => store.films);
  return (
    <>
      <div className="App">
        <div className="subApp">
          <Header />
        </div>
        <div className="bodydiv">
          <Body />
        </div>
      </div>
      <div className="slidediv">
        <MyNewSlide films={films} />
      </div>
    </>
  );
}
