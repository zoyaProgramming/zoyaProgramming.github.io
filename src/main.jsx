import React from "react";
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Router } from "react-router";
import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";
import Resume from "./pages/Resume";
import Projects from "./pages/projects";
import './assets/css/fontStyles.css';
import './assets/css/page1.css';

import img from './assets/images/2047.png'


createRoot(document.getElementById("root")).render(
<>
  <Header></Header>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/resume" element={<Resume/>}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
    </Routes>
  </BrowserRouter>
  <Footer></Footer>
</>
)
