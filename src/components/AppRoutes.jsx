import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from "./Home"
import About from "./About"
import Socials from './Socials';
import Projects from './Projects';

import Footer from "./Footer"

function AppRoutes() {


    return (
      <>
      <Router>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/socials" element={<Socials />} />
                  {/* Add more routes as needed */}
              </Routes>
              <Footer /> {/* Placed outside Routes */}
        </Router>
      </>
    )
  }
  
  export default AppRoutes;
  