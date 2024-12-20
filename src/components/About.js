import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container font-link">
      {/* Summary Section */}
      <section className="summary-section">
        <h1 className="section-title">About Me</h1>
        <p className="summary-text">
          I am Preeti Mishra, a Software Developer with 3+ years of experience
          in JavaScript, ReactJS, NodeJS, AWS, and AEM. Passionate about
          creating scalable, secure, and innovative software solutions, I am
          currently pursuing Post Graduation in Software Engineering at IIT
          Roorkee.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>Skills</h2>
        <div className="skills-icons">
          {/* Add skill icons here */}
          {[
            { icon: "fab fa-html5", name: "HTML5" },
            { icon: "fab fa-css3-alt", name: "CSS3" },
            { icon: "fab fa-js-square", name: "JavaScript" },
            { icon: "fab fa-react", name: "ReactJS" },
            { icon: "fab fa-bootstrap", name: "Bootstrap" },
            { icon: "fas fa-wind", name: "Tailwind CSS" },
            { icon: "fab fa-sass", name: "SASS" },
            { icon: "fab fa-node", name: "NodeJS" },
            { icon: "fab fa-aws", name: "AWS" },
            { icon: "fab fa-angular", name: "Angular" },
            { icon: "fas fa-cogs", name: "AEM" },
            { icon: "fas fa-database", name: "MongoDB" },
          ].map((skill, index) => (
            <div className="skill-item" key={index}>
              <i className={skill.icon}></i>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="experience-section">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {[
            {
              role: "Custom Software Engineer",
              company: "Accenture",
              date: "June 2023 - Present",
              tasks: [
                "Developed web applications, improving speed by 8%.",
                "Supervised a team of 3 and managed client interactions.",
                "Integrated third-party APIs and ensured on-time delivery.",
              ],
            },
            {
              role: "Application Development Associate",
              company: "Accenture",
              date: "May 2021 - June 2023",
              tasks: [
                "Maintained e-commerce websites with cross-browser usability.",
                "Implemented social media and newsletter features.",
                "Created unit test cases for code fixes.",
              ],
            },
            {
              role: "Full Stack Intern",
              company: "HighRadius",
              date: "May 2020 - June 2020",
              tasks: [
                "Developed an AI-enabled FinTech B2B Invoice Management Application.",
                "Used ReactJS, Machine Learning, and SQL to process data.",
              ],
            },
            {
              role: "Android Summer Intern",
              company: "IIT, Bhubaneswar",
              date: "May 2019 - June 2019",
              tasks: [
                "Developed an Android application from scratch with a modern user interface and intuitive user experience.",
                "Used Android for user interaction and SQL in backend.",
              ],
            },
          ].map((experience, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>
                  {experience.role} - {experience.company}
                </h3>
                <p className="timeline-date">{experience.date}</p>
                <ul>
                  {experience.tasks.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section">
        <h2 className="section-title">Education</h2>
        <div className="education">
          <h3>Indian Institute of Technology, Roorkee</h3>
          <p>Post Graduation in Software Engineering - Present</p>
        </div>
        <div className="education">
          <h3>Kalinga Institute of Industrial Technology, Bhubaneswar</h3>
          <p>B.Tech in Information Technology - 2021</p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <h2 className="section-title">Achievements</h2>
        <ul className="achievements-list">
          <li>AWS Certified Cloud Practitioner - October 2023</li>
          <li>Star Performer of the Month - May 2024</li>
          <li>iChamp Award for Client Value Creation - August 2023</li>
          <li>Best People Award in Accenture (twice)</li>
          <li>Qualified in Codevita National Coding Challenge 2021</li>
          <li>Selected for Mentorship in Teksystems - 2021</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
