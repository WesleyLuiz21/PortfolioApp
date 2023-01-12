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
                   <div id="red-border2"></div>
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
                     <p>My goal is to start a career in the UK as a Web Developer. I aim to put into practice and expand the knowledge I have acquired as get pratical experience.</p>
                     <p>I intend to work as a Frontend engineer as I am sure is the stack I stand out the most, although I'm also interested in backend/fullstack.</p>
                     <p>Currently I am studying Frontend development, following the Frontend careerpath course at codecademy and the intro to Web Development at Code Institute.</p>
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