import React from "react";
import "./testimonial.css";
import { Col, Container, Row } from "react-bootstrap";
import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.jpg";
import ClientReview from "./clientreview";

function Testimonial() {
  return (
    <Container id="testimonial">
      <Row>
        <Col className="text-center">
          <h1 className="heading">What Client Say ?</h1>
          <p className="description">Client's Kind Words</p>
        </Col>
      </Row>
      <div className="review-container">
        <ClientReview
          name="Anna Smith"
          image={image1}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui tenetur dolores doloribus. Fuga perferendis blanditiis quod ipsum, deserunt reprehenderit nobis ipsa beatae et ex obcaecati laudantium harum? Voluptatum, quisquam explicabo?"
        />
        <ClientReview
          name="Jose Parker"
          image={image2}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui tenetur dolores doloribus. Fuga perferendis blanditiis quod ipsum, deserunt reprehenderit nobis ipsa beatae et ex obcaecati laudantium harum? Voluptatum, quisquam explicabo?"
        />
        <ClientReview
          name="Rina Rose"
          image={image3}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui tenetur dolores doloribus. Fuga perferendis blanditiis quod ipsum, deserunt reprehenderit nobis ipsa beatae et ex obcaecati laudantium harum? Voluptatum, quisquam explicabo?"
        />
      </div>
    </Container>
  );
}

export default Testimonial;
