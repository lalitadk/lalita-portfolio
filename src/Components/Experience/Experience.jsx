import React from 'react';
import './Experience.css';
import experience_icon from '../../assets/experience_icon.svg';

const Experience = () => {
  const experiences = [
    {
      logo: experience_icon,
      title: 'Java Full Stack Developer Intern',
      company: 'Technoworld Softwares',
      duration: 'Dec 2024 - Present',
      description: 'Developed and maintained full-stack web applications using Spring Boot and React. Collaborated in a team environment and contributed to production-level code.',
      link: 'https://your-link.com/certificate1',
    },
    {
      logo: experience_icon,
      title: 'Data Science Intern',
      company: 'Teachnook',
      duration: 'Dec 2023 - Jan 2024',
      description: 'Worked with Python for data preprocessing and exploratory data analysis. Built predictive models and visualizations on real-world datasets.',
      link: '/pdf/TEACHNOOK_Internship.pdf',
    }
  ];

  return (
    <section className="experience-section" id="Experience">
      <div>
        <h2 className="experience-title">Experience</h2>
      </div>
      <div className="experience-wrapper">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <img src={exp.logo} alt={exp.company} className="experience-logo" />
            <div className="experience-info">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className="experience-duration">{exp.duration}</p>
              <p className="experience-description">{exp.description}</p>
              <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="exp-link"
              >View Certificate</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
