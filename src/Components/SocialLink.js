import React from "react";
import { Social_links } from "../data";

const SocialLink = ({ icon }) => {
  return (
    <ul className="footer-icons">
      {Social_links.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} target="_blank" className={icon}>
              <i className={link.class}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLink;
