import React from 'react'
import './Education.css'
import graduate_logo from '../../assets/graduate_logo.svg'

const Education = () => {
   return (
    <section className="education-section" id="Education">
      <h2 className="section-title">Education</h2>
      
      <div className="education-item">
        <img src={graduate_logo} alt="" />
        <div className="education-text">
          <h3 className="degree">Bachelor of Engineering in Computer Engineering</h3>
          <p className="institute">Savitribai Phule Pune University – Navsahyadri College of Engineering</p>
          <p className="year">2022 – 2025 | CGPA 8.24</p>
        </div>
      </div>

      <div className="education-item">
        <img src={graduate_logo} alt="" />
        <div className="education-text">
          <h3 className="degree">Diploma in Information Technology</h3>
          <p className="institute">MSBTE – Government Polytechnic Awasari</p>
          <p className="year">2019 – 2022 | 85.25%</p>
        </div>
      </div>

      <div className="education-item">
        <img src={graduate_logo} alt="" />
        <div className="education-text">
          <h3 className="degree">SSC</h3>
          <p className="institute">Maharashtra State Board – Mahatma Jotirao Phule Vidyalaya Shivari</p>
          <p className="year">2018 – 2019 | 85.20%</p>
        </div>
      </div>
    </section>
  );
};

export default Education;