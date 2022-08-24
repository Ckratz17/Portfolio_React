import React from "react";
import '../../styles/About.css'

export default function About(){
    return (
        <div className="aboutMe">
            <h1>About Me</h1>

            <img className="selfie" src="./styles/selfie.jpeg" alt=""></img>

            <p className="bio">
                I was born August 20th, 1989 in Orlando Florida but my family moved to Chicago, Illinois a year later.
                After spending my elementary years in Chicago, my family moved back to Florida, this time moving to Jacksonville where i have lived since.
                After graduating from Fleming Island High School in 2008, I worked at a Honda dealership as a car detailer for ten years. 
                In 2018 i was involved in a bad car accident that left me with several neck and back injuries.
                The injuries made doing my job painful and unrewarding, which led me to a new path of becoming a developer!
            </p>
        </div>
    )
}