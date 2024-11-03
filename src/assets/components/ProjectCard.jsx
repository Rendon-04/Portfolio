import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
    const navigate = useNavigate(); 

    const handleClick = () => {
        if(link) {
            navigate(link);
        }
    };

  return (
    <Col size={12} sm={6} md={6}>
      <div className="proj-imgbx" onClick={handleClick} style={{ cursor: "pointer" }}>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard;