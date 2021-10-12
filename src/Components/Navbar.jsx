import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "../Components/Navbar.css";

const Navbar = () => {
  const [showMediaIcon, setMediaicon] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>Sudeep Patra</h2>
        </div>
        <div
          className={showMediaIcon ? "menu-link mobile-menu-link" : "menu-link"}
        >
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Service</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="#">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>
          {/* hamburger menu */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setMediaicon(!showMediaIcon)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
      {/* hero section */}
      <section className="hero-section">
        <p>Welcome to Dashbord</p>
        <h1>Sudeep</h1>
      </section>
    </>
  );
};

export default Navbar;
