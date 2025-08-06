import React from "react";
import './About.css';
import profile from '../../assets/profile.jpg'
const About =()=>{
    return(
        <section className="about-section">
        <div id="about" className="about">
            <div className="about-title">
                <h1>About Me</h1>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Hi, I'm <span>Lalita Kshirsagar</span> a passionate developer with a strong interest in full-stack web development, 
                            I specialize in backend technologies like Java and Spring Boot, and I also enjoy front-end development using React.
                            I’m passionate about building user-friendly web applications and always eager to learn new technologies to grow in the software development field.
                        My passion for development is not only reflected in my extensive experience but also in the enthusiasm and dedication Let's connect and build something amazing together.</p>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
export default About;