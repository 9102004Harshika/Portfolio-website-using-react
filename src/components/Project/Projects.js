


import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Screenshot 2022-12-27 14.11.49.png";
import projImg2 from "../assets/img/sorting.png";
import projImg3 from "../assets/img/male-fashion.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

import TrackVisibility from 'react-on-screen';

 const Projects = () => {

  const projects = [
    {
      title: "Website For Project Showcase",
      description: "Website development",
      imgUrl: projImg1,
      
    },
    {
      title: "Netflix Clone Page",
      description: "Making clone pages",
      imgUrl: projImg2,
      
    },
    {
      title: "Mens Fashion Wear Page",
      description: "Clothing Website",
      imgUrl: projImg3,
      
    }
    
    
    
    
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
                <p>I have a listed three major projects below .If you are interested into checking more projects like this you can visit my
                  github page.Make sure to star &nbsp;<br></br>
                  my github page .</p>
                <p>If you want the source code of this website it is also listed in&nbsp;<br></br>
                   my 
                  github,please visit and give a star.</p>
                  <p>I have provided a link to my github below&nbsp;<br></br>
                   so
                  make sure to check that link.</p>
              
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                   
                  </Nav>
                  
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
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
        <img src={colorSharp2} className="background-image-left"/>
      </Container>
      
    </section>
  )
}
export default Projects
