import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body style={{ backgroundColor: "black"}}>
            <Card.Title style={{color: "white"}}>{props.title}</Card.Title>
            <Card.Text style={{ color: "white" }}>
                {props.description}
            </Card.Text>
            <Button variant="primary" href={props.ghLink} target="_blank">
                <BsGithub /> &nbsp;
                {props.isBlog ? "Blog" : "GitHub"}
            </Button>

            {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ margin: "10px"}}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}  
      </Card.Body>
    </Card>

    
    )
}

export default ProjectCards