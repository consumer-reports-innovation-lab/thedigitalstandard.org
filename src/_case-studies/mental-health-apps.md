---
evaluationName: Mental Health Apps
case_study_status_understanding: Well understood
lead_organization: Consumer Reports
featured_image: /uploads/connected-cameras.jpg
timeline:
  first_test_date: 2019-12-03 00:00:00
  latest_update_date: 2020-06-09 00:00:00
sections:
  problem: true
  process: true
  impact: true
  who_was_involved: false
release: v1.2.1
areas:
  - Build Quality
  - Data Security
  - Access and Control
  - Data Use and Sharing
  - Data retention
  - Overreach - Collecting Too Much Data
  - Privacy Policy & Terms of Service
  - Transparency
---
{% contentfor problem %}
  <div class="editable mt-3">
    <h2>Sensitive Data Collection</h2><p>Connected devices such as cameras are
    increasingly being used in the private sphere of the home and collect highly
    sensitive information including voice and visual recordings of the home and
    the area immediately around a private residence. However, as multiple
    reports of connected camera hacking and incidents of unauthorized access
    have shown, many of these products are built without adequate
    security.</p>


<style>

/* -------------- full chart -------------- */

#fullChart {
  position: relative;
  display: inline-block;
  padding: 0px;
  margin: 0px;
  width: 100%;
  max-width: 900px;
  font-family: 'Averta W01 Regular', Averta, Helvetica, Arial, sans-serif;
}

/* -------------- chart headline -------------- */

.chartHeadline {
  position: relative;
  display: inline-block;
  width: 100%;
  font-family: 'Averta W01 Regular', Averta, Helvetica, Arial, sans-serif;
  text-align: left;
  font-size: 35px;
  line-height: 38px;
  padding-bottom: 30px;
}

/* -------------- chart cells -------------- */

.chartRow {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
  min-height: 60px;
  border-bottom: dashed 1px #ccc;
}

.chartQuestion {
  position: relative;
  display: inline-block;
  font-family: 'Averta W01 Regular', Averta, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 16px;
  width: 30%;
  text-align: left;
  vertical-align: middle;
}

.chartCell {
  position: relative;
  display: inline-block;
  width: 10%;
  height: 54px;
  font-family: 'Averta W01 Regular', Averta, Helvetica, Arial, sans-serif;
  font-size: 30px;
  padding-top: 15px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
}

.chartCell:hover {
  background-color: #ddd;
  border-radius: 10px;
}

.chartHeaderCell {
  position: relative;
  display: inline-block;
  width: 10%;
  height: 30px;
  font-family: 'Averta W01 Regular', Averta, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
}

/* -------------- chart symbols -------------- */

.chartDot {
  position: relative;
  display: inline-block;
  margin-top: 3px;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: #00ae4d;
}

.chartX {
  position: relative;
  display: inline-block;
  margin-top: 8px;
  width: 20px;
  height: 20px;
}

.chartX:before, .chartX:after {
  content:'';
  position: absolute;
  left: 0px;
  width: 20px;
  height: 2px;
  background-color: #555;
  top: 10px;
  transform:rotate(45deg);
}

.chartX:after {
    transform:rotate(-45deg);
}

.chartUnknown {
  font-family: 'Averta W01 Regular', Averta, Helvetica, Arial, sans-serif;
  padding-top: 7px;
  font-size: 26px;
  line-height: 26px;
  color: #ccc;
}

/* -------------- chart key -------------- */

.chartKey {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  padding-top: 30px;
  padding-bottom: 80px;
  width: 100%;
  height: 32px;
  text-align: right;
  font-family: 'Averta W01 Regular', Averta, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 16px;
  color: #777;
}

.chartKeyEntry {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  height: 30px;
  margin-top: -8px;
  margin-left: 20px;
  margin-right: 7px;
}

/* -------------- chart modal -------------- */

#chartModal {
  position: absolute;
  display: none;
  top: 30%;
  left: 10%;
  width: 80%;
  text-align: center;
  background-color: #ddd;
  z-index: 20;
}

#chartModalClose {
  position: absolute;
  font-family: 'Averta W01 Regular', Averta, Helvetica, Arial, sans-serif;
  font-size: 15px;
  right: 15px;
  top: 14px;
  height: 40px;
  text-align: right;
  cursor: pointer;
  color: #000;
}

#chartModalText {
  font-family: 'Averta W01 Regular', Averta, Helvetica, Arial, sans-serif;
  padding: 60px 50px 50px 50px;
  font-size: 18px;
  line-height: 22px;
  text-align: left;
}

#chartModalText a {
  font-family: 'Averta W01 Regular', Averta, Helvetica, Arial, sans-serif;
  padding: top;
  font-size: 18px;
  line-height: 40px;
  color: #00ae4d;
}

#chartModalClose:hover {
  opacity: 0.5;
}

#chartBlocker {
  position: absolute;
  display: none;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 10;
  opacity: 0.6;
}


@media only screen and (max-width: 850px) {
  .chartHeadline { text-align: center; }
  .chartHeaderCell { transform: rotate(-90deg); text-align: left; margin-left: 27px; margin-right: -27px; height: 75px; font-size: 15px; line-height: 18px; }

}

</style>

<div id='fullChart'></div>

<script>

// ------------------- chart data -------------------

var chartQuestions = ["Is it clear who your data is shared with in the privacy policy?","Does the app share data ONLY with companies named in the privacy policy?","Does the policy define a right to delete your data?","Can you easily delete your data through the app?","Does the app ask permission before using your data for research?","Can you opt-out of research?"];
var chartPlatforms = ["7 Cups","BetterHelp","MindDoc","Sanity & Self","Talkspace","Wysa","Youper"];
var chartEntry = new Array();

chartEntry[0] = [0,0,'no','',''];
chartEntry[1] = [0,1,'no','The CCPA disclosures for California residents list the types of third parties, but no specific third parties are listed.','https://www.betterhelp.com/privacy/'];
chartEntry[2] = [0,2,'yes','Firebase Crashlytics and Remote Config, Mailgun, OneSignal, and Branch Metrics','https://mymoodpath.com/en/privacy-policy/'];
chartEntry[3] = [0,3,'yes','Google Analytics and Apple Healthkit','https://www.sanityandself.com/privacy/'];
chartEntry[4] = [0,4,'no','',''];
chartEntry[5] = [0,5,'yes','Google Analytics, Facebook Anayltics, Firebase, and Branch.io','https://beta.touchkin.com/privatepolicy.html'];
chartEntry[6] = [0,6,'no','During our test window, the Android App was removed from the Play store. The results summarized here are from  Version 8.04.000, updated July 28, 2020. This legacy app still functions for people who have a copy on their phone.','https://www.youper.ai/privacy-policy'];
chartEntry[7] = [1,0,'yes','The terms of service mention third party cookies, but both static and dynamic analysis did not show any calls to third parties. It is unclear if the company is reserving the right to use third parties in the future, or if their terms intentionally do not align with their service.','https://www.7cups.com/Documents/PrivacyPolicy'];
chartEntry[8] = [1,1,'no','Static analysis of BetterHelp&apos;s android app identified these third parties: AppsFlyer, Facebook Login, Facebook Places, Facebook Share, Google Analytics, Google Firebase Analytics, MixPanel','https://www.betterhelp.com/privacy/'];
chartEntry[9] = [1,2,'yes','',''];
chartEntry[10] = [1,3,'no','AppsFlyer: https://reports.exodus-privacy.eu.org/trackers/12, Facebook Analytics: https://reports.exodus-privacy.eu.org/trackers/66, Facebook Login: https://reports.exodus-privacy.eu.org/trackers/67, Facebook Places: https://reports.exodus-privacy.eu.org/trackers/69, Facebook Share: https://reports.exodus-privacy.eu.org/trackers/70, Google AdMob: https://reports.exodus-privacy.eu.org/trackers/312, Google CrashLytics: https://reports.exodus-privacy.eu.org/trackers/27, Google Firebase Analytics: https://reports.exodus-privacy.eu.org/trackers/49, Instabug: https://reports.exodus-privacy.eu.org/trackers/206, MixPanel: https://reports.exodus-privacy.eu.org/trackers/118','https://www.sanityandself.com/privacy/'];
chartEntry[11] = [1,4,'no','Firebase Rempte Configuration, Mixpanel, AppsFlyer, and Braze were all contacted during dynamic analysis.','https://www.talkspace.com/public/privacy-policy'];
chartEntry[12] = [1,5,'no','OneSignal is not listed in the privacy policy, yet OneSignal received location data during dynamic analysis. ','https://beta.touchkin.com/privatepolicy.html'];
chartEntry[13] = [1,6,'no','Static analysis identified these trackers:  Adjust, Google AdMob, Google Analytics, Google CrashLytics, Google Firebase Analytics, Google Tag Manager, and MixPanel.','https://www.youper.ai/privacy-policy'];
chartEntry[14] = [2,0,'no','The terms state that a user may have the right to delete Personal Information "in certain situations" but the terms do not guarantee that all users have that right. In addition, the terms state that data will be retained if retention is permitted by law.','https://www.7cups.com/Documents/PrivacyPolicy'];
chartEntry[15] = [2,1,'no','',''];
chartEntry[16] = [2,2,'yes','',''];
chartEntry[17] = [2,3,'no','Any rights to deletion appear to be tied to California residency, or for people under the age of 13.','https://www.sanityandself.com/privacy/'];
chartEntry[18] = [2,4,'no','The ability to cancel an account is implied, but not guaranteed, in the terms. The terms also define that people to whom GDPR applies might have the right to be forgotten, but that it might conflict with medical records retention requirements.','https://www.talkspace.com/public/privacy-policy'];
chartEntry[19] = [2,5,'yes','Yes. The terms contain language that describe a "Right to be forgotten" and implies that the ability to access the "right to be forgotten" is exposed in the app or service.','https://beta.touchkin.com/privatepolicy.html'];
chartEntry[20] = [2,6,'yes','',''];
chartEntry[21] = [3,0,'no','There is no option for deleting data, only "Start Self-Care Break" and "Deactivate Account" via desktop. We did not find an option to delete data via the mobile app. ','https://www.7cups.com/Documents/PrivacyPolicy'];
chartEntry[22] = [3,1,'yes','',''];
chartEntry[23] = [3,2,'yes','We found the option to delete on the mobile app, but not via desktop. The option describes "delete all stored data" which means it will be"deleted irretrievably from your device and the server." The user can also send MindDoc an email to do this.','https://mymoodpath.com/en/privacy-policy/'];
chartEntry[24] = [3,3,'yes','While the privacy policy limits deletion to California residents under CCPA, the app appears to allow people outside California to delete their account. Our testing indicates that account deletion works for people outside CA.','https://www.sanityandself.com/privacy/'];
chartEntry[25] = [3,4,'no','We were unable to find any delete data options through the mobile or desktop user interface. ','https://www.talkspace.com/public/privacy-policy'];
chartEntry[26] = [3,5,'no','We were unable to find any delete data options through the mobile or desktop user interface. ','https://beta.touchkin.com/privatepolicy.html'];
chartEntry[27] = [3,6,'yes','Through mobile app: "You can delete all your data by opening the app, clicking on the “Me” bottom menu item, clicking on the gear icon (top right corner), then clicking “Delete my account”. To confirm and verify your request, we ask you to enter your account password. This will irrevocably delete all your data from our databases."','https://www.youper.ai/privacy-policy'];
chartEntry[28] = [4,0,'no','',''];
chartEntry[29] = [4,1,'no','We did not find evidence of any permissions or notifications to inform users of research. ','https://www.betterhelp.com/privacy/'];
chartEntry[30] = [4,2,'yes','Through the AI chat, MindDoc asks the user to agree to "processing of [your] data." It is not clear if the average end user would understand that they are consenting to having their data used indefinitely for research purposes.','https://mymoodpath.com/en/privacy-policy/'];
chartEntry[31] = [4,3,'no','We did not find evidence of any permissions or notifications to inform users of research. ','https://www.sanityandself.com/privacy/'];
chartEntry[32] = [4,4,'no','We did not find evidence of any permissions or notifications to inform users of research. ','https://www.talkspace.com/public/privacy-policy'];
chartEntry[33] = [4,5,'no','We did not find evidence of any permissions or notifications to inform users of research. ','https://beta.touchkin.com/privatepolicy.html'];
chartEntry[34] = [4,6,'yes','In the app settings, users can turn on the option to contribute to research through the "Human Mind Research" toggle. ','https://www.youper.ai/privacy-policy'];
chartEntry[35] = [5,0,'no','According to 7cups spokesperson Glen Moriarty, "Since we do not use or share any information that could be used to identify a specific individual in relation to our research projects, a user’s privacy is not at issue and thus we do not process opt-out requests in relation to the use of anonymized, aggregated data."','https://www.7cups.com/Documents/PrivacyPolicy'];
chartEntry[36] = [5,1,'yes','According to Betterhelp spokesperson Alon Matas, "Whenever a member&apos;s information would be used for research purposes this would be done with permission."','https://www.betterhelp.com/privacy/'];
chartEntry[37] = [5,2,'no','The terms do not describe an opt out mechanism aside from deleting all data from the service.','https://mymoodpath.com/en/privacy-policy/'];
chartEntry[38] = [5,3,'unclear','Sanity and Self&apos;s terms of service do not provide any details about opting out of its research projects. The company did not respond to Consumer Reports&apos; questions.','https://www.sanityandself.com/privacy/'];
chartEntry[39] = [5,4,'no','According to Talkspace spokesperson John Kim, users can not opt-out of research projects, but "All data used for research projects or to improve internal Talkspace therapist tools is de-identified data converted into "safe harbor" form  using our own software which removes all personal "identifiers" at a level even higher than required by HIPAA protocols."','https://www.talkspace.com/public/privacy-policy'];
chartEntry[40] = [5,5,'no','According to Wysa Co-Founder Ramakant Vempati, users can opt-out by contacting hello@wysa.ai or wysa@touchkin.com. However, the terms do not contain a clear description on opting out of research.','https://beta.touchkin.com/privatepolicy.html'];
chartEntry[41] = [5,6,'yes','Youper defines product improvement as research, and their terms state that users can opt out of research.','https://www.youper.ai/privacy-policy'];


// ------------------- draw chart -------------------

drawChart();

function drawChart() {

  // create html
  var chartHTML = "";

  // add modal
  chartHTML += "<div id='chartBlocker'></div><div id='chartModal'><div id='chartModalClose' onclick=\"hideModal()\">CLOSE</div><div id='chartModalText'></div></div>";

  /// headline
  chartHTML += "<div class='chartHeadline'>Mental Health Apps Scorecard</div>";

  // header row
  chartHTML += "<div class='chartQuestion'></div>";
  for (platform = 0; platform < chartPlatforms.length; platform++) {
    chartHTML += "<div class='chartHeaderCell'>"+chartPlatforms[platform]+"</div>";
  }

  // loop through all entries
  var currentQuestion = -1;
  for (entry = 0; entry < chartEntry.length; entry++) {

    if (chartEntry[entry][0] != currentQuestion){
      if (chartEntry[entry][0] != 0){ chartHTML += "</div>"; } // not on first chart row
      chartHTML += "<div class='chartRow'>";
      currentQuestion = chartEntry[entry][0];
      chartHTML += "<div class='chartQuestion'>"+chartQuestions[chartEntry[entry][0]]+"</div>";
    }

    // chart symbol
    if (chartEntry[entry][2] == "yes"){ chartHTML += "<div class='chartCell' data='"+entry+"'><div class='chartDot'></div></div>"; }
    else if (chartEntry[entry][2] == "no"){ chartHTML += "<div class='chartCell' data='"+entry+"'><div class='chartX'></div></div>"; }
    else { chartHTML += "<div class='chartCell' data='"+entry+"'><div class='chartUnknown'>?</div></div>"; }

  }
  chartHTML += "</div>"; // end last chart row

  // draw key
  chartHTML += "<div class='chartKey'>";
  chartHTML += "<div class='chartKeyEntry'><div class='chartDot'></div></div>yes";
  chartHTML += "<div class='chartKeyEntry'><div class='chartX'></div></div>no";
  chartHTML += "<div class='chartKeyEntry'><div class='chartUnknown'>?</div></div>unclear";
  chartHTML += "</div>";

  // add html to dom
  document.getElementById("fullChart").innerHTML = chartHTML;

}

// -------------- chart listeners --------------

var chartCells = document.getElementsByClassName("chartCell");
for (var cellNum = 0; cellNum < chartCells.length; cellNum++) {
  chartCells[cellNum].addEventListener('click', showModal);
}

// -------------- show popup box --------------

function showModal() {

  var cellCode = this.getAttribute("data");
  var cellText = chartEntry[cellCode][3];
  var cellLink = "<a href='"+chartEntry[cellCode][4]+"' target='_blank'>See Full Policy</a>";

  if (cellText != ""){
    document.getElementById('chartModal').style.display = "block";
    document.getElementById('chartBlocker').style.display = "block";
    document.getElementById('chartModalText').innerHTML = cellText+"<br />"+cellLink;
  }

};

// -------------- chart modal --------------

function hideModal() {
  document.getElementById('chartModal').style.display = "none";
  document.getElementById('chartBlocker').style.display = "none";
};


</script>


  </div>
{% endcontentfor %}

{% contentfor process %}
  <div class="editable mt-3">
    <h2>Full Testing</h2>
    <p>Across 14 home security connected cameras, Consumer
      Reports performed a round of full testing across these devices in accordance
      with criteria/indicators of the <a target="_blank" rel="noopener"
      href="https://www.thedigitalstandard.org/">Digital Standard</a>. The result
      of this testing was <a target="_blank" rel="noopener"
      href="https://www.consumerreports.org/products/home-security-cameras-200099/wireless-security-cameras-200101/view2/">a
      set of Consumer Reports ratings</a> for home security cameras available to
      consumers (image left) which incorporated data privacy and security
      categories. Consumer Reports also <a target="_blank" rel="noopener"
      href="https://www.consumerreports.org/wireless-security-cameras/wyze-and-guardzilla-home-security-cameras-have-security-risks/">reviewed
      cameras in 2019</a>.
    </p>
  </div>
{% endcontentfor %}

{% contentfor impact %}
  <div class="editable mt-3">
    <h2>Created campaign strategy&nbsp;</h2><p>In order to organize our efforts,
    the Consumer Reports team strategized a campaign by doing research on
    reported hacking incidents in the month of December 2019, reviewed the IP
    camera testing report from August 2019 and assembled a list of company
    contacts at the 25 manufacturers of connected camera products we have
    reviewed.&nbsp;</p><h2>Wrote letter to manufacturers:</h2><p>In January
    2020, Consumer Reports <a target="_blank" rel="noopener"
    href="https://advocacy.consumerreports.org/press_release/consumer-reports-urges-ring-wyze-guardzilla-and-others-to-raise-security-and-privacy-standards-for-connected-cameras/">drafted
    and sent letters to the 25 manufacturers</a> of connected cameras, smart
    doorbells, and DIY security products, since all of these products make use
    of cameras that collect sensitive information within and outside the home.
    &nbsp;These letters put the companies on notice that they must have
    reasonable cybersecurity measures in place in order for consumers to trust
    and use their products. Specifically, we <a target="_blank" rel="noopener"
    href="https://advocacy.consumerreports.org/wp-admin/post.php?post=54328&amp;action=edit">stated</a>:&nbsp;</p><blockquote><p><em>&ldquo;...Consumer
    Reports writes to urge your company to raise the standard of security for
    your connected camera, doorbell, or security system. We request
    clarification on the steps you are taking to prevent hacks and unauthorized
    access to these cameras and the systems that underlie them. We also want
    makers of connected devices to know that CR&rsquo;s ratings will continue to
    change to reflect the stronger data security and privacy practices we
    believe are essential for consumer protection, which could impact a
    product&rsquo;s eligibility for
    recommendation.&rdquo;</em></p></blockquote><h2>Identified 10 security
    measures</h2><p>The letters also urged the company to implement stronger
    security measures to adequately protect consumers and their privacy. These
    measures may include but are not limited to:</p><ol><li>Automatic
    firmware/software updates enabled by default;</li><li>Protection against
    credential stuffing and reuse;</li><li>Require multi-factor authentication
    and captchas in the authentication system;</li><li>Email notifications for
    users when a login occurs from a new device or a new IP
    address;&nbsp;</li><li>Require users to sign back in after changing a
    password;&nbsp;</li><li>Confirm with the user when the credentials have been
    changed;</li><li>Password creation rules that require more secure
    passwords;</li><li>Compatibility with password managers;</li><li>Increased
    protection against brute-force dictionary attacks by rate-limiting login
    attempts; and&nbsp;</li><li>Inclusion of a visible indicator (e.g., a
    prominent LED light) when cameras are active.</li></ol><h2>Engaged
    manufacturers with product improvements</h2><p>Of the 25 companies
    contacted, seven never responded to our letters or repeated emails, one
    responded by telling us about their privacy and security initiatives (but
    did not detail what security measures they implement or plan to implement),
    and one responded via a physical letter sent to our DC
    offices.</p><h2>Discovered vulnerabilities</h2><p>We tested these cameras in
    2019. From December 2019 - January 2020, we conducted a campaign to send out
    the letters to company CEOs, revisited our testing of the cameras, and then
    rescored them, which revealed new security vulnerabilities. We responsibly
    interacted with manufacturers to disclose these issues. Some of the results
    of the security and privacy tests resulted in an article: <a target="_blank"
    rel="noopener"
    href="https://www.consumerreports.org/wireless-security-cameras/wyze-and-guardzilla-home-security-cameras-have-security-risks/">Wyze
    and Guardzilla Security Cameras Have Security Risks, Consumer Reports
    Finds</a>.&nbsp;</p><h2>Designed a Consumer Reports ratings page
    warning</h2><p>In order to publicize this effort, we posted a <a
    target="_blank" rel="noopener"
    href="https://advocacy.consumerreports.org/press_release/consumer-reports-urges-ring-wyze-guardzilla-and-others-to-raise-security-and-privacy-standards-for-connected-cameras/">press
    release</a>. In addition, we created a notice (image below) to place above
    our <a target="_blank" rel="noopener"
    href="https://www.consumerreports.org/products/video-doorbells/ratings-overview/">ratings</a>
    pages to warn consumers about the security issues in these
    products.</p><h2>Offered other helpful resources: Article highlighting best
    security cameras:</h2><p>Based on these ratings, we published an article
    that highlighted <a target="_blank" rel="noopener"
    href="https://www.consumerreports.org/digital-security/how-to-use-ring-doorbell-control-center-privacy-security/">How
    to Use Ring's Control Center for Better Privacy and Security</a>, the <a
    target="_blank" rel="noopener"
    href="https://www.consumerreports.org/wireless-security-cameras/best-wireless-home-security-cameras-of-the-year/">Best
    Wireless Home Security Cameras of 2020</a>, and <a target="_blank"
    rel="noopener"
    href="https://www.consumerreports.org/cro/home-security-cameras/">CR&rsquo;s
    Home Security Camera Ratings &amp; Buying Guide</a>. In addition to these
    resources, we held a conference call presentation with the companies with
    the goal of informing them about what we heard back from companies and how
    we are giving greater weight to automatic security updates and requiring
    two-factor authentication.&nbsp;</p>
  </div>
{% endcontentfor %}

{% contentfor mapping %}
  <div class="editable mt-3">
    <p>This work incorporated several specific elements from the larger Digital
    Standard. Specifically, the comparative analysis used elements from the
    Privacy and Governance sections of the Standard:</p>
  </div>
{% endcontentfor %}


{% contentfor who %}
  <div class="editable mt-3">
    Add details...
  </div>
{% endcontentfor %}
