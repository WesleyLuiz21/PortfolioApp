import React from "react";
import './components.css'

import { ReactComponent as EduSvg } from './resources/illustrations/edu.svg';
import { motion } from "framer-motion"

const ImgSvg = <EduSvg className="illus-img"/>;

const DetailsEdu = () => {
    return (
        <div className="detailsEdu">
        <h3>I have obtained the following certificates up to this point:</h3>
        <details>
         <summary>Codecademy</summary>
         <p className="op-education">Frontend Engineer (in-progress)</p>
         <a href="https://www.codecademy.com/profiles/Wesley_luiz/certificates/705dcb15de0da4dd9d9fc4f3274b430e" target='_blank' rel="noreferrer" className="op-education">Javascript</a>
         <br/>
         <a href="https://www.codecademy.com/profiles/Wesley_luiz/certificates/0becf7c1cd2bd715f24331dddd23425a" target='_blank' rel='noreferrer' className="op-education">jQuery Course</a>
         <br/>
         <a href="https://www.codecademy.com/profiles/Wesley_luiz/certificates/0595479d03627a8cb816b069000e4d06" target='_blank' rel='noreferrer' className="op-education">Bootstrap Course</a>
         <br/>
         <a href="https://www.codecademy.com/profiles/Wesley_luiz/certificates/4ccef8d532484ea2aeec3b3b3dbb4f9c" target='_blank' rel='noreferrer' className="op-education">Intro to UI and UX</a>
         <br/>
         <a href="https://www.codecademy.com/profiles/Wesley_luiz/certificates/0a6884fad1dbf4afe5df084d2ec1e7c3" target='_blank' rel="noreferrer" className="op-education">Color Design</a>
         <br/>
         <a href="https://www.codecademy.com/profiles/Wesley_luiz/certificates/3a62023b0054dc793edc0adecd715fd7" target='_blank' rel="noreferrer" className="op-education">Responsive Design</a>
        </details>
        <details>
        <summary>FreeCodeCamp</summary>
        <a href="https://www.freecodecamp.org/certification/WesleySouza/responsive-web-design" target="_blank" rel='noreferrer' className="op-education">Responsive Web Design (Aproximately 300 hours)</a>
        </details>
        <details>
        <summary>Code Institute</summary>
        <a href="https://drive.google.com/file/d/1sAO_9cx7p3gNtxEdOaELuIUONglRL7W0/view?usp=sharing" target="_blank" rel="noreferrer" className="op-education">User Centric Frontend Development</a>
        </details>
        <details>
        <summary>Extra</summary>
        <p className="op-education">Adobe Photoshop CC</p>
        <p className="op-education">Figma</p>
        <p className="op-education">Microsoft Office Package</p>
        <p className="op-education">Art and Design</p>
        <a href="https://drive.google.com/file/d/1SOOc4vA8JETe82lUGPQJhDN8fiMeD94o/view?usp=sharing" target="_blank" rel="noreferrer" className="op-education">Level 3 Award in Emergency First Aid at Work</a>
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
                     <p>Before moving to the UK, I completed my high school education in Brazil. To improve my English, I then pursued an IESOL course at Barnet and Southgate College.</p>
                     <p>I'm currently pursuing a Computing degree at Solent University, driven by my participation in Hackathons and Frontend Development studies. I'm determined to take my education further, which is why I enrolled at Solent University.</p>
                     <motion.div initial={{opacity: 0, x: -400}} animate={{opacity: 1, x:0}}  exit={{opacity: 0, x:100}} transition={{duration: 0.5,delay: 0.5}}>
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