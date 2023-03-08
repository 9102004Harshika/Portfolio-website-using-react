import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4} className="project-row">
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <h4>{title}</h4>
        <p>{description}</p>
        </div>
        
        
       
     
    </Col>
  )
}
