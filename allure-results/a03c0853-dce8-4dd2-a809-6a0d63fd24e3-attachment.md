# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 09_Frame_Iframe\251_Iframes_Handling.spec.ts >> Handling Iframes: 
- Location: tests\09_Frame_Iframe\251_Iframes_Handling.spec.ts:8:5

# Error details

```
Error: locator.fill: Error: Cannot type text into input[type=number]
Call log:
  - waiting for locator('#frame-one').contentFrame().locator('#RESULT_TextField-4')
    - locator resolved to <input min="1990" max="2030" name="year" type="number" placeholder="2024" id="RESULT_TextField-4"/>
    - fill("offers a great balance of comfort, performance, and style.")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - 'region "Announcement: Playwright Automation Mastery new batch" [ref=e2]':
    - generic [ref=e3]: LIVE
    - generic [ref=e5]: Playwright Automation Mastery
    - generic [ref=e6]: New batch
    - generic [ref=e7]: "|"
    - generic [ref=e8]: Starts 28 Sept · Mon, Wed, Fri · 7 AM IST
    - generic [ref=e9]: "|"
    - emphasis [ref=e11]: UP TO 10% OFF
    - generic [ref=e12]:
      - text: Code
      - code [ref=e13]: PROMODE
    - link "Enroll" [ref=e14] [cursor=pointer]:
      - /url: https://class.thetestingacademy.com/playwright-automation-mastery-course
    - link "Chat on WhatsApp" [ref=e15] [cursor=pointer]:
      - /url: https://sdet.live/WhatsApp
      - text: ☎
    - button "Dismiss banner" [ref=e16] [cursor=pointer]: ×
  - generic [ref=e17]:
    - complementary "Practice navigation" [ref=e18]:
      - generic [ref=e19]:
        - link "T The Testing Academy" [ref=e20] [cursor=pointer]:
          - /url: ../index.html
          - generic [ref=e21]: T
          - strong [ref=e23]: The Testing Academy
        - button "Toggle sidebar" [ref=e24] [cursor=pointer]
      - generic [ref=e28]:
        - searchbox / [ref=e32]
        - generic [ref=e33]: /
      - navigation [ref=e34]:
        - generic [ref=e35]:
          - button "JavaScript" [expanded] [ref=e36] [cursor=pointer]
          - list [ref=e43]:
            - listitem [ref=e44]:
              - link "Overview" [ref=e45] [cursor=pointer]:
                - /url: ../learn/javascript/index.html
            - listitem [ref=e51]:
              - link "Foundations (ch 1-4)" [ref=e52] [cursor=pointer]:
                - /url: ../learn/javascript/foundations.html
            - listitem [ref=e55]:
              - generic [ref=e56]:
                - generic [ref=e58]: Control flow (ch 5-7)
                - generic [ref=e59]: soon
            - listitem [ref=e60]:
              - generic [ref=e61]:
                - generic [ref=e63]: Data structures (ch 8-12)
                - generic [ref=e64]: soon
            - listitem [ref=e65]:
              - generic [ref=e66]:
                - generic [ref=e68]: Functions (ch 9 + 13)
                - generic [ref=e69]: soon
            - listitem [ref=e70]:
              - generic [ref=e71]:
                - generic [ref=e73]: Async (ch 14-15)
                - generic [ref=e74]: soon
            - listitem [ref=e75]:
              - generic [ref=e76]:
                - generic [ref=e78]: OOP (ch 16-17)
                - generic [ref=e79]: soon
            - listitem [ref=e80]:
              - link "JS notes" [ref=e81] [cursor=pointer]:
                - /url: ../notes.html
        - generic [ref=e88]:
          - button "TypeScript" [expanded] [ref=e89] [cursor=pointer]
          - list [ref=e96]:
            - listitem [ref=e97]:
              - link "Overview" [ref=e98] [cursor=pointer]:
                - /url: ../learn/typescript/index.html
            - listitem [ref=e104]:
              - link "Setup + basics soon" [ref=e105] [cursor=pointer]:
                - /url: ../learn/typescript/setup.html
                - generic [ref=e107]: Setup + basics
                - generic [ref=e108]: soon
            - listitem [ref=e109]:
              - link "Types deep dive soon" [ref=e110] [cursor=pointer]:
                - /url: ../learn/typescript/types.html
                - generic [ref=e112]: Types deep dive
                - generic [ref=e113]: soon
            - listitem [ref=e114]:
              - link "Interfaces soon" [ref=e115] [cursor=pointer]:
                - /url: ../learn/typescript/interfaces.html
                - generic [ref=e117]: Interfaces
                - generic [ref=e118]: soon
            - listitem [ref=e119]:
              - link "Enums soon" [ref=e120] [cursor=pointer]:
                - /url: ../learn/typescript/enums.html
                - generic [ref=e122]: Enums
                - generic [ref=e123]: soon
            - listitem [ref=e124]:
              - link "Generics soon" [ref=e125] [cursor=pointer]:
                - /url: ../learn/typescript/generics.html
                - generic [ref=e127]: Generics
                - generic [ref=e128]: soon
            - listitem [ref=e129]:
              - link "Access modifiers + classes soon" [ref=e130] [cursor=pointer]:
                - /url: ../learn/typescript/classes.html
                - generic [ref=e132]: Access modifiers + classes
                - generic [ref=e133]: soon
        - generic [ref=e134]:
          - button "Playwright fundamentals" [expanded] [ref=e135] [cursor=pointer]
          - list [ref=e142]:
            - listitem [ref=e143]:
              - link "Overview" [ref=e144] [cursor=pointer]:
                - /url: ../learn/playwright-fundamentals/overview.html
            - listitem [ref=e150]:
              - link "Architecture deep dive" [ref=e151] [cursor=pointer]:
                - /url: ../playwright-e2e-architecture-blueprint.html
            - listitem [ref=e154]:
              - link "LangChain agent guide" [ref=e155] [cursor=pointer]:
                - /url: ../playwright-agent-with-langchain.html
            - listitem [ref=e158]:
              - link "Playwright MCP tutorial" [ref=e159] [cursor=pointer]:
                - /url: ../playwright-mcp.html
            - listitem [ref=e162]:
              - link "AI agents guide" [ref=e163] [cursor=pointer]:
                - /url: ../playwright-ai-agents.html
            - listitem [ref=e166]:
              - link "Curriculum hub" [ref=e167] [cursor=pointer]:
                - /url: ../learn/playwright-fundamentals/index.html
            - listitem [ref=e170]:
              - link "Multiple Element Filter" [ref=e171] [cursor=pointer]:
                - /url: ../multiple_element_filter.html
            - listitem [ref=e177]:
              - link "Web Table Directory" [ref=e178] [cursor=pointer]:
                - /url: ../webtable.html
            - listitem [ref=e186]:
              - link "QA Profile Form" [ref=e187] [cursor=pointer]:
                - /url: ../tables/practice.html
            - listitem [ref=e193]:
              - link "Companies Table" [ref=e194] [cursor=pointer]:
                - /url: ../tables/webtable.html
            - listitem [ref=e200]:
              - link "Tall Buildings Table" [ref=e201] [cursor=pointer]:
                - /url: ../tables/webtable1.html
            - listitem [ref=e206]:
              - link "Custom Dropdowns" [ref=e207] [cursor=pointer]:
                - /url: ../tables/dropdowns.html
            - listitem [ref=e213]:
              - link "Select Box Variants" [ref=e214] [cursor=pointer]:
                - /url: ../tables/select-boxes.html
            - listitem [ref=e220]:
              - link "Sortable Admin Table" [ref=e221] [cursor=pointer]:
                - /url: ../tables/sortable.html
            - listitem [ref=e228]:
              - link "Cricket Scorecard" [ref=e229] [cursor=pointer]:
                - /url: ../tables/scorecard.html
            - listitem [ref=e235]:
              - link "Frames overview" [ref=e236] [cursor=pointer]:
                - /url: ../frames/index.html
            - listitem [ref=e241]:
              - link "Multi-frame frameset" [ref=e242] [cursor=pointer]:
                - /url: ../frames/multi-frames.html
            - listitem [ref=e250]:
              - link "Nested iframes" [ref=e251] [cursor=pointer]:
                - /url: ../frames/nested-iframes.html
            - listitem [ref=e258]:
              - link "Courses frameset" [ref=e259] [cursor=pointer]:
                - /url: ../frames/courses-frameset.html
            - listitem [ref=e264]:
              - link "SVG locators" [ref=e265] [cursor=pointer]:
                - /url: ../widgets/svg.html
            - listitem [ref=e272]:
              - link "Shadow DOM" [ref=e273] [cursor=pointer]:
                - /url: ../widgets/shadow-dom.html
            - listitem [ref=e278]:
              - link "Calendar / date picker" [ref=e279] [cursor=pointer]:
                - /url: ../widgets/calendar.html
            - listitem [ref=e284]:
              - link "Drag and drop" [ref=e285] [cursor=pointer]:
                - /url: ../widgets/dnd.html
            - listitem [ref=e288]:
              - link "Toasts and notifications" [ref=e289] [cursor=pointer]:
                - /url: ../widgets/toasts.html
            - listitem [ref=e292]:
              - link "Native dialogs" [ref=e293] [cursor=pointer]:
                - /url: ../widgets/dialogs.html
            - listitem [ref=e298]:
              - link "Hover menus" [ref=e299] [cursor=pointer]:
                - /url: ../widgets/hover-menu.html
            - listitem [ref=e304]:
              - link "Right-click menu" [ref=e305] [cursor=pointer]:
                - /url: ../widgets/context-menu.html
            - listitem [ref=e310]:
              - link "Keyboard navigation" [ref=e311] [cursor=pointer]:
                - /url: ../widgets/keyboard-form.html
            - listitem [ref=e317]:
              - link "Windows and Tabs" [ref=e318] [cursor=pointer]:
                - /url: ../widgets/windows-tabs.html
            - listitem [ref=e321]:
              - link "Upload and Download" [ref=e322] [cursor=pointer]:
                - /url: ../widgets/upload-download.html
            - listitem [ref=e325]:
              - link "Scroll" [ref=e326] [cursor=pointer]:
                - /url: ../widgets/scroll.html
            - listitem [ref=e332]:
              - link "Assertions (expect)" [ref=e333] [cursor=pointer]:
                - /url: ../widgets/expect.html
            - listitem [ref=e338]:
              - link "Test modifiers, hooks, data" [ref=e339] [cursor=pointer]:
                - /url: ../widgets/test-modifiers.html
            - listitem [ref=e342]:
              - link "Data-driven + POM" [ref=e343] [cursor=pointer]:
                - /url: ../widgets/data-driven.html
            - listitem [ref=e350]:
              - link "Network interception" [ref=e351] [cursor=pointer]:
                - /url: ../network/intercept.html
            - listitem [ref=e356]:
              - link "TTACart demo" [ref=e357] [cursor=pointer]:
                - /url: ../ttacart/index.html
            - listitem [ref=e364]:
              - link "TTAStays booking" [ref=e365] [cursor=pointer]:
                - /url: ../booking/index.html
            - listitem [ref=e371]:
              - link "Advance Playwright framework" [ref=e372] [cursor=pointer]:
                - /url: ../advance-framework.html
        - generic [ref=e378]:
          - button "Playwright API Testing" [expanded] [ref=e379] [cursor=pointer]
          - list [ref=e386]:
            - listitem [ref=e387]:
              - link "Overview" [ref=e388] [cursor=pointer]:
                - /url: ../learn/playwright-api/index.html
            - listitem [ref=e394]:
              - link "CRUD basics" [ref=e395] [cursor=pointer]:
                - /url: ../learn/playwright-api/crud.html
            - listitem [ref=e398]:
              - link "Auth + Schema" [ref=e399] [cursor=pointer]:
                - /url: ../learn/playwright-api/auth-schema.html
            - listitem [ref=e402]:
              - link "Network monitoring" [ref=e403] [cursor=pointer]:
                - /url: ../learn/playwright-api/network.html
        - generic [ref=e406]:
          - button "Playwright BDD (Cucumber)" [expanded] [ref=e407] [cursor=pointer]
          - list [ref=e415]:
            - listitem [ref=e416]:
              - link "Overview" [ref=e417] [cursor=pointer]:
                - /url: ../learn/playwright-cucumber/index.html
            - listitem [ref=e423]:
              - link "Setup + first run" [ref=e424] [cursor=pointer]:
                - /url: ../learn/playwright-cucumber/setup.html
            - listitem [ref=e427]:
              - link "Data-driven" [ref=e428] [cursor=pointer]:
                - /url: ../learn/playwright-cucumber/data-driven.html
            - listitem [ref=e431]:
              - link "CI + tags + env" [ref=e432] [cursor=pointer]:
                - /url: ../learn/playwright-cucumber/ci-tags-env.html
        - generic [ref=e435]:
          - button "Playwright DevOps" [expanded] [ref=e436] [cursor=pointer]
          - list [ref=e445]:
            - listitem [ref=e446]:
              - link "NPM Registry (JFrog/Nexus)" [ref=e447] [cursor=pointer]:
                - /url: ../learn/playwright-registry/index.html
            - listitem [ref=e450]:
              - link "Docker setup" [ref=e451] [cursor=pointer]:
                - /url: ../learn/playwright-docker/index.html
            - listitem [ref=e454]:
              - link "Sharding multi-container" [ref=e455] [cursor=pointer]:
                - /url: ../learn/playwright-shard/index.html
        - generic [ref=e458]:
          - button "Playwright AI" [expanded] [ref=e459] [cursor=pointer]
          - list [ref=e467]:
            - listitem [ref=e468]:
              - link "Curriculum hub" [ref=e469] [cursor=pointer]:
                - /url: ../learn/playwright-ai-agents/index.html
            - listitem [ref=e472]:
              - link "Framework + AI (V2)" [ref=e473] [cursor=pointer]:
                - /url: ../advance-framework-ai.html
            - listitem [ref=e476]:
              - link "TTACart + AI live demo" [ref=e477] [cursor=pointer]:
                - /url: ../ttacart-ai/index.html
            - listitem [ref=e480]:
              - link "TTA AI Chat sandbox" [ref=e481] [cursor=pointer]:
                - /url: ../ai-chat/index.html
        - generic [ref=e484]:
          - button "Playwright MCP" [expanded] [ref=e485] [cursor=pointer]
          - list [ref=e494]:
            - listitem [ref=e495]:
              - link "Curriculum hub" [ref=e496] [cursor=pointer]:
                - /url: ../learn/playwright-mcp/index.html
        - generic [ref=e499]:
          - button "Playwright CLI" [expanded] [ref=e500] [cursor=pointer]
          - list [ref=e507]:
            - listitem [ref=e508]:
              - link "Curriculum hub" [ref=e509] [cursor=pointer]:
                - /url: ../learn/playwright-cli/index.html
            - listitem [ref=e512]:
              - link "SnapLocator (Chrome ext)" [ref=e513] [cursor=pointer]:
                - /url: ../snaplocator.html
      - generic [ref=e519]:
        - generic [ref=e520]: © The Testing Academy · 2026
        - button "Toggle dark mode" [ref=e521] [cursor=pointer]
    - generic [ref=e524]:
      - banner [ref=e525]:
        - button "Open sidebar" [ref=e526] [cursor=pointer]
        - generic [ref=e529]:
          - link "Practice" [ref=e530] [cursor=pointer]:
            - /url: ../index.html
          - strong [ref=e533]: Frame Handling
        - generic [ref=e534]:
          - generic [ref=e535] [cursor=pointer]:
            - checkbox "Locator markers" [checked] [ref=e536]
            - generic [ref=e537]: Locator markers
          - generic [ref=e538]: iframe + frameset
          - button "Toggle dark mode" [ref=e539] [cursor=pointer]
      - main [ref=e545]:
        - region [ref=e546]:
          - generic [ref=e547]: Frame practice · iframe + frameset
          - heading [level=1] [ref=e549]:
            - text: Frame
            - emphasis [ref=e550]: handling
            - text: practice
          - paragraph [ref=e551]:
            - text: Two scenarios — a modern
            - code [ref=e552]: <iframe>
            - text: hosting a registration form, and a classic
            - code [ref=e553]: <frameset>
            - text: page with three named frames. Practise
            - code [ref=e554]: page.frameLocator()
            - text: ","
            - code [ref=e555]: page.frames()
            - text: ", and counting/iterating"
            - code [ref=e556]: frame
            - text: elements.
        - region "Frame handling workspace" [ref=e557]:
          - generic [ref=e558]:
            - article [ref=e559]:
              - heading "Vehicle registration · iframe practice" [level=3] [ref=e560]
              - heading "① Single iframe — fill the embedded form" [level=2] [ref=e561]
              - paragraph [ref=e562]:
                - text: The form below is loaded inside an
                - code [ref=e563]: iframe[id*='frame-one']
                - text: . Practise
                - code [ref=e564]: page.frameLocator(...)
                - text: to reach
                - code [ref=e565]: "#RESULT_TextField-1"
                - text: and the rest.
              - iframe [active] [ref=e567]:
                - generic [ref=f1e2]:
                  - generic [ref=f1e3]: Inside iframe
                  - heading "Vehicle registration" [level=1] [ref=f1e4]
                  - paragraph [ref=f1e5]:
                    - text: This form lives inside an iframe. Reach it from the parent page using
                    - code [ref=f1e6]: page.frameLocator(...)
                    - text: .
                  - generic [ref=f1e7]:
                    - generic [ref=f1e8]:
                      - generic [ref=f1e9]: Vehicle name
                      - textbox "Vehicle name" [ref=f1e10]:
                        - /placeholder: e.g. Test Automation
                        - text: Hyundai verna
                    - generic [ref=f1e11]:
                      - generic [ref=f1e12]:
                        - generic [ref=f1e13]: Owner name
                        - textbox "Owner name" [ref=f1e14]:
                          - /placeholder: Aarav Sharma
                          - text: XYZ
                      - generic [ref=f1e15]:
                        - generic [ref=f1e16]: Registration number
                        - textbox "Registration number" [ref=f1e17]:
                          - /placeholder: MH-12-AB-1234
                          - text: AP 39 PB 9619
                    - generic [ref=f1e18]:
                      - generic [ref=f1e19]:
                        - generic [ref=f1e20]: Vehicle type
                        - combobox "Vehicle type" [ref=f1e21]:
                          - option "Select type"
                          - option "Hatchback"
                          - option "Sedan" [selected]
                          - option "SUV"
                          - option "Electric"
                          - option "Two-wheeler"
                      - generic [ref=f1e22]:
                        - generic [ref=f1e23]: Year
                        - spinbutton "Year" [active] [ref=f1e24]: "2025"
                    - generic [ref=f1e25]:
                      - generic [ref=f1e26]: Notes
                      - textbox "Notes" [ref=f1e27]:
                        - /placeholder: Any notes about the registration
                    - generic [ref=f1e28]:
                      - button "Submit registration" [ref=f1e29] [cursor=pointer]
                      - button "Reset" [ref=f1e30] [cursor=pointer]
                    - generic [ref=f1e31]: Submitted form data will appear here.
              - generic [ref=e568]:
                - generic [ref=e569]:
                  - generic [ref=e570]: id
                  - text: =frame-one
                - generic [ref=e571]:
                  - generic [ref=e572]: name
                  - text: =vehicle-form
                - generic [ref=e573]:
                  - generic [ref=e574]: data-testid
                  - text: =iframe-form-card
                - generic [ref=e575]:
                  - generic [ref=e576]: title-host
                  - text: =h3.details__form-preview-title
              - paragraph [ref=e577]:
                - text: "Selector matrix:"
                - strong [ref=e578]: iframe[id*='frame-one']
                - text: ·
                - strong [ref=e579]: iframe[name='vehicle-form']
                - text: ·
                - strong [ref=e580]: iframe[title*='Vehicle']
            - article [ref=e581]:
              - heading "② Multi-frame frameset — named frames" [level=2] [ref=e582]
              - paragraph [ref=e583]:
                - text: A separate page renders three classic
                - code [ref=e584]: <frame>
                - text: elements (
                - code [ref=e585]: main
                - text: ","
                - code [ref=e586]: side
                - text: ","
                - code [ref=e587]: footer
                - text: ). Open it in a new tab to use
                - code [ref=e588]: page.locator('//frame').all()
                - text: and count
                - code [ref=e589]: page.frames()
                - text: .
              - link "Open multi-frames frameset 3 frames named main / side / footer · best opened in a new tab" [ref=e590] [cursor=pointer]:
                - /url: ./multi-frames.html
                - generic [ref=e594]:
                  - strong [ref=e595]: Open multi-frames frameset
                  - generic [ref=e596]: 3 frames named main / side / footer · best opened in a new tab
              - generic [ref=e597]:
                - generic [ref=e598]: frame[name='main']
                - generic [ref=e600]: frame[name='side']
                - generic [ref=e602]: frame[name='footer']
          - complementary [ref=e604]:
            - generic [ref=e605]:
              - heading "What students should practise" [level=3] [ref=e606]
              - list [ref=e607]:
                - listitem [ref=e608]:
                  - text: Reach
                  - code [ref=e609]: "#RESULT_TextField-1"
                  - text: via
                  - code [ref=e610]: page.frameLocator("iframe[id*='frame-one']")
                  - text: and fill it.
                - listitem [ref=e611]:
                  - text: Read the outer-page heading
                  - code [ref=e612]: h3.details__form-preview-title
                  - text: and assert the page title.
                - listitem [ref=e613]:
                  - text: On the frameset page, use
                  - code [ref=e614]: frameLocator("[name='main']")
                  - text: and read its h2.
                - listitem [ref=e615]:
                  - text: Count frames via
                  - code [ref=e616]: page.locator('//frame').all()
                  - text: and
                  - code [ref=e617]: page.frames().length
                  - text: .
                - listitem [ref=e618]: Iterate frames and log each frame's name and src.
            - group [ref=e619]:
              - generic "Playwright solution Both scenarios — iframe form fill and frameset enumeration. Show solution" [ref=e620] [cursor=pointer]:
                - generic [ref=e624]:
                  - strong [ref=e625]: Playwright solution
                  - generic [ref=e626]: Both scenarios — iframe form fill and frameset enumeration.
                - generic [ref=e627]: Show solution
```

# Test source

```ts
  1  | // An Iframe(<iframe>) embeds another HTML page inside the current page. 
  2  | // It has it's own DOM, it's own CSS, it's own JavaScript, completely isolated from the parent page.
  3  | // Commong Eg:  payment forms (Stripe, Razorpay), embedded YouTube videos, Google Maps, reCAPTCHA, social media widgets, and third-party chat widgets.
  4  | 
  5  | 
  6  | import {test, expect, FrameLocator} from '@playwright/test';
  7  | 
  8  | test('Handling Iframes: ', async ({page}) => {
  9  | 
  10 |     await page.goto("https://app.thetestingacademy.com/playwright/frames/",
  11 |          { waitUntil: 'domcontentloaded' });
  12 | 
  13 |     let vechicleRegistration: FrameLocator =  page.frameLocator('#frame-one');
  14 |     await expect(vechicleRegistration.getByText("Vehicle registration")).toContainText("Vehicle registration");
  15 | 
  16 |     await vechicleRegistration.locator('#RESULT_TextField-1').fill("Hyundai verna");
  17 |     await vechicleRegistration.locator("#RESULT_TextField-2").fill("XYZ");
  18 |     await vechicleRegistration.locator('#RESULT_TextField-3').fill("AP 39 PB 9619");
  19 |     await vechicleRegistration.locator('#RESULT_RadioButton-1').selectOption("Sedan");
  20 |     await vechicleRegistration.locator('#RESULT_TextField-4').fill("2025");
> 21 |     await vechicleRegistration.locator('#RESULT_TextField-4').fill("offers a great balance of comfort, performance, and style.");
     |                                                               ^ Error: locator.fill: Error: Cannot type text into input[type=number]
  22 |     await vechicleRegistration.locator('#vehicle-submit').click();
  23 | 
  24 |     let output = await vechicleRegistration.locator('#vehicle-output').innerText();
  25 |     console.log(output);
  26 | 
  27 |     await page.pause();
  28 | 
  29 |     
  30 | });
  31 | 
```