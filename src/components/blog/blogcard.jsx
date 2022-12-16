import React from "react";
import "./blog.css";

function Blogcard({ title, date, content, image }) {
  return (
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <h3 className="mb-0 blog-title">{title}</h3>
          <div className="mb-1 text-muted">{date}</div>
          <p className="card-text mb-auto">{content}</p>
          <a href="#" className="stretched-link">
            Continue reading
          </a>
        </div>
        <div className="col-auto d-none d-lg-block">
          <img src={image} alt="" width="200px" height="250px" />
        </div>
      </div>
    </div>
  );
}

export default Blogcard;
