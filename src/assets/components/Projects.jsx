import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../img/project-img1.png";
import projImg2 from "../img/project-img2.jpg";
// import projImg3 from "../img/project-img3.png";
import colorSharp2 from "../img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "./Projects.css"

export const Projects = () => {

  const projects = [
    {
      title: "U.S. Civics Test App",
      description: "Educational app with study tools and practice tests for the U.S. citizenship test",
      imgUrl: projImg1,
      link:"/civics-app"
    },
    {
      title: "Task Reminder App",
      description: "Task scheduler with Twilio integration for SMS reminders",
      imgUrl: projImg2,
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Built with technologies like React, Flask, PostgreSQL, and API's, these projects showcase full-stack capabilities in developing web applications.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <br></br>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

export default Projects;
