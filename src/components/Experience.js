import React, { useState } from "react";
import "./Experience.css";
import HighRadius1 from "../pictures/HighRadius1.jpg";
import HighRadius2 from "../pictures/HighRadius2.jpg";
import ToDo1 from "../pictures/ToDo1.PNG";
import ToDo2 from "../pictures/ToDo2.PNG";
import Pictography1 from "../pictures/Pictography1.PNG";
import Weather1 from "../pictures/Weather1.PNG";
import Weather2 from "../pictures/Weather2.PNG";
const Experience = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "AI-enabled FinTech B2B Invoice Management Application",
      screenshots: [HighRadius1, HighRadius2],
      url:"",
      description:
        "An AI-powered application for managing B2B invoices. Integrated with ReactJS, Machine Learning, and SQL to streamline invoice processing and reduce manual effort. Added a professor chatbot using Dialogflow for making the application more user friendly",
    },
    {
      title: "BlogPro - Blogging Website",
      screenshots: [],
      url:"",
      description:
        "A blogging platform using MERN stack for users to write, publish, and share their thoughts. Features include post categorization, rich text editor, and user authentication.",
    },
    {
      title: "Quora2.0 - Quora-like Website",
      screenshots: [],
      url:"",
      description:
        "A question-and-answer website inspired by Quora using MERN stack. Built with a robust backend and user-friendly interface.",
    },
    {
      title: "Data Visualization Application",
      screenshots: [],
      url:"",
      description:
        "A web application for visualizing large datasets using interactive charts and graphs. Built with React & Nodejs.",
    },
    {
      title: "Pictography - Search Engine for Images",
      screenshots: [Pictography1],
      url:"https://preetimishra2.github.io/Pictography/",
      description:
        "Application for easily searching various kinds of images using React JS(API integration using Uplash)",
    },
    {
      title: "Weather Wishpers - Fetch weather details in one click!",
      screenshots: [Weather1,Weather2],
      url:"",
      description:
        "A weather forecasting app using Angular using openweathermap integration that provides real-time updates & location-based weather details.",
    },
    {
      title: "To Do List - Make a list of goals & complete them",
      screenshots: [ToDo1, ToDo2],
      url:"https://preetimishra2.github.io/toDoList/",
      description:
        "A to-do list application using React JS. Application to add, update & delete tasks i.e completed/not-completed.",
    },
  ];

  const researchPaper = {
    title: "CROP PREDICTION USING MACHINE LEARNING FOR THE STATE ODISHA",
    description:
      "The objective of this paper is to make the process of cultivation easier for the farmers and helping them to understand which crop will bring them more profit in the current atmospheric situations in their area. The data set that has been taken is on the basis of the required parameters for a particular crop like the temperature and rainfall suitable for the crop to grow in a particular district of Odisha. The Random forest & NLP is used for comparing for the best crop prediction results.",
  };

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
            <p><a href={selectedProject.url}>Click here to check the application!</a></p>
            <p>{selectedProject.description}</p>
            <div className="screenshots">
              {selectedProject.screenshots.map((screenshot, index) => (
                <img
                  key={index}
                  src={screenshot}
                  alt={`Screenshot ${index + 1} of ${selectedProject.title}`}
                  onClick={(e) => e.stopPropagation()} // Prevent modal close on image click
                />
              ))}
            </div>
            <button onClick={() => setSelectedProject(null)}>Close</button>
          </div>
        </div>
      )}

      {/* Research Paper Section */}
      <section className="research-paper-section">
        <h1 className="section-title">Research Paper</h1>
        <div className="research-paper-content">
          <h2>{researchPaper.title}</h2>
          <p>{researchPaper.description}</p>
        </div>
      </section>
    </div>
  );
};

export default Experience;
