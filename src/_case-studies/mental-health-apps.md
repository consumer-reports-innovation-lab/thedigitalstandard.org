---
evaluationName: Mental Health Apps
case_study_status_understanding: Under development
lead_organization: Consumer Reports
featured_image: /uploads/Screen Shot 2020-12-15 at 12.20.08 PM.png
timeline:
  first_test_date: 2020-08-01 00:00:00
  latest_update_date: 2020-12-17 00:00:00
sections:
  problem: true
  process: true
  impact: true
  who: false
release: v.1.2.1
areas:
  - Data Security
  - Access and Control
  - Data Use and Sharing
  - Overreach - Collecting Too Much Data
  - Privacy Policy & Terms of Service
  - Transparency
---

{% contentfor problem %}

<div class="editable mt-3">

Sensitive data collection: The mental health app industry was documented as a growing industry with an expected revenue of $3.9 billion by 2027. In parallel to this market growth, COVID-19 triggered immense social, financial and economic impacts which has negatively affected many people’s mental health and created barriers for access to help regarding mental illness and depression. The pandemic has highlighted that suicide and self-harm tips are on the rise due to new social distancing norms and exposed disparities in the U.S. mental health system, reported the Center for American Progress.

Damaging impacts on people’s lives: Mental health applications collect sensitive health information that can create damaging, irreversible impacts on individuals including social stigmatization and barriers to access or future opportunities. People with mental health disabilities face “disproportionately high rates of poverty”, “housing and employment discrimination”, and criminalization. They can include sharing data around topics such as anxiety disorders, depression bipolar disorders, eating disorders, and post-traumatic stress disorders. 

Data leaks: In addition to rising harms with communities of color and youth, there are documented data leaks with mental health applications. Investigative journalists have highlighted issues around excessive data sharing due to flawed business models with the argument that apps can either sell subscriptions to services or sell data. Some have called for improved regulation on these apps, marketed to people with anxiety, autism and depression. Other research highlighted how “the majority of the top-ranked mental health apps for depression and smoking cessation” share user data without disclosing the practice in privacy policies.


</div>

{% endcontentfor %}

{% contentfor process %}

<div class="editable mt-3">Add details...</div>

{% endcontentfor %}

{% contentfor impact %}

<div class="editable mt-3">Add details...


<br /><br /><br /><br />






<!-- =============================================================== -->
<!-- ========================== chart start ======================== -->
<!-- =============================================================== -->

<style>

/* -------------- full chart -------------- */

#fullChart {
  position: relative;
  display: inline-block;
  padding: 0px;
  margin: 0px;
  width: 100%;
  max-width: 900px;
  font-family: sofia-pro,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}

/* -------------- chart headline -------------- */

.chartHeadline {
  position: relative;
  display: inline-block;
  width: 100%;
  font-family: sofia-pro,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
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
  min-height: 79px;
  border-bottom: dashed 1px #ccc;
}

.chartQuestion {
  position: relative;
  display: inline-block;
  font-family: sofia-pro,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
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
  height: 67px;
  font-family: sofia-pro,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
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
  font-family: sofia-pro,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
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
  font-family: sofia-pro,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
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
  font-family: sofia-pro,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
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
  font-family: sofia-pro,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 15px;
  right: 15px;
  top: 14px;
  height: 40px;
  text-align: right;
  cursor: pointer;
  color: #000;
}

#chartModalText {
  font-family: sofia-pro,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  padding: 60px 50px 50px 50px;
  font-size: 18px;
  line-height: 22px;
  text-align: left;
}

#chartModalText a {
  font-family: sofia-pro,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
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


@media only screen and (max-width: 1200px) {
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

chartEntry[0] = [0,0,'no','There were no third-party names related to data sharing present in the privacy policy. ','https://www.7cups.com/Documents/PrivacyPolicy'];
chartEntry[1] = [0,1,'no','The CCPA disclosures for California residents list the types of third parties, but no specific third-parties are listed.','https://www.betterhelp.com/privacy/'];
chartEntry[2] = [0,2,'yes','In the privacy policy, the third-party names shared are Firebase Crashlytics and Remote Config, Mailgun, OneSignal, and Branch Metrics.','https://mymoodpath.com/en/privacy-policy/'];
chartEntry[3] = [0,3,'yes','In the privacy policy, the third-party names shared are Google Analytics and Apple Healthkit.','https://www.sanityandself.com/privacy/'];
chartEntry[4] = [0,4,'no','There were no third-party names related to data sharing present in the privacy policy.','https://www.talkspace.com/public/privacy-policy'];
chartEntry[5] = [0,5,'yes','In the privacy policy, the third-party names shared are Google Analytics, Facebook Anayltics, Firebase, and Branch.io.','https://beta.touchkin.com/privatepolicy.html'];
chartEntry[6] = [0,6,'no','During our test window, the Android App was removed from the Play store. The results summarized here are from Version 8.04.000, updated July 28, 2020. This legacy app still functions for people who have a copy on their phone.','https://www.youper.ai/privacy-policy'];
chartEntry[7] = [1,0,'yes','The terms of service mention third-party cookies, but both static and dynamic analysis did not show any calls to third-parties. It is unclear if the company is reserving the right to use third-parties in the future, or if its terms intentionally do not align with their service.','https://www.7cups.com/Documents/PrivacyPolicy'];
chartEntry[8] = [1,1,'no','Static analysis of BetterHelp&apos;s android app identified these third parties: AppsFlyer, Facebook Login, Facebook Places, Facebook Share, Google Analytics, Google Firebase Analytics, MixPanel.','https://www.betterhelp.com/privacy/'];
chartEntry[9] = [1,2,'yes','This service clearly defines the third-parties who get data.','https://mymoodpath.com/en/privacy-policy/'];
chartEntry[10] = [1,3,'no','The privacy policy does not provide details on third-parties, but static analysis showed references to these third party services: AppsFlyer, Facebook Analytics, Facebook Login, Facebook Places, Facebook Share, Google AdMob, Google CrashLytics, Google Firebase Analytics, Instabug, and MixPanel.','https://www.sanityandself.com/privacy/'];
chartEntry[11] = [1,4,'no','The privacy policy does not mention several third-parties we observed during dynamic analysis, including Firebase Remote Configuration, Mixpanel, AppsFlyer, and Braze.','https://www.talkspace.com/public/privacy-policy'];
chartEntry[12] = [1,5,'no','OneSignal is not listed in the privacy policy, yet OneSignal received location data during dynamic analysis. ','https://beta.touchkin.com/privatepolicy.html'];
chartEntry[13] = [1,6,'no','Static analysis identified these trackers; they were not explictly referenced in the privacy policy: Adjust, Google AdMob, Google Analytics, Google CrashLytics, Google Firebase Analytics, Google Tag Manager, and MixPanel.','https://www.youper.ai/privacy-policy'];
chartEntry[14] = [2,0,'no','The terms state that a user may have the right to delete personal information "in certain situations" but the terms do not guarantee that all users have that right. In addition, the terms state that data will be retained if retention is permitted by law.','https://www.7cups.com/Documents/PrivacyPolicy'];
chartEntry[15] = [2,1,'no','According to the terms, California residents can request deletion of data, but the terms do not guarantee that any requests will be respected.','https://www.betterhelp.com/privacy/'];
chartEntry[16] = [2,2,'yes','The policies define the right to delete your data.','https://mymoodpath.com/en/privacy-policy/'];
chartEntry[17] = [2,3,'no','Any rights to deletion appear to be tied to California residency, or for people under the age of 13.','https://www.sanityandself.com/privacy/'];
chartEntry[18] = [2,4,'no','The ability to cancel an account is implied, but not guaranteed, in the terms. The terms also define that people to whom GDPR applies might have the right to be forgotten, but that it might conflict with medical records retention requirements.','https://www.talkspace.com/public/privacy-policy'];
chartEntry[19] = [2,5,'yes','The terms contain language that describes a "Right to be forgotten" and implies that the ability to access that right is exposed in the app or service.','https://beta.touchkin.com/privatepolicy.html'];
chartEntry[20] = [2,6,'yes','The policies define a right to delete your data.','https://www.youper.ai/privacy-policy'];
chartEntry[21] = [3,0,'no','There is no option for deleting data, only "Start Self-Care Break" and "Deactivate Account" via desktop. We did not find an option to delete data via the mobile app. ','https://www.7cups.com/Documents/PrivacyPolicy'];
chartEntry[22] = [3,1,'yes','BetterHelp allows users to "request erasure of personal data." This action, which also deletes a user&apos;s account, is noted as permanent and cannot be reversed. The user will also receive a confirmation email that the request was processed.','https://www.betterhelp.com/privacy/'];
chartEntry[23] = [3,2,'yes','We found the option to delete on the mobile app but not via the desktop. The option allows you to "delete all stored data" which, means it will be "deleted irretrievably from your device and the server." The user can also send MindDoc an email to do this.','https://mymoodpath.com/en/privacy-policy/'];
chartEntry[24] = [3,3,'yes','While the privacy policy limits deletion to California residents under CCPA, the app appears to allow people outside the state to delete their account. Our testing indicates it will work.','https://www.sanityandself.com/privacy/'];
chartEntry[25] = [3,4,'no','We were unable to find any delete data options through the mobile or desktop user interface. ','https://www.talkspace.com/public/privacy-policy'];
chartEntry[26] = [3,5,'no','We were unable to find any delete data options through the mobile or desktop user interface. ','https://beta.touchkin.com/privatepolicy.html'];
chartEntry[27] = [3,6,'yes','Users can delete their data by opening the app, clicking on the “Me” bottom menu item, clicking on the gear icon (top right corner), then clicking “Delete my account.” To confirm their request, enter the account password. This will "irrevocably delete" their data. ','https://www.youper.ai/privacy-policy'];
chartEntry[28] = [4,0,'no','We did not find evidence of any permissions or notifications to inform users of research. ','https://www.7cups.com/Documents/PrivacyPolicy'];
chartEntry[29] = [4,1,'unclear','The terms do not guarantee the company will ask for consent before using data for research purposes. However, according to BetterHelp spokesperson Alon Matas, "Whenever a member&apos;s information would be used for research purposes this would be done with permission."','https://www.betterhelp.com/privacy/'];
chartEntry[30] = [4,2,'no','Through the AI chat, MindDoc asks the user to agree to "processing of [your] data." It is not clear for the average end user to understand that they are consenting to having their data used indefinitely for research purposes. ','https://mymoodpath.com/en/privacy-policy/'];
chartEntry[31] = [4,3,'no','We did not find evidence of any permissions or notifications to inform users of research. ','https://www.sanityandself.com/privacy/'];
chartEntry[32] = [4,4,'no','We did not find evidence of any permissions or notifications to inform users of research. ','https://www.talkspace.com/public/privacy-policy'];
chartEntry[33] = [4,5,'no','We did not find evidence of any permissions or notifications to inform users of research. ','https://beta.touchkin.com/privatepolicy.html'];
chartEntry[34] = [4,6,'yes','In the app settings, users can turn on the option to contribute to research through the "Human Mind Research" toggle. ','https://www.youper.ai/privacy-policy'];
chartEntry[35] = [5,0,'no','According to 7 Cups founder Glen Moriarty, "Since we do not use or share any information that could be used to identify a specific individual in relation to our research projects, a user’s privacy is not at issue and thus we do not process opt-out requests in relation to the use of anonymized, aggregated data."','https://www.7cups.com/Documents/PrivacyPolicy'];
chartEntry[36] = [5,1,'unclear','The terms do not describe a mechanism for users to opt-out, and the terms also state that the company may not be able to honor requests to delete user information if that data is being used for research projects. ','https://www.betterhelp.com/privacy/'];
chartEntry[37] = [5,2,'no','The terms do not describe an opt out mechanism aside from deleting all data from the service.','https://mymoodpath.com/en/privacy-policy/'];
chartEntry[38] = [5,3,'unclear','Sanity and Self&apos;s terms of service do not provide any details about opting out of its research projects. The company did not respond to Consumer Reports&apos; questions.','https://www.sanityandself.com/privacy/'];
chartEntry[39] = [5,4,'no','According to Talkspace spokesperson John Kim, users can not opt-out of research projects, but "All data used for research projects or to improve internal Talkspace therapist tools is de-identified data converted into "safe harbor" form  using our own software which removes all personal "identifiers" at a level even higher than required by HIPAA protocols."','https://www.talkspace.com/public/privacy-policy'];
chartEntry[40] = [5,5,'unclear','According to Wysa Co-Founder Ramakant Vempati, users can opt-out by contacting hello@wysa.ai or wysa@touchkin.com. However, the terms do not contain a clear description on opting out of research.','https://beta.touchkin.com/privatepolicy.html'];
chartEntry[41] = [5,6,'yes','Youper defines product improvement as research, and their terms state that users can opt out of research.','https://www.youper.ai/privacy-policy'];

// ------------------- draw chart -------------------

drawChart();

function drawChart() {

  // create html
  var chartHTML = "";

  // add modal
  chartHTML += "<div id='chartBlocker'></div><div id='chartModal'><div id='chartModalClose' onclick=\"hideModal()\">CLOSE</div><div id='chartModalText'></div></div>";

  /// headline
  chartHTML += "<div class='chartHeadline'>Mental Health Apps: Evaluation of Privacy Practices</div>";

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

<!-- =============================================================== -->
<!-- =========================== chart end ========================= -->
<!-- =============================================================== -->





</div>

{% endcontentfor %}

{% contentfor mapping %}

<div class="editable mt-3">Add details...</div>

{% endcontentfor %}

{% contentfor who %}

<div class="editable mt-3">Add details...</div>

{% endcontentfor %}
