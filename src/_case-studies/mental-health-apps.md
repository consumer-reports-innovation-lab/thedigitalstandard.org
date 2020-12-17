---
evaluationName: Mental Health Apps
case_study_status_understanding: Under development
lead_organization: Consumer Reports
featured_image: /uploads/Cover_Square.jpg
timeline:
  first_test_date: 2020-08-01 00:00:00
  latest_update_date: 2020-12-17 00:00:00
sections:
  problem: true
  process: true
  impact: true
  who: false
problem_html: >-
  <p><strong>Mental health apps growing in popularity: </strong>&nbsp;App-based
  mental health counseling is a large and growing industry. These apps accounted
  for $587.9 million in 2018 and are expected to generate up to $3.9 billion in
  annual revenue by 2027, according to <a
  href="https://www.prnewswire.com/news-releases/mental-health-apps-market-accounted-for-us-587-9-mn-in-2018-and-is-expected-to-generate-a-revenue-of-us-3-918-40-mn-by-2027--at-a-growth-rate-of-23-7-from-2019--2027--300997559.html">Absolute
  Markets Insights</a>, a consumer demand and trends firm. Due to greater
  awareness related to the significance of mental health, U.S. and Canadian
  consumers made up the majority of the global market in
  2018.&nbsp;</p><p><strong>Increased anxiety and tumult, harms not evenly
  distributed: </strong>Recent events like the global coronavirus pandemic, the
  resulting economic crisis, and large scale protests related to the Black Lives
  Matter movement, have spotlighted rising mental health related harms with
  marginalized and vulnerable populations. And increased anxiety and upheaval
  causes both physical and psychological symptoms and <a
  href="https://www.medicalnewstoday.com/articles/322510#:~:text=Outlook,health%20conditions%2C%20such%20as%20depression">can
  be very distressing</a>. Mental health applications collect sensitive
  information that can create damaging, irreversible impacts on individuals if
  shared with third parties, including social stigmatization and additional
  barriers to future opportunities. These applications can collect data around
  topics such as anxiety disorders, depression, bipolar disorders, eating
  disorders, and post-traumatic stress disorders. Finally, the pandemic has
  exposed disparities in the U.S. mental health system, <a
  href="https://www.americanprogress.org/issues/disability/reports/2020/09/10/490221/mental-health-care-severely-inequitable-came-coronavirus-crisis/">reported&nbsp;
  the Center for American Progress</a>. People with mental health disabilities
  face &ldquo;<a
  href="https://www.samhsa.gov/data/sites/default/files/report_2720/Spotlight-2720.html">disproportionately
  high rates of poverty</a>&rdquo;, &ldquo;<a
  href="https://www.huduser.gov/portal/sites/default/files/pdf/MentalDisabilities-FinalPaper.pdf">housing
  and</a> <a
  href="https://www.huduser.gov/portal/sites/default/files/pdf/MentalDisabilities-FinalPaper.pdf">employment
  discrimination</a>&rdquo;, and <a
  href="https://journals.sagepub.com/doi/abs/10.1177/0896920511430864">criminalization</a>.&nbsp;&nbsp;</p><p><strong>Data
  leaks: </strong>In addition, there are documented data leaks with mental
  health applications. Investigative journalists have highlighted issues around
  excessive data sharing with the argument that apps<a
  href="https://www.theverge.com/2019/4/20/18508382/apps-mental-health-smoking-cessation-data-sharing-privacy-facebook-google-advertising">
  can either sell subscriptions to services or sell data</a>. Privacy concerns
  about mental health apps <a
  href="https://www.spectrumnews.org/news/mental-health-apps-highlight-need-for-regulation/">have
  highlighted the need for improved regulation</a> on these apps, marketed to
  people with anxiety, autism and depression. Other research highlighted how
  &ldquo;the majority of the top-ranked mental health apps for depression and
  smoking cessation&rdquo; share user data <a
  href="https://healthitsecurity.com/news/mental-health-apps-may-share-user-data-without-clear-privacy-policies">without
  disclosing the practice in privacy policies</a>.&nbsp;</p>
process_html: "<p><strong>Data Testing: </strong>We ran a static analysis of each Android application. We also worked with <a target=\"_blank\" rel=\"noopener\" href=\"https://www.appcensus.io/\">AppCensus</a>, a company that analyzes app behavior for privacy and security issues, to do an automated analysis of the apps. This research process involved an inspection of the following items:</p><ul><li>Permissions: What access to data and features was requested, and what was actually used?</li><li>Third Party SDKs: What third-party software is bundled with the app when a user installs it, and what role does it play in app behavior?&nbsp;</li><li>Data recipients: Which entities (companies, services, etc.) receive information from the app, and which security and privacy methods / policies do they observe or not</li><li>Personal information: What identifiers (Android ID, Advertising ID, etc.) from the phone are transmitted by the app, and where are these identifiers sent?</li><li>We used the following Android app binaries:&nbsp;<ul><li><a href=\"https://play.google.com/store/apps/details?id=com.betterhelp\">BetterHelp version 1.63</a></li><li><a href=\"https://play.google.com/store/apps/details?id=de.moodpath.android\">MindDoc version 4.2.0</a></li><li><a href=\"https://play.google.com/store/apps/details?id=cc.moov.five\">Sanity &amp; Self version 3.0.6396</a></li><li><a href=\"https://play.google.com/store/apps/details?id=com.talkspace.talkspaceapp\">Talkspace version 3.30.80</a></li><li><a href=\"https://play.google.com/store/apps/details?id=bot.touchkin\">Wysa version 2.4.1</a></li><li>Youper version 8.04.000</li><li><a href=\" https://play.google.com/store/apps/details?id=com.sevencupsoftea.app\">7 Cups version 4.6.9</a></li></ul></li></ul><p><strong>Design analysis (UX + UI):</strong> The user experience, user interface design analysis involved a manual, thorough review of all of the user-interfacing elements of the applications. More specifically, the purpose of this work is to:&nbsp;</p><ul><li>Show how the company empowers and informs users, in support of and/or beyond what they say in the documents (Terms of Service and Privacy Policy)</li><li>Understand how the app works, who this is positioned to.</li><li>Understand how privacy / security are integrated and positioned (including privacy policy and terms of service documentation), including app defaults and permissions</li><li>Identify what the core components of the application featured are in order to do more testing, where necessary.&nbsp;</li><li>Identify areas for sensitive data collection, and potentially cross reference that with app data collection and 3rd party sharing happening simultaneously.</li><li>Capture which app permissions are requested, and if/when these permissions are accessed while using the app.</li><li>We used the following iOS app versions:<ul><li>BetterHelp: iOS app version 9.7</li><li>MindDoc: iOS app version 4.2.1</li><li>Sanity &amp; Self: iOS app version 3.0.6502.180</li><li>Talkspace: iOS app version 8.86.00</li><li>Wysa: iOS app version 5.7.4</li><li>Youper: iOS app version 9.00.000</li><li>7 Cups: iOS app version 4.6.9</li></ul></li></ul><p><strong>Policy review: </strong>Third, the team reviewed the privacy policy and terms of service documents of the applications based on a framework we created specific to the nature of the mental health apps. The key questions are the following and resulted in a comparative table showing the differences across the apps.&nbsp;</p><ul><li>Does the app name any of the companies they share your data with? We found the answer to this through Privacy Policy and Terms of Service</li><li>Did we see the app share data ONLY with companies named in the privacy policy? We used the AppCensus service and performed static analysis with MobSF to collect this information.&nbsp;</li><li>Can you delete your data? We found the answer to this through the Privacy Policy and Terms of Service</li><li>Can you delete your data easily, right from the app? We found the answer to this through a manual, UX/UI design review</li><li>Does the app ask permission before using your data for research? We found the answer to this through a manual, UX/UI design review and through document review.</li><li>Can you opt-out of data research projects? We found the answer to this through Privacy Policy and Terms of Service and a manual, UX/UI design review.</li><li>We referred to the following privacy policies:&nbsp;<ul><li><a href=\"https://www.betterhelp.com/privacy\_\">BetterHelp, updated on September 11, 2020</a></li><li><a href=\"https://mymoodpath.com/en/privacy-policy/\">MindDoc, no update date, reviewed on November 23, 2020</a></li><li><a href=\"https://www.sanityandself.com/privacy/\">Sanity &amp; Self, updated on January 31, 2020</a></li><li><a href=\"https://www.talkspace.com/public/privacy-policy\">Talkspace, updated on January 1, 2020</a></li><li><a href=\"https://legal.wysa.io/privacy-policy\">Wysa, updated on November 19, 2020</a></li><li><a href=\"https://www.youper.ai/privacy-policy\">Youper, updated on February 20, 2020</a></li><li><a href=\"https://www.7cups.com/Documents/PrivacyPolicy\">7 Cups, updated on May 15, 2020</a></li></ul></li></ul>"
impact_html: >-
  <p>CR sent a letter on December 17, 2020 to seven companies that operate
  mental health applications: BetterHelp, Moodpath, Sanity &amp; Self,
  Talkspace, Wysa, Youper and 7 Cups. Based on a review of the policies of these
  applications, CR is urging the companies to raise the standard of privacy and
  transparency for their services.</p><p>We provided the four recommendations
  below to the companies:&nbsp;</p><p><strong>Recommendation 1: Clearly explain
  procedures used for de-identification of data used for research. Identifiable
  data should not be shared except at the consumer&rsquo;s
  direction.</strong></p><p>We advocate for companies to improve clarity on
  research for data sharing especially around how they define &ldquo;anonymized
  data.&rdquo; Companies should be explicit about what processes they use to
  de-identify data. We highlight this to help prevent people from being
  reidentified. Mental health applications collect sensitive information that
  can create damaging, irreversible impacts on individuals if shared with third
  parties, including social stigmatization and additional barriers to future
  opportunities.&nbsp;</p><p><strong>Recommendation 2: Provide clear and
  contextually-appropriate explanations of how user-provided data will be used,
  so users are aware of potential consequences before they
  share.</strong></p><p>Companies should not overwhelm people with superfluous
  information or choices. Wherever possible, app default settings should be that
  your privacy is protected and users should not have to worry about managing
  this on their own. However, if there are choices to be made or information
  someone should be aware of, they should be presented in a clear and
  straightforward way.</p><p><strong>Recommendation 3: Adhere to platform
  guidelines that are in place to protect people&rsquo;s
  privacy.</strong></p><p>App developers should ensure that their apps meet the
  guidelines laid out in Android developer documentation, such as <a
  href="https://developer.android.com/training/articles/user-data-ids"><em>Best
  Practices for Unique Identifiers</em></a> which recommends avoiding the use of
  identifiers like the Android ID (SSAID). App developers should also make sure
  that the libraries (SDKs) they embed within their apps meet their own
  expectations for data collection, and that they are configured
  accordingly.</p><p><strong>Recommendation 4: Transparently disclose the
  service providers that receive data when people use your
  apps.</strong></p><p>We recommend that companies are more transparent in their
  privacy policies about the service providers that receive data. Although it is
  not legally required or common practice in the U.S. to list every service
  provider or institution receiving data, we recommend companies proactively
  disclose this information.</p><p>We published a <a
  href="https://advocacy.consumerreports.org/wp-content/uploads/2020/12/cr_mentalhealth_fullreport_121720.pdf"><strong>full
  research study</strong></a> that provides additional information about our
  investigation. We also published a <a
  href="https://advocacy.consumerreports.org/wp-content/uploads/2020/12/cr_mentalhealth_letter-1.pdf"><strong>letter
  to the companies</strong></a>, a <a
  href="https://advocacy.consumerreports.org/wp-content/uploads/2020/12/cr_mentalhealth_2page.pdf"><strong>2-page
  brief</strong></a>&nbsp;and a <a
  href="https://medium.com/@stephtngu_CR/cr-digital-lab-investigates-privacy-practices-of-mental-health-apps-85b6f710853a"><strong>blog
  post</strong></a>.</p>
mapping_html: <p>Add details...</p>
who_html: <p>Add details...</p>
release: v1.2.1
areas:
  - Data Security
  - Access and Control
  - Data Use and Sharing
  - Overreach - Collecting Too Much Data
  - Privacy Policy & Terms of Service
  - Transparency
---

{% contentfor impact %}

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

/* -------------- chart header -------------- */

.chartHeaderCell {
  position: relative;
  display: inline-block;
  width: 10%;
  text-align: center;
  vertical-align: middle;
}

.chartHeaderIcon {
  position: relative;
  display: inline-block;
  width: 70%;
}

.chartHeaderText {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 30px;
  font-family: sofia-pro,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 14px;
  line-height: 30px;
  margin-bottom: 10px;
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


@media only screen and (max-width: 1440px) {
  .chartHeaderText { font-size: 13px; line-height: 28px; }
}

@media only screen and (max-width: 1200px) {
  .chartHeadline { text-align: center; }
  .chartHeaderCell { transform: rotate(-90deg); margin-bottom: 20px; margin-top: 10px; margin-left: 27px; margin-right: -27px; height: 75px; }
  .chartHeaderText { text-align: left; font-size: 15px; line-height: 18px; }
  .chartHeaderIcon { display: none; }
}

@media only screen and (max-width: 700px) {
  .chartHeaderCell { margin-bottom: 5px; }
}

</style>

<div id='fullChart'></div>

<script>

// ------------------- chart data -------------------

var chartQuestions = ["Is it clear who your data is shared with in the privacy policy?","Does the app share data ONLY with companies named in the privacy policy?","Does the policy define a right to delete your data?","Can you easily delete your data through the app?","Does the app ask permission before using your data for research?","Can you opt out of research?"];
var chartPlatforms = ["7 Cups","BetterHelp","MindDoc","Sanity & Self","Talkspace","Wysa","Youper"];
var chartIcons = ["7-cups","bettter-help","minddoc","sanity-self","talk-space","wysa","youper"];
var chartEntry = new Array();

chartEntry[0] = [0,0,'no','There were no third-party names related to data sharing present in the privacy policy. ','https://www.7cups.com/Documents/PrivacyPolicy'];
chartEntry[1] = [0,1,'no','The CCPA disclosures for California residents list the types of third parties, but no specific third-parties are listed.','https://www.betterhelp.com/privacy/'];
chartEntry[2] = [0,2,'yes','In the privacy policy, the third-party names shared are Firebase Crashlytics and Remote Config, Mailgun, OneSignal, and Branch Metrics.','https://mymoodpath.com/en/privacy-policy/'];
chartEntry[3] = [0,3,'yes','In the privacy policy, the third-party names shared are Google Analytics and Apple Healthkit.','https://www.sanityandself.com/privacy/'];
chartEntry[4] = [0,4,'no','There were no third-party names related to data sharing present in the privacy policy.','https://www.talkspace.com/public/privacy-policy'];
chartEntry[5] = [0,5,'yes','In the privacy policy, the third-party names shared are Google Analytics, Facebook Anayltics, Firebase, and Branch.io.','https://beta.touchkin.com/privatepolicy.html'];
chartEntry[6] = [0,6,'no','During our test window, the Android App was removed from the Play store. The results summarized here are from Version 8.04.000, updated July 28, 2020. This legacy app still functions for people who have a copy on their phone.','https://www.youper.ai/privacy-policy'];
chartEntry[7] = [1,0,'yes','The terms of service mention third-party cookies, but both static and dynamic analysis did not show any calls to third-parties. It is unclear if the company is reserving the right to use third-parties in the future or if its terms intentionally do not align with their service.','https://www.7cups.com/Documents/PrivacyPolicy'];
chartEntry[8] = [1,1,'no','Static analysis of BetterHelp&apos;s android app identified these third parties: AppsFlyer, Facebook Login, Facebook Places, Facebook Share, Google Analytics, Google Firebase Analytics, MixPanel.','https://www.betterhelp.com/privacy/'];
chartEntry[9] = [1,2,'yes','This service clearly defines the third-parties who get data','https://mymoodpath.com/en/privacy-policy/'];
chartEntry[10] = [1,3,'no','The privacy policy does not provide details on third-parties, but static analysis showed references to these third-party services: AppsFlyer, Facebook Analytics, Facebook Login, Facebook Places, Facebook Share, Google AdMob, Google CrashLytics, Google Firebase Analytics, Instabug, and MixPanel.','https://www.sanityandself.com/privacy/'];
chartEntry[11] = [1,4,'no','The privacy policy does not mention several third-parties we observed during dynamic analysis, including Firebase Remote Configuration, Mixpanel, AppsFlyer, and Braze.','https://www.talkspace.com/public/privacy-policy'];
chartEntry[12] = [1,5,'yes','This service clearly defines the third-parties who get data.','https://beta.touchkin.com/privatepolicy.html'];
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
  chartHTML += "<div class='chartRow'>";
  chartHTML += "<div class='chartQuestion'></div>";
  for (platform = 0; platform < chartPlatforms.length; platform++) {
    chartHTML += "<div class='chartHeaderCell'>";
    chartHTML += "<div class='chartHeaderIcon'><img src='https://thedigitalstandard.org/uploads/"+chartIcons[platform]+".png' width='100%' /></div>"
    chartHTML += "<div class='chartHeaderText'>"+chartPlatforms[platform]+"</div>";
    chartHTML += "</div>";
  }
  chartHTML += "</div>"; // end row

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



{% endcontentfor %}
