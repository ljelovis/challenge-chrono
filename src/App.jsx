import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/Header.jsx";
import Counter from "./component/Counter.jsx";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Counter incr={1} />
        <Counter incr={2} />
      </div>
    </>
  );
}

export default App;
