import React from "react";
import { Social_links } from "../data";
import PageLink from "./PageLink";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <footer className="section footer">
      {<PageLink lclass="footer-link" />}
      {<SocialLink icon="footer-icon" />}
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
