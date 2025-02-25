import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import logo from '../img/logo.png';
import navIcon1 from "../img/nav-icon1.svg";
import navIcon2 from "../img/github.svg";
import navIcon3 from "../img/nav-icon3.svg";
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import "./Navbar.css"

export const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const handleHomeClick = () => {
    navigate('/');
    onUpdateActiveLink('home');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (

      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            {/* <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link> */}
            <Nav.Link className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={handleHomeClick}>
              Home
            </Nav.Link>
            {location.pathname !== '/about' && location.pathname !== '/civics-app' && location.pathname !== '/task-scheduler-app' && (
                <>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="/resume.pdf"  target="_blank" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
              <Nav.Link href="/about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
              </>
            )}
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/ivanrendon91/" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/Rendon-04" target="_blank"><img src={navIcon2} alt="" className="invert-img" style={{ width: '20px', height: '20px' }}/></a> 
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>

  )
}

export default NavBar;