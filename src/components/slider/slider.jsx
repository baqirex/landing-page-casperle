import React from "react";
import ClientReview from "../testimonial/clientreview";

import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Container } from "react-bootstrap";

function Slider({ data }) {
  return (
    <Container>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <ClientReview
              name={item.name}
              image={item.image}
              comment={item.comment}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default Slider;
