import React from "react";
import "./footer.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Container>
      <div className="footer">
        <div className="footer-items">
          <ul>
            <li className="cool-link">
              <Link to="/">Home</Link>
            </li>
            <li className="cool-link">
              <Link to="/about">About Me</Link>
            </li>
            <li className="cool-link">
              <Link to="/services">Services</Link>
            </li>
            <li className="cool-link">
              <Link to="/testimonial">Testimonial</Link>
            </li>
            <li className="cool-link">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="cool-link">
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-muted rights">@2022.All rights reserved</p>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
