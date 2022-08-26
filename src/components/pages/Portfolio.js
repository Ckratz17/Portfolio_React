import React from "react";
import JATE from "../../images/JATE.png"
import ProjectCards from "../ProjectCard";

export default function Portfolio() {
    
    return (
        <div>
            <h1 className="project heading">
                Portfolio
            </h1>
            <col className="md-4 project-card">
                <ProjectCards
                    imgPath={JATE}
                    isBlog={false}
                    title="JATE"
                    description=""
                    ghLink='https://github.com/Ckratz17/text-editor'
                    demoLink="https://afternoon-everglades-67148.herokuapp.com/"
                />
            </col>
        </div>

    )
}

