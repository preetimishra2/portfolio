import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container font-link">
      {/* Summary Section */}
      <section className="summary-section">
        <h1 className="section-title">About Me</h1>
        <p className="summary-text">
          I am Preeti Mishra, a Software Developer with 4+ years of experience
          building scalable, production-grade applications. I have a strong
          foundation in Data Structures & Algorithms, cloud development, and
          cross-platform design. I’m passionate about creating secure,
          high-performing, and user-focused software that drives impact.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>Skills</h2>
        <div className="skills-icons">
          {[
            { icon: "fab fa-html5", name: "HTML5" },
            { icon: "fab fa-css3-alt", name: "CSS3" },
            { icon: "fab fa-js-square", name: "JavaScript" },
            { icon: "fab fa-react", name: "ReactJS" },
            { icon: "fab fa-node", name: "NodeJS" },
            { icon: "fas fa-database", name: "MongoDB" },
            { icon: "fab fa-aws", name: "AWS" },
            { icon: "fab fa-java", name: "Java" },
            { icon: "fas fa-code", name: "C++" },
            { icon: "fab fa-python", name: "Python" },
            { icon: "fas fa-database", name: "SQL" },
            { icon: "fab fa-angular", name: "Angular" },
            { icon: "fas fa-cogs", name: "AEM" },
            { icon: "fas fa-brain", name: "Machine Learning" },
            { icon: "fas fa-project-diagram", name: "Data Structures" },
            { icon: "fas fa-vial", name: "Postman" },
            { icon: "fab fa-github", name: "GitHub" },
            { icon: "fas fa-laptop-code", name: "Jira" },
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
              role: "Senior Full Stack Developer",
              company: "Pratt and Whitney",
              date: "May 2025 – Present",
              tasks: [],
            },
            {
              role: "Custom Software Engineering Analyst",
              company: "Accenture",
              date: "May 2021 – September 2025",
              tasks: [
                "Developed a cross-platform web and mobile application using ReactJS, Node.js, Express, and MongoDB to manage product availability and user interactions",
                "Enhanced user authentication using JWT tokens and role-based access control.",
                "Implemented Redux, structured route handling, and middleware by integrating RESTful APIs; optimized data fetching logic, resulting in a 40% reduction in API calls and server load.",
                "Mentored junior team members to build dynamic and scalable components, resolving critical defects and in collaborating with cross functional teams.",
                "Responsible for showcasing/giving demo of the developed screens to the clients and other stake holders.",
              ],
            },
            {
              role: "Application Development Associate",
              company: "Accenture",
              date: "",
              tasks: [
                "Developed dynamic components using Adobe Experience Manager (AEM) and Vanilla JavaScript for enterprise content management.",
                "Worked with third-party APIs (Google Maps) ensuring seamless integration.",
                "Debugged and resolved complex issues related to browser compatibility and application performance,improving overall reliability.",
              ],
            },
            {
              role: "Full Stack Intern",
              company: "HighRadius",
              date: "April 2020 – June 2020",
              tasks: [
                "Integrated an invoice management chatbot and ML model with ReactJS (frontend), Node JS and SQL(backend) featuring a responsive website with real time updates.",
              ],
            },
            {
              role: "React Native Intern",
              company: "IIT Bhubaneswar",
              date: "May 2019 – June 2019",
              tasks: [
                "Created a schedule manager app using React Native. Prioritized performance optimization.",
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
          <p>Masters in Software Development – 2024–2025</p>
        </div>
        <div className="education">
          <h3>Kalinga Institute of Industrial Technology, Bhubaneswar</h3>
          <p>B.Tech in Information Technology – 2017–2021</p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <h2 className="section-title">Achievements</h2>
        <ul className="achievements-list">
          <li>AWS Certified Cloud Practitioner – Foundational</li>
          <li>Star Performer of the Month (twice) – Accenture</li>
          <li>Client Value Creation Award – Accenture</li>
          <li>Nurturing Minds & Leadership Award – Accenture</li>
          <li>Selected for Mentorship – Teksystems (2021)</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
