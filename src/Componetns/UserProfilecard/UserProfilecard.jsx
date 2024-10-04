import React, { useState } from "react";
import "./UserProfilecrd.css";
import profile_icon from "../assets/vky.png";


export const UserProfilecard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <a href="logo">
            <span>Port</span>folio
          </a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? "active" : ""}`}></div>
          <div className={`bar ${isOpen ? "active" : ""}`}></div>
          <div className={`bar ${isOpen ? "active" : ""}`}></div>
        </div>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#skill">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="bg">
        <img src={profile_icon}  className="bg22"height={500} width={500} alt="Profile" />
        
      </div>
   
      <div className="title">
        <h5 className="devleop">Web Developer</h5>
        <h2 className="wep">Hi I’m <span className="name">Vicky</span></h2>
      </div>
    </div>
  );
}
