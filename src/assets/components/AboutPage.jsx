import React from "react";
import "./AboutPage.css";
import profileImg from "../img/profileImage.jpg"; // Replace with actual profile image
// import backgroundImg from "../img/background.jpg"; // Replace with a relevant image

const AboutMe = () => {
  return (
    <section className="about-me" id="about">
      <div className="about-me-container">
        <div className="about-content">
          {/* Left: Profile Image */}
          <div className="about-image">
            <img src={profileImg} alt="Ivan Rendon" />
          </div>

          {/* Right: Bio Description */}
          <div className="about-text">
            <h2>Ivan Rendon</h2>
            <h3>Software Engineer</h3>
            <p>
              Hi, I'm Ivan! As a first-generation Latino, I'm proud to bring my
              unique perspective and experiences into the tech world. Growing
              up, I watched my family navigate new systems, often without access
              to the tools that make modern life more manageable. These
              experiences inspired me to create resources that make technology
              more accessible to everyone.
            </p>
            <p>
              Before transitioning into tech, I worked in logistics and business
              operations for over a decade, developing strong skills in
              problem-solving, planning, and collaboration. While I enjoyed
              supporting businesses from behind the scenes, I wanted to make a
              more direct impact by building tools for communities like mine.
              This led me to Hackbright Academy, where I formally studied
              software engineering.
            </p>
            <p>
              At Hackbright, I built my first full-stack applications, solidified
              my technical skills, and learned how to turn ideas into tangible
              realities. My education transformed my vision into impactful
              projects, empowering me to create applications that help bridge
              gaps in access and understanding.
            </p>
            <p>
              Today, I'm focused on building software that is welcoming,
              intuitive, and impactful. I'm excited to keep creating tools that
              make a real difference for underrepresented groups, combining my
              background in business operations with my passion for making
              technology accessible to everyone.
            </p>
          </div>
        </div>

        {/* Background Image Section */}
        <div className="about-background">
          {/* <img src={backgroundImg} alt="Background Story" /> */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;


