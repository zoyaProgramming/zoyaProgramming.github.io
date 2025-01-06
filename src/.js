import React from "react";
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";
import { Resume } from "./test";

createRoot(document.getElementById("root")).render(
<>
  <Header></Header>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/resume" element={<Resume/>}></Route>
    <Route path="/projects" element={<Projects/>}></Route>
  </Routes>
  <Footer></Footer>
</>
)
