import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import {AiFillGithub} from "react-icons/ai"
import '../styles/Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="row">
                <div className="col">
                    <a href="https://www.linkedin.com/in/christopher-kratz-2a0714247/" className="linkedIn" style={{color: "white"}}><FaLinkedinIn /></a>
                </div>
                <div className="col md-4">
                    <h3>Designed and Developed by Christopher Kratz</h3>
                </div>
                <div className="col md-4 footer-body">
                    <a href="https://github.com/Ckratz17" className="gitHub" style={{color: "white"}}><AiFillGithub/></a>
                </div>
            </div>
        </div>
    )
}

export default Footer