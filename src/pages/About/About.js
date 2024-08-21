import React from "react";
import "./About.css";
import pic from '../../assets/images/about.png'
const About = () => {
  return (
    <>
      <div className="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img
              src={pic}
              alt=""
            ></img>
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About Me</h1>
            <p>Hello, my name is Natchanon. I am ready to learn new things and develop my skills in IT or electrical control. I have abilities in web application and network configuration development, as well as PLC programming, and I can work well with others.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
