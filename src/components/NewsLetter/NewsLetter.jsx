import { useEffect } from "react";
import "./Newsletter.css";
import { translateMyText, WithTransLate } from "../../translating";

const NewsletterComponent = () => {

const languageCode = localStorage.getItem("languageIndex")



  useEffect(() => {
    const onLoad = () => {
      const newsletterForm = document.querySelector(".newsletterForm");
      if (newsletterForm) {
        const firstnameInput = newsletterForm.querySelector(
          "input[name='FIRSTNAME']"
        );
        const lastnameInput = newsletterForm.querySelector(
          "input[name='LASTNAME']"
        );
        const emailInput = newsletterForm.querySelector(
          "input[name='CONTACT_EMAIL']"
        );
        const submitButton = newsletterForm.querySelector(
          "input[name='SIGNUP_SUBMIT_BUTTON']"
        );

        submitButton.setAttribute("disabled",true);

        const observe = () => {
          const firstName = firstnameInput.value;
          const lastName = lastnameInput.value;
          const email = emailInput.value;

          if (firstName && lastName && email) {
            newsletterForm.setAttribute("method", "POST");
            newsletterForm.setAttribute(
              "action",
              "https://oqix-zcmp.maillist-manage.eu/weboptin.zc"
            );
            newsletterForm.setAttribute("target", "_zcSignup");
            submitButton.removeAttribute("disabled");
          } else {
            newsletterForm.removeAttribute("method");
            newsletterForm.removeAttribute("action");
            newsletterForm.removeAttribute("target");
            submitButton.setAttribute("disabled", true);
          }

         
        };

        newsletterForm.addEventListener("change", observe);

        //   Cleanup the event listener on component unmount
        return () => {
          newsletterForm.removeEventListener("change", observe);
        };
      }
    };

    document.addEventListener("DOMContentLoaded", onLoad);

    // Cleanup the DOMContentLoaded event listener on component unmount
    return () => {
      document.removeEventListener("DOMContentLoaded", onLoad);
    };
  }, []);

  useEffect(() => {
    const newsletterForm = document.querySelector(".newsletterForm");

    const firstnameInput = newsletterForm.querySelector(
      "input[name='FIRSTNAME']"
    );
    const lastnameInput = newsletterForm.querySelector(
      "input[name='LASTNAME']"
    );
    const emailInput = newsletterForm.querySelector(
      "input[name='CONTACT_EMAIL']"
    );

     const submitButton = newsletterForm.querySelector(
       "input[name='SIGNUP_SUBMIT_BUTTON']"
     );

    const updatePlaceHolder = async () => {
      firstnameInput.placeholder = await translateMyText("First Name");
      lastnameInput.placeholder = await translateMyText("Last Name");
      emailInput.placeholder = await translateMyText("Contact Email");
      submitButton.value = await translateMyText("Sign up");
    };

    updatePlaceHolder();
  }, [languageCode]);

  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px 20px",
        gap: "20px",
      }}
    >
      <h4 className="newsletter_heading">
        <WithTransLate 
          text={" Sign up to the BH newsletter to get our updates from Iceland"}
        />
      </h4>
      <div
        dangerouslySetInnerHTML={{
          __html: `
           <script type="text/javascript" src="https://oqix-zcmp.maillist-manage.eu/js/optin.min.js" onload="setupSF('sf3zf5b83c701f03b01a7fdb0983b13eede0fa276bd78b1c824573c795f1545b492a','ZCFORMVIEW',false,'acc',false,'2')"></script>
<script type="text/javascript">
    function runOnFormSubmit_sf3zf5b83c701f03b01a7fdb0983b13eede0fa276bd78b1c824573c795f1545b492a(th){
        /*Before submit, if you want to trigger your event, "include your code here"*/

        
    };
</script>

<meta content="width=device-width,initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
<div id="sf3zf5b83c701f03b01a7fdb0983b13eede0fa276bd78b1c824573c795f1545b492a" data-type="signupform">
    <input type="hidden" id="recapTheme" value="2">
    <input type="hidden" id="isRecapIntegDone" value="false">
    <input type="hidden" id="signupFormType" value="LargeForm_Vertical">
    <div id="customForm">
        <div name="SIGNUP_PAGE" class="large_form_7_css" id="SIGNUP_PAGE">
            <div name="" changeid="" changename="">
                <div id="imgBlock" name="LOGO_DIV" logo="true"></div>
            </div>
            <br>
            <div id="signupMainDiv" name="SIGNUPFORM" changeid="SIGNUPFORM" changename="SIGNUPFORM">
                <div>
                    <div class="" style="position:relative;">
                        <div id="Zc_SignupSuccess" style="display:none;position:absolute;margin-left:4%;width:90%;background-color: white; padding: 3px; border: 3px solid rgb(194, 225, 154); margin-top: 10px;margin-bottom:10px;word-break:break-all ">
                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tbody>
                                    <tr>
                                        <td width="10%">
                                            <img class="successicon" src="https://oqix-zcmp.maillist-manage.eu/images/challangeiconenable.jpg" align="absmiddle">
                                        </td>
                                        <td>
                                            <span id="signupSuccessMsg" style="color: rgb(73, 140, 132); font-family: sans-serif; font-size: 14px;word-break:break-word"> Thank you for Signing Up</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <form class="newsletterForm"  id="zcampaignOptinForm">
                        <div id="SIGNUP_BODY_ALL" name="SIGNUP_BODY_ALL">
                            <h1 id="SIGNUP_HEADING" name="SIGNUP_HEADING" changeid="SIGNUP_MSG" changetype="SIGNUP_HEADER">
                                <span></span>
                            </h1>
                            <div  id="SIGNUP_BODY" name="SIGNUP_BODY">
                                <div>
                                    <div class="" changeid="SIGNUP_MSG" id="SIGNUP_DESCRIPTION" changetype="SIGNUP_DESCRIPTION"></div>
                                    <div id="errorMsgDiv"></div>
                                    <div class="wrapper">
                                        <div  name="fieldsdivSf" class="zcsffieldsdiv newsletter_form">
                                            <div class="zcsffield inputWrapper" fieldid="62644000000000015">
                                                <div><!-- check to mark emailid field as type email, and other mandatory fields as type required -->
                                                    <input maxlength="100" placeholder="Contact Email" name="CONTACT_EMAIL" changeitem="SIGNUP_FORM_FIELD" type="email">
                                                    <span name="SIGNUP_REQUIRED"></span>
                                                    <span style="display:none" id="dt_CONTACT_EMAIL">1,true,6,Contact Email,2</span>
                                                </div>
                                                
                                                
                                                
                                            
                                        <div></div>
                                        
                                            
                                            
                                            </div>
                                             <div class="zcsffield inputWrapper" fieldid="62644000000000021">
                                                <div><!-- check to mark emailid field as type email, and other mandatory fields as type required -->
                                                    <input maxlength="50" placeholder="Last Name" name="LASTNAME" changeitem="SIGNUP_FORM_FIELD" type="text">
                                                      <span name="SIGNUP_REQUIRED"></span>
                                                    <span style="display:none" id="dt_LASTNAME">1,false,1,Last Name,2</span>
                                                </div><div></div></div>
                                            <div  class="zcsffield inputWrapper" fieldid="62644000000000019">
                                                <div><!-- check to mark emailid field as type email, and other mandatory fields as type required -->
                                                    <input maxlength="50" 
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    name="FIRSTNAME" changeitem="SIGNUP_FORM_FIELD" type="text">
                                                      <span name="SIGNUP_REQUIRED"></span>
                                                    <span style="display:none" id="dt_FIRSTNAME">1,false,1,First Name,2</span>
                                                </div><div></div></div>
                                           
                                        </div><!-- Captcha for Signup -->
                                        <div style="padding: 10px 0px 10px 10px;display:none " id="captchaOld" name="captchaContainer">
                                            <div>
                                                <div id="captchaParent">
                                                    <img src="//campaigns.zoho.eu/images/refresh_icon.png" onclick="loadCaptcha('https://campaigns.zoho.eu/campaigns/CaptchaVerify.zc?mode=generate',this,'#sf3zf5b83c701f03b01a7fdb0983b13eede0fa276bd78b1c824573c795f1545b492a');" id="relCaptcha">
                                                    <div id="captchaDiv" captcha="true" name=""></div>
                                                    <input placeholder="Captcha" id="captchaText" name="captchaText" changeitem="SIGNUP_FORM_FIELD" maxlength="100" type="text">
                                                    <span name="SIGNUP_REQUIRED" id="capRequired">*</span>
                                                </div>
                                            </div><div></div></div>
                                        <input type="hidden" id="secretid" value="6LdNeDUUAAAAAG5l7cJfv1AA5OKLslkrOa_xXxLs"><!-- Captcha for Signup End--><!-- Other Lists Subscription Start--><div></div>
                                        <div id="REQUIRED_FIELD_TEXT" changetype="REQUIRED_FIELD_TEXT" name="SIGNUP_REQUIRED"></div>
                                        <div class="inputWrapper">
                                            <input class="newsletter_button" type="button" action="Save" id="zcWebOptin" name="SIGNUP_SUBMIT_BUTTON" changetype="SIGNUP_SUBMIT_BUTTON_TEXT" value="Sign Up">
                                        </div>
                                    </div>
                                </div>
                            </div><!-- Do not edit the below Zoho Campaigns hidden tags -->
                            <input type="hidden" id="fieldBorder" value="rgb(238, 238, 238)">
                            <input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW" onload="">
                            <input type="hidden" name="viewFrom" id="viewFrom" value="URL_ACTION">
                            <input type="hidden" id="submitType" name="submitType" value="optinCustomView">
                            <input type="hidden" id="lD" name="lD" value="1de8e62d757f2bf">
                            <input type="hidden" name="emailReportId" id="emailReportId" value="">
                            <input type="hidden" name="zx" id="cmpZuid" value="14acf032a4">
                            <input type="hidden" name="zcvers" value="2.0">
                            <input type="hidden" name="oldListIds" id="allCheckedListIds" value="">
                            <input type="hidden" id="mode" name="mode" value="OptinCreateView">
                            <input type="hidden" id="zcld" name="zcld" value="1de8e62d757f2bf">
                            <input type="hidden" id="zctd" name="zctd" value="1de8e62d74f99d9">
                            <input type="hidden" id="document_domain" value="campaigns.zoho.eu">
                            <input type="hidden" id="zc_Url" value="oqix-zcmp.maillist-manage.eu">
                            <input type="hidden" id="new_optin_response_in" value="0">
                            <input type="hidden" id="duplicate_optin_response_in" value="0">
                            <input type="hidden" id="zc_formIx" name="zc_formIx" value="3zf5b83c701f03b01a7fdb0983b13eede0fa276bd78b1c824573c795f1545b492a"><!-- End of the campaigns hidden tags --></div>
                    </form>
                </div>
            </div>
        </div>
        <input type="hidden" id="isCaptchaNeeded" value="false">
        <input type="hidden" id="superAdminCap" value="0">
        <img src="https://oqix-zcmp.maillist-manage.eu/images/spacer.gif" onload="referenceSetter(this)" id="refImage" style="display:none;">
    </div>
</div>
<div id="zcOptinOverLay" oncontextmenu="return false" style="display:none;text-align: center; background-color: rgb(0, 0, 0); opacity: 0.5; z-index: 100; position: fixed; width: 100%; top: 0px; left: 0px; height: 988px;"></div>
<div id="zcOptinSuccessPopup" style="display:none;z-index: 9999;width: 800px; height: 40%;top: 84px;position: fixed; left: 26%;background-color: #FFFFFF;border-color: #E6E6E6; border-style: solid; border-width: 1px; box-shadow: 0 1px 10px #424242;padding: 35px;">
    <span style="position: absolute;top: -16px;right:-14px;z-index:99999;cursor: pointer;" id="closeSuccess">
        <img src="https://oqix-zcmp.maillist-manage.eu/images/videoclose.png">
    </span>
    <div id="zcOptinSuccessPanel"></div>
</div>
          `,
        }}
      />
    </div>
  );
};

export default NewsletterComponent;
