import React from "react";
import './components.css'

import { ReactComponent as EduSvg } from './resources/illustrations/edu.svg';
import { motion } from "framer-motion"

const ImgSvg = <EduSvg className="illus-img"/>;

const DetailsEdu = () => {
    return (
        <div className="detailsEdu">
        <h3>These are certificates I have obtained over the years:</h3>
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
                <div>
                <motion.div initial={{opacity: 0, x: -200}} animate={{opacity: 1, x:0, animationDelay:2}} exit={{opacity: 0, x:100}} transition={{duration: 0.4}}>
                   <h2>Resume</h2>
                   <div className="main-text">
                     <h3>Early Years in Brazil</h3>
                     <p>I am originally from Brazil and before moving to the UK, I completed my high school education in Brazil.</p>
                     <h3>Transition to the UK</h3>
                     <p>After moving to the UK, I spent two years (2019 and 2020) at <strong>Barnet and Southgate College taking a Young ESOL course</strong> , where I improved my English, ICT, math skills and understanding of the UK culture.</p>
                     <p>In 2021, I made the difficult decision to pause my studies and enter the job market to support my familly.
                     Although I was not in full-time education, I still took IT/coding courses to keep learning on the go.</p>
                     <p>In 2022, I then enrolled in a <strong>User-Centric Frontend Development course offered by Code Institute</strong>, where I strengthened my design and web development skills. I also participated in a few hackathons hosted by Code Institute, which was really fun!</p>
                     <h3>Higher Education</h3>
                     <p>In 2023, I continued taking courses on the go and had the amazing opportunity to work as a <strong>Facilities Assistant</strong> for Dentsu UK. With a less physically demanding role, I decided to return to my studies and began a <strong>BSc Computing degree at Solent University in partinership with QAHE London.</strong></p>
                     <p>Now, in 2024, I have sucessfully completed my first year at Solent University, where I have studied the following subjects:</p>
                     <div className="resume-uni">
                        <p>▪ Problem Solving</p>
                        <p>▪ Foundation Mathematics</p>
                        <p>▪ Group Technology Project</p>
                        <p>▪ Digital Media Technologies</p>
                        <p>▪ Foundation Computing</p>
                        <p>▪ Individual Degree Related Project</p>
                    </div>   
                        <h4>In October 2024, I will be studying the following: </h4>
                    <div className="resume-uni">    
                        <p>▪ UX - User Experience</p>
                        <p>▪ Intro to Networks and Security</p>
                        <p>▪ Problem Solving Through Programming</p>
                        <p>▪ Introduction to Databases</p>
                        <p>▪ Data Analysis Tools and Application</p>
                        <p>▪ Web Technologies</p>
                     </div>
                     <motion.div initial={{opacity: 0, x: -400}} animate={{opacity: 1, x:0}}  exit={{opacity: 0, x:100}} transition={{duration: 0.5,delay: 0.5}}>
                     <DetailsEdu/>
                     </motion.div>
                   </div>
                </motion.div>
                </div>
                <motion.div initial={{opacity: 0, x: -500}} animate={{opacity: 1, x:0}}  exit={{opacity: 0, x:100}} transition={{duration: 0.8,delay: 0.8}} style={{ alignSelf: 'start' }}>
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