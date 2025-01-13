import React from "react";
import Title from "./Title";
import { Tour_list } from "../data";
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title={"featured"} subtitle={"tours"} />

      <div className="section-center featured-center">
        {Tour_list.map((link) => {
          return (
            <article className="tour-card">
              <div className="tour-img-container">
                <img src={link.img_src} className="tour-img" alt="" />
                <p className="tour-date">{link.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{link.title}</h4>
                </div>
                <p>{link.text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {link.place}
                  </p>
                  <p>{link.duration}</p>
                  <p>from {link.rate}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
