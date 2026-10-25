# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 19_Data_Driven_Testing\291_Real_DDT_CSV.spec.ts >> DDT CSV:  >> Login with : special chars
- Location: tests\19_Data_Driven_Testing\291_Real_DDT_CSV.spec.ts:10:13

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Error: expected value must be a string or regular expression
Expected has value: undefined

```

# Page snapshot

```yaml
- generic [active] [ref=f1e1]:
  - 'region "Announcement: Playwright Automation Mastery new batch" [ref=f1e2]':
    - generic [ref=f1e3]: LIVE
    - generic [ref=f1e5]: Playwright Automation Mastery
    - generic [ref=f1e6]: New batch
    - generic [ref=f1e7]: "|"
    - generic [ref=f1e8]: Starts 28 Sept · Mon, Wed, Fri · 7 AM IST
    - generic [ref=f1e9]: "|"
    - emphasis [ref=f1e11]: UP TO 10% OFF
    - generic [ref=f1e12]:
      - text: Code
      - code [ref=f1e13]: PROMODE
    - link "Enroll" [ref=f1e14] [cursor=pointer]:
      - /url: https://class.thetestingacademy.com/playwright-automation-mastery-course
    - link "Chat on WhatsApp" [ref=f1e15] [cursor=pointer]:
      - /url: https://sdet.live/WhatsApp
      - text: ☎
    - button "Dismiss banner" [ref=f1e16] [cursor=pointer]: ×
  - generic [ref=f1e17]:
    - complementary "Practice navigation" [ref=f1e18]:
      - generic [ref=f1e19]:
        - link "T The Testing Academy" [ref=f1e20] [cursor=pointer]:
          - /url: ./index.html
          - generic [ref=f1e21]: T
          - strong [ref=f1e23]: The Testing Academy
        - button "Toggle sidebar" [ref=f1e24] [cursor=pointer]
      - generic [ref=f1e28]:
        - searchbox / [ref=f1e32]
        - generic [ref=f1e33]: /
      - navigation [ref=f1e34]:
        - generic [ref=f1e35]:
          - button "JavaScript" [expanded] [ref=f1e36] [cursor=pointer]
          - list [ref=f1e43]:
            - listitem [ref=f1e44]:
              - link "Overview" [ref=f1e45] [cursor=pointer]:
                - /url: ./learn/javascript/index.html
            - listitem [ref=f1e51]:
              - link "Foundations (ch 1-4)" [ref=f1e52] [cursor=pointer]:
                - /url: ./learn/javascript/foundations.html
            - listitem [ref=f1e55]:
              - generic [ref=f1e56]:
                - generic [ref=f1e58]: Control flow (ch 5-7)
                - generic [ref=f1e59]: soon
            - listitem [ref=f1e60]:
              - generic [ref=f1e61]:
                - generic [ref=f1e63]: Data structures (ch 8-12)
                - generic [ref=f1e64]: soon
            - listitem [ref=f1e65]:
              - generic [ref=f1e66]:
                - generic [ref=f1e68]: Functions (ch 9 + 13)
                - generic [ref=f1e69]: soon
            - listitem [ref=f1e70]:
              - generic [ref=f1e71]:
                - generic [ref=f1e73]: Async (ch 14-15)
                - generic [ref=f1e74]: soon
            - listitem [ref=f1e75]:
              - generic [ref=f1e76]:
                - generic [ref=f1e78]: OOP (ch 16-17)
                - generic [ref=f1e79]: soon
            - listitem [ref=f1e80]:
              - link "JS notes" [ref=f1e81] [cursor=pointer]:
                - /url: ./notes.html
        - generic [ref=f1e88]:
          - button "TypeScript" [expanded] [ref=f1e89] [cursor=pointer]
          - list [ref=f1e96]:
            - listitem [ref=f1e97]:
              - link "Overview" [ref=f1e98] [cursor=pointer]:
                - /url: ./learn/typescript/index.html
            - listitem [ref=f1e104]:
              - link "Setup + basics soon" [ref=f1e105] [cursor=pointer]:
                - /url: ./learn/typescript/setup.html
                - generic [ref=f1e107]: Setup + basics
                - generic [ref=f1e108]: soon
            - listitem [ref=f1e109]:
              - link "Types deep dive soon" [ref=f1e110] [cursor=pointer]:
                - /url: ./learn/typescript/types.html
                - generic [ref=f1e112]: Types deep dive
                - generic [ref=f1e113]: soon
            - listitem [ref=f1e114]:
              - link "Interfaces soon" [ref=f1e115] [cursor=pointer]:
                - /url: ./learn/typescript/interfaces.html
                - generic [ref=f1e117]: Interfaces
                - generic [ref=f1e118]: soon
            - listitem [ref=f1e119]:
              - link "Enums soon" [ref=f1e120] [cursor=pointer]:
                - /url: ./learn/typescript/enums.html
                - generic [ref=f1e122]: Enums
                - generic [ref=f1e123]: soon
            - listitem [ref=f1e124]:
              - link "Generics soon" [ref=f1e125] [cursor=pointer]:
                - /url: ./learn/typescript/generics.html
                - generic [ref=f1e127]: Generics
                - generic [ref=f1e128]: soon
            - listitem [ref=f1e129]:
              - link "Access modifiers + classes soon" [ref=f1e130] [cursor=pointer]:
                - /url: ./learn/typescript/classes.html
                - generic [ref=f1e132]: Access modifiers + classes
                - generic [ref=f1e133]: soon
        - generic [ref=f1e134]:
          - button "Playwright fundamentals" [expanded] [ref=f1e135] [cursor=pointer]
          - list [ref=f1e142]:
            - listitem [ref=f1e143]:
              - link "Overview" [ref=f1e144] [cursor=pointer]:
                - /url: ./learn/playwright-fundamentals/overview.html
            - listitem [ref=f1e150]:
              - link "Architecture deep dive" [ref=f1e151] [cursor=pointer]:
                - /url: ./playwright-e2e-architecture-blueprint.html
            - listitem [ref=f1e154]:
              - link "LangChain agent guide" [ref=f1e155] [cursor=pointer]:
                - /url: ./playwright-agent-with-langchain.html
            - listitem [ref=f1e158]:
              - link "Playwright MCP tutorial" [ref=f1e159] [cursor=pointer]:
                - /url: ./playwright-mcp.html
            - listitem [ref=f1e162]:
              - link "AI agents guide" [ref=f1e163] [cursor=pointer]:
                - /url: ./playwright-ai-agents.html
            - listitem [ref=f1e166]:
              - link "Curriculum hub" [ref=f1e167] [cursor=pointer]:
                - /url: ./learn/playwright-fundamentals/index.html
            - listitem [ref=f1e170]:
              - link "Multiple Element Filter" [ref=f1e171] [cursor=pointer]:
                - /url: ./multiple_element_filter.html
            - listitem [ref=f1e177]:
              - link "Web Table Directory" [ref=f1e178] [cursor=pointer]:
                - /url: ./webtable.html
            - listitem [ref=f1e186]:
              - link "QA Profile Form" [ref=f1e187] [cursor=pointer]:
                - /url: ./tables/practice.html
            - listitem [ref=f1e193]:
              - link "Companies Table" [ref=f1e194] [cursor=pointer]:
                - /url: ./tables/webtable.html
            - listitem [ref=f1e200]:
              - link "Tall Buildings Table" [ref=f1e201] [cursor=pointer]:
                - /url: ./tables/webtable1.html
            - listitem [ref=f1e206]:
              - link "Custom Dropdowns" [ref=f1e207] [cursor=pointer]:
                - /url: ./tables/dropdowns.html
            - listitem [ref=f1e213]:
              - link "Select Box Variants" [ref=f1e214] [cursor=pointer]:
                - /url: ./tables/select-boxes.html
            - listitem [ref=f1e220]:
              - link "Sortable Admin Table" [ref=f1e221] [cursor=pointer]:
                - /url: ./tables/sortable.html
            - listitem [ref=f1e228]:
              - link "Cricket Scorecard" [ref=f1e229] [cursor=pointer]:
                - /url: ./tables/scorecard.html
            - listitem [ref=f1e235]:
              - link "Frames overview" [ref=f1e236] [cursor=pointer]:
                - /url: ./frames/index.html
            - listitem [ref=f1e241]:
              - link "Multi-frame frameset" [ref=f1e242] [cursor=pointer]:
                - /url: ./frames/multi-frames.html
            - listitem [ref=f1e250]:
              - link "Nested iframes" [ref=f1e251] [cursor=pointer]:
                - /url: ./frames/nested-iframes.html
            - listitem [ref=f1e258]:
              - link "Courses frameset" [ref=f1e259] [cursor=pointer]:
                - /url: ./frames/courses-frameset.html
            - listitem [ref=f1e264]:
              - link "SVG locators" [ref=f1e265] [cursor=pointer]:
                - /url: ./widgets/svg.html
            - listitem [ref=f1e272]:
              - link "Shadow DOM" [ref=f1e273] [cursor=pointer]:
                - /url: ./widgets/shadow-dom.html
            - listitem [ref=f1e278]:
              - link "Calendar / date picker" [ref=f1e279] [cursor=pointer]:
                - /url: ./widgets/calendar.html
            - listitem [ref=f1e284]:
              - link "Drag and drop" [ref=f1e285] [cursor=pointer]:
                - /url: ./widgets/dnd.html
            - listitem [ref=f1e288]:
              - link "Toasts and notifications" [ref=f1e289] [cursor=pointer]:
                - /url: ./widgets/toasts.html
            - listitem [ref=f1e292]:
              - link "Native dialogs" [ref=f1e293] [cursor=pointer]:
                - /url: ./widgets/dialogs.html
            - listitem [ref=f1e298]:
              - link "Hover menus" [ref=f1e299] [cursor=pointer]:
                - /url: ./widgets/hover-menu.html
            - listitem [ref=f1e304]:
              - link "Right-click menu" [ref=f1e305] [cursor=pointer]:
                - /url: ./widgets/context-menu.html
            - listitem [ref=f1e310]:
              - link "Keyboard navigation" [ref=f1e311] [cursor=pointer]:
                - /url: ./widgets/keyboard-form.html
            - listitem [ref=f1e317]:
              - link "Windows and Tabs" [ref=f1e318] [cursor=pointer]:
                - /url: ./widgets/windows-tabs.html
            - listitem [ref=f1e321]:
              - link "Upload and Download" [ref=f1e322] [cursor=pointer]:
                - /url: ./widgets/upload-download.html
            - listitem [ref=f1e325]:
              - link "Scroll" [ref=f1e326] [cursor=pointer]:
                - /url: ./widgets/scroll.html
            - listitem [ref=f1e332]:
              - link "Assertions (expect)" [ref=f1e333] [cursor=pointer]:
                - /url: ./widgets/expect.html
            - listitem [ref=f1e338]:
              - link "Test modifiers, hooks, data" [ref=f1e339] [cursor=pointer]:
                - /url: ./widgets/test-modifiers.html
            - listitem [ref=f1e342]:
              - link "Data-driven + POM" [ref=f1e343] [cursor=pointer]:
                - /url: ./widgets/data-driven.html
            - listitem [ref=f1e350]:
              - link "Network interception" [ref=f1e351] [cursor=pointer]:
                - /url: ./network/intercept.html
            - listitem [ref=f1e356]:
              - link "TTACart demo" [ref=f1e357] [cursor=pointer]:
                - /url: ./ttacart/index.html
            - listitem [ref=f1e364]:
              - link "TTAStays booking" [ref=f1e365] [cursor=pointer]:
                - /url: ./booking/index.html
            - listitem [ref=f1e371]:
              - link "Advance Playwright framework" [ref=f1e372] [cursor=pointer]:
                - /url: ./advance-framework.html
        - generic [ref=f1e378]:
          - button "Playwright API Testing" [expanded] [ref=f1e379] [cursor=pointer]
          - list [ref=f1e386]:
            - listitem [ref=f1e387]:
              - link "Overview" [ref=f1e388] [cursor=pointer]:
                - /url: ./learn/playwright-api/index.html
            - listitem [ref=f1e394]:
              - link "CRUD basics" [ref=f1e395] [cursor=pointer]:
                - /url: ./learn/playwright-api/crud.html
            - listitem [ref=f1e398]:
              - link "Auth + Schema" [ref=f1e399] [cursor=pointer]:
                - /url: ./learn/playwright-api/auth-schema.html
            - listitem [ref=f1e402]:
              - link "Network monitoring" [ref=f1e403] [cursor=pointer]:
                - /url: ./learn/playwright-api/network.html
        - generic [ref=f1e406]:
          - button "Playwright BDD (Cucumber)" [expanded] [ref=f1e407] [cursor=pointer]
          - list [ref=f1e415]:
            - listitem [ref=f1e416]:
              - link "Overview" [ref=f1e417] [cursor=pointer]:
                - /url: ./learn/playwright-cucumber/index.html
            - listitem [ref=f1e423]:
              - link "Setup + first run" [ref=f1e424] [cursor=pointer]:
                - /url: ./learn/playwright-cucumber/setup.html
            - listitem [ref=f1e427]:
              - link "Data-driven" [ref=f1e428] [cursor=pointer]:
                - /url: ./learn/playwright-cucumber/data-driven.html
            - listitem [ref=f1e431]:
              - link "CI + tags + env" [ref=f1e432] [cursor=pointer]:
                - /url: ./learn/playwright-cucumber/ci-tags-env.html
        - generic [ref=f1e435]:
          - button "Playwright DevOps" [expanded] [ref=f1e436] [cursor=pointer]
          - list [ref=f1e445]:
            - listitem [ref=f1e446]:
              - link "NPM Registry (JFrog/Nexus)" [ref=f1e447] [cursor=pointer]:
                - /url: ./learn/playwright-registry/index.html
            - listitem [ref=f1e450]:
              - link "Docker setup" [ref=f1e451] [cursor=pointer]:
                - /url: ./learn/playwright-docker/index.html
            - listitem [ref=f1e454]:
              - link "Sharding multi-container" [ref=f1e455] [cursor=pointer]:
                - /url: ./learn/playwright-shard/index.html
        - generic [ref=f1e458]:
          - button "Playwright AI" [expanded] [ref=f1e459] [cursor=pointer]
          - list [ref=f1e467]:
            - listitem [ref=f1e468]:
              - link "Curriculum hub" [ref=f1e469] [cursor=pointer]:
                - /url: ./learn/playwright-ai-agents/index.html
            - listitem [ref=f1e472]:
              - link "Framework + AI (V2)" [ref=f1e473] [cursor=pointer]:
                - /url: ./advance-framework-ai.html
            - listitem [ref=f1e476]:
              - link "TTACart + AI live demo" [ref=f1e477] [cursor=pointer]:
                - /url: ./ttacart-ai/index.html
            - listitem [ref=f1e480]:
              - link "TTA AI Chat sandbox" [ref=f1e481] [cursor=pointer]:
                - /url: ./ai-chat/index.html
        - generic [ref=f1e484]:
          - button "Playwright MCP" [expanded] [ref=f1e485] [cursor=pointer]
          - list [ref=f1e494]:
            - listitem [ref=f1e495]:
              - link "Curriculum hub" [ref=f1e496] [cursor=pointer]:
                - /url: ./learn/playwright-mcp/index.html
        - generic [ref=f1e499]:
          - button "Playwright CLI" [expanded] [ref=f1e500] [cursor=pointer]
          - list [ref=f1e507]:
            - listitem [ref=f1e508]:
              - link "Curriculum hub" [ref=f1e509] [cursor=pointer]:
                - /url: ./learn/playwright-cli/index.html
            - listitem [ref=f1e512]:
              - link "SnapLocator (Chrome ext)" [ref=f1e513] [cursor=pointer]:
                - /url: ./snaplocator.html
      - generic [ref=f1e519]:
        - generic [ref=f1e520]: © The Testing Academy · 2026
        - button "Toggle dark mode" [ref=f1e521] [cursor=pointer]
    - generic [ref=f1e524]:
      - banner [ref=f1e525]:
        - button "Open sidebar" [ref=f1e526] [cursor=pointer]
        - generic [ref=f1e529]:
          - link "Practice" [ref=f1e530] [cursor=pointer]:
            - /url: ./index.html
          - strong [ref=f1e533]: Multiple Element Filter
        - generic [ref=f1e534]:
          - generic [ref=f1e535]: Practice
          - button "Toggle dark mode" [ref=f1e536] [cursor=pointer]
      - main [ref=f1e542]:
        - region [ref=f1e543]:
          - generic [ref=f1e544]:
            - generic [ref=f1e545]: Locator practice · Login UI
            - heading [level=1] [ref=f1e547]:
              - text: Master
              - emphasis [ref=f1e548]: multiple element filters
              - text: on a real login UI
            - paragraph [ref=f1e549]:
              - text: This dummy login page is built for practising
              - strong [ref=f1e550]: allInnerTexts()
              - text: ","
              - strong [ref=f1e551]: locator.all()
              - text: ","
              - strong [ref=f1e552]: "filter({ hasText })"
              - text: ", and clicking a specific link from many similar links. Your target for the class exercise is the"
              - strong [ref=f1e553]: Forgotten Password
              - text: link in the account panel.
            - generic [ref=f1e554]:
              - generic [ref=f1e555]:
                - strong [ref=f1e556]: "13"
                - generic [ref=f1e557]:
                  - code [ref=f1e558]: a.list-group-item
                  - text: account links
              - generic [ref=f1e559]:
                - strong [ref=f1e560]: "16"
                - generic [ref=f1e561]:
                  - code [ref=f1e562]: footer a
                  - text: footer links
              - generic [ref=f1e563]:
                - strong [ref=f1e564]: "1"
                - generic [ref=f1e565]:
                  - text: Exact
                  - code [ref=f1e566]: Forgotten Password
                  - text: target
            - group [ref=f1e567]:
              - generic "Playwright solution Try the practice on the right first — reveal the snippet only when you need a hint. Show solution" [ref=f1e568] [cursor=pointer]:
                - generic [ref=f1e572]:
                  - strong [ref=f1e573]: Playwright solution
                  - generic [ref=f1e574]: Try the practice on the right first — reveal the snippet only when you need a hint.
                - generic [ref=f1e575]: Show solution
          - complementary [ref=f1e576]:
            - region [ref=f1e577]:
              - generic [ref=f1e578]:
                - generic [ref=f1e579]:
                  - heading "Student Login" [level=2] [ref=f1e580]
                  - paragraph [ref=f1e581]: Practice page for Playwright selectors
                - generic [ref=f1e582]: Secure Practice
              - generic [ref=f1e583]:
                - generic [ref=f1e584]:
                  - generic [ref=f1e585]: Email Address
                  - textbox "Email Address" [ref=f1e586]:
                    - /placeholder: student@thetestingacademy.com
                - generic [ref=f1e587]:
                  - generic [ref=f1e588]: Password
                  - textbox "Password" [ref=f1e589]:
                    - /placeholder: Enter your password
                - generic [ref=f1e590]:
                  - generic [ref=f1e591]:
                    - checkbox "Remember me" [ref=f1e592]
                    - text: Remember me
                  - link "Forget password?" [ref=f1e593] [cursor=pointer]:
                    - /url: "#forgotten-password"
                - button "Login to Practice Account" [ref=f1e594] [cursor=pointer]
              - generic "Social login links" [ref=f1e595]:
                - link "Continue with GitHub" [ref=f1e596] [cursor=pointer]:
                  - /url: "#github-login"
                - link "Continue with Google" [ref=f1e597] [cursor=pointer]:
                  - /url: "#google-login"
            - region [ref=f1e598]:
              - heading "Account navigation" [level=3] [ref=f1e599]
              - generic [ref=f1e600]:
                - link "Login ›" [ref=f1e601] [cursor=pointer]:
                  - /url: "#login"
                - link "Register ›" [ref=f1e602] [cursor=pointer]:
                  - /url: "#register"
                - link "Forgotten Password ›" [ref=f1e603] [cursor=pointer]:
                  - /url: "#forgotten-password"
                - link "My Account ›" [ref=f1e604] [cursor=pointer]:
                  - /url: "#my-account"
                - link "Address Book ›" [ref=f1e605] [cursor=pointer]:
                  - /url: "#address-book"
                - link "Wish List ›" [ref=f1e606] [cursor=pointer]:
                  - /url: "#wish-list"
                - link "Order History ›" [ref=f1e607] [cursor=pointer]:
                  - /url: "#order-history"
                - link "Downloads ›" [ref=f1e608] [cursor=pointer]:
                  - /url: "#downloads"
                - link "Recurring Payments ›" [ref=f1e609] [cursor=pointer]:
                  - /url: "#recurring-payments"
                - link "Reward Points ›" [ref=f1e610] [cursor=pointer]:
                  - /url: "#reward-points"
                - link "Returns ›" [ref=f1e611] [cursor=pointer]:
                  - /url: "#returns"
                - link "Transactions ›" [ref=f1e612] [cursor=pointer]:
                  - /url: "#transactions"
                - link "Newsletter ›" [ref=f1e613] [cursor=pointer]:
                  - /url: "#newsletter"
        - region "Teaching cards" [ref=f1e614]:
          - article [ref=f1e615]:
            - heading "Use case 1 — collect text" [level=3] [ref=f1e616]
            - paragraph [ref=f1e617]: Capture all right-panel link texts and assert the count before clicking the target link.
            - code [ref=f1e618]: page.locator('a.list-group-item').allInnerTexts()
          - article [ref=f1e619]:
            - heading "Use case 2 — filter one link" [level=3] [ref=f1e620]
            - paragraph [ref=f1e621]: Filter from many account links and click the one that has exact visible text.
            - code [ref=f1e622]: "filter({ hasText: 'Forgotten Password' })"
          - article [ref=f1e623]:
            - heading "Use case 3 — footer links" [level=3] [ref=f1e624]
            - paragraph [ref=f1e625]: Collect every footer anchor, print its text and href, then validate important legal links.
            - code [ref=f1e626]: page.locator('footer a').all()
        - generic [ref=f1e627]:
          - generic [ref=f1e628]:
            - heading "The Testing Academy" [level=3] [ref=f1e629]
            - paragraph [ref=f1e630]:
              - text: A public practice page from
              - strong [ref=f1e631]: The Testing Academy
              - text: for learning multiple element filtering, link collection, footer-link traversal, and targeted clicks.
          - generic [ref=f1e632]:
            - heading "Information" [level=4] [ref=f1e633]
            - link "About Us" [ref=f1e634] [cursor=pointer]:
              - /url: "#about-us"
            - link "Delivery Information" [ref=f1e635] [cursor=pointer]:
              - /url: "#delivery-information"
            - link "Privacy Policy" [ref=f1e636] [cursor=pointer]:
              - /url: "#privacy-policy"
            - link "Terms & Conditions" [ref=f1e637] [cursor=pointer]:
              - /url: "#terms-conditions"
          - generic [ref=f1e638]:
            - heading "Customer Service" [level=4] [ref=f1e639]
            - link "Contact Us" [ref=f1e640] [cursor=pointer]:
              - /url: "#contact-us"
            - link "Returns" [ref=f1e641] [cursor=pointer]:
              - /url: "#returns-footer"
            - link "Site Map" [ref=f1e642] [cursor=pointer]:
              - /url: "#site-map"
            - link "Brands" [ref=f1e643] [cursor=pointer]:
              - /url: "#brands"
          - generic [ref=f1e644]:
            - heading "Extras" [level=4] [ref=f1e645]
            - link "Gift Certificates" [ref=f1e646] [cursor=pointer]:
              - /url: "#gift-certificates"
            - link "Affiliate" [ref=f1e647] [cursor=pointer]:
              - /url: "#affiliate"
            - link "Specials" [ref=f1e648] [cursor=pointer]:
              - /url: "#specials"
            - link "Support Center" [ref=f1e649] [cursor=pointer]:
              - /url: "#support-center"
          - generic [ref=f1e650]:
            - heading "My Account" [level=4] [ref=f1e651]
            - link "My Account" [ref=f1e652] [cursor=pointer]:
              - /url: "#footer-my-account"
            - link "Order History" [ref=f1e653] [cursor=pointer]:
              - /url: "#footer-order-history"
            - link "Wish List" [ref=f1e654] [cursor=pointer]:
              - /url: "#footer-wish-list"
            - link "Newsletter" [ref=f1e655] [cursor=pointer]:
              - /url: "#footer-newsletter"
  - status: Forgotten Password clicked — now assert the URL/hash or visible toast in Playwright.
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import { readCSV } from './utils/csvReader';
  3  | import path from 'path';
  4  | 
  5  | test.describe('DDT CSV: ', () => {
  6  |     const loginData = readCSV(path.join(__dirname, '/test-data/login-data.csv'));
  7  | 
  8  |     for(const data of loginData)
  9  |     {
  10 |         test(`Login with : ${data.description}`, async ({ page }) => {
  11 | 
  12 |             await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
  13 | 
  14 |             let textboxEmailAddress = page.getByRole("textbox", { name: "Email Address" });
  15 |             let textboxPassword = page.getByRole("textbox", { name: "Password" }).or(page.locator("#password")).or(page.locator("[name=\"password\"]"));
  16 |             let buttonLoginToPracticeAccount = page.getByRole("button", { name: "Login to Practice Account" }).or(page.getByTestId("login-button")).or(page.getByText("Login to Practice Account"));
  17 | 
  18 |             await textboxEmailAddress.fill(data.username);
  19 |             await textboxPassword.fill(data.password);
  20 |             await buttonLoginToPracticeAccount.click();
  21 | 
> 22 |             await expect(page).toHaveURL(data.expectedURL);
     |                                ^ Error: expect(page).toHaveURL(expected) failed
  23 | 
  24 |         });
  25 |     }
  26 | 
  27 | })
```