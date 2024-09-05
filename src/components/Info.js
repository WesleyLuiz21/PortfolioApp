import React from "react";
import './components.css'
import { motion } from "framer-motion"

import { ReactComponent as SetSvg } from './resources/illustrations/settings.svg';



class Info extends React.Component {
    render() {
        return (
            <div className="main-container grid">
                <div className="info" >
                <motion.div initial={{opacity: 0, x: -200}} animate={{opacity: 1, x:0, animationDelay:2}} exit={{opacity: 0, x:100}} transition={{duration: 0.4}}>
                   <h2>Website Info</h2>
                   <p>React Version 18.1.0</p>
                   <h3>Libraries Used:</h3>
                   <ul className="tech-ul">
                     <li>Create React App</li>
                     <li>React Router</li>
                     <li>React Icons</li>
                     <li>Framer-motion</li>
                     <li>SplideJs</li>
                   </ul>
                   <h3>Extra:</h3>
                   <ul className="tech-ul">
                   <li> I have designed this website designed entirely on Figma and Adobe Photoshop.</li>
                   <li>All illustrations images were designed by me specially for this website.</li>
                   <li>I have decided to not use Bootstrap or a similar library for this this web app, only custom CSS - I do regreat doing it &#128549;.</li>
                   <li>Website Design inspired by my first <a className="links" href="https://wesleyluiz21.github.io/wesleyportifolio/" target="_blank" rel="noreferrer">Portfolio project</a>, I wanted to keep the design while making something entirely new.</li>
                   </ul>
                   </motion.div>
                </div>
                <motion.div initial={{opacity: 0, x: -500}} animate={{opacity: 1, x:0}}  exit={{opacity: 0, x:100}} transition={{duration: 0.8,delay: 0.8}}>
                  <SetSvg className="illus-img"/>
                </motion.div>
                <div className="newcontainer">
                   <div className="rectangle"></div>
                </div>
            </div>
        );
    }
}

export default Info;