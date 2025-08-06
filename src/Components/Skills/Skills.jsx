import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = {
    Programming: ['C','C++','Java'],
    Frontend: ['HTML5', 'CSS3', 'JavaScript', 'Jquery','React.Js', 'Bootstrap'],
    Backend: ['Java', 'Spring Boot', 'PHP', 'MYSQL'],
    Tools: ['Git & GitHub', 'VS Code', 'MS-Office', 'Windows', 'Linux']
  };

  return (
    <section className="skills-section" id="Skills">
      <h2 className="skills-title">Technical Skills</h2>
      <div className="skills-wrapper">
        {Object.entries(skills).map(([category, skillList], index) => (
          <div className="skill-category" key={index}>
            <h3>{category}</h3>
            <ul>
              {skillList.map((skill, i) => (
                <li key={i}>
                  <span className="dot">✔</span> {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
