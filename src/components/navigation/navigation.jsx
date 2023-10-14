import React, { useState } from "react";
import { Brand } from "./brand";
import { CartNavigation } from "./cart/cartNavigation";
import { Currency } from "./cart/currency";
import { DesktopNav } from "./desktop";
import { MobileNav } from "./mobile";
import { cartNavlinks, currency, navUrl } from "./navLinks";
import "./style.scss";
export default function Navigation() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };
  return (
    <>
      <div className="d-flex justify-content-between navigation">
        <div>
          <Brand link={"/"} />
        </div>
        <div className="d-flex justify-content-between">
          <div className="desktopView">
            <DesktopNav links={navUrl} />
          </div>
          <div className="d-flex">
            <span className="menu" onClick={handleOpenMenu}>
              <box-icon name="menu" color="#EFC2B2"></box-icon>
            </span>
            <CartNavigation links={cartNavlinks} />
            <Currency links={currency} />
          </div>
        </div>
      </div>
        <MobileNav links={navUrl} handleCloseMenu={handleCloseMenu} openMenu={openMenu} />
    </>
  );
}
