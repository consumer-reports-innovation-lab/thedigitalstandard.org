---
title: Authentication
standard_category: Data Security
standard_state: '1: Green'
criteria:
  - criteria_summary: >-
      A product has an authentication system that corresponds to the sensitivity
      of the user data it manages
    indicators:
      - indicator: >-
          If a product supports user accounts, it has an authentication system
          for accessing those accounts
        procedure_html: >-
          <p>Start product and note whether users are prompted to authenticate
          to access account data</p>
      - indicator: >-
          If a product is packaged with an account with default credentials,
          those credentials are unique to the instance of the product
        procedure_html: >-
          <p>If the product has default credentials, make note their uniqueness,
          and watch out for credentials like, "default", "admin", or
          "12345678".</p>
      - indicator: >-
          If a product has an authentication system, the user must authenticate
          each time they want to use the product
        procedure_html: >-
          <p>Start &amp; stop the product multiple times, and make note of when
          user is prompted to authenticate.</p>
      - indicator: >-
          If a product has an authentication system, it requires at least two
          pieces of information to authenticate users
        procedure_html: >-
          <p>Create an account and make note of information needed to do so *for
          authentication*. e.g. username + password</p>
      - indicator: >-
          For products that handle sufficiently sensitive data, users can choose
          to use multi-factor authentication.
        procedure_html: <p>Create an account and look for settings to enable MFA.</p>
      - indicator: >-
          For products that handle sufficiently sensitive data, users can choose
          to use multi-factor authentication whenever product is activated, or
          when a device is unrecognized.
        procedure_html: >-
          <p>Create an account, enable MFA, and try using product multiple times
          on one device to see if MFA is required each time.</p><p>Create an
          account, enable MFA, and try using product multiple times on different
          devices to see if MFA is required each time.</p>
      - indicator: >-
          If the product uses a password/passphrase for authentication, it
          requires that passwords are at least 8 characters long
        procedure_html: >-
          <p>Create an account and make note minimum password lengths. Try
          passwords such as "a" and "a1b2c3".</p>
      - indicator: >-
          If the product uses a password/passphrase for authentication, the
          password/passphrase may be at least 20 characters long
        procedure_html: >-
          <p>Create an account and make note maximum password lengths. Try
          passphrases such as "i love sufficiently long passwords".</p>
      - indicator: >-
          If the product uses a password/passphrase for authentication, it
          requires that passwords are reasonably complex
        procedure_html: >-
          <p>Create an account and make note complexity limitations. Try
          passwords such as "aaaaaaaa" and "12345678".</p>
      - indicator: >-
          If the product uses a password/passphrase for authentication, it
          allows all reasonable characters as input
        procedure_html: >-
          <p>Create an account and make note character restrictions. Try
          passwords such as ")a!aaaaa$a%" and "p 4 5 5 w 0 R d !".</p>
      - indicator: >-
          If the product uses a password/passphrase for authentication, it is
          compatible with popular password managers.
        procedure_html: >-
          <p>With a password manager installed, create an account. See if
          password manager can be used as expected.</p>
  - criteria_summary: A product that has an authentication system resists attempts to break it
    indicators:
      - indicator: >-
          The product allows users to be notified via an out-of-band medium when
          account security settings are changed.
        procedure_html: >-
          <p>Create an account and make note of whether or not users are able to
          use email, SMS, or push notifications to be notified when changes
          occur or account credentials need to be reset.</p>
      - indicator: >-
          To change a password/passphrase/pin, a user must enter the previous
          password/passphrase/pin, or have access to a secondary system that is
          used to reset it.
        procedure_html: >-
          <p>Create an account and attempt to change the password/passphrase/pin
          associated with it. Make note of whether or not users are required to
          enter old credentials, or look toward their email/phone/etc. to reset
          them.</p>
      - indicator: >-
          The product notifies users when account security settings have
          changed.
        procedure_html: >-
          <p>&nbsp;</p><p>Create an account and attempt to change various
          security settings, such as MFA or password, and make note of whether
          or not the user is notified.</p>
      - indicator: >-
          If the product has an authentication system, it also has a system to
          prevent brute-force/dictionary attacks
        procedure_html: >-
          <p>Try to login to product using various incorrect credentials and
          note whether you have limited attempts to do so, or if it would take
          far too long to test every combination of allowed or common
          characters/strings/phrases.</p>
---

