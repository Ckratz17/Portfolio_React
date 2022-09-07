import React from "react";
import JATE from "../images/JATE.png"
import Weather from "../images/weather.png"
import BVM from "../images/BVM.png"
import CarbonCombatters from "../images/CarbonCombatters.png"
import Carded from '../images/Carded.png'
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
                      description="Just another text editor that allows the user to download directly to their device."
                      ghLink="https://github.com/Ckratz17/text-editor"
                      demoLink="https://afternoon-everglades-67148.herokuapp.com/"
                      />
                </div>
                <div className="col md-4 project-card">
                    <ProjectCards 
                      imgPath={Weather}
                      isBlog={false}
                      title="Weather Dashboard"
                      description="A weather dashboard that shows allows you to search a city and then shows you the current and five day forecast for that city."
                      ghLink="https://github.com/Ckratz17/Weather_Dashboard"
                      demoLink="https://ckratz17.github.io/Weather_Dashboard/"
                      />
                </div>
                <div className="col md-4 project-card">
                    <ProjectCards 
                      imgPath={BVM}
                      isBlog={false}
                      title="Books Vs Movies"
                      description="A web application that allows a user to search for a book or a movie title and the search result will let you see the matching titles."
                      ghLink="https://rflctnofu.github.io/BooksVsMovies/"
                      demoLink="https://rflctnofu.github.io/BooksVsMovies/"
                      />
                </div>
                <div className="col md-4 project-card">
                    <ProjectCards 
                      imgPath={CarbonCombatters}
                      isBlog={false}
                      title="Carbon Combatters"
                      description="A web application that allows a user to sign up and create a profile that will then track their carbon footprint."
                      ghLink="https://github.com/Mkish1220/CarbonCombaters"
                      demoLink="https://carbon-combaters.herokuapp.com/landing"
                      />
                </div>
                <div className="col md-4 project-card">
                    <ProjectCards 
                      imgPath={Carded}
                      isBlog={false}
                      title="Carded"
                      description="Carded is your online business card solution with team creation to keep your businesses organized."
                      ghLink="https://github.com/DRCallaghan/Carded"
                      demoLink="https://get-carded.herokuapp.com/"
                      />
                </div>
            </div>
            
        </div>

    )
}

