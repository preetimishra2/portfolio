import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./Home.css";
import profileImage from "../pictures/image.jpg";
import resumeFile from "../files/resume.pdf";
import About from "../components/About";
import Experience from "./Experience";
import Contact from "./Contact";

const Home = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="home-container">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#0d0d0d",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              repulse: {
                distance: 33,
                duration: 1,
              },
              push: {
                particles_nb: 5,
              },
            },
          },
          particles: {
            number: {
              value: 1200,
            },
            color: {
              value: ["#FFD700", "#C0C0C0", "#734f96", "#B87333"],
            },
            shape: {
              type: "square",
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: 2,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
            },
          },
        }}
      />
      <div className="content">
        <img
          src={profileImage}
          alt="Preeti Mishra"
          className="profile-pic"
        />
        <div className="bio">
          <h1 className="intro-text">Hi, I'm Preeti Mishra.</h1>
          <p className="bio-text">
            I'm a Software Developer with 3+ years of experience in JavaScript,
            ReactJS, NodeJS, AWS, and AEM. Passionate about building scalable
            solutions and contributing to impactful projects. Currently pursuing
            my Post Graduation in Software Engineering at IIT Roorkee.
          </p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/preeti-mishra-a18b1a19b"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/preetimishra2"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href={resumeFile}
              download="Preeti_Mishra_Resume.pdf"
              className="resume-button"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
