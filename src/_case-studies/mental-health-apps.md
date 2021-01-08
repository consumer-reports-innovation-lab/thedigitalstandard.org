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
  href="https://www.prnewswire.com/news-releases/mental-health-apps-market-accounted-for-us-587-9-mn-in-2018-and-is-expected-to-generate-a-revenue-of-us-3-918-40-mn-by-2027--at-a-growth-rate-of-23-7-from-2019--2027--300997559.html">some
  estimates</a>. Due to greater awareness related to the significance of mental
  health, U.S. and Canadian consumers made up the majority of the global market
  in 2018.</p><p><strong>Increased anxiety and tumult, harms not evenly
  distributed: </strong>Recent events like the global coronavirus pandemic, the
  resulting economic crisis, and large scale protests related to the Black Lives
  Matter movement, have spotlighted rising mental health related harms with
  marginalized and vulnerable populations. Increased anxiety and upheaval causes
  both physical and psychological symptoms and <a
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
process_html: "<p><strong>Data Testing: </strong>We ran a static analysis of each Android application. We also worked with <a target=\"_blank\" rel=\"noopener\" href=\"https://www.appcensus.io/\">AppCensus</a>, a company that analyzes app behavior for privacy and security issues, to do an automated analysis of the apps. This research process involved an inspection of the following items:</p><ul><li>Permissions: What access to data and features was requested, and what was actually used?</li><li>Third Party SDKs: What third-party software is bundled with the app when a user installs it, and what role does it play in app behavior?&nbsp;</li><li>Data recipients: Which entities (companies, services, etc.) receive information from the app, and which security and privacy methods / policies do they observe or not</li><li>Personal information: What identifiers (Android ID, Advertising ID, etc.) from the phone are transmitted by the app, and where are these identifiers sent?</li><li>We used the following Android app binaries:&nbsp;<ul><li><a href=\"https://play.google.com/store/apps/details?id=com.betterhelp\">BetterHelp version 1.63</a></li><li><a href=\"https://play.google.com/store/apps/details?id=de.moodpath.android\">MindDoc version 4.2.0</a></li><li><a href=\"https://play.google.com/store/apps/details?id=cc.moov.five\">Sanity &amp; Self version 3.0.6396</a></li><li><a href=\"https://play.google.com/store/apps/details?id=com.talkspace.talkspaceapp\">Talkspace version 3.30.80</a></li><li><a href=\"https://play.google.com/store/apps/details?id=bot.touchkin\">Wysa version 2.4.1</a></li><li>Youper version 8.04.000</li><li><a href=\" https://play.google.com/store/apps/details?id=com.sevencupsoftea.app\">7 Cups version 4.6.9</a></li></ul></li></ul><p><strong>Design analysis (UX + UI):</strong> The user experience, user interface design analysis involved a manual, thorough review of all of the user-interfacing elements of the applications. More specifically, the purpose of this work is to:&nbsp;</p><ul><li>Show how the company empowers and informs users, in support of and/or beyond what they say in the documents (Terms of Service and Privacy Policy)</li><li>Understand how the app works, who this is positioned to.</li><li>Understand how privacy / security are integrated and positioned (including privacy policy and terms of service documentation), including app defaults and permissions</li><li>Identify what the core components of the application featured are in order to do more testing, where necessary.&nbsp;</li><li>Identify areas for sensitive data collection, and potentially cross reference that with app data collection and 3rd party sharing happening simultaneously.</li><li>Capture which app permissions are requested, and if/when these permissions are accessed while using the app.</li><li>We used the following iOS app versions:<ul><li>BetterHelp: iOS app version 9.7</li><li>MindDoc: iOS app version 4.2.1</li><li>Sanity &amp; Self: iOS app version 3.0.6502.180</li><li>Talkspace: iOS app version 8.86.00</li><li>Wysa: iOS app version 5.7.4</li><li>Youper: iOS app version 9.00.000</li><li>7 Cups: iOS app version 4.6.9</li></ul></li></ul><p><strong>Policy review: </strong>Third, the team reviewed the privacy policy and terms of service documents of the applications.</p><ul><li>We referred to the following privacy policies:&nbsp;<ul><li><a href=\"https://www.betterhelp.com/privacy\_\">BetterHelp, updated on September 11, 2020</a></li><li><a href=\"https://mymoodpath.com/en/privacy-policy/\">MindDoc, no update date, reviewed on November 23, 2020</a></li><li><a href=\"https://www.sanityandself.com/privacy/\">Sanity &amp; Self, updated on January 31, 2020</a></li><li><a href=\"https://www.talkspace.com/public/privacy-policy\">Talkspace, updated on January 1, 2020</a></li><li><a href=\"https://legal.wysa.io/privacy-policy\">Wysa, updated on November 19, 2020</a></li><li><a href=\"https://www.youper.ai/privacy-policy\">Youper, updated on February 20, 2020</a></li><li><a href=\"https://www.7cups.com/Documents/PrivacyPolicy\">7 Cups, updated on May 15, 2020</a></li></ul></li></ul>"
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
mapping_html: <p>.</p>
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

% contentfor impact %}

<br /><br /><br /><br />
