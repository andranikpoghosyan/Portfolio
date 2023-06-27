import React from "react";
import Slider from "react-slick";

import "./MyNewSlide.scss";

export default function MyNewSlide({ films }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <div className="MyNewSlide">
      <h2>New Movies Coming to Netflix in 2023</h2>
      <Slider {...settings}>
        {films.map((film) => {
          return (
            <div key={film.id}>
              <img src={film.image} alt="" />
              <div className="filmname">
                <h3>{film.filmName}</h3>
              </div>
              <hr />
              <div className="description">{film.description}</div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
