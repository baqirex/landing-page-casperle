import React from "react";
import Heading from "../atoms/heading";
import "./imageGallery.css";

function ImageGallery({ heading, images }) {
  return (
    <>
      <div className="text-center">
        <Heading heading={heading} />
      </div>
      <section className="gallery min-vh-100">
        <div className="container-lg">
          <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
            {images.map((image) => (
              <div className="col" key={image.id}>
                <img src={image.img} className="gallery-item" alt="Gallery1" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ImageGallery;
