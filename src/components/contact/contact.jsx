import React, { useState } from "react";
import "./contact.css";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "../atoms/heading";
import Description from "../atoms/description";
import Input from "../atoms/input";
import Button from "../atoms/button";

import envelope from "../../images/envelope.svg";

function Contact({ heading, description }) {
  const [user, setUser] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(e.target.value);
  };

  const handleSubmit = () => {
    console.log("user", user);
  };

  return (
    <Container>
      <div className="text-center">
        <Heading heading={heading} />
        <Description description={description} />
      </div>
      <Row>
        <Col sm lg="6">
          <Input
            name="name"
            label="Name"
            value={user.name}
            placeholder="Please enter your full name"
            onChange={handleChange}
            type="text"
          />
          <Input
            name="email"
            label="Email"
            value={user.email}
            placeholder="Please enter your email address"
            onChange={handleChange}
            type="email"
          />
          <Input
            name="message"
            label="Message"
            value={user.message}
            placeholder="Type your message"
            onChange={handleChange}
            type="email"
          />
          <Button btntitle="Submit" handleBtnClick={handleSubmit} />
        </Col>
        <Col sm lg="6" className="contact-img-container text-center">
          <img src={envelope} alt="" className="img-fluid contact-img" />
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
