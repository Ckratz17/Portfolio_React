import React from "react";
import JATE from "../images/JATE.png"
import ProjectCards from "../components/ProjectCard";

export default function Portfolio() {
   

    return (
        <div>
            <h1 className="project heading">
                Portfolio
            </h1>

            <div className="row" style={{justifyContent: "center", paddingBottom: "10px"}}>
                <div className="col md-4 project-card">
                    <ProjectCards 
                      imgPath={JATE}
                      isBlog={false}
                      title="J.A.T.E."
                      description="Just another text editor"
                      ghLink="https://github.com/Ckratz17/text-editor"
                      demoLink="https://afternoon-everglades-67148.herokuapp.com/"
                      />
                </div>
            </div>
            
        </div>

    )
}

