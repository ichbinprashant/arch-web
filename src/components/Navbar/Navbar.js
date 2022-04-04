import React, {useState, useRef, useEffect} from "react"
import{FaBars, FaTwitter, FaLinkedin, FaInstagram} from "react-icons/fa"

export default function Navbar(){
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const toggleLinks = () => {
      setShowLinks(!showLinks);
    };
    useEffect(() => {
      const linksHeight = linksRef.current.getBoundingClientRect().height;
      if (showLinks) {
        linksContainerRef.current.style.height = `${linksHeight}px`;
      } else {
        linksContainerRef.current.style.height = '0px';
      }
    }, [showLinks]);
    return(
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src="./images/airbnb-logo.png" alt="logo" className="logo"/>
                    <button className="nav-toggle" onClick={toggleLinks}>
                        <FaBars />
                    </button>
                </div>
                <div className="links-container" ref={linksContainerRef}>
                    <ul className="links" ref={linksRef}>
                        <li>
                            <a href='#'>home</a>
                        </li>
                        <li>
                            <a href='#'>Our Services</a>
                        </li>
                        <li>
                            <a href='#'>About</a>
                        </li>
                        <li>
                            <a href='#'>Contact Us</a>
                        </li>
                    </ul>
                </div>
                <ul className="social-icons">
                    <li className="twitter">
                        <a href="https://www.twitter.com"><FaTwitter /></a>
                    </li >
                    <li className="instagram">
                        <a href="https://www.instagram.com"><FaInstagram /></a>
                    </li>
                    <li className="linkedin">
                        <a href="https://www.linkedin.com"><FaLinkedin /></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}