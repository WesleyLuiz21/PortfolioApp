import React from "react";
import './components.css'
import { motion } from "framer-motion"

import { HiCheckCircle } from  "react-icons/hi";
import { BiRightArrowAlt } from  "react-icons/bi";

import { ReactComponent as SkillSvg } from './resources/illustrations/skills.svg';



class Skills extends React.Component {
    render() {
        return (
            <div className="main-container grid">
                <div >
                <motion.div initial={{opacity: 0, x: -200}} animate={{opacity: 1, x:0, animationDelay:2}} exit={{opacity: 0, x:100}} transition={{duration: 0.4}}>
                   <h2>Skillset</h2>
                   <div id="red-border2"></div>
                   <div className="skills-containers flex">
                      <p className="btn-skills"><HiCheckCircle className="check"/> HTML</p>
                      <p className="btn-skills"><HiCheckCircle className="check"/> CSS</p>
                      <p className="btn-skills"><HiCheckCircle className="check"/> Javascript</p>
                      <p className="btn-skills"><HiCheckCircle className="check"/> jQuery</p>
                      <p className="btn-skills"><HiCheckCircle className="check"/> Bootstrap</p>
                      <p className="btn-skills"><HiCheckCircle className="check"/> ReactJS</p>
                      <p className="btn-skills"><HiCheckCircle className="check"/> Art/Design</p>
                      <p className="btn-skills"><HiCheckCircle className="check"/> Figma</p>
                      <p className="btn-skills"><HiCheckCircle className="check"/> Photoshop</p>
                      <p className="btn-skills"><HiCheckCircle className="check"/> UI/UX</p>
                      <p className="btn-skills"><HiCheckCircle className="check"/> Troubleshooting</p>
                      <p className="btn-skills"><HiCheckCircle className="check"/> Illustration</p>
                   </div>
                   </motion.div>
                   <motion.div initial={{opacity: 0, x: -400}} animate={{opacity: 1, x:0}}  exit={{opacity: 0, x:100}} transition={{duration: 0.5,delay: 0.5}}>
                   <div className="main-text">
                     <p>Since childhood I always had a thing for computers and technology, I have been introduced to this  technologycal world when I was 7 years old and since then I developed a great passion in anything involving software and hardware. Through my life I manage to get skills and knowledge from art and design to troubleshooting  and programming.</p>
                     <p>As result of these skills, today I am a creative and proactive person, willing to find solutions to all kinds of issues.</p>
                     <div className="flex skills-btn-div">
                         <a href="https://drive.google.com/u/0/uc?id=1cdhKdBdtSicU5rmmVWuIaOTPMZ2gOYQf&export=download" className="red_btn flex">Download CV <BiRightArrowAlt className='aicon'/></a>
                         <a href="https://github.com/WesleyLuiz21" target='_blank' rel="noreferrer gi"className="white_btn flex">Github <BiRightArrowAlt className='aicon'/></a>
                     </div>
                   </div>
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

export default Skills;