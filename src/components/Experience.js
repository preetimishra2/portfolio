import React, { useState } from "react";
import "./Experience.css";
import HighRadius1 from "../pictures/HighRadius1.jpg";
import HighRadius2 from "../pictures/HighRadius2.jpg";
import ToDo1 from "../pictures/ToDo1.PNG";
import ToDo2 from "../pictures/ToDo2.PNG";
import Pictography1 from "../pictures/Pictography1.PNG";
import Weather1 from "../pictures/Weather1.PNG";
import Weather2 from "../pictures/Weather2.PNG";
import BlogPro1 from "../pictures/BlogPro1.PNG";
import BlogPro2 from "../pictures/BlogPro2.PNG";
import BlogPro3 from "../pictures/BlogPro3.PNG";

const Experience = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      title: "AI-enabled FinTech B2B Invoice Management Application",
      screenshots: [HighRadius1, HighRadius2],
      url: "",
      description:
        "An AI-powered application for managing B2B invoices. Integrated with ReactJS, Machine Learning, and SQL to streamline invoice processing and reduce manual effort. Added a professor chatbot using Dialogflow for making the application more user-friendly.",
    },
    {
      title: "BlogPro - Blogging Website",
      screenshots: [BlogPro1, BlogPro2, BlogPro3],
      url: "https://blogprofrontend.onrender.com",
      description:
        "A blogging platform using MERN stack for users to write, publish, and share their thoughts. Features include post categorization, rich text editor, and user authentication.",
    },
    {
      title: "Pictography - Search Engine for Images",
      screenshots: [Pictography1],
      url: "https://preetimishra2.github.io/Pictography/",
      description:
        "Application for easily searching various kinds of images using React JS (API integration using Unsplash).",
    },
    {
      title: "Weather Wishpers - Fetch weather details in one click!",
      screenshots: [Weather1, Weather2],
      url: "",
      description:
        "A weather forecasting app using Angular with OpenWeatherMap integration that provides real-time updates & location-based weather details.",
    },
    {
      title: "To Do List - Make a list of goals & complete them",
      screenshots: [ToDo1, ToDo2],
      url: "https://preetimishra2.github.io/toDoList/",
      description:
        "A to-do list application using React JS. Add, update & delete tasks (completed/not-completed).",
    },
  ];

  return (
    <div className="expertise-container font-link">
      {/* Projects Section */}
      <section className="projects-section">
        <h1 className="section-title">Projects</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-tile"
              onClick={() => setSelectedProject(project)}
            >
              {project.title}
            </div>
          ))}
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProject.title}</h2>
            <p>
              {selectedProject.url ? (
                <a href={selectedProject.url} target="_blank" rel="noopener noreferrer">
                  Click here to check the application!
                </a>
              ) : (
                "No live link is available for this project."
              )}
            </p>
            <p>{selectedProject.description}</p>
            <div className="screenshots">
              {selectedProject.screenshots.map((screenshot, index) => (
                <img
                  key={index}
                  src={screenshot}
                  alt={`Screenshot ${index + 1} of ${selectedProject.title}`}
                  onClick={() => setSelectedImage(screenshot)} // Open image in pop-out view
                />
              ))}
            </div>
            <button onClick={() => setSelectedProject(null)}>Close</button>
          </div>
        </div>
      )}

      {/* Image Pop-Out Modal */}
      {selectedImage && (
        <div className="image-popout-overlay" onClick={() => setSelectedImage(null)}>
          <div className="image-popout-content">
            <img src={selectedImage} alt="Selected pop-out" />
            <button onClick={() => setSelectedImage(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
