import { Link } from "react-router-dom";
import { useState } from "react";

import logo from "../../images/logo.svg";
import Search from "./search";
import LinkButton from "../Shared/ui/Link";
import MenuIcon from "../../images/MenuIcon_Header.svg";
import { WithTransLate } from "../helpers/translating";

import s from "./HeaderTest.module.scss";
import SideNavbar from "../SideNavbar/SideNavbar.jsx";

function HeaderTest() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleSearchToggle = (searchOpen) => setIsSearchOpen(searchOpen);
  const handleMenuOpen = () => setIsNavOpen(true);
  const handleMenuClose = () => setIsNavOpen(false);

  return (
    <header className={s.headerContainer}>
      <Link to="/">
        <img src={logo} alt="logo" className={s.logoImage} />
      </Link>

      <div className={s.btnsWrapper}>
        <LinkButton
          variant="primary"
          href="https://beds24.com/booking2.php?propid=3578&layout=1&_gl=1*1m5j7wv*_ga*MTkzNDM4MTM5NS4xNzMxNjYzNTQ2*_ga_6QGX4YP9SF*czE3NTUwMzA0NDAkbzExMCRnMSR0MTc1NTAzMjQ5MCRqNTIkbDAkaDA"
          rel="noreferrer"
          className={s.btnCorrection}
        >
          <WithTransLate text="book your room" />
        </LinkButton>

        <LinkButton
          variant="secondary"
          href="https://bluehouse.tourdesk.is/Tour"
          rel="noreferrer"
          className={`${s.btnCorrection} ${isSearchOpen ? s['btnCorrection--hidden'] : ''}`}
        >
          <WithTransLate text="book day tours" />
        </LinkButton>
      </div>

      <div className={s.iconsWrapper}>
        <Search onSearchToggle={handleSearchToggle} />
        {!isNavOpen && (
          <button
            className={s.menuBtn}
            type="button"
            onClick={handleMenuOpen}
            aria-label="Open navigation"
          >
            <img
              src={MenuIcon}
              alt="MenuIcon"
              draggable="false"
              className={s.menuImg}
            />
          </button>
        )}
      </div>

      <SideNavbar isOpen={isNavOpen} onClose={handleMenuClose} />
    </header>
  );
}

export default HeaderTest;
