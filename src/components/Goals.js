import React from "react";
import './components.css'
import { motion } from "framer-motion"

import { HiCheckCircle } from  "react-icons/hi";

import { ReactComponent as GoalSvg } from './resources/illustrations/goals.svg';



class Goals extends React.Component {
    render() {
        return (
            <div className="main-container grid">
                <div >
                <motion.div initial={{opacity: 0, x: -200}} animate={{opacity: 1, x:0, animationDelay:2}} exit={{opacity: 0, x:100}} transition={{duration: 0.4}}>
                   <h2>Goals</h2>
                   <div className="skills-containers flex">
                    <p className="btn-skills"><HiCheckCircle className="check"/> Front-End</p>
                    <p className="btn-skills"><HiCheckCircle className="check"/> Back-End</p>
                    <p className="btn-skills"><HiCheckCircle className="check"/> Art/Design</p>
                    <p className="btn-skills"><HiCheckCircle className="check"/> Web Development</p>
                    <p className="btn-skills"><HiCheckCircle className="check"/> Web Design</p>
                   </div>
                </motion.div>
                <motion.div initial={{opacity: 0, x: -400}} animate={{opacity: 1, x:0}}  exit={{opacity: 0, x:100}} transition={{duration: 0.5,delay: 0.5}}>
                   <div className="main-text">
                     <p>I aspire to kickstart my Web Development career in the UK and apply the skills and knowledge I've gained while acquiring practical experience. My forte lies in Frontend development, but I'm also intrigued by Backend/Fullstack development opportunities.</p>
                     <p>With my quick learning abilities and my willingness to put in the extra effort, I am dedicated to ensuring that my work is always of the highest quality. My background in art and design, combined with my proficiency in troubleshooting and programming, has equipped me with a diverse skill set that I believe will make me a valuable asset to any team.</p>
                   </div>
                </motion.div>
                </div>
                <motion.div initial={{opacity: 0, x: -500}} animate={{opacity: 1, x:0}}  exit={{opacity: 0, x:100}} transition={{duration: 0.8,delay: 0.8}}>
                  <GoalSvg className="illus-img"/>
                </motion.div>
                <div className="newcontainer">
                   <div className="rectangle"></div>
                </div>
            </div>
        );
    }
}

export default Goals;