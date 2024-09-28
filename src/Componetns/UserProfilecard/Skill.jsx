 import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/node.png";
import REACT from "../assets/react.png";
import putimage from "../assets/comm.png";
import "./skill.css";

export const Skill = () => {
  return (
    <section className="containerr" id="skill">
      <h2 className="titlee">Skills</h2>
      <div className="contentt">
        <div className="skills">
       
              <div className="skill">
                <div className="skillImageContainer">
                  <img src={HTML} alt="html" className="img1" />*
                  <img src={CSS} alt="css" className="img2"  />
                  <img src={JS} alt="js" className="img3"  />
                
                  <img src={REACT} alt="react" className="img4" />
               
                 
              </div>
              </div>
            
          
        </div>
      
      </div> 
      <img src={putimage} alt=""  className="sit" />
    </section>
  );
}; 