import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./Home.css";
import profileImage from "../pictures/image.jpg";
import resumeFile from "../files/resume.pdf";
import { Link } from "react-router-dom";

const Home = () => {
  const [lineOpacity, setLineOpacity] = useState(0.3);
  const [particleOpacity, setParticleOpacity] = useState(0.3);

  useEffect(() => {
    const updateOpacity = () => {
      if (window.innerWidth > 1024) {
        setLineOpacity(0.7); // Higher opacity for lines on desktops
        setParticleOpacity(0.7); // Higher opacity for particles on desktops
      } else {
        setLineOpacity(0.3); // Default opacity for lines
        setParticleOpacity(0.3); // Default opacity for particles
      }
    };

    updateOpacity();
    window.addEventListener("resize", updateOpacity);
    return () => window.removeEventListener("resize", updateOpacity);
  }, []);

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
                distance: 50,
                duration: 1,
              },
              push: {
                particles_nb: 3,
              },
            },
          },
          particles: {
            number: {
              value: 200,
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: particleOpacity, // Dynamic particle opacity
            },
            size: {
              value: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "out",
              },
            },
            line_linked: {
              enable: true,
              distance: 100,
              color: "#ffffff",
              opacity: lineOpacity, // Dynamic line opacity
              width: 0.4,
            },
          },
        }}
      />
      <div className="content">
        <img src={profileImage} alt="Preeti Mishra" className="profile-pic" />
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
          {/* Quick Access Section */}
          <div className="quick-access">
            <h2 className="quick-access-title">Explore</h2>
            <div className="quick-access-buttons">
              <Link to="/about" className="quick-access-button">
                About
              </Link>
              <Link to="/experience" className="quick-access-button">
                Projects
              </Link>
              <Link to="/contact" className="quick-access-button">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
