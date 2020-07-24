---
title: Best Build Practices
test_state: '1: Green'
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
---

