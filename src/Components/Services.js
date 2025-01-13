import React from "react";
import Title from "./Title";
import Service from "./Service";
import { Services_List } from "../data";
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title={"our"} subtitle={"services"} />

      <div className="section-center services-center">
        {Services_List.map((item) => {
          return <Service service={item}></Service>;
        })}
      </div>
    </section>
  );
};

export default Services;
