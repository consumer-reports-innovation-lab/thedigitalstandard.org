---
title: Product Stablity
standard_category: Build Quality
standard_state: '2: Yellow'
github_url: >-
  https://github.com/TheDigitalStandard/TheDigitalStandard/blob/master/Security%20(Is%20it%20safe%3F)%2FBuild%20Quality%2FProduct%20stability.yaml
criteria:
  - criteria_summary: The software is reliable.
    indicators:
      - indicator: The software is not susceptible to crashes.
        procedure_html: <p>Fuzz software to see if and how it crashes.</p>
      - indicator: >-
          If the program is forced to unexpectedly terminate, it shuts down in a
          safe and responsible fashion.
        procedure_html: >-
          <p>Under appropriate fuzz testing, what was the code coverage, number
          of crashes, and type(s) of crashes.</p><p>Are crashes exploitable, or
          do they simply allow a disruption of service?</p>
      - indicator: The software is not vulnerable to algorithmic complexity attacks.
        procedure_html: >-
          <p>Perform modified fuzzing to determine the software's vulnerability
          to algorithmic complexity attacks.</p>
---

