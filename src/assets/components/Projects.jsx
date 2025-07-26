import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../img/project-img1.png";
import projImg2 from "../img/ScribeLogo.png";
import projImg3 from "../img/FlowHomePage.png";
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
      title: "Flow Innovation",
      description: "Innovative News site with AI Fact-checking tool.",
      imgUrl: projImg3,
      link: "/news-app"
    },

    {
      title: "CareScribe",
      description: "An Agentic Healthcare Companion",
      imgUrl: projImg2,
      link: "/task-scheduler-app"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
                <h2>Projects</h2>
                <p>Built with technologies like React, Flask, PostgreSQL, and API's, these projects showcase full-stack capabilities in developing web applications.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <br></br>
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
                </Tab.Container>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

export default Projects;
