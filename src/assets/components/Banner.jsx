import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../img/owl2.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "./Banner.css"


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "SWE" ];
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }

    return (
        <section className="banner" id="home">
          <Container>
            <Row className="aligh-items-center">
              <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi! I'm Ivan.`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "SWE" ]'><span className="wrap">{text}</span></span></h1>
                      <p> As a first-generation Latino Software Engineer, I’m here to bring a fresh perspective to tech. 
                        I’m channeling my inner drive into building software that’s accessible and impactful, especially for communities that often feel left out of tech’s reach. 
                        I focus on full-stack development, crafting intuitive, easy-to-navigate apps that make a difference.</p>
                        <div className="get-in-touch">
                        <button onClick={() => {
                        const targetElement = document.getElementById('connect');
                        if (targetElement) {
                            targetElement.scrollIntoView({ behavior: 'smooth' });
                        } 
                        }}>
                        Let’s Get in Touch <ArrowRightCircle size={25} />
                        </button>
                        </div>
                  </div>}
                </TrackVisibility>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                      <img src={headerImg} alt="Header Img"/>
                    </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
        </section>
      )
    }

    export default Banner;