import React from "react";
import './components.css'
import projects from "./resources/Projects";


import { BiRightArrowAlt } from  "react-icons/bi";

import { motion } from "framer-motion"

const Items = ({ title, description, image, link, github }) => {
 return (
    <div className="pt-item">
         <img className="pt-img" src={image} alt='projects'></img>
         <div className="pt-pad">
            <h3 className="pt-text">{title}</h3>
            <p>{description}</p>
            <div className="flex">
                <a href={link}  target='_blank' rel="noreferrer" className="redbtn flex">Live <BiRightArrowAlt className='aicon'/></a>
                <a href={github} target='_blank' rel="noreferrer" className="whitebtn flex">Github <BiRightArrowAlt className='aicon'/></a>
             </div>
         </div>
    </div>
 );
}

const ItemsList = ({ projects }) => {
    const itemsComponent = projects.map((user, i) => {
        return <Items key={i} image={projects[i].image} title={projects[i].title} description={projects[i].description} link={projects[i].link} github={projects[i].github}  />
    })
    return (
        <div className="pt-container dev flex">
            {itemsComponent}
        </div>
    );
}

class Portfolio extends React.Component {
    render() {
        return (
            
            <div className="main-container-pt grid">
                <div >
                <motion.div initial={{opacity: 0, x: -200}} animate={{opacity: 1, x:0, animationDelay:2}} exit={{opacity: 0, x:100}} transition={{duration: 0.4}}>
                   <h2>Portfolio</h2>
                   <div id="red-border2"></div>
                   <div className="main-text ">
                     <p>Currently I am developing projects to showcase my skills. <br/>I have listed some of them below:</p>
                     <motion.div initial={{opacity: 0, x: -400}} animate={{opacity: 1, x:0}}  exit={{opacity: 0, x:100}} transition={{duration: 0.5,delay: 0.5}}>
                       <ItemsList projects={projects}/>                     
                   </motion.div>
                   </div>
                </motion.div>
                </div>
            </div>
        );
    }
}

export default Portfolio;