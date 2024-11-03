import React from "react";
import { Container } from "react-bootstrap"; 
import './AboutPage.css';

const AboutPage = () => {
    return(
        <Container className="about-page">
            <div className="about-content">
                <img src="/about.png" alt="About" className="about-image"/>
            </div>

        </Container>
    )
}

export default AboutPage; 

