import React from "react";
import ReactDOM from 'react-dom/client';
import {  Route, Routes, HashRouter} from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Loader from "./components/Loader"; // Import the Loader component

import Navbar from './components/Navbar';
import Sidebar from './components/SideNav';
import MainPage from './Home';
import Skills from './components/Skills';
import Education from "./components/Education";
import Goals from "./components/Goals";
import Contact from "./components/contact";
import Hobbies from "./components/Hobbies";
import Portfolio from './components/portfolio';
import Info from "./components/Info";

const main = ReactDOM.createRoot(document.getElementById('main'));

function NotFound() {
  return <>You have landed on a page that doesn't exist</>;
}

/*
class App extends React.Component {
 render() {
    return (
      <AnimatePresence>
      <HashRouter>
          <Sidebar />
          <Navbar />
          <Routes>
             <Route exact path='/' element={<MainPage />}/>
             <Route path='/skills' element={<Skills />}/>
             <Route path='/education' element={<Education />}/>
             <Route path='/goals' element={<Goals />}/>
             <Route path='/contact' element={<Contact />}/>
             <Route path='/hobbies' element={<Hobbies />}/>
             <Route path='/portfolio' element={<Portfolio />}/>
             <Route path='/info' element={<Info/>}/>
             <Route path="*" component={NotFound} />
          </Routes>
      </HashRouter>
      </AnimatePresence>
    );
  }
} 

main.render(
  <React.StrictMode>
    <App />
</React.StrictMode>
);
*/

class App extends React.Component {
  state = {
    loading: true // Initial loading state
  };

  componentDidMount() {
    // Simulate a loading time with a timeout
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000); // Adjust the time as needed
  }

  render() {
    if (this.state.loading) {
      return <Loader />; // Show the loader while loading
    }

    return (
      <AnimatePresence>
        <HashRouter>
          <Sidebar />
          <Navbar />
          <Routes>
             <Route exact path='/' element={<MainPage />}/>
             <Route path='/skills' element={<Skills />}/>
             <Route path='/resume' element={<Education />}/>
             <Route path='/goals' element={<Goals />}/>
             <Route path='/contact' element={<Contact />}/>
             <Route path='/hobbies' element={<Hobbies />}/>
             <Route path='/portfolio' element={<Portfolio />}/>
             <Route path='/info' element={<Info/>}/>
             <Route path="*" component={NotFound} />
          </Routes>
        </HashRouter>
      </AnimatePresence>
    );
  }
}


main.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
