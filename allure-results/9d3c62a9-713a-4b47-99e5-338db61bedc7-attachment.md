# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 04_Session_Storage\234_TestWingify_SessionStorage.spec.ts >> go directly to dashboard — Test1
- Location: tests\04_Session_Storage\234_TestWingify_SessionStorage.spec.ts:9:5

# Error details

```
Error: browserType.launch: Target page, context or browser has been closed
Browser logs:

<launching> C:\Users\prasa\AppData\Local\ms-playwright\webkit-2359\Playwright.exe --inspector-pipe --disable-accelerated-compositing --no-startup-window
<launched> pid=27032
Call log:
  - <launching> C:\Users\prasa\AppData\Local\ms-playwright\webkit-2359\Playwright.exe --inspector-pipe --disable-accelerated-compositing --no-startup-window
  - <launched> pid=27032
  - [pid=27032] <gracefully close start>
  - [pid=27032] <kill>
  - [pid=27032] <will force kill>
  - [pid=27032] taskkill stderr: ERROR: The process "27032" not found.
  - [pid=27032] <process did exit: exitCode=3236495362, signal=null>
  - [pid=27032] starting temporary directories cleanup
  - [pid=27032] finished temporary directories cleanup
  - [pid=27032] <gracefully close end>

```