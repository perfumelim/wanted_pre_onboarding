import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Navbar from "./components/navbar";
import Main from "./pages/main";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Main />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
