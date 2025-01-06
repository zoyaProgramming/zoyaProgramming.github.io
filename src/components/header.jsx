import { Outlet } from "react-router-dom"
import {MouseTracker, useMouseTracker} from "./mouseDrag"
import { useRef } from "react";
export default function Header(){
  
  return(
    
    <div>
      <MouseTracker/>
        <div className="header-div top">
          <div className = "div--left">
            <h1>My Portfolio</h1>
          </div>
          <div className = "div--right">
            <a href="/resume">resume</a>
            <a href="/">home</a>
            <a href="/projects">projects</a>
          </div>    
      </div>
      <div className = "header-div">
        <h1>Zoya Clawson | zoya.clawson@stonybrook.edu | 425-757-6843</h1>
        <h4>400 Circle Road Stony Brook University 11790 New York</h4>
      </div>
    </div>
  )
}