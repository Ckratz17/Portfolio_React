import React from "react";
import "../styles/Resume.css"

const styles = {
    link: {
        fontFamily: 'Courier New',
        fontSize: '30px',
        color: 'white'
    }
}

export default function Resume() {
    return (
        <div>
            <div className="resumeHeader">
                <h1>
                    <a href="https://www.myperfectresume.com/me/christopherf-kratz"
                      style={styles.link}>
                        View My Resume
                    </a>
                </h1>
            </div>
            <div className="frontSkills">
               <div className="title">Front End Skills</div> 
               <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
                  <li>BOOTSTRAP</li>
                  <li>JQUERY</li>
               </ul> 
            </div>
            <div className="backSkills">
               <div className="title">Back End Skills</div> 
               <ul>
                  <li>NODEjs</li>
                  <li>EXPRESS</li>
                  <li>MYSQL</li>
                  <li>NOSQL</li>
                  <li>REACT</li>
               </ul> 
            </div>
        </div>
      
    )
}