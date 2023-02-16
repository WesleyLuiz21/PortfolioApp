import React from "react";
import './components.css'
import { motion } from "framer-motion"

import { ReactComponent as SkillSvg } from './resources/illustrations/skills.svg';



class Info extends React.Component {
    render() {
        return (
            <div className="main-container grid">
                <div >
                <motion.div initial={{opacity: 0, x: -200}} animate={{opacity: 1, x:0, animationDelay:2}} exit={{opacity: 0, x:100}} transition={{duration: 0.4}}>
                   <h2>Technical Info</h2>
                   <div id="red-border2"></div>
                   <p>React Version 18.1.0</p>
                   <h3>Libraries Used:</h3>
                   <ul className="tech-ul">
                     <li>React Router</li>
                     <li>React Icons</li>
                     <li>Framer-motion</li>
                     <li>SplideJs</li>
                   </ul>
                   <h3>Extra:</h3>
                   <ul className="tech-ul">
                   <li>Designed with Figma and Adobe Photoshop.</li>
                   <li>I have designed the images and illustrations specially for this website.</li>
                   <li>I have decided to not use Bootstrap in this App, only custom CSS ( I regreat doing it).</li>
                   </ul>
                   </motion.div>
                </div>
                <motion.div initial={{opacity: 0, x: -500}} animate={{opacity: 1, x:0}}  exit={{opacity: 0, x:100}} transition={{duration: 0.8,delay: 0.8}}>
                  <SkillSvg className="illus-img"/>
                </motion.div>
                <div className="newcontainer">
                   <div className="rectangle"></div>
                </div>
            </div>
        );
    }
}

export default Info;