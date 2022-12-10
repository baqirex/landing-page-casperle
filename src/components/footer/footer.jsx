import React from "react";
import "./footer.css";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <Container>
      <div className="footer">
        <div className="footer-items">
          <ul>
            <li className="cool-link">
              <a to="#home">Home</a>
            </li>
            <li className="cool-link">
              <a to="#about">About Me</a>
            </li>
            <li className="cool-link">
              <a to="#services">Services</a>
            </li>
            <li className="cool-link">
              <a to="#testimonial">Testimonial</a>
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
