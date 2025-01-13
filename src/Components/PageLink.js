import React from "react";
import { Page_link } from "../data";

const PageLink = ({ lclass }) => {
  return (
    <ul className="footer-links">
      {Page_link.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={lclass}>
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLink;
