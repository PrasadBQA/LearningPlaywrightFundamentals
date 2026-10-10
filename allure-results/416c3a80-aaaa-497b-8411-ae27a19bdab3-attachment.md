# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 10_Keyboard_Hover_Drag_Drop_Calendar\251_KeyBoard_Actions.spec.ts >> KeyBoard Actions: 
- Location: tests\10_Keyboard_Hover_Drag_Drop_Calendar\251_KeyBoard_Actions.spec.ts:6:5

# Error details

```
Error: path: unsupported mime type "null"
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - banner [ref=e5]:
      - generic [ref=e6]:
        - link "toptal-header-logo" [ref=e7] [cursor=pointer]:
          - /url: https://www.toptal.com
        - link "Utilities" [ref=e11] [cursor=pointer]:
          - /url: https://www.toptal.com/utilities-tools
        - generic "Keycodes" [ref=e17] [cursor=pointer]
      - button "Table" [ref=e19] [cursor=pointer]
    - main [ref=e22]:
      - heading "JavaScript Key Code 65" [level=1] [ref=e23]
      - generic [ref=e24]:
        - paragraph [ref=e25]: "65"
        - heading "Key Code Information" [level=2] [ref=e26]
      - group [ref=e27]:
        - generic [ref=e29]:
          - heading "event.key" [level=3] [ref=e31]
          - button "A" [ref=e33]
          - generic [ref=e34]: The value of the key pressed. Accounts for modifiers keys that return CAPS and alternate chars.
        - generic [ref=e37]:
          - heading "event.location" [level=3] [ref=e39]
          - button "General keys" [ref=e41]
          - generic [ref=e42]: Some keys exist more than once on your keyboard. This provides the location of the key pressed. Try it with both shifts.
        - generic [ref=e45]:
          - heading "event.code" [level=3] [ref=e47]
          - button "KeyA" [ref=e49]
          - generic [ref=e50]: The physical key on the keyboard. Doesn't care if you are holding a modifier like Shift.
        - generic [ref=e53]:
          - heading "event.which" [level=3] [ref=e55]
          - button "65" [ref=e57]
          - generic [ref=e59]:
            - text: event.which and event.keyCode are
            - link "deprecated" [ref=e60] [cursor=pointer]:
              - /url: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent
            - text: in modern browsers. Use
            - code [ref=e61]: .key
            - text: or
            - code [ref=e62]: .code
            - text: instead.
        - generic [ref=e64]:
          - heading "Description" [level=3] [ref=e66]
          - button "No Description." [ref=e68]
          - generic [ref=e70]:
            - text: This is the description we have created. Think it can be improved?
            - link "PR us on GitHub" [ref=e71] [cursor=pointer]:
              - /url: https://github.com/toptal/keycodes
        - generic [ref=e73]:
          - heading "Meta Keys" [level=3] [ref=e75]
          - generic [ref=e77]:
            - generic [ref=e78]: ⌘
            - generic [ref=e79]: ⇧
            - generic [ref=e80]: ⌥
            - generic [ref=e81]: ^
        - generic [ref=e83]:
          - heading "Event Dump" [level=3] [ref=e85]
          - generic [ref=e86]: "{ \"key\": \"A\", \"keyCode\": 65, \"which\": 65, \"code\": \"KeyA\", \"location\": 0, \"altKey\": false, \"ctrlKey\": false, \"metaKey\": false, \"shiftKey\": false, \"repeat\": false }"
        - generic [ref=e89]:
          - heading "Similar Values" [level=3] [ref=e91]
          - list [ref=e93]:
            - listitem [ref=e94]:
              - link "KeyB" [ref=e95] [cursor=pointer]:
                - /url: /developers/keycode/KeyB
              - text: (
              - link "66" [ref=e96] [cursor=pointer]:
                - /url: /developers/keycode/66
              - text: )
            - listitem [ref=e97]:
              - link "KeyC" [ref=e98] [cursor=pointer]:
                - /url: /developers/keycode/KeyC
              - text: (
              - link "67" [ref=e99] [cursor=pointer]:
                - /url: /developers/keycode/67
              - text: )
            - listitem [ref=e100]:
              - link "KeyD" [ref=e101] [cursor=pointer]:
                - /url: /developers/keycode/KeyD
              - text: (
              - link "68" [ref=e102] [cursor=pointer]:
                - /url: /developers/keycode/68
              - text: )
        - heading "Unicode" [level=3] [ref=e106]
        - generic [ref=e109]:
          - heading "History" [level=3] [ref=e111]
          - button "A" [ref=e114]
    - complementary "Hire World Class Talent with Toptal" [ref=e115]:
      - heading "Hire World Class Talent with Toptal" [level=2] [ref=e116]
      - list [ref=e117]:
        - listitem [ref=e118]:
          - link "JavaScript Developers" [ref=e119] [cursor=pointer]:
            - /url: https://www.toptal.com/javascript
        - listitem [ref=e120]:
          - link "Node.js Developers" [ref=e121] [cursor=pointer]:
            - /url: https://www.toptal.com/nodejs
        - listitem [ref=e122]:
          - link "Illustrators" [ref=e123] [cursor=pointer]:
            - /url: https://www.toptal.com/designers/illustration
        - listitem [ref=e124]:
          - link "Mobile App Developers" [ref=e125] [cursor=pointer]:
            - /url: https://www.toptal.com/app
        - listitem [ref=e126]:
          - link "Web Developers" [ref=e127] [cursor=pointer]:
            - /url: https://www.toptal.com/web
        - listitem [ref=e128]:
          - link "Security Engineers" [ref=e129] [cursor=pointer]:
            - /url: https://www.toptal.com/security-engineers
        - listitem [ref=e130]:
          - link "PrestaShop Developers" [ref=e131] [cursor=pointer]:
            - /url: https://www.toptal.com/prestashop
        - listitem [ref=e132]:
          - link "NFT Developers" [ref=e133] [cursor=pointer]:
            - /url: https://www.toptal.com/nft
        - listitem [ref=e134]:
          - link "Software Developers" [ref=e135] [cursor=pointer]:
            - /url: https://www.toptal.com/software
        - listitem [ref=e136]:
          - link "Hyperledger Developers" [ref=e137] [cursor=pointer]:
            - /url: https://www.toptal.com/hyperledger
        - listitem [ref=e138]:
          - link "Level Designers" [ref=e139] [cursor=pointer]:
            - /url: https://www.toptal.com/designers/level
        - listitem [ref=e140]:
          - link "Marketo Developers" [ref=e141] [cursor=pointer]:
            - /url: https://www.toptal.com/marketo
        - listitem [ref=e142]:
          - link "Database Designers" [ref=e143] [cursor=pointer]:
            - /url: https://www.toptal.com/designers/database-design
        - listitem [ref=e144]:
          - link "Umbraco Developers" [ref=e145] [cursor=pointer]:
            - /url: https://www.toptal.com/umbraco
        - listitem [ref=e146]:
          - link "Freelance Coders" [ref=e147] [cursor=pointer]:
            - /url: https://www.toptal.com/coder
    - contentinfo [ref=e149]:
      - generic [ref=e150]:
        - generic [ref=e151]:
          - link "toptal-footer-logo" [ref=e152] [cursor=pointer]:
            - /url: https://www.toptal.com
          - link "Hire the top 3% of freelance talent" [ref=e156] [cursor=pointer]:
            - /url: https://www.toptal.com/developers
        - link "Join the Toptal Network" [ref=e157] [cursor=pointer]:
          - /url: https://www.toptal.com/freelance-jobs
      - generic [ref=e158]:
        - paragraph [ref=e159]: Copyright 2010 - 2026 Toptal, LLC
        - navigation "footer-nav" [ref=e160]:
          - list [ref=e161]:
            - listitem [ref=e162]:
              - link "Privacy Policy" [ref=e163] [cursor=pointer]:
                - /url: https://www.toptal.com/privacy
            - listitem [ref=e164]:
              - link "Website terms" [ref=e165] [cursor=pointer]:
                - /url: https://www.toptal.com/tos
    - dialog "cookie-banner" [ref=e167]:
      - paragraph [ref=e168]:
        - text: By continuing to use this site you agree to our
        - link "Cookie Policy" [ref=e169] [cursor=pointer]:
          - /url: https://www.toptal.com/cookie-policy
        - link "Privacy Policy" [ref=e170] [cursor=pointer]:
          - /url: https://www.toptal.com/privacy
        - text: ", and"
        - link "Terms of Use" [ref=e171] [cursor=pointer]:
          - /url: https://www.toptal.com/company-tos
        - text: .
      - button "Got it" [ref=e173] [cursor=pointer]
  - alert [ref=e174]
```

# Test source

```ts
  1  | // KeyBoard Actions
  2  | // .Keyboard is an interface which has all the actions in it
  3  | 
  4  | import {test, expect, Keyboard} from '@playwright/test';
  5  | 
  6  | test('KeyBoard Actions: ', async({page}) => {
  7  | 
  8  |     await page.goto("https://www.toptal.com/developers/keycode");
  9  | 
  10 |     await page.keyboard.press("A");
> 11 |     await page.screenshot ({ path : 'A.PNG'});
     |                ^ Error: path: unsupported mime type "null"
  12 | 
  13 |     await page.pause();
  14 | });
```