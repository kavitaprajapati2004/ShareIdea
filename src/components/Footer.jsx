import React from "react";
import "../styles/Footer.css";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export default function Footer() {

  const link = "https://www.linkedin.com/in/kavita-julaniya-8298ab337/" 
  const links = "https://github.com/" 
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h3>IdeaShare</h3>
          <p>Share. Learn. Build with Students.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/dashboard">Explore</a></li>
            <li><a href="/addidea">Add Idea</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@ideashare.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="footer-section">

  <div className="social-icons">

    <a href={link}>< FaLinkedinIn  /></a>

    <a href={links}><IoLogoGithub  /></a>
  </div>
</div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} IdeaShare — All Rights Reserved.
      </div>
    </footer>
  );
}