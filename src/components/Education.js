import React from "react";
import './components.css'

import { ReactComponent as EduSvg } from './resources/illustrations/edu.svg';
import jsimg from './resources/illustrations/jsimg.png';
import { motion } from "framer-motion"

const ImgSvg = <EduSvg className="illus-img"/>;

const DetailsEdu = () => {
    return (
        <div className="detailsEdu">
        <details>
         <summary>Codecademy Courses</summary>
         <a href="/" className="op-education">Frontend Engineer (in-progress)</a>
         <br/>
         <a href="/" className="op-education">Javascript</a>
         <br/>
         <a href="/" className="op-education">jQuery Course</a>
         <br/>
         <a href="/" className="op-education">Bootstrap Course</a>
         <br/>
         <a href="/" className="op-education">Intro to UI and UX</a>
         <br/>
         <a href="/" className="op-education">Color Design</a>
        </details>
        <details>
        <summary>FreeCodecamp Courses</summary>
        <a href="https://www.freecodecamp.org/certification/WesleySouza/responsive-web-design" target="_blank" rel='noreferrer' className="op-education">Responsive Web Design (Aproximately 300 hours)</a>
        </details>
        <details>
        <summary>Code Institute Courses</summary>
        <a href="/" className="op-education">Intro to Web Development (In-progress)</a>
        </details>
        <details>
        <summary>Extra</summary>
        <p className="op-education">Proeficient in Adobe Photoshop</p>
        <p className="op-education">Intermediate Knowledge of Figma</p>
        <p className="op-education">Intermediate Skills in Microsoft Office</p>
        <p className="op-education">Very familliar with Art and Design</p>
        </details>
       </div>
    )
}

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
                     <DetailsEdu/>
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