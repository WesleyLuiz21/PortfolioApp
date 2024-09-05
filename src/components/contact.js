import React from "react";
import './components.css'
import { motion } from "framer-motion"

import emailIcon from './icons/icon-men.png'
import pin from './icons/pin.png'

import { ReactComponent as ContactSvg } from './resources/illustrations/contact.svg';

const ImgSvg = <ContactSvg className="illus-img"/>;

class Contact extends React.Component {
    render() {
        const email = 'wesley_luiz2001@hotmail.com';
        return (
            <div className="main-container grid">
                <div >
                <motion.div initial={{opacity: 0, x: -400}} animate={{opacity: 1, x:0}}  exit={{opacity: 0, x:100}} transition={{duration: 0.5,delay: 0.5}}>
                   <h2>Get in touch</h2>
                     <div className="main-text">
                         <p>To reach me, feel free to contact me by email:</p>
                         <div className="flex divcont">
                             <img src={emailIcon} class='icons' alt='icon-email' width='39' height='39'></img>
                             <a className="email london" href="mailto: wesley_luiz2001@hotmail.com">{email}</a>
                         </div>
                         <div className="flex divcont">
                            <img src={pin} class='icons' alt='icon-email' width='39' height='39'></img>
                          <p className="london">London - UK</p>
                       </div>
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

export default Contact;