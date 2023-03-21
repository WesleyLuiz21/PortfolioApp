import React,{ useState } from "react";
import { NavLink } from 'react-router-dom';
import './sidenav.css'


import { FaHome } from  "react-icons/fa";
import { MdEdit } from  "react-icons/md";
import { ImBook } from  "react-icons/im";
import { ImTarget } from  "react-icons/im";
import { ImFolderOpen } from  "react-icons/im";
import { MdEmail } from  "react-icons/md";
import { CgMenuLeftAlt } from  "react-icons/cg";

import { AiOutlineInstagram } from  "react-icons/ai";
import { TbBrandLinkedin } from  "react-icons/tb";
import { MdClose } from "react-icons/md";
import { HiPuzzle } from "react-icons/hi";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";




const sidebarIn = () => {                                             //hover function in
  document.getElementById('sidebar').style.width = '15.3rem';

};

const sidebarOut = () => {                                             // hover function out
  document.getElementById('sidebar').style.width = '5.9rem'
};



// Pages Objects

const homePage = {
  name: 'Home',
  icon: <FaHome className="material-icons"/>,
  link: '/'
}
const skillsPage = {
  name: 'Skills',
  icon: <MdEdit className="material-icons"/>,
  link: '/skills'
}
const eduPage = {
  name: 'Education',
  icon: <ImBook className="material-icons"/>,
  link: '/education'
}
const goalsPage = {
  name: 'Goals',
  icon: <ImTarget className="material-icons"/>,
  link: '/goals'
}
const portPage = {
  name: 'Portfolio',
  icon: <ImFolderOpen className="material-icons"/>,
  link: 'portfolio'
}
const contactPage = {
  name: 'Contact',
  icon: <MdEmail className="material-icons"/>,
  link:'/contact'
}
const hobbiesPage = {
  name: 'Hobbies',
  icon: <HiPuzzle className="material-icons"/>,
  link: '/hobbies'
}
const InfoPage = {
  name: 'Website Info',
  icon: <BsFillInfoCircleFill className="material-icons"/>,
  link: '/Info'
}

function Sidebar() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(current => !current);
}
 const closeClick = event => {
  setIsShown(false);
 }

  return (
    <div>
      
      <div className="nav-mobile shadow">
       <div className="nav-content">
         <button  id="name-mobi" onClick={handleClick}><CgMenuLeftAlt/></button>
         <button className="contact-btn"><NavLink to={contactPage.link}>contact</NavLink></button>
       </div>
      </div>
      <SideNav className='desktop' />
      {isShown && <button className="close-btn" onClick={handleClick} ><MdClose className="mdbtn"/></button>}
      {isShown && <SideNav className='mobile' funcEvent={closeClick} />}
      {isShown && <div className="overlay" onClick={handleClick}></div>}
    </div>
    
  )
}

const SideNav = ({ className, funcEvent }) => {
  

  return (
       <div  className={`side-bar ${className} fixed`} id="sidebar" onMouseOver={sidebarIn} onMouseOut={sidebarOut}>
         <div className="flex nav-div">
         <NavLink to={homePage.link} onClick={funcEvent} style={({isActive}) => ({color: isActive ? '#0E131C' : '#FFFFFF'})}   className="nav-container1" id="nav1">
            
            <span>{homePage.icon}</span>
            <span className="icon-text">{homePage.name}</span>
          </NavLink>
          
          <NavLink to={skillsPage.link} onClick={funcEvent} style={({isActive}) => ({color: isActive ? '#0E131C' : '#FFFFFF'})}   className="nav-container1" id="nav2">
            
            <span>{skillsPage.icon}</span>
            <span className="icon-text">{skillsPage.name}</span>
          </NavLink>
          
          <NavLink to={eduPage.link} onClick={funcEvent} style={({isActive}) => ({color: isActive ? '#0E131C' : '#FFFFFF'})}  className="nav-container1" id="nav3">
            
            <span><ImBook className="material-icons"/></span>
            <span className="icon-text">Education</span>
          </NavLink>
         
          <NavLink to={goalsPage.link} onClick={funcEvent} style={({isActive}) => ({color: isActive ? '#0E131C' : '#FFFFFF'})}   className="nav-container1" id="nav4">
            
            <span><ImTarget className="material-icons"/></span>
            <span className="icon-text">Goals</span>
          </NavLink>
          
          <NavLink to={portPage.link} onClick={funcEvent} style={({isActive}) => ({color: isActive ? '#0E131C' : '#FFFFFF'})} className="nav-container1" id="nav5">
            
            <span><ImFolderOpen className="material-icons"/></span>
            <span className="icon-text">Portfolio</span>
          </NavLink>
         
          <NavLink to={contactPage.link} onClick={funcEvent} style={({isActive}) => ({color: isActive ? '#0E131C' : '#FFFFFF'})}  className="nav-container1" id="nav6">
            
            <span><MdEmail className="material-icons"/></span>
            <span className="icon-text">Contact</span>
            </NavLink>
          
          <NavLink to={hobbiesPage.link} onClick={funcEvent} style={({isActive}) => ({color: isActive ? '#0E131C' : '#FFFFFF'})}  className="nav-container1" id="nav7">
            
            <span><HiPuzzle className="material-icons"/></span>
            <span className="icon-text">Hobbies</span>
          </NavLink>
          <NavLink to={InfoPage.link} onClick={funcEvent} style={({isActive}) => ({color: isActive ? '#0E131C' : '#FFFFFF'})}  className="nav-container1" id="nav7">
            
          <span>{InfoPage.icon}</span>
          <span className="icon-text">Website Info</span>
        </NavLink>
         </div>
          <div className="flex nav-div">
          <a href="https://www.instagram.com/wesley.luiz21/?hl=en" className="nav-container1" id="nav8" target='_blank' rel="noreferrer">
            
            <span><AiOutlineInstagram className="material-icons"/></span>
            <span className="icon-text">Instagram</span>
          </a>
          
          <a href="https://www.linkedin.com/in/wesley-luiz-de-souza-6b0638234/" className="nav-container1" id="nav9" target='_blank' rel="noreferrer">
            
            <span><TbBrandLinkedin className="material-icons"/></span>
            <span className="icon-text">Linkedin</span>
          </a>
          
          <a href="https://github.com/WesleyLuiz21" className="nav-container1" id="nav10" target='_blank' rel="noreferrer">
            
            <span><AiFillGithub className="material-icons"/></span>
            <span className="icon-text">Github</span>
          </a>
          </div>

       </div>

    )
};


export default Sidebar;