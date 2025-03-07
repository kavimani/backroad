import React from "react";

const Service = ({ service }) => {
  return (
    <article className="service" key={service.id}>
      <span className="service-icon">
        <i className={service.icon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{service.title}</h4>
        <p className="service-text">{service.text}</p>
      </div>
    </article>
  );
};

export default Service;
