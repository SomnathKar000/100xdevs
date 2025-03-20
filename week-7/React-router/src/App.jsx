import "./App.css";
// import Home from "./components/Home";
// import About from "./components/About";
import React from "react";

const About = React.lazy(() => import("./components/About"));
const Home = React.lazy(() => import("./components/Home"));

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
