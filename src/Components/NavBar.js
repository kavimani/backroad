import React from "react";
import Logo from "../images/logo.svg";
import { Page_link } from "../data";
import { Social_links } from "../data";
import PageLink from "./PageLink";
import SocialLink from "./SocialLink";
const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={Logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* <!-- left this comment on purpose -->*/}
          {<PageLink lclass="nav-link" />}
          {<SocialLink icon="nav-icon" />}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
