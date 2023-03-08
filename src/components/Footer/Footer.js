import { Container, Row, Col } from "react-bootstrap";
import {FaGithub} from 'react-icons/fa'
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/harshika-gawade-494a08251"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/harshika.gawade"><img src={navIcon2} alt="Icon" /></a>
              
              <a href="https://github.com/9102004Harshika"><FaGithub/></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p><br></br><br></br>
        <a href="https://github.com/9102004Harshika" className="github-link">Click on the link  to download the source code from github</a><br></br>
        <a  href="https://harshikagawade.netlify.app" className="github-link">Click on the link to view my projects live on internet.</a>
            </footer>
  )
}
export default Footer;
