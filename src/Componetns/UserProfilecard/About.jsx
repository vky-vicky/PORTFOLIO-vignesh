import React from "react";
import getimage from "../assets/com.png";
import setimage from "../assets/2.png";
import "./About.css";

export const About = () => {
  return (
    <main id="About">
    <div className="from">

      <h3 className="title">About</h3>
      <div className="content">

        <img src={getimage} alt="sitting on com tesk"
        className="aboutimage" />

        <ul className="aboutitems">

          <li className="aboutitem">

            <img src={setimage} alt="token" />
          </li>
          <div className="aboutItemText">
            <h4 className="one">Frontend Developer</h4>
            <p>
              I'am a front end developer building responsive and optimise sites.
            </p>
          </div>
          <li className="aboutitem">
            <img src={setimage} alt="token" />
          </li>
          <div className="aboutItemText">
            <h4 className="two">React js developer</h4>
            <p>I have strong foundation in javascript frameworks</p>
          </div>

          <li className="aboutitem">
            <img src={setimage} alt="token" />
          </li>
          <div className="aboutItemText">
            <h4 className="three"> Wep desinging</h4>
            <p>With front-end techonlogis like HTML,CSS,Responsive design</p>
          </div>
        </ul>
      </div>
      </div>
      </main>

  );
};
