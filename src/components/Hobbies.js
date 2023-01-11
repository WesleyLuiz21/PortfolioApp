import React from "react";
import './components.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import image1 from './resources/images/ffsfsfs.png'
import image2 from './resources/images/art.png'
import image3 from './resources/images/art2.png'
import image4 from './resources/images/art3.png'
import { BiRightArrowAlt } from  "react-icons/bi";
import { motion } from "framer-motion"




class Hobbies extends React.Component {
    render() {
        
        return (
            
            
            <div className="main-container grid">
                <div >
                <motion.div initial={{opacity: 0, x: -200}} animate={{opacity: 1, x:0, animationDelay:2}} exit={{opacity: 0, x:100}} transition={{duration: 0.4}}>
                   <h2>Hobbies</h2>
                   <div id="red-border2"></div>
                   <div className="main-text hob-text">
                     <p>When it comes to  Hobbies, I am that kind of person who always feel the need to keep moving or doing something, therefore I have so many Hobbies such as working out, travel, languages, and gaming.</p>
                     <p>Though my main Hobbies are Graphic Illustration and Digital Art.</p>
                     <p>Currently I speak English, Portuguese, Spanish and I am looking forward to learning Italian.</p>
                     <div className="flex">
                     <motion.div initial={{opacity: 0, x: -400}} animate={{opacity: 1, x:0}}  exit={{opacity: 0, x:100}} transition={{duration: 0.5,delay: 0.5}}>
                      <a href="https://www.artstation.com/wesley-souza" target='_blank' rel="noreferrer" className="redbtn flex">Artstation <BiRightArrowAlt className='aicon'/></a>
                     </motion.div>
                     </div>
                   </div>
                   </motion.div>
                </div>
                <motion.div initial={{opacity: 0, x: -500}} animate={{opacity: 1, x:0}}  exit={{opacity: 0, x:100}} transition={{duration: 0.8,delay: 0.8}}>
                    <Splide aria-label="My Artworks" className="imgSlide">
                        <SplideSlide>
                            <img src={image1} className='img-hobbies' alt='image1' />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={image2} className='img-hobbies' alt='image2' />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={image3} className='img-hobbies' alt='image3' />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={image4} className='img-hobbies' alt='image3' />
                        </SplideSlide>
                    </Splide>
                </motion.div>
                <div className="newcontainer">
                   <div className="rectangle"></div>
                </div>
            </div>
            
        );
    }
}

export default Hobbies;