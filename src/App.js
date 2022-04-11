import './App.css'
import Navbar from "./components/Navbar/Navbar"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Contact from './components/Contact/Contact.js'
import About from './components/About/About.js'
import Home from './components/Home/Home.js'
const routes = {
  "/Home": () => <Home />,
  "/about": () => <About />,
  "/contact": () => <Contact />
};

export default function App() {

  return (
    <>
      <Router>
        <Navbar />
        
        <Routes>
          
          <Route path='/about' element={<About/>} />
          <Route path='/contact-us' element={<Contact />} />
          <Route exact path='/home' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
