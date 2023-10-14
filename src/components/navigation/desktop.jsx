import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { SubNavigation } from "./subNavigation";

export const DesktopNav = ({ links = []}) => {
  const currentRoute = useLocation().pathname;
  return (
    <ul className="desktopNavigation">
      {links.map((link) => (
        <li
          key={link.id}
          className={`${link.subNav.length > 0 ? "dropDown" : ""}`}
        >
          <Link to={link.url} className={link.url === currentRoute ? 'activeLink': ''}>
            {link.name}{" "}
            {link.subNav.length > 0 && (
             <box-icon name='down-arrow' type='solid'  color="#EFC2B2" size="xs" />
            )}
          </Link>
          {link.subNav.length > 0 && <SubNavigation links={link.subNav} />}
        </li>
      ))}
    </ul>
  );
};
