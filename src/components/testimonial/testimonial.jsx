import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Description from "../atoms/description";
import Heading from "../atoms/heading";
import Slider from "../slider/slider";

function Testimonial({ heading, description, data }) {
  return (
    <Container className="testimonial m-top">
      <Row>
        <Col className="text-center">
          <Heading heading={heading} />
          <Description description={description} />
        </Col>
      </Row>
      <Row>
        <Slider data={data} />
      </Row>
    </Container>
  );
}

export default Testimonial;
