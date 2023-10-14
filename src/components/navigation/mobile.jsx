import React from "react";
import { Link } from "react-router-dom";
import { Brand } from "./brand";

export const MobileNav = ({ links = [], handleCloseMenu, openMenu }) => {
  return (
    <div className={`mobileNavigation ${openMenu ? 'openNav': 'closeNav'}`}>
      <div className="sideNavigation">
        <div className="d-flex justify-content-between">
          <Brand link={"/"} />
          <div className="closeBtn" onClick={handleCloseMenu}>
            <box-icon name="x" color="#EFC2B2" size="md" />
          </div>
        </div>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.url}>{link.name}</Link>
              <ul>
                {link.subNav.length > 0 &&
                  link.subNav.map((subNav) => (
                    <li key={subNav.id}>
                      <Link to={subNav.url}>{subNav.name}</Link>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
