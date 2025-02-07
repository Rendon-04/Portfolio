import meter1 from "../img/hooray.webp";
import meter2 from "../img/nerd.png";
import meter3 from "../img/saluting.png";
import meter4 from "../img/cloud.png";
import meter5 from "../img/thinking.webp";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../img/arrow1.svg";
import arrow2 from "../img/arrow2.svg";
import colorSharp from "../img/color-sharp.png";
import "./Skills.css"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="skill-container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>As a full-stack engineer, I focus on building accessible, impactful applications from the ground up.<br /> Here’s a snapshot of the skills I bring to every project.</p>
                        {/* <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider"> */}
                        <div className="items">
                        <div className="item">
                            <img src={meter1} alt="Frontend Development" />
                            <h5>Frontend Development</h5>
                            <p>HTML, CSS, JavaScript, ReactJS, Bootstrap</p>
                        </div>
                        <div className="item">
                            <img src={meter2} alt="Backend Development" />
                            <h5>Backend Development</h5>
                            <p>Python, Flask, Jinja, Node</p>
                        </div>
                        <div className="item">
                            <img src={meter3} alt="Databases & Data Management" />
                            <h5>Databases & Data Management</h5>
                            <p>PostgreSQL, SQLAlchemy</p>
                        </div>
                        <div className="second-row">
                                <div className="item">
                                    <img src={meter4} alt="Cloud & Deployment" />
                                    <h5>Cloud & Deployment</h5>
                                    <p>Git, AWS Lightsail</p>
                                </div>
                                <div className="item">
                                    <img src={meter5} alt="Problem-Solving & Debugging" />
                                    <h5>Problem-Solving & Debugging</h5>
                                </div>
                            </div>
                        </div>
                        {/* </Carousel> */}
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

export default Skills;