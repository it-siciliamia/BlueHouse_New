import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { WithTransLate } from "../../translating/index";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    fontFamily: "Josefin Sans",
    marginTop: "-20px",
    flexDirection: "column",
  },
  title: {
    fontFamily: "Oblik",
    fontSize: "40px",
    fontWeight: "700",
    lineHeight: "50px",

    "@media (max-width: 743px)": {
      fontSize: "30px",
      lineHeight: "40px",
    },
  },
  titleInfo: {
    margin: "20px 0 128px 0",

    "@media (max-width: 1279px)": {
      margin: "20px 0 44px 0",
    },

    "@media (max-width: 743px)": {
      margin: "10px 0 24px 0",
    },
  },
  subtitle: {
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "28px",
    letterSpacing: "0em",
    "@media (max-width: 743px)": {
      fontSize: "18px",
      lineHeight: "28px",
    },
  },
  titleContainer: {
    fontFamily: "Josefin sans",
    display: "flex",
    flexDirection: "column",
    textAling: "left",
    justifyContent: "space-between",
    marginTop: "20px",
  },

  textClass: {
    marginTop: "5px",
    fontSize: "18px",
    lineHeight: "24px",
    fontWeight: 300,
    letterSpacing: "0em",
    "@media (max-width: 743px)": {
      fontSize: "16px",
      lineHeight: "22px",
    },
  },

  articleWrapper: {
    marginBottom: "44px",
  },
  "@media (max-width: 743px)": {
    marginBottom: "24px",
  },

  articleTitle: {
    marginBottom: "20px",
    fontSize: "28px",
    fontWeight: 600,
    lineHeight: "30px",
    "@media (max-width: 743px)": {
      fontSize: "24px",
      lineHeight: "30px",
    },
  },

  definitionList: {
    paddingLeft: "15px",

    "& li": {
      paddingBottom: "10px",
    },
    "& li:last-child": {
      paddingBottom: 0,
    }
  },

  definition: {
    fontWeight: 600,
  },

  link: {
    color: "#3b5998",
    fontWeight: 400,
    textDecoration: "underline",
  },

  additionSubtitle: {
    marginTop: "5px",
    paddingLeft: "10px",
    fontSize: "18px",
    lineHeight: "24px",
    fontWeight: 600,
    letterSpacing: "0em",
    "@media (max-width: 743px)": {
      fontSize: "16px",
      lineHeight: "22px",
    },
  },

  subtitle2: {
    marginBottom: "20px",
  },

  personalDataList: {
    paddingTop: "8px",
    paddingLeft: "25px",
  },

  collectingAndUsingItem: {
    marginBottom: "30px",
  },
  typesOfDataItem: {},
  paddingList: {
    paddingLeft: "25px",
  },
  cookiesText: {
    marginTop: 0,
  },
  cookies: {
    fontWeight: 400,
    marginBottom: 0,
    paddingLeft: 0,
  },
  functionalityCookiesList: {
    paddingLeft: 0,
  },
  marginBottom: {
    marginBottom: 0,
  },
}));

function Subtitle({ title, text }) {
  const { subtitle, textClass, titleContainer } = useStyles();
  return (
    <Box className={titleContainer}>
      <h3 className={subtitle}>
        <WithTransLate text={title} />
      </h3>
      <p className={textClass}>
        <WithTransLate text={text} />
      </p>
    </Box>
  );
}

export default function Privacy() {
  const {
    root,
    title,
    textClass,
    titleInfo,
    articleWrapper,
    articleTitle,
    definitionList,
    definition,
    link,
    subtitle,
    additionSubtitle,
    subtitle2,
    personalDataList,
    collectingAndUsingItem,
    typesOfDataItem,
    paddingList,
    cookies,
    functionalityCookiesList,
    cookiesText,
    marginBottom,
  } = useStyles();
  return (
    <Box className={root}>
      <h1 className={title}>
        <WithTransLate text="IMPRINT & PRIVACY POLICY" />
      </h1>

      <div className={titleInfo}>
        <p className={textClass}>
          <WithTransLate text="Last updated: June 06, 2022" />
        </p>

        <p className={textClass}>
          <WithTransLate text="This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You." />
        </p>

        <p className={textClass}>
          <WithTransLate text="We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy." />
        </p>
      </div>

      <div className={articleWrapper}>
        <h2 className={articleTitle}>
          <WithTransLate text="I. Interpretation and Definitions" />
        </h2>

        <Subtitle
          title="Interpretation"
          text="The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural."
        />

        <Subtitle
          title="Definitions"
          text="For the purposes of this Privacy Policy:"
        />

        <p className={textClass}>
          <ul className={definitionList}>
            <li>
              <span className={definition}>
                <WithTransLate text="Account " />
              </span>

              <span>
                <WithTransLate text="means a unique account created for You to access our Service or parts of our Service." />
              </span>
            </li>

            <li>
              <span className={definition}>
                <WithTransLate text="Company " />
              </span>

              <WithTransLate text="(referred to as either 'the Company', 'We', 'Us' or 'Our' in this Agreement) refers to " />

              <span className={definition}>
                <WithTransLate text="Blue House B&B" />
              </span>

              <WithTransLate text=", Valhusabraut 19, Seltjarnarnes, 170, Iceland and " />
              
              <span className={definition}>
                <WithTransLate text="Grotta Northern Lights apartment" />
              </span>

              <WithTransLate text=", Valhusabraut 35, Seltjarnarnes, 170, Iceland." />
            </li>

            <li>
              <span className={definition}>
                <WithTransLate text="Cookies " />
              </span>

              <WithTransLate text="are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses." />
            </li>

            <li>
              <span className={definition}>
                <WithTransLate text="Country " />
              </span>

              <WithTransLate text="refers to: Iceland" />
            </li>

            <li>
              <span className={definition}>
                <WithTransLate text="Device " />
              </span>
              
              <WithTransLate text="means any device that can access the Service such as a computer, a cell phone or a digital tablet." />
            </li>

            <li>
              <span className={definition}>
                <WithTransLate text="Personal Data " />
              </span>
              
              <WithTransLate text="is any information that relates to an identified or identifiable individual." />
            </li>

            <li>
              <span className={definition}>
                <WithTransLate text="Service " />
              </span>
              
              <WithTransLate text="refers to the Website." />
            </li>

            <li>
              <span className={definition}>
                <WithTransLate text="Service Provider " />
              </span>
              
              <WithTransLate text="means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used." />
            </li>

            <li>
              <span className={definition}>
                <WithTransLate text="Usage Data " />
              </span>
              
              <WithTransLate text="refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit)." />
            </li>

            <li>
              <span className={definition}><WithTransLate text="Website " /></span>

              <WithTransLate text="refers to Blue House B&B, accessible from" />

              <a href="https://bluehouse.is/" className={link}> https://bluehouse.is/ </a>

              <WithTransLate text="and Grotta Northern Lights apartment, accessible from" />

              <a href="https://grottanorthernlights.com/" className={link}> https://grottanorthernlights.com/ </a>
            </li>

            <li>
              <span className={definition}><WithTransLate text="You " /></span>
              <WithTransLate text="means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable." />
            </li>
          </ul>
        </p>
        
      </div>

      <div className={articleWrapper}>
        <h2 className={articleTitle}>
          <WithTransLate text="II. Collecting and Using Your Personal Data" />
        </h2>

        <div className={collectingAndUsingItem}>
          <h3 className={`${subtitle} ${subtitle2}`}>
            <WithTransLate text="A. Types of Data Collected" />
          </h3>

          <div className={typesOfDataItem}>
            <h4 className={additionSubtitle}>
              <WithTransLate text="1. Personal Data" />
            </h4>

            <p className={textClass}>
              <WithTransLate text="While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:" />

              <ul className={personalDataList}>
                <li><WithTransLate text="First name and last name" /></li>

                <li><WithTransLate text="Email address" /></li>

                <li><WithTransLate text="Address, State, Province, ZIP/Postal code, City" /></li>

                <li><WithTransLate text="Phone number" /></li>

                <li><WithTransLate text="Credit card details" /></li>
              </ul>
            </p>
          </div>

          <div className={typesOfDataItem}>
            <h4 className={additionSubtitle}>
              <WithTransLate text="2. Usage Data" />
            </h4>

            <p className={textClass}>
              <WithTransLate text="Usage Data is collected automatically when using the Service." />
            </p>

            <p className={textClass}>
              <WithTransLate text="Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data." />
            </p>

            <p className={textClass}>
              <WithTransLate text="When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data." />
            </p>

            <p className={textClass}>
              <WithTransLate text="We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device." />
            </p>
          </div>

          <div className={typesOfDataItem}>
            <h4 className={additionSubtitle}>
              <WithTransLate text="3. Comments" />
            </h4>

            <p className={textClass}>
              <WithTransLate text="When You leave comments on the site We collect the data shown in the comments form, and also Your IP address and browser agent string to help spam detection." />
            </p>

            <p className={textClass}>
              <WithTransLate text="An anonymized string created from Your email address (also called a hash) may be provided to the Gravatar service to see if You are" />
            </p>

            <p className={textClass}>
              <WithTransLate text="using the service. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of Your comment, Your profile picture is visible to the public in the context of Your comment." />
            </p>
          </div>

          <div className={typesOfDataItem}>
            <h4 className={additionSubtitle}>
              <WithTransLate text="4. Media" />
            </h4>

            <p className={textClass}>
              <WithTransLate text="If You upload images to the website, You should avoid uploading images with embedded location data (EXIF GPS) included. Any visitors to the website can download and extract any location data from images on the website." />
            </p>
          </div>

          <div className={typesOfDataItem}>
            <h4 className={additionSubtitle}>
              <WithTransLate text="5. Cookies" />
            </h4>

            <p className={textClass}>
              <WithTransLate text="We use Cookies to track the activity on Our Service and store certain information." />
            </p>

            <p className={textClass}>
              <WithTransLate text="We use both Session and Persistent Cookies for the purposes set out below:" />
            </p>

            <ul className={paddingList}>
              <li>
                <h4 className={`${additionSubtitle} ${cookies}`}>
                  <WithTransLate text="Necessary / Essential Cookies" />
                </h4>

                <p className={`${textClass} ${cookiesText}`}>
                  <WithTransLate text="These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services." />
                </p>
              </li>

              <li>
                <h4 className={`${additionSubtitle} ${cookies}`}>
                  <WithTransLate text="Cookies Policy / Notice Acceptance Cookies" />
                </h4>

                <p className={`${textClass} ${cookiesText}`}>
                  <WithTransLate text="These Cookies identify if users have accepted the use of cookies on the Website." />
                </p>
              </li>

              <li>
                <h4 className={`${additionSubtitle} ${cookies}`}>
                  <WithTransLate text="Functionality Cookies" />
                </h4>

                <p className={`${textClass} ${cookiesText} ${marginBottom}`}>
                  <WithTransLate text="These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website. For example:" />
                </p>

                <ol className={functionalityCookiesList}>
                  <li>
                    <p className={`${textClass} ${marginBottom}`}>
                      <WithTransLate text="If You leave a comment on Our Site You may opt-in to saving Your name, email address and website in cookies. These are for Your convenience so that You do not have to fill in your details again when You leave another comment. These cookies will last for one year." />
                    </p>
                  </li>

                  <li>
                    <p className={`${textClass} ${marginBottom}`}>
                      <WithTransLate text="When You log in, we will also set up several cookies to save Your login information and Your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If You select “Remember Me”, Your login will persist for two weeks. If You log ozut of Your account, the login cookies will be removed." />
                    </p>
                  </li>

                  <li>
                    <p className={textClass}>
                      <WithTransLate text="If You edit or publish an article, an additional cookie will be saved in Your browser. This cookie includes no personal data and simply indicates the post ID of the article You just edited. It expires after 1 day." />
                    </p>
                  </li>
                </ol>
              </li>
            </ul>
          </div>
        </div>

        <div className={collectingAndUsingItem}>
          <h3 className={`${subtitle} ${subtitle2}`}>
            <WithTransLate text="B. Use of Your Personal Data" />
          </h3>

          <p className={textClass}>
            <WithTransLate text="The Company may use Personal Data for the following purposes:" />
          </p>

          <ul className={paddingList}>
            <li>
              <p className={textClass}>
                <WithTransLate text="To provide and maintain our Service, including to monitor the usage of our Service." />
              </p>
            </li>

            <li>
              <p className={textClass}>
                <WithTransLate text="To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user." />
              </p>
            </li>

            <li>
              <p className={textClass}>
                <WithTransLate text="For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service." />
              </p>
            </li>

            <li>
              <p className={textClass}>
                <WithTransLate text="To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation." />
              </p>
            </li>

            <li>
              <p className={textClass}>
                <WithTransLate text="To provide You with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information." />
              </p>
            </li>

            <li>
              <p className={textClass}>
                <WithTransLate text="To manage Your requests: To attend and manage Your requests to Us." />
              </p>
            </li>

            <li>
              <p className={textClass}>
                <WithTransLate text="For business transfers: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred." />
              </p>
            </li>

            <li>
              <p className={textClass}>
                <WithTransLate text="For other purposes: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience." />
              </p>
            </li>

            <li>
              <p className={textClass}>
                <WithTransLate text="We may share Your personal information in the following situations:" />
              </p>
            </li>
            
            <li>
              <p className={textClass}>
                <WithTransLate text="With Service Providers: We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You." />
              </p>
            </li>

            <li>
              <p className={textClass}>
                <WithTransLate text="For business transfers: We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company." />
              </p>
            </li>

            <li>
              <p className={textClass}>
                <WithTransLate text="With Affiliates: We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us." />
              </p>
            </li>

            <li>
              <p className={textClass}>
                <WithTransLate text="With business partners: We may share Your information with Our business partners to offer You certain products, services or promotions." />
              </p>
            </li>

            <li>
              <p className={textClass}>
                <WithTransLate text="With other users: when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside." />
              </p>
            </li>

            <li>
              <p className={textClass}>
                <WithTransLate text="With Your consent: We may disclose Your personal information for any other purpose with Your consent." />
              </p>
            </li>
          </ul>
        </div>

        <div className={collectingAndUsingItem}>
          <h3 className={`${subtitle} ${subtitle2}`}>
            <WithTransLate text="C. Retention of Your Personal Data" />
          </h3>

          <p className={textClass}>
            <WithTransLate text="The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies." />
          </p>

          <p className={textClass}>
            <WithTransLate text="The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods." />
          </p>

          <p className={textClass}>
            <WithTransLate text="For users that register on our website (if any), We also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information." />
          </p>
        </div>

        <div className={collectingAndUsingItem}>
          <h3 className={`${subtitle} ${subtitle2}`}>
            <WithTransLate text="D. Disclosure of Your Personal Data" />
          </h3>

          <div className={typesOfDataItem}>
            <h4 className={additionSubtitle}>
              <WithTransLate text="1. Law enforcement" />
            </h4>

            <p className={textClass}>
              <WithTransLate text="Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency)." />
            </p>
          </div>

          <div className={typesOfDataItem}>
            <h4 className={additionSubtitle}>
              <WithTransLate text="2. Other legal requirements" />
            </h4>

            <p className={textClass}>
              <WithTransLate text="The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:" />

              <ul className={personalDataList}>
                <li><WithTransLate text="Comply with a legal obligation" /></li>

                <li><WithTransLate text="Protect and defend the rights or property of the Company" /></li>

                <li><WithTransLate text="Prevent or investigate possible wrongdoing in connection with the Service" /></li>

                <li><WithTransLate text="Protect the personal safety of Users of the Service or the public" /></li>

                <li><WithTransLate text="Protect against legal liability" /></li>
              </ul>
            </p>
          </div>
        </div>

        <div className={collectingAndUsingItem}>
          <h3 className={`${subtitle} ${subtitle2}`}>
            <WithTransLate text="E. Security of Your Personal Data" />
          </h3>

          <div className={typesOfDataItem}>
            <p className={textClass}>
              <WithTransLate text="The security of Your Personal Data is important to Us but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security." />
            </p>
          </div>
        </div>

        <div className={collectingAndUsingItem}>
          <h3 className={`${subtitle} ${subtitle2}`}>
            <WithTransLate text="F. Embedded content from other websites" />
          </h3>

          <div className={typesOfDataItem}>
            <p className={textClass}>
              <WithTransLate text="Articles on Our site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website." />
            </p>

            <p className={textClass}>
              <WithTransLate text="These websites may collect data about You, use cookies, embed additional third-party tracking, and monitor Your interaction with that embedded content, including tracking Your interaction with the embedded content if You have an account and are logged in to that website." />
            </p>
          </div>
        </div>
      </div>

      <div className={articleWrapper}>
        <h2 className={articleTitle}>
          <WithTransLate text="III. What rights do you have over your data?" />
        </h2>

        <div className={collectingAndUsingItem}>
          <div className={typesOfDataItem}>
            <p className={textClass}>
              <WithTransLate text="If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes." />
            </p>

            <p className={textClass}>
              <WithTransLate text="You have several rights under data-protection law in relation to how we use your personal information. You have the right, free of charge, to:" />
            </p>

            <p className={textClass}>
              <ul className={personalDataList}>
                <li><WithTransLate text="Request a copy of the personal information we hold about you in a structured, commonly used and machine readable format;" /></li>

                <li><WithTransLate text="Rectify any inaccurate personal information we hold about you;" /></li>

                <li><WithTransLate text="Withdraw your consent where we have relied upon your consent to process your information;" /></li>

                <li><WithTransLate text="Erase the personal information we hold about you subject to certain exceptions;" /></li>

                <li><WithTransLate text="Restrict processing of your personal information in certain circumstances;" /></li>

                <li><WithTransLate text="Object to our use of your personal information for our legitimate interests, for profiling and for direct marketing purposes;" /></li>

                <li><WithTransLate text="Not be subject to a decision which is based solely on automated processing where that decision produces a legal effect on you or otherwise significantly affects you. We do not make automated decisions of this nature;" /></li>

                <li><WithTransLate text="Lodge a complaint with the appropriate data-protection authority if you have concerns about how we process your personal data." /></li>
              </ul>
            </p>

            <p className={textClass}>
              <WithTransLate text="Where we need to collect personal data by law, or under the terms of a contract we have with you and you fail to provide that data when requested, we may not be able to perform the contract we have or are trying to enter into with you (for example, to provide you with goods or services). In this case, we may have to cancel a product or service you have with us but we will notify you if this is the case at the time." />
            </p>
          </div>
        </div>
      </div>

      <div className={articleWrapper}>
        <h2 className={articleTitle}>
          <WithTransLate text="IV. Changes to this Privacy Policy" />
        </h2>

        <div className={collectingAndUsingItem}>
          <div className={typesOfDataItem}>
            <p className={textClass}>
              <WithTransLate text="We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page." />
            </p>

            <p className={textClass}>
              <WithTransLate text="We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the 'Last updated' date at the top of this Privacy Policy." />
            </p>

            <p className={textClass}>
              <WithTransLate text="You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page." />
            </p>
          </div>
        </div>
      </div>

      <div className={articleWrapper}>
        <h2 className={articleTitle}>
          <WithTransLate text="V. Contact Us" />
        </h2>

        <div className={collectingAndUsingItem}>
          <div className={typesOfDataItem}>
            <p className={`${textClass} ${marginBottom}`}>
              <WithTransLate text="If you have any questions about this Privacy Policy, You can contact us:" />
            </p>

              <ul className={personalDataList}>
                <li>
                  <p className={`${textClass} ${marginBottom}`}>
                    <WithTransLate text="By email:" />

                    <a href="mailto:info@bluehouse.is" className={link}> info@bluehouse.is </a>

                    <WithTransLate text="or" />

                    <a href="mailto:info@grottanorthernlights.com" className={link}> info@grottanorthernlights.com </a>
                  </p>
                </li>

                <li>
                  <p className={`${textClass} ${marginBottom}`}>
                    <WithTransLate text="By visiting this page on our website:" />
                    
                    <a href="https://bluehouse.is/privacy-and-policy" className={link}> https://bluehouse.is/privacy-and-policy </a>
                  </p>
                </li>

                <li>
                  <p className={`${textClass} ${marginBottom}`}>
                    <WithTransLate text="By phone number: +354 775 6480" />
                  </p>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </Box>
  );
}
