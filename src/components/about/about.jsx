import React from "react";
import "./about.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function About({ heading, description, exp, clt }) {
  return (
    <Container fluid className="about m-top">
      <Row className="justify-content-center">
        <Col lg="6">
          <h1 className="about-heading text-center">{heading}</h1>
          <p className="about-description text-center">{description}</p>
          <div className="d-flex justify-content-center exp">
            <div className="exp-list d-flex m-4">
              <h4 className="color-design mx-2">{exp}</h4>
              <p>
                Years of <br /> experience
              </p>
            </div>
            <div className="exp-list d-flex m-4">
              <h4 className="color-design mx-2">{clt}</h4>
              <p>
                Clients <br /> Served
              </p>
            </div>
          </div>
          <div className="social text-center">
            <p>
              Find me here <FontAwesomeIcon icon={faArrowDown} />
            </p>
            <ul className="social-icons">
              <li className="icon">
                <a href="https://www.facebook.com">
                  <FontAwesomeIcon className="icon-height" icon={faFacebook} />
                </a>
              </li>
              <li className="icon">
                <a href="https://www.instagram.com">
                  <FontAwesomeIcon className="icon-height" icon={faInstagram} />
                </a>
              </li>
              <li className="icon">
                <a href="https://www.github.com">
                  <FontAwesomeIcon className="icon-height" icon={faGithub} />
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
