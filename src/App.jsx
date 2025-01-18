import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Frontend/HomePage";
import ProgectHshow from "./Frontend/ProjectHshow";
import Header from "./Frontend/Header";
// import Footer from "./Frontend/Footer";
import Portfolio from "./Frontend/Portfolio";
import Test from "./Frontend/test";
import Projects from "./Frontend/Projects";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pro" element={<ProgectHshow />} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/test" element={<Test />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
