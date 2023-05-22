import React from "react";
import styles from './index.css'
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom';

import MyPicture from './components/resources/wesley2.png'

import { BiRightArrowAlt } from  "react-icons/bi";





const titleh2 = 'Front-End Developer & Website Designer';

const slidedata = [
  {
    title: 'Who Am I?',
    description: 'I am a Brazilian/Italian developer based in London, UK.'
  },
  {
    title: 'What do I do?',
    description: 'At the moment I am studying Front-End Development.'
  },
  /*{
    title: 'Goals',
    description: 'My main goal is to create stunning interactive web applications.'
  }, */ 
  {
    title: 'Tech Stack',
    description: `Currently, my stack is based of HTML, CSS, JS, jQuery, Bootstrap and ReactJS.`
  }
];

class MainText extends React.Component {
  render() {
    return (
      <div className='main_text_index text-hidden' id="text2">
        <motion.div initial={{opacity: 0, x: -200}} animate={{opacity: 1, x:0, animationDelay:2}} exit={{opacity: 0, x:100}} transition={{duration: 0.4}}>
         <p className='intro_p'> Hello!</p>
         <h1>I'm Wesley Souza</h1>
         <div id='red_border'></div>
         <h2>{titleh2}</h2>
         <div className='intro_buttons flex'>
           <NavLink className='red_btn flex' to='/contact'>Contact <BiRightArrowAlt className={styles.aicon}/></NavLink>
           <NavLink className='white_btn flex' to='/portfolio'>Portfolio <BiRightArrowAlt className={styles.aicon}/></NavLink>
         </div>
      </motion.div>
    </div>
    )
  }
}


function RightText({ title, description }) {
    return (
         <div className="slide">
            <h2>{title}</h2>
            <div className="textdesc">
              <p>{description}</p>
            </div>
         </div>
    );
}
function Description() {
  const [index, setIndex] = React.useState(0);
  const delay = 7500;
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if(timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => 
      setIndex((prevIndex) =>
       prevIndex === slidedata.length - 1 ? 0 : prevIndex + 1), delay);
    return () => {
      resetTimeout();
    };
  }, [index]);

  const TextComponent = slidedata.map((user,i) => {
    return <RightText key={i}  title={slidedata[i].title} description={slidedata[i].description} />
    
  })

  return (
    <div className='slideshow relative'>
       <div className="slideshowslider" style={{ transform: `translate3d(${-index * 100}%, 0,0)`}}>
          {TextComponent}
       </div>
       <div className="car-nav">
        {slidedata.map((_, idx) => (
          <span key={idx}
           className={`car-btn${index === idx ? " active" : ""}`}
           onClick={() => {
              setIndex(idx);
            }}
            ></span>
        ))}
       </div>
    </div>
    
  );
}
class MainPage extends React.Component {
  
  render() {
    return (
      <div className='container' id="homepage">
        <div className='main_text_index' id="text1">
         <motion.div initial={{opacity: 0, x: -200}} animate={{opacity: 1, x:0, animationDelay:2}} exit={{opacity: 0, x:100}} transition={{duration: 0.4}}>
           <p className='intro_p'> Hello!</p>
           <h1>I'm Wesley Souza</h1>
           <div id='red_border'></div>
           <h2>{titleh2}</h2>
            <div className='intro_buttons flex'>
             <NavLink className='redbtn flex' to='/contact'>Contact <BiRightArrowAlt className={styles.aicon}/></NavLink>
             <NavLink className='whitebtn flex' to='/portfolio'>Portfolio <BiRightArrowAlt className={styles.aicon}/></NavLink>
           </div>
          </motion.div>
      </div>
          <motion.div initial={{opacity: 0, x: -400}} animate={{opacity: 1, x:0}}  exit={{opacity: 0, x:100}} transition={{duration: 0.5,delay: 0.5}}>
           <img className='me_photo' src={MyPicture} alt='myself'></img>
          </motion.div>
          <motion.div initial={{opacity: 0, x: -600}} animate={{opacity: 1, x:0}}  exit={{opacity: 0, x:100}} transition={{duration: 0.7,delay: 0.8}}>
            <Description slidedata={slidedata}/>
          </motion.div>
        <MainText/>
        <div className="bg-img"></div>
      </div>
      
    );
  }
}

export default MainPage;