import React from "react";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import Row from "./Row";
import requests from "./requests";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row title="Trending Movies" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Top Rated" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Top Cartoons" fetchUrl={requests.fetchCartoons} />
    </div>
  );
}
