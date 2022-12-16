import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Description from "../atoms/description";
import Heading from "../atoms/heading";
import Blogcard from "./blogcard";

function Blogpage({ heading, description, blogs }) {
  return (
    <Container className="m-top">
      <Row>
        <Col className="text-center">
          <Heading heading={heading} />
          <Description description={description} />
        </Col>
      </Row>
      <Row className="mb-2">
        {blogs.map((blog) => (
          <Blogcard
            key={blog.id}
            title={blog.title}
            date={blog.date}
            content={blog.content}
            image={blog.image}
          />
        ))}
      </Row>
    </Container>
  );
}

export default Blogpage;
