import React from "react";
import { Container } from "react-bootstrap"; 
import about2 from "../img/about2.png";
import './AboutPage.css';

const AboutPage = () => {
    return(
        <Container className="about-page">
            <div className="about-content">
                <img src={about2} alt="About" className="about-image"/>
            </div>

        </Container>
    )
}

export default AboutPage; 

