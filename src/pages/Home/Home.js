import React, { useState } from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/NatchanonKueanui.pdf';
import HireForm from '../../pages/HireForm/HireForm';

const Home = () => {
  const [modalShow, setModalShow] = useState(false);

  const handleShow = () => setModalShow(true);
  const handleClose = () => setModalShow(false);

  return (
    <>
      <div className="container-fluid home-container">
        <div className="container home-content">
          <h1>👋 Hi I'm</h1>
          <h2>
            <Typewriter
              options={{
                strings: [
                  'Fullstack Developer !',
                  'Asp.net MVC Developer !',
                  'Laravel Developer !',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <div className="home-buttons">
            <button className="btn btn-hire" onClick={handleShow}>Hire Me</button>
            <a className="btn btn-cv" href={Resume} download={"NatchanonResume.pdf"}>My Resume</a>
          </div>
        </div>
      </div>

      {/* Modal component */}
      <HireForm show={modalShow} handleClose={handleClose} />
    </>
  );
};

export default Home;
