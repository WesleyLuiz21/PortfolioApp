import React from "react";
import './components.css'

import { ReactComponent as EduSvg } from './resources/illustrations/edu.svg';
import jsimg from './resources/illustrations/jsimg.png';
import { motion } from "framer-motion"

const ImgSvg = <EduSvg className="illus-img"/>;


class Education extends React.Component {
    render() {
        return (
            
            <div className="main-container grid">
                <div >
                <motion.div initial={{opacity: 0, x: -200}} animate={{opacity: 1, x:0, animationDelay:2}} exit={{opacity: 0, x:100}} transition={{duration: 0.4}}>
                   <h2>Education</h2>
                   <div id="red-border2"></div>
                   <div className="main-text">
                     <p>Before coming to the UK, I finished High School in Brazil, then I did a IESOL Course at Barnet and Southgate College in order to improve my English.</p>
                     <p>Currently I am studying Front-End development. I am following the Frontend careerpath course at codecademy and so far I've been loving it.</p>
                     <motion.div initial={{opacity: 0, x: -400}} animate={{opacity: 1, x:0}}  exit={{opacity: 0, x:100}} transition={{duration: 0.5,delay: 0.5}}>
                     <img src={jsimg} alt='js-progamming' className='jsimg'></img>
                     </motion.div>
                   </div>
                </motion.div>
                </div>
                <motion.div initial={{opacity: 0, x: -500}} animate={{opacity: 1, x:0}}  exit={{opacity: 0, x:100}} transition={{duration: 0.8,delay: 0.8}}>
                    {ImgSvg}
                </motion.div>
                <div className="newcontainer">
                   <div className="rectangle"></div>
                </div>
            </div>
        );
    }
}

export default Education;