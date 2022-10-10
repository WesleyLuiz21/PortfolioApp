import React from "react";
import ReactDOM from 'react-dom/client';
import {  BrowserRouter, Route, Routes} from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

import Navbar from './components/Navbar';
import Sidebar from './components/SideNav';
import MainPage from './Home';
import Skills from './components/Skills';
import Education from "./components/Education";
import Goals from "./components/Goals";
import Contact from "./components/contact";
import Hobbies from "./components/Hobbies";
import Portfolio from './components/portfolio';

const main = ReactDOM.createRoot(document.getElementById('main'));

function NotFound() {
  return <>You have landed on a page that doesn't exist</>;
}
class App extends React.Component {
 render() {
    return (
      <AnimatePresence>
      <BrowserRouter>
          <Sidebar />
          <Navbar />
          <Routes>
             <Route path='/' element={<MainPage/>}/>
             <Route path='/skills' element={<Skills />}/>
             <Route path='/education' element={<Education />}/>
             <Route path='/goals' element={<Goals />}/>
             <Route path='/contact' element={<Contact />}/>
             <Route path='/hobbies' element={<Hobbies />}/>
             <Route path='/portfolio' element={<Portfolio />}/>
             <Route path="*" component={NotFound} />
          </Routes>
      </BrowserRouter>
      </AnimatePresence>
    );
  }
}

main.render(
  <React.StrictMode>
    <App />
</React.StrictMode>
);