import React from "react";
import { useState } from "react";
import { currency } from "../navLinks";
import { SubNavigation } from "../subNavigation";

export const Currency = ({ links = [] }) => {
  const [currentCurrency, setCurrentCurrency] = useState("usd");
  const handleSelectedCurrency = (currency) => {
    setCurrentCurrency(currency);
  };
  return (
    <ul className="currency">
      {links.map((link) => (
        <li
          key={link.id}
          className={`${link.subNav.length > 0 ? "dropDown" : ""}`}
        >
          <a>
            {currentCurrency}{" "}
            {link.subNav.length > 0 && (
              <box-icon
                name="down-arrow"
                type="solid"
                color="#EFC2B2"
                size="xs"
              />
            )}
          </a>
          {link.subNav.length > 0 && (
            <SubNavigation
              links={link.subNav}
              handleOnClick={handleSelectedCurrency}
            />
          )}
        </li>
      ))}
    </ul>
  );
};
