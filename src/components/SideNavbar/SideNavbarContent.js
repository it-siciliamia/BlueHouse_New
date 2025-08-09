/**
 * SideNavbarContent.js
 * ---------------------
 * Contains the full JSX markup for the sidebar menu.
 * 
 * Key points:
 * - Receives `scroll` (function to close the sidebar), `classes` (Material-UI styles), 
 *   and `navigateAndScroll` (function to navigate to sections).
 * - Includes all menu sections:
 *   1. Bookings and Rental
 *   2. General Information
 *   3. Help and Support
 *   4. Contact Information
 * - Uses images/icons imported from the assets folder for each menu item.
 * - Uses `<WithTransLate>` for multi-language text rendering.
 * - Contact section contains social media links, email, and phone number.
 * - Wrapped in `React.memo` to avoid unnecessary re-renders when sidebar opens/closes.
 * 
 * This file is **purely presentational** — no routing logic is defined here.
 */
import React from "react";
import { Button, Divider, Grid } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../../images/Bluehouse.svg";
import Bus from "../../images/shuttle.svg";
import Escape from "../../images/escape.svg";
import Aboutus from "../../images/aboutus.svg";
import Door from "../../images/door.svg";
import Tour from "../../images/tour.svg";
import Gallery from "../../images/gallery.svg";
import supportImage from "../../images/support/whiteBackground_support.svg";
import forumImage from "../../images/support/whiteBackground_forum.svg";
import Car from "../../images/car.svg";
import Bag from "../../images/bag.svg";
import Info from "../../images/info.svg";
import Location from "../../images/location.svg";
import Instagram from "../../images/instagram.svg";
import Facebook from "../../images/facebook.svg";
import Whatsapp from "../../images/whatsApp.svg";
import TranslateMe, { WithTransLate } from "../helpers/translating";

function SideNavbarContent({ scroll, classes, navigateAndScroll }) {
  return (
    <>
      <RouterLink onClick={scroll} to="/">
        <img src={Logo} alt="Bluehouse_logo" className={classes.sliderLogo} />
      </RouterLink>
      <Button className={classes.sliderEscape} onClick={scroll}>
        <img src={Escape} alt="Close" />
      </Button>
      <TranslateMe scroll={scroll} />
      <Divider className={classes.horizontalLine} />

      <Grid className={classes.linksWrapper} container spacing={3}>
        {/* BOOKING SECTION */}
        <Grid container item spacing={2} alignItems="center" justifyContent="flex-start">
          <p className={classes.sliderTitle}>
            <WithTransLate text="BOOKINGS AND RENTAL" />
          </p>
        </Grid>

        <Grid
          component="a"
          href="https://bluehouse.tourdesk.is/Transportation"
          target="_blank"
          container
          item
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
          className={classes.highlightedColor}
        >
          <Grid item>
            <img className={classes.sliderIcons} src={Bus} alt="Slider Bus" />
          </Grid>
          <Grid item>
            <p className={classes.sliderLink}>
              <WithTransLate text="Book Airport Shuttle" />
            </p>
          </Grid>
        </Grid>

        <Grid
          component="a"
          href="https://beds24.com/booking2.php?propid=3578&layout=1"
          target="_blank"
          container
          item
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
          className={classes.highlightedColor}
        >
          <Grid item>
            <img className={classes.sliderIcons} src={Door} alt="Slider Door" />
          </Grid>
          <Grid item>
            <p className={classes.sliderLink}>
              <WithTransLate text="Book a Room" />
            </p>
          </Grid>
        </Grid>

        <Grid
          component="a"
          href="https://bluehouse.tourdesk.is/Tour"
          target="_blank"
          container
          item
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
          className={classes.highlightedColor}
        >
          <Grid item>
            <img className={classes.sliderIcons} src={Tour} alt="Slider Tour" />
          </Grid>
          <Grid item>
            <p className={classes.sliderLink}>
              <WithTransLate text="Book Day Tours" />
            </p>
          </Grid>
        </Grid>

        <Grid
          component="a"
          href="https://bluehouse.tourdesk.is/CarRental"
          target="_blank"
          container
          item
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
          className={classes.highlightedColor}
        >
          <Grid item>
            <img className={classes.sliderIcons} src={Car} alt="Slider Car" />
          </Grid>
          <Grid item>
            <p className={classes.sliderLink}>
              <WithTransLate text="Rent a Car" />
            </p>
          </Grid>
        </Grid>

        {/* GENERAL INFORMATION */}
        <Grid container item spacing={2} alignItems="center" justifyContent="flex-start">
          <p className={classes.sliderTitle}>
            <WithTransLate text="GENERAL INFORMATION" />
          </p>
        </Grid>

        <Grid
          component={RouterLink}
          onClick={() => navigateAndScroll("GALLERY_DESCTOP")}
          to="/#GALLERY_DESCTOP"
          container
          item
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
          className={classes.highlightedColor}
        >
          <Grid item>
            <img className={classes.sliderIconss} src={Gallery} alt="Scroll to Gallery" />
          </Grid>
          <Grid item>
            <p className={classes.sliderLink}>
              <WithTransLate text="Gallery" />
            </p>
          </Grid>
        </Grid>

        <Grid
          component={RouterLink}
          onClick={() => navigateAndScroll("RECOMMENDATIONS")}
          to="/#RECOMMENDATIONS"
          container
          item
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
          className={classes.highlightedColor}
        >
          <Grid item>
            <img className={classes.sliderIconss} src={Bag} alt="Slider Bag" />
          </Grid>
          <Grid item>
            <p className={classes.sliderLink}>
              <WithTransLate text="Recommendations" />
            </p>
          </Grid>
        </Grid>

        <Grid
          component={RouterLink}
          onClick={scroll}
          to="/about-us"
          container
          item
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
          className={classes.highlightedColor}
        >
          <Grid item>
            <img className={classes.sliderIconss} src={Aboutus} alt="Slider About Us" />
          </Grid>
          <Grid item>
            <p className={classes.sliderLink}>
              <WithTransLate text="About us" />
            </p>
          </Grid>
        </Grid>

        {/* HELP AND SUPPORT */}
        <Grid container item spacing={2} alignItems="center" justifyContent="flex-start">
          <p className={classes.sliderTitle}>
            <WithTransLate text="HELP AND SUPPORT" />
          </p>
        </Grid>

        <Grid
          onClick={scroll}
          container
          item
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
        >
          <Grid item>
            <img className={classes.sliderIconss} src={Info} alt="Slider Info" />
          </Grid>
          <Grid item>
            <a
              href="https://bluehouseis.zohodesk.eu/portal/en/home"
              target="_blank"
              rel="noreferrer"
              className={classes.highlightedColor}
            >
              <p className={classes.sliderLink}>
                <WithTransLate text="FAQ" />
              </p>
            </a>
          </Grid>
        </Grid>

        <Grid
          onClick={scroll}
          container
          item
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
        >
          <Grid item>
            <img className={classes.sliderIconss} src={supportImage} alt="Slider Support" />
          </Grid>
          <Grid item>
            <a
              href="https://bluehouseis.zohodesk.eu/portal/en/newticket?departmentId=135604000000205173&layoutId=135604000000214460"
              target="_blank"
              rel="noreferrer"
              className={classes.highlightedColor}
            >
              <p className={classes.sliderLink}>
                <WithTransLate text="Support" />
              </p>
            </a>
          </Grid>
        </Grid>

        <Grid
          onClick={scroll}
          container
          item
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
        >
          <Grid item>
            <img className={classes.sliderIcons} src={forumImage} alt="Slider Forum" />
          </Grid>
          <Grid item>
            <a
              href="https://bluehouseis.zohodesk.eu/portal/en/community/guestforum"
              target="_blank"
              rel="noreferrer"
              className={classes.highlightedColor}
            >
              <p className={classes.sliderLink}>
                <WithTransLate text="Forum" />
              </p>
            </a>
          </Grid>
        </Grid>

        <Grid
          component={RouterLink}
          onClick={() => navigateAndScroll("MAP")}
          to="/#MAP"
          container
          item
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
          className={classes.highlightedColor}
        >
          <Grid item>
            <img className={classes.sliderIconss} src={Location} alt="Slider Location" />
          </Grid>
          <Grid item>
            <p className={classes.sliderLink}>
              <WithTransLate text="Map" />
            </p>
          </Grid>
        </Grid>
      </Grid>

      {/* CONTACT BLOCK */}
      <Grid container direction="column" className={classes.contactus}>
        <p className={classes.sliderTitle2}>
          <WithTransLate text="Contact us" />
        </p>
        <div className={classes.groupIcons}>
          <a
            onClick={scroll}
            href="https://www.instagram.com/bluehousebb/"
            target="_blank"
            rel="noreferrer"
          >
            <img className={classes.socialIcons} src={Instagram} alt="Slider Instagram" />
          </a>
          <a
            onClick={scroll}
            href="https://www.facebook.com/bluehouseiceland"
            target="_blank"
            rel="noreferrer"
          >
            <img className={classes.socialIcons} src={Facebook} alt="Slider Facebook" />
          </a>
          <a
            onClick={scroll}
            href="https://api.whatsapp.com/send?phone=3547756480&text=&source=&data="
            target="_blank"
            rel="noreferrer"
          >
            <img className={classes.socialIcons} src={Whatsapp} alt="Slider Whatsapp" />
          </a>
        </div>
        <Divider className={classes.horizontalLine} />
        <p className={classes.sliderInfo}>Blue House B&amp;B</p>
        <a
          onClick={scroll}
          href="mailto:info@bluehouse.is"
          target="_blank"
          rel="noreferrer"
          className={classes.highlightedColor}
        >
          <p className={classes.sliderInfo}>info@bluehouse.is</p>
        </a>
        <a onClick={scroll} href="tel:+3547756480">
          <p className={classes.sliderInfo}>+354 775 6480</p>
        </a>
      </Grid>
    </>
  );
}

export default React.memo(SideNavbarContent);
