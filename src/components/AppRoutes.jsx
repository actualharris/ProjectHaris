// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Socials from './Socials';
import Projects from './Projects';
import Footer from "./Footer";

function AppRoutes() {
    return (
        // <Router basename="/ProjectHaris/">
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/socials" element={<Socials />} /> 

            </Routes>
            <Footer />
        </Router>
    );
}

export default AppRoutes;