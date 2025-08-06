import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'WanderWhims -Travel Planner Website',
      description: 'One-stop solution for planning treks and travel itineraries.Includes destination search, budget planner, activity suggestions, and stay recommendations. Implemented responsive UI and integrated backend data management for seamless functionality.',
      techStack: ' HTML, CSS, JavaScript, Python, SQL, Git, GitHub',
      link: 'https://github.com/lalitadk/Wander-Whims.git'
    },
    {
      title: 'Portfolio Website (This one)',
      description: 'Designed and developed a fully responsive personal portfolio website showcasing projects, skills, education, work experience, and certifications. Implemented clean UI with reusable components, custom styling, and smooth navigation. Integrated downloadable resume and external links for projects and certificates.',
      techStack: 'React.js, JSX, CSS, JavaScript, Git, GitHub',
      link: '#'
    },
    {
      title: 'Resume Builder App',
      description: 'Developed an Android application that allows users to create professional resumes by entering their personal, educational, and work experience details. The app dynamically generates a downloadable PDF format of the resume.',
      techStack: 'Java, Android, SQL, XML ',
      link: '#'
    },
    {
      title: 'CodeElevate - Ecourse Website',
      description: 'Developed a responsive web-based E-Course platform where users can browse and enroll in online courses. Implemented frontend using HTML and CSS for user interface, and backend using Java-based technologies for course management, user registration, and data persistence. Integrated database for storing course and user information.',
      techStack: 'HTML, CSS,Javascript,core java,JSP, Sprint Boot, MYSQL, JDBC ',
      link: '#'
    }
  ];

  return (
    <section className="projects-section" id="Projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-tech"><strong>Tech Stack : </strong> {project.techStack}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
