import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
import win from '../assets/images/windowsapp.jpg'
import lara from '../assets/images/ecom.jpg'
import node from '../assets/images/red.png'
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
         PROJECTS
        </h2>
        <hr />
        
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Pos System</span>
                  <img
                    src={win}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">C#</span>
                  <span className="card-detail-badge">Windows</span>
                  <span className="card-detail-badge">Application</span>
                  <span className="card-detail-badge">+SQL server</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Techinfoyt Shopping Website
                    </h6>
                  </div>
        
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Node-Red Iot</span>
                  <img
                    src={node}
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Iot Smartfarm</span>

                  <span className="card-detail-badge"></span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">moisture sensor + relay + ESP32</h5>
                  </div>
                 
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">ASP.net Core MVC</span>
                  <img
                    src={lara}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>

                  <span className="card-detail-badge">NoSQL</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">ASP.net core + SQL server + Bootstrap</h5>
                  </div>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;