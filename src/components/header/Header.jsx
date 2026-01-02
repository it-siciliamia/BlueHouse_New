import { useState } from "react";
import { Link } from "react-router-dom";

import s from "./Header.module.scss";
import Search from "./Search.jsx";
import logo from "../../images/logo.svg";
import MenuIcon from "../../images/MenuIcon_Header.svg";
import useBreakpoints from "../../Styles/useBreakpoints.js";
import { WithTransLate } from "../helpers/translating/index.jsx";
import LinkButton from "../Shared/ui/Link.jsx";
import SideNavbar from "../SideNavbar/SideNavbar.jsx";

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { isSmallScreen, isDesktop } = useBreakpoints();

  const handleSearchToggle = (searchOpen) => setIsSearchOpen(searchOpen);
  const handleMenuOpen = () => setIsNavOpen(true);
  const handleMenuClose = () => setIsNavOpen(false);

  return (
    <header className={s.headerContainer}>
      <Link to="/" className={s.logoLink}>
        <img src={logo} alt="logo" className={s.logoImage} />
      </Link>

      {isSmallScreen || isDesktop ? (
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
              className={s.btnCorrection}
>
            <WithTransLate text="book day tours" />
          </LinkButton>
        </div>
      ) : null}

      <div className={s.iconsWrapper}>
        <Search onSearchToggle={handleSearchToggle} />

       <button
        className={s.menuBtn}
        type="button"
        onClick={handleMenuOpen}
       aria-label="Open navigation"
>
          <img src={MenuIcon} alt="MenuIcon" draggable="false" className={s.menuImg} />
        </button>
      </div>

      <SideNavbar isOpen={isNavOpen} onClose={handleMenuClose} />
    </header>
  );
}

export default Header;
