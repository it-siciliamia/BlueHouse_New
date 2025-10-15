import { Link } from "react-router-dom";
import IconButton from "../Shared/ui/IconButton";
import logoBadge from "../../images/footer/logo-blue.svg";

import s from "./Footer.module.scss";
import { footerSections } from "./footerData";
import { WithTransLate } from "../helpers/translating";
import useBreakpoints from "../../Styles/useBreakpointsNew";

function SiteMap({ title, data }) {
  const RenderLink = (metadata) => {
    const icon = metadata?.icon ? (
      <img src={metadata.icon} alt="" className={s.image} />
    ) : null;

    const label = (
      <span>
        <WithTransLate text={metadata?.name ?? ""} />
      </span>
    );

    if (metadata.type === "external") {
      return (
        <li key={metadata.id}>
          <a
            href={metadata.href}
            target={metadata.newTab ? "_blank" : "_self"}
            rel={metadata.newTab ? "noreferrer" : undefined}
            className={s.link}
          >
            {icon}
            {label}
          </a>
        </li>
      );
    }

    if (metadata.type === "route") {
      return (
        <li key={metadata.id}>
          <Link to={metadata.to} className={s.link}>
            {icon}
            {label}
          </Link>
        </li>
      );
    }

    return null;
  };

  return (
    <div className={s.siteMap}>
      <h3>
        <WithTransLate text={title ?? ""} />
      </h3>
      <ul>{data.map(RenderLink)}</ul>
    </div>
  );
}

function SiteMapMinimal({ title, data }) {
  const RenderLink = (metadata) => {
    const icon = metadata?.icon ? (
      <img src={metadata.icon} alt="" className={s.image} />
    ) : null;

    return (
      <li key={metadata.id}>
        <a
          href={metadata.href}
          target={metadata.newTab ? "_blank" : "_self"}
          rel={metadata.newTab ? "noreferrer" : undefined}
          className={s.link}
        >
          {icon}
        </a>
      </li>
    );
  };
  return (
    <div className={s.siteMapMinimal}>
      <h3>
        <WithTransLate text={title ?? ""} />
      </h3>
      <ul>{data.map(RenderLink)}</ul>
    </div>
  );
}

function Footer() {
  const { isMobile, isTablet } = useBreakpoints();
  const currentYear = new Date().getFullYear();

  const handleHomeClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={s.footer}>
      <div className={s.linkWrapper}>
        <Link to="/" className={s.homeLink} onClick={handleHomeClick}>
          <img src={logoBadge} alt="Blue House Home" />
        </Link>

        {isMobile || isTablet ? (
          <>
            <SiteMap title="blue house" data={footerSections.blueHouse} />
            <SiteMap title="contact us" data={footerSections.contact} />
            <SiteMapMinimal title="social media" data={footerSections.social} />
          </>
        ) : (
          <>
            <SiteMap title="social media" data={footerSections.social} />
            <SiteMap title="blue house" data={footerSections.blueHouse} />
            <SiteMap title="contact us" data={footerSections.contact} />
          </>
        )}
      </div>

      <div className={s.copyright}>
        <div className={`${s.copyrightText} ${s.gapSm}`}>
          <span aria-hidden="true">©</span>
          <span>Blue House {currentYear}</span>
        </div>
        <div className={`${s.copyrightText} ${s.gapMd}`}>
          <span>
            <WithTransLate text="Back to Top" />
          </span>
          <IconButton
            icon="arrowUp"
            variant="inverse"
            size="sm"
            onClick={handleHomeClick}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
