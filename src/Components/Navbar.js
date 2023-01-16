import React, { useState } from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaUser,
  FaHouseUser,
  FaSignInAlt,
} from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { Avatar } from "@mui/material";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import logo from '../images/logo.jpeg';


const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const avtarStyle={ display: 'flex', position: 'absolute', left: '35px', alignItems: 'center', top:'25px' };
 
  
  return (
    <>
       <div>
           {/* <h1 style={avtarStyle}>FunctionUp🧑‍🎓</h1> */}
           {/* <NavLink to='/' className='logo' smooth={true} duration={1000}>
                <img src={logo} alt=''/>
            </NavLink> */}
           
       </div>
      <nav className="main-nav">
       <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
              <li>
                    <NavLink to='/' className='logo' smooth={true} duration={1000}>
                      <img src={logo} alt='' height='50px'  paddingLeft='100%'/>
                    </NavLink>
              </li>
              <li>
                <NavLink to="/">
                < FaHouseUser  />
                Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">
                    < FaInfoCircle  />
                about</NavLink>
              </li>
              <li >
                <NavLink to="/Login"> 
                < FaSignInAlt /> 
                Log in</NavLink>
              </li>
              <li>
                <NavLink to="/Registeration">
                <  FaUser />
                Registeration</NavLink>
              </li>
            </ul>
        </div>

        {/*  social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.facebook.com/"
                target="-facebook">
                
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_instagram">
                
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/"
                target="_youtube">
                {/* <a href="#"> */}
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburger menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      
    </>
  );
};

export default Navbar;