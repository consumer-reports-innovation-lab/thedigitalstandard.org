---
title: Best Build Practices
standard_category: Build Quality
standard_state: '1: Green'
github_url:
criteria:
  - criteria_summary: >-
      The software was built and developed according to the industry's best
      practices for security.
    indicators:
      - indicator: The product was built with effectively implemented safety features.
        procedure_html: >-
          <p>Run static analysis software to determine what application armoring
          features are present.</p><p>Are there Stack Guards, and if so, are
          they effectively implemented?</p><p>Are all safety features available
          in the pertinent OS enabled? (e.g., ASLR, CFI, RELRO, DEP,
          etc.)</p><p>Are those safety features well implemented and/or enabled
          with optimal settings? (E.g., High Entropy ASLR, rather than just
          Dynamic Base on Windows 10)</p><p>Are the binaries 32 or 64 bit?</p>
      - indicator: The software does not make use of unsafe functions or libraries.
        procedure_html: >-
          <p>Pull out data from the binary that speaks to developer
          hygiene.</p><p>Do they use strcpy and other historically unsafe
          functions?</p><p>Did the developers use older, less historically safe
          functions, or newer, safer replacements for those
          functions?</p><p>What risks are introduced via the libraries that the
          binary links to, either directly or indirectly?</p>
      - indicator: The software is not overly complex.
        procedure_html: >-
          <p>Pull out data from the binary that speaks to code
          complexity.</p><p>What is the branch density?</p><p>How many stack
          adjusts, function calls, etc are there?</p><p>How complex is the
          code?</p>
---

