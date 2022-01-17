import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Navbar from "./components/navbar";
import Carousel from "./components/carousel";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Carousel />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
