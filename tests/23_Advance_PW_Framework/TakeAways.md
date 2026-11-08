# Advanced Playwright Framework (Fixture) #

## 1 What is Framework? ##

1. Framework is a structured way of writing and managing our code.
2. Framework will basically help you to organize your source code into particular folders which can be **resuable, maintainable,** and **scalable.**

## 2. Why a framework? ##

1. A flat folder of .spec.ts files works for ten tests. It breaks at fifty.

When tests grow, the same locator gets re-typed in twelve places. The login flow gets re-implemented for every spec. Hard-coded URLs leak into the code. CSVs of users get pasted inline. The CI takes 40 minutes because every spec opens its own browser.

A framework is the discipline that stops this. It gives you one place for locators (pages/), one place for reusable flows (modules/), one place for data (testdata/), one place for environment config (.env + config/), one place for utilities (utils/), and one place for custom reporters and fixtures. Add Docker so it runs the same everywhere, then shard it across four GitHub Actions runners and you have a 40-minute suite in 10 minutes.

`` What you build by the end of this page: a working TypeScript Playwright repo with Page Object Model, reusable modules, fixtures, JSON test data, environment-aware config, a custom HTML reporter, a Dockerfile, and a sharded GitHub Actions pipeline - all pointing at the TTA practice pages so you never need a third-party app. ``

## 3. Tech Stack ##

1. Playwright
2. TypeScript
3. Page Object Model
4. JSON fixtures -> testdata ( **page**)
5. **Custom TTA Reporter,** Allure Reporter, Built-in HTML + JSON reporters.
6. Faker JS, dotenv, **Zod(APIs)** used of API Schema validations
7. ESLint + Prettier - ESLint makes sure that whatever your typing in TS passes through Quality
8. Database
    1. SQL npm to connect

9. XLocator - OS project for Locator
10. CI & CD 
    1. Github + Git 
    2. Jenkins
    3. GitHUB Actions 
    4. Docker 

11. **AI Wrapper**
    1. **LLMGateway**
        1. Openrouter
        2. Groq
        3. OpenAI api
        4. Local LLM - Ollama, LM Studio

    2. Failure RCA
    3. Visual Regression
    4. TestData GEN AI

12. Playwright MCP, AI Agents, CLI 
13. API Testing, Cucumber (BDD)


<style>
  .ts-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
    max-width: 780px;
    padding: 16px;
    background: #1e1e1e;
    border-radius: 10px;
    box-sizing: border-box;
    font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
  }
  .ts-grid * { box-sizing: border-box; }
  .ts-card {
    background: #262626;
    border: 1px solid #3a3a3a;
    border-radius: 8px;
    padding: 14px 16px 16px;
  }
  .ts-title {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 8px;
    margin: 0 0 7px;
    color: #e8e8e8;
    font-size: 15.5px;
    font-weight: 700;
    line-height: 1.3;
  }
  .ts-badge {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.02em;
  }
  .ts-badge-docs  { color: #b392f0; }
  .ts-badge-npm   { color: #e06c75; }
  .ts-badge-image { color: #7ec699; }
  .ts-desc {
    margin: 0;
    color: #a8a8a8;
    font-size: 13.5px;
    line-height: 1.55;
  }
  .ts-grid code {
    background: #303030;
    border: none;
    border-radius: 3px;
    padding: 1px 5px;
    color: #79c0ff;
    font-family: "Cascadia Code", Consolas, "Courier New", monospace;
    font-size: 12.5px;
    white-space: nowrap;
  }
  .ts-grid code.purple { color: #c3a6f0; }
  .ts-grid code.orange { color: #e0a06a; }
  .ts-grid code.pink   { color: #e39ac1; }
  .ts-grid code.green  { color: #7ec699; }
  @media (max-width: 680px) {
    .ts-grid { grid-template-columns: 1fr; }
  }
</style>

<div class="ts-grid">
  <div class="ts-card">
    <div class="ts-title">Playwright Test <span class="ts-badge ts-badge-docs">docs</span></div>
    <p class="ts-desc">Test runner + browser automation. Bundled <code>test()</code>, <code>expect()</code>, fixtures, parallel workers, sharding, traces, retries.</p>
  </div>
  <div class="ts-card">
    <div class="ts-title">TypeScript <span class="ts-badge ts-badge-docs">docs</span></div>
    <p class="ts-desc">Strict types catch typos in locator names and bad data fixtures at compile-time. Path aliases like <code>@pages/*</code> keep imports clean.</p>
  </div>
  <div class="ts-card">
    <div class="ts-title">Page Object Model <span class="ts-badge ts-badge-docs">docs</span></div>
    <p class="ts-desc">One file per page. Locators as arrow functions, actions as instance methods, assertions as expectations. Plus a higher-level <code class="purple">modules/</code> layer for multi-page flows.</p>
  </div>
  <div class="ts-card">
    <div class="ts-title">dotenv <span class="ts-badge ts-badge-npm">npm</span></div>
    <p class="ts-desc">Loads <code>.env</code> into <code>process.env</code>. Switch between dev / staging / prod by exporting <code>NODE_ENV</code> at the shell.</p>
  </div>
  <div class="ts-card">
    <div class="ts-title">JSON fixtures ( <code class="orange">testdata/</code> )</div>
    <p class="ts-desc">Test data as typed JSON. <code>users.json</code> + <code>types.ts</code> give you autocomplete on <code class="green">validUsers[0].username</code>.</p>
  </div>
  <div class="ts-card">
    <div class="ts-title">Custom TTA Reporter</div>
    <p class="ts-desc">A standalone <code class="pink">Reporter</code> implementation. Emits a branded HTML report into <code>tta-report/</code> with screenshots, steps, and per-file stats.</p>
  </div>
  <div class="ts-card">
    <div class="ts-title">Built-in HTML + JSON reporters</div>
    <p class="ts-desc">Playwright's own HTML report ( <code>npx playwright show-report</code> ) and a <code>results.json</code> file for CI dashboards.</p>
  </div>
  <div class="ts-card">
    <div class="ts-title">ESLint + Prettier</div>
    <p class="ts-desc"><code>npm run lint</code> + <code>npm run format</code>. Husky + lint-staged run them on every commit.</p>
  </div>
  <div class="ts-card">
    <div class="ts-title">Docker <span class="ts-badge ts-badge-image">image</span></div>
    <p class="ts-desc">Base image <code>mcr.microsoft.com/playwright:v1.40.0-jammy</code>. Same browsers everywhere - local, CI, your colleague's laptop.</p>
  </div>
  <div class="ts-card">
    <div class="ts-title">GitHub Actions <span class="ts-badge ts-badge-docs">docs</span></div>
    <p class="ts-desc">Matrix shard 1/4 - 4/4 across four ubuntu runners. <code>merge-reports</code> stitches the four HTML outputs back into one.</p>
  </div>
</div>


### 1 Page Objects - src/pages ###
loginPage.ts, inventoryPage.ts, itemdetailPage.ts, cartPage.ts, CheckoutOnePage.ts, CheckoutTwoPage.ts, CheckoutCompletePage.ts 

### 3 Utils/Helpers - src/utils/ ###
#### **UtilElementLocator.ts** ###

This is a class which will help you to make your all the functions generic in nature.

What we are doing is, we are making every click(), fill(), getText(), getAttribute(), etc.. we are putting all this functions and actions we are doing into the "ElementLocator" to make them all generic in nature.

*** What is the reason for this? ***
There is only one reason- The click is going to use by all the pages, now if you want to add log or if you want to do anything changes in click you are going to change only one file(***UtilElementLocator.ts***). This way if there is any change in click or any other functions you'll modify only one place not all the the page object file whereever we are using this.

**It'll change only one file UtilElementLocator.ts, So this is a common file, which is going to be changed for anything in future, but not every file will be changed. That is the advantage of this file**

**FileReader.ts**
Sometime we need to read data from JSON, CSV, XLSX and Write data into JSON, So file reader utilities will be there.

**DataFactory**
it can generate a FakeUSername, FakeCard, RandodZipCode, like any random fakedata will be create

**Logger.ts**
The need of logger is because we want to check, it is going to help us in debugging, it is going to help us in providing information what is goign on with our framework.

Element has been clicked or not, logger will tell you.
If the element has been clicked and assertion fails, logger will tell you.
If file was not loaded, logger will tell you.

Very famous logger present is "Winston".


### 4 Test Data - scr/testdata/ ###
**users.json**, **products.csv**, **register.xlsx**
This data will be: what are the users we have, what are the products we have, what are the restriction information we have. These can be your test data.

### 5 Observability - logs/ + tta-report/ ###
**logs/**
So what is this observability? Observability is all about how the logs will be. 
Every run that you are running has a log. Every Network request we are going to capture. All the console errors we are going to capture in logs.

What is the need of this? why are capturing everything is, in future if you want to debug, we can take help from this.

**tta-report/(custom HTML)**
We have custome HTML reporter, which can captures, every step, every screenshot, every video, etc..  This is for evidence.

**What to attach on failure**
-trace.zip - by default traces are there - playwright by default captures this
- screenshots.png (full-page)
- console.text
- network.har (HTTP archive format .har) - HAR can capture your all the requests
- the failing locator + selector chain

### 6 Playwright.config.ts + envs ###
Playwright configuration will make sure, whatever the environments we are running are here, whatever the reporters that we are reading are here, whatever the project we are running are here.

This will make sure if this is a QA Environment, it will be app.testingacademy.com,
if it's staging it will be different, development environment is different, So we'll make sure that we are keeping everything into our playwright.config file.

So, we can test on Chromium, Firefox, Webkit, and Mobile Chrome. All these are projects which are available.

### 7 Test Execution + tags ###

How you are going to test, execute?

Run commands

TTA_ENV=qa  npx playwright test

            npx playwright test --project=chromium

            npx playwright test --grep @smoke

            npx playwright test --headed --workers=4

            npx playwright test --debug

TTA_ENV=stg npx playwright test --shard=1/4


You can execute by settingup the environemnt, and running all the tests
On Chromium,
by using @smoke,
four parallels (),
in a debug mode,
in a sharded format also



Tag suites

@smoke      - happy-path login + 1 add-to-cart + finish

@regression - 6 test users + sort + filter + edge cases

@e2e        - full checkout 2-step + payment + complete

@visual     - screenshot diff for visual_user

@flaky      - quarantine for error_user / perf_glitch


### 8 Reports + artifacts ###
HTML reporter (default) - not good
Allure,
Trace Viewer,
Custom Reporter,
Artifacts on failure

    error-context.md --> This is new thing coming by playwright automatically, after 1.60 there is a new "error-context.md" file this you can directly give to github copilot, or claude code and it will fix your test case very well.

    This is like context for AI


### 9 CI/CD + Docker + cloud grid ###

It's all about how you are going to run.

Few Options to run from:
1. **.github/workflows/playwright.yml**
2. **Docker**
3. **Jenkins (optional)**
4. **Other options**


### 10 Quality + package management + VCS ###
How do we check the quality?
We'll check the quality by **Scripts**, by adding **ESLints**, **Prettier**, **Other options**

**Dependencies snapshot**
devDependencies:
  @playwright/test
  @faker-js/faker
  csv-parse
  xlsx
  dotenv
  winston
  allure-playwright
  typescript
  eslint / prettier / husky / commitlint


**Version control**
.gitignore: node_modules/, test-results/, playwright-report/, logs/
branching : main + feature/* + fix/*
PR rules  : 2 approvals + CI green + no draft merges
.nvmrc    : 20    .npmrc: engine-strict=true