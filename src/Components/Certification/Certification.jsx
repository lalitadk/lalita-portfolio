import React from 'react';
import './Certification.css';
import certification_icon from '../../assets/certification_icon.svg'

const certifications = [
  {
    title: 'Java logic Journey',
    provider: 'Udemy',
    date: 'Sept 2024',
    certificate_id: 'UC-a9feb982-44a2-4c05-ba85-2026748337c0',
    link: '/pdf/java_logic.pdf',
  },
  {
    title: 'Python for data science',
    provider: 'Teachnook',
    date: 'Jan 2024',
    certificate_id:'TNINTC24-063',
    link: '/pdf/data_science.pdf',
  },
  {
    title: 'jQuery - Complete jQuery Course',
    provider: 'Udemy',
    date: 'July 2025',
    certificate_id:'UC-3c38e9e6-7610-419a-a385-c1741a981a76',
    link: '/pdf/jQuery.pdf',
  },
];

const Certification = () => {
  return (
    <section className='cert-section' id="Certification">
      <h2 className="section-title">Certifications</h2>
      <div className="certification-container">
        {certifications.map((cert, index) => (
          <div className="certification-card" key={index}>
            <img src={certification_icon} alt="" />
            <div className="cert-info">
              <h3>{cert.title}</h3>
              <p>{cert.provider}</p>
              <p>{cert.date}</p>
              <p>Certificate ID : {cert.certificate_id}</p>
              <a
                href={cert.link}
                className="cert-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;
