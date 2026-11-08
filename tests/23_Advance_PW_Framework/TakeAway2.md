<!-- Visual replica of https://app.thetestingacademy.com/playwright/advance-framework.html
Rendered as inline HTML + CSS so the preview matches the live page. -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;family=JetBrains+Mono:wght@400;500;700&amp;display=swap">

<style>
/* The Testing Academy — Playwright Practice
   Shared theme: ChatGPT-inspired neutral workspace, light + dark, plus the
   collapsible sidebar shell used on every page.
   ----------------------------------------------------------------
   NOTE: Google Fonts are loaded via <link rel="stylesheet"> in each
   page's <head> (with preconnect) — not via @import here — so the
   font request doesn't block CSS parsing in a 3-deep chain. */

:root {
  --bg: #ffffff;
  --bg-2: #f7f7f8;
  --surface: #ffffff;
  --surface-2: #f7f7f8;
  --surface-3: #ececf1;
  --ink: #202123;
  --ink-soft: #343541;
  --muted: #6e6e80;
  --muted-2: #8e8ea0;
  --accent: #10a37f;
  --accent-strong: #0e8f70;
  --accent-soft: #d8f3ea;
  --accent-ghost: #ecf8f4;
  --border: #e5e5e5;
  --border-strong: #d9d9e3;
  --code-bg: #f1f1f3;
  --code-ink: #0f766e;
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.07);
  --shadow-lg: 0 18px 48px rgba(0, 0, 0, 0.11);
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 10px;
  --radius-xl: 12px;
  --sidebar-w: 280px;
  --sidebar-w-collapsed: 72px;
  --topbar-h: 60px;
  color-scheme: light;
}

[data-theme="dark"] {
  --bg: #212121;
  --bg-2: #171717;
  --surface: #2f2f2f;
  --surface-2: #171717;
  --surface-3: #3a3a3a;
  --ink: #ececf1;
  --ink-soft: #d9d9e3;
  --muted: #b4b4b4;
  --muted-2: #8e8ea0;
  --accent: #19c37d;
  --accent-strong: #2dd4a0;
  --accent-soft: #12382d;
  --accent-ghost: #183c32;
  --border: #3a3a3a;
  --border-strong: #565869;
  --code-bg: #171717;
  --code-ink: #8be9d0;
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 6px 20px rgba(0, 0, 0, 0.35);
  --shadow-lg: 0 18px 48px rgba(0, 0, 0, 0.45);
  color-scheme: dark;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  color: var(--ink);
  background: var(--bg);
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
  font-size: 15px;
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

a {
  color: inherit;
  text-decoration: none;
}

::selection {
  background: var(--accent-soft);
  color: var(--accent-strong);
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: var(--border-strong);
  border-radius: 999px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--muted);
}

/* ---------- Shell layout ---------- */

.tta-shell {
  display: grid;
  grid-template-columns: var(--sidebar-w) minmax(0, 1fr);
  min-height: 100vh;
  transition: grid-template-columns 0.24s ease;
}

.tta-shell[data-sidebar-collapsed="true"] {
  grid-template-columns: var(--sidebar-w-collapsed) minmax(0, 1fr);
}

/* ---------- Sidebar ---------- */

.tta-sidebar {
  position: sticky;
  top: 0;
  align-self: start;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--surface-2);
  border-right: 1px solid var(--border);
  overflow: hidden;
  transition: width 0.24s ease;
}

.tta-sidebar-head {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 14px;
  border-bottom: 1px solid var(--border);
}

.tta-brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  min-width: 0;
  color: var(--ink);
  font-weight: 700;
  letter-spacing: -0.015em;
}

.tta-brand-mark {
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  color: #fff;
  background: var(--accent);
  font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: -0.02em;
  box-shadow: 0 4px 12px rgba(16, 163, 127, 0.2);
}

.tta-brand-text {
  display: flex;
  flex-direction: column;
  min-width: 0;
  line-height: 1.15;
}

.tta-brand-text strong {
  font-size: 0.96rem;
  font-weight: 700;
  color: var(--ink);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tta-brand-text span {
  font-size: 0.74rem;
  color: var(--muted);
  font-weight: 500;
  letter-spacing: 0.02em;
}

.tta-icon-btn {
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  width: 32px;
  height: 32px;
  border: 1px solid transparent;
  border-radius: 8px;
  background: transparent;
  color: var(--muted);
  cursor: pointer;
  transition: 0.16s ease;
}

.tta-icon-btn:hover {
  border-color: var(--border);
  background: var(--surface);
  color: var(--ink);
}

.tta-icon-btn svg {
  width: 18px;
  height: 18px;
}

.tta-sidebar-search {
  padding: 12px 14px;
  border-bottom: 1px solid var(--border);
}

.tta-search-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 0 12px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--surface);
  color: var(--muted);
  transition: 0.16s ease;
}

.tta-search-wrap:focus-within {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-ghost);
}

.tta-search-wrap svg {
  width: 14px;
  height: 14px;
  flex: 0 0 auto;
}

.tta-search-wrap input {
  flex: 1;
  min-width: 0;
  border: 0;
  background: transparent;
  outline: none;
  color: var(--ink);
  font: inherit;
  font-size: 0.88rem;
}

.tta-search-wrap input::placeholder {
  color: var(--muted-2);
}

.tta-search-wrap kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  padding: 0 6px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--bg);
  color: var(--muted);
  font-family: "JetBrains Mono", monospace;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.tta-sidebar-nav {
  flex: 1;
  overflow-y: auto;
  padding: 12px 8px 16px;
}

.tta-nav-section {
  margin-bottom: 18px;
}

.tta-nav-section-title {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 6px;
  padding: 6px 10px;
  color: var(--muted);
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  user-select: none;
  border-radius: 6px;
  transition: background 0.14s ease, color 0.14s ease;
}

.tta-nav-section-title:hover {
  background: var(--accent-ghost);
  color: var(--accent-strong);
}

.tta-nav-section-title svg {
  width: 14px;
  height: 14px;
  flex: 0 0 14px;
}

.tta-nav-section-title .section-chevron {
  margin-left: auto;
  width: 14px;
  height: 14px;
  flex: 0 0 14px;
  opacity: 0.7;
  transition: transform 0.18s ease;
}

.tta-nav-section[data-collapsed="true"] .section-chevron {
  transform: rotate(-90deg);
}

.tta-nav-list {
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin: 0;
  padding: 0;
  list-style: none;
  max-height: 1600px;
  overflow: hidden;
  transition: max-height 0.22s ease;
}

.tta-nav-section[data-collapsed="true"] .tta-nav-list {
  max-height: 0;
}

.tta-nav-link {
  display: flex;
  align-items: center;
  gap: 10px;
  height: 34px;
  padding: 0 10px;
  border-radius: 8px;
  color: var(--ink-soft);
  font-size: 0.88rem;
  font-weight: 500;
  white-space: nowrap;
  transition: 0.14s ease;
}

.tta-nav-link:hover {
  background: var(--surface);
  color: var(--ink);
}

.tta-nav-link[aria-current="page"],
.tta-nav-link.is-active {
  color: var(--accent-strong);
  background: var(--accent-ghost);
  font-weight: 600;
}

[data-theme="dark"] .tta-nav-link[aria-current="page"],
[data-theme="dark"] .tta-nav-link.is-active {
  color: var(--accent-strong);
}

.tta-nav-link .nav-dot {
  display: grid;
  place-items: center;
  width: 18px;
  height: 18px;
  flex: 0 0 auto;
  color: var(--muted);
  transition: color 0.14s ease;
}

.tta-nav-link .nav-dot svg {
  width: 16px;
  height: 16px;
  stroke-width: 2;
}

.tta-nav-link:hover .nav-dot {
  color: var(--ink);
}

.tta-nav-link[aria-current="page"] .nav-dot,
.tta-nav-link.is-active .nav-dot {
  color: var(--accent);
}

.tta-nav-link.is-disabled {
  color: var(--muted-2);
  cursor: not-allowed;
  pointer-events: none;
}

.tta-nav-link.is-disabled .nav-dot {
  color: var(--muted-2);
  opacity: 0.7;
}

/* Fallback: if JS hasn't hydrated the dot yet, show a 6px circle so the layout
   doesn't shift. Once shell.js injects an <svg>, the icon takes over. */
.tta-nav-link .nav-dot:empty::before {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
}

.tta-nav-link .nav-tag {
  margin-left: auto;
  padding: 2px 6px;
  border-radius: 999px;
  background: var(--surface-3);
  color: var(--muted);
  font-size: 0.66rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.tta-nav-link .nav-tag.is-soon {
  background: var(--surface-2);
  color: var(--muted);
  padding: 1px 6px;
  border-radius: 4px;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: none;
  letter-spacing: 0;
}


.tta-sidebar-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 12px 14px;
  border-top: 1px solid var(--border);
  color: var(--muted);
  font-size: 0.74rem;
}

.tta-sidebar-foot small {
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tta-theme-toggle {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--surface);
  color: var(--ink-soft);
  cursor: pointer;
  transition: 0.16s ease;
}

.tta-theme-toggle:hover {
  color: var(--accent);
  border-color: var(--accent);
}

.tta-theme-toggle svg {
  width: 16px;
  height: 16px;
}

.tta-theme-toggle .icon-sun {
  display: none;
}

[data-theme="dark"] .tta-theme-toggle .icon-sun {
  display: block;
}

[data-theme="dark"] .tta-theme-toggle .icon-moon {
  display: none;
}

/* Collapsed sidebar — desktop only */
@media (min-width: 1024px) {
  .tta-shell[data-sidebar-collapsed="true"] .tta-sidebar {
    width: var(--sidebar-w-collapsed);
  }

  .tta-shell[data-sidebar-collapsed="true"] .tta-brand-text,
  .tta-shell[data-sidebar-collapsed="true"] .tta-sidebar-search,
  .tta-shell[data-sidebar-collapsed="true"] .tta-nav-section-title span,
  .tta-shell[data-sidebar-collapsed="true"] .tta-nav-link span:not(.nav-dot),
  .tta-shell[data-sidebar-collapsed="true"] .tta-nav-link .nav-tag,
  .tta-shell[data-sidebar-collapsed="true"] .tta-sidebar-foot small {
    display: none;
  }

  .tta-shell[data-sidebar-collapsed="true"] .tta-sidebar-head,
  .tta-shell[data-sidebar-collapsed="true"] .tta-sidebar-foot {
    justify-content: center;
  }

  .tta-shell[data-sidebar-collapsed="true"] .tta-nav-link {
    justify-content: center;
    padding: 0;
  }
}

/* ---------- Topbar ---------- */

.tta-topbar {
  position: sticky;
  top: 0;
  z-index: 30;
  display: flex;
  align-items: center;
  gap: 14px;
  height: var(--topbar-h);
  padding: 0 clamp(14px, 3vw, 28px);
  background: color-mix(in srgb, var(--bg) 88%, transparent);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.tta-mobile-toggle {
  display: grid;
  margin-right: 4px;
}

.tta-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--muted);
  font-size: 0.86rem;
  font-weight: 500;
  flex: 1;
  min-width: 0;
}

.tta-breadcrumb strong {
  color: var(--ink);
  font-weight: 600;
}

.tta-breadcrumb svg {
  width: 14px;
  height: 14px;
}

.tta-topbar-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* ---------- Main content area ---------- */

.tta-main {
  display: flex;
  flex-direction: column;
  min-width: 0;
  background: var(--bg);
}

.tta-content {
  flex: 1;
  padding: 32px clamp(18px, 4vw, 48px) 64px;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
}

/* ---------- Common utility classes ---------- */

.tta-display {
  font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.08;
}

.tta-mono {
  font-family: "JetBrains Mono", "SFMono-Regular", Consolas, monospace;
}

.tta-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--surface);
  color: var(--muted);
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.tta-eyebrow .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
}

.tta-pill {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 9px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--surface);
  color: var(--muted);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  white-space: nowrap;
}

.tta-pill.is-accent {
  border-color: color-mix(in srgb, var(--accent) 30%, transparent);
  color: var(--accent-strong);
  background: var(--accent-ghost);
}

.tta-pill.is-mint {
  border-color: rgba(22, 185, 129, 0.3);
  color: #15795c;
  background: rgba(22, 185, 129, 0.1);
}

[data-theme="dark"] .tta-pill.is-mint {
  color: #5dd9b3;
  background: rgba(22, 185, 129, 0.16);
}

.tta-pill.is-amber {
  border-color: rgba(217, 138, 73, 0.32);
  color: #a35316;
  background: rgba(217, 138, 73, 0.12);
}

[data-theme="dark"] .tta-pill.is-amber {
  color: #f5b888;
  background: rgba(217, 138, 73, 0.18);
}

.tta-pill.is-rose {
  border-color: rgba(217, 84, 89, 0.3);
  color: #b3343b;
  background: rgba(217, 84, 89, 0.12);
}

[data-theme="dark"] .tta-pill.is-rose {
  color: #f0a0a4;
  background: rgba(217, 84, 89, 0.18);
}

.tta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 40px;
  padding: 0 16px;
  border: 1px solid transparent;
  border-radius: 10px;
  background: var(--accent);
  color: #fff;
  font: inherit;
  font-weight: 600;
  font-size: 0.92rem;
  cursor: pointer;
  transition: 0.16s ease;
  box-shadow: 0 1px 2px rgba(16, 163, 127, 0.18);
}

.tta-button:hover {
  background: var(--accent-strong);
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(16, 163, 127, 0.22);
}

.tta-button.is-secondary {
  background: var(--surface);
  border-color: var(--border-strong);
  color: var(--ink);
  box-shadow: none;
}

.tta-button.is-secondary:hover {
  background: var(--surface-2);
  border-color: var(--accent);
  color: var(--accent-strong);
}

.tta-button.is-ghost {
  background: transparent;
  color: var(--accent-strong);
  box-shadow: none;
}

.tta-button.is-ghost:hover {
  background: var(--accent-ghost);
}

.tta-button svg {
  width: 16px;
  height: 16px;
}

.tta-card {
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--surface);
  box-shadow: var(--shadow-sm);
  transition: 0.18s ease;
}

.tta-card:hover {
  border-color: var(--border-strong);
  box-shadow: var(--shadow-md);
}

code,
.tta-code-inline {
  font-family: "JetBrains Mono", "SFMono-Regular", Consolas, monospace;
  font-size: 0.86em;
  font-weight: 500;
  padding: 0.1em 0.36em;
  border-radius: 6px;
  background: var(--code-bg);
  color: var(--code-ink);
}

/* ---------- Locator markings ----------
   Tiny inline chips that show students the test-relevant attributes
   (id, name, data-testid, role, etc.) next to each interactive element.
   Keep them subtle so they don't fight with the practice UI.        */

.tta-mark {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 6px;
  font-family: "JetBrains Mono", "SFMono-Regular", Consolas, monospace;
  font-size: 0.7rem;
  font-weight: 500;
  line-height: 1;
}

.tta-mark .tta-mark-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 7px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--surface-2);
  color: var(--muted);
  white-space: nowrap;
}

.tta-mark .tta-mark-chip b {
  color: var(--accent-strong);
  font-weight: 600;
}

.tta-mark .tta-mark-chip.is-id b {
  color: #357a8a;
}

[data-theme="dark"] .tta-mark .tta-mark-chip.is-id b {
  color: #75c4d4;
}

.tta-mark .tta-mark-chip.is-name b {
  color: #6a4ba2;
}

[data-theme="dark"] .tta-mark .tta-mark-chip.is-name b {
  color: #b39bdf;
}

.tta-mark .tta-mark-chip.is-test b {
  color: var(--accent-strong);
}

.tta-mark-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.tta-mark-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--surface);
  color: var(--muted);
  font-size: 0.74rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.14s ease;
}

.tta-mark-toggle:hover {
  border-color: var(--accent);
  color: var(--accent-strong);
}

.tta-mark-toggle input {
  width: 14px;
  height: 14px;
  accent-color: var(--accent);
  cursor: pointer;
}

body[data-marks="off"] .tta-mark {
  display: none;
}

/* ---------- Collapsible solution block ----------
   Use a native <details> with class="tta-solution" so the solution
   stays hidden until the student clicks the toggle. Keeps the page
   focused on the problem, not the answer.                        */

.tta-solution {
  margin: 18px 0 0;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--surface-2);
  overflow: hidden;
  transition: 0.18s ease;
}

.tta-solution[open] {
  border-color: var(--border-strong);
  box-shadow: var(--shadow-sm);
}

.tta-solution > summary {
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  color: var(--ink);
  font-weight: 600;
  font-size: 0.92rem;
  transition: 0.14s ease;
  user-select: none;
}

.tta-solution > summary::-webkit-details-marker {
  display: none;
}

.tta-solution > summary:hover {
  background: var(--surface);
}

.tta-solution > summary .tta-solution-chevron {
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  border-radius: 8px;
  background: var(--accent-ghost);
  color: var(--accent-strong);
  flex: 0 0 auto;
  transition: transform 0.18s ease;
}

.tta-solution > summary .tta-solution-chevron svg {
  width: 14px;
  height: 14px;
}

.tta-solution[open] > summary .tta-solution-chevron {
  transform: rotate(90deg);
}

.tta-solution > summary .tta-solution-label {
  flex: 1;
  min-width: 0;
}

.tta-solution > summary .tta-solution-label small {
  display: block;
  margin-top: 2px;
  color: var(--muted);
  font-size: 0.78rem;
  font-weight: 500;
}

.tta-solution > summary .tta-solution-hint {
  padding: 4px 10px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--surface);
  color: var(--muted);
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  white-space: nowrap;
}

.tta-solution[open] > summary .tta-solution-hint {
  border-color: color-mix(in srgb, var(--accent) 30%, transparent);
  background: var(--accent-ghost);
  color: var(--accent-strong);
}

.tta-solution-body {
  border-top: 1px solid var(--border);
  background: #0d1b2a;
}

[data-theme="dark"] .tta-solution-body {
  background: #14130f;
}

.tta-solution-body pre {
  margin: 0;
  padding: 18px 20px;
  overflow-x: auto;
  color: #d7efff;
  font-family: "JetBrains Mono", "SFMono-Regular", Consolas, monospace;
  font-size: 0.82rem;
  line-height: 1.7;
  font-weight: 500;
}

.tta-solution-body pre code {
  padding: 0;
  background: transparent;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
}

.tta-solution-body .token-comment {
  color: #7dd3fc;
}

.tta-solution-body .token-string {
  color: #fcd34d;
}

.tta-solution-body .token-keyword {
  color: #c4b5fd;
}

.tta-solution-body .token-method {
  color: #86efac;
}

.tta-solution-body .token-builtin {
  color: #fda4af;
}

/* ---------- Mobile drawer ---------- */

.tta-backdrop {
  position: fixed;
  inset: 0;
  z-index: 35;
  background: rgba(20, 18, 14, 0.45);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.18s ease;
}

@media (max-width: 1023px) {
  .tta-shell {
    grid-template-columns: 1fr;
  }

  .tta-sidebar {
    position: fixed;
    inset: 0 auto 0 0;
    z-index: 40;
    width: var(--sidebar-w);
    transform: translateX(-100%);
    transition: transform 0.22s ease;
    box-shadow: var(--shadow-lg);
  }

  .tta-shell[data-mobile-open="true"] .tta-sidebar {
    transform: translateX(0);
  }

  .tta-shell[data-mobile-open="true"] .tta-backdrop {
    opacity: 1;
    pointer-events: auto;
  }
}

@media (max-width: 640px) {
  .tta-content {
    padding: 22px 14px 48px;
  }
}

/* ---------- Tab strip (Page / Practice / Solution) ---------- */

.tta-tabs {
  display: flex;
  gap: 4px;
  padding: 4px;
  margin: 0 0 18px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface-2);
  overflow-x: auto;
  scrollbar-width: none;
}
.tta-tabs::-webkit-scrollbar { display: none; }

.tta-tabs > button {
  flex: 0 1 auto;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 36px;
  padding: 0 14px;
  border: 1px solid transparent;
  border-radius: 8px;
  background: transparent;
  color: var(--ink-soft);
  font: inherit;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: 0.14s ease;
}
.tta-tabs > button:hover { color: var(--accent-strong); }
.tta-tabs > button[aria-selected="true"] {
  background: var(--surface);
  border-color: var(--border);
  color: var(--accent-strong);
  box-shadow: var(--shadow-sm);
}
.tta-tabs > button:focus-visible {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-ghost);
}
.tta-tabs > button .tab-count {
  padding: 1px 7px;
  border-radius: 999px;
  background: var(--surface-3);
  color: var(--muted);
  font-family: "JetBrains Mono", monospace;
  font-size: 0.72rem;
  font-weight: 600;
}
.tta-tabs > button[aria-selected="true"] .tab-count {
  background: var(--accent-ghost);
  color: var(--accent-strong);
}

.tta-tabpanel { display: block; }
.tta-tabpanel[hidden] { display: none; }

.tta-tab-empty {
  padding: 18px 20px;
  border: 1px dashed var(--border-strong);
  border-radius: var(--radius-lg);
  background: var(--surface-2);
  color: var(--muted);
  font-size: 0.92rem;
  line-height: 1.6;
}

.tta-tabpanel > .tta-solution-body,
.tta-tabpanel > .tta-practice-card {
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
}
.tta-tabpanel > .tta-practice-card {
  background: var(--surface);
  padding: 22px 24px;
}
.tta-tabpanel > .tta-practice-card h3 {
  margin: 0 0 6px;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--ink);
}
.tta-tabpanel > .tta-practice-card .practice-lead {
  margin: 0 0 14px;
  color: var(--muted);
  font-size: 0.94rem;
  line-height: 1.6;
}
.tta-tabpanel > .tta-practice-card ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 10px;
}
.tta-tabpanel > .tta-practice-card ul li {
  padding: 12px 14px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--bg);
  color: var(--ink-soft);
  font-size: 0.92rem;
  line-height: 1.55;
}
.tta-tabpanel > .tta-practice-card ul li b {
  color: var(--accent-strong);
}
.tta-tabpanel > .tta-practice-card ol.q-list {
  margin: 12px 0 0;
  padding: 0 0 0 22px;
  display: grid;
  gap: 10px;
  color: var(--ink-soft);
  font-size: 0.94rem;
  line-height: 1.65;
}
.tta-tabpanel > .tta-practice-card ol.q-list li::marker { color: var(--accent-strong); font-weight: 700; }

/* ----------------------------------------------------------------
   Global promo banner (AI Tester Blueprint launch)
   Injected by shell.js on every practice page. Persists dismissal
   in localStorage as tta-promo-banner-dismissed.
   ---------------------------------------------------------------- */
:root { --banner-h: 0px; }
body[data-banner="on"] { --banner-h: 48px; }
body[data-banner="on"] .tta-sidebar { top: var(--banner-h); height: calc(100vh - var(--banner-h)); }
body[data-banner="on"] .tta-topbar { top: var(--banner-h); }
body[data-banner="on"] .tta-sidebar.is-collapsed,
body[data-banner="on"] .side-rail { top: calc(var(--banner-h) + 18px); }

.tta-promo-banner {
  position: sticky;
  top: 0;
  z-index: 60;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px 44px 10px 16px;
  height: 48px;
  background: linear-gradient(90deg, #6d28d9, #7c3aed, #4f46e5);
  color: #fff;
  font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
  font-size: 0.84rem;
  font-weight: 500;
  box-shadow: 0 2px 12px rgba(76, 29, 149, 0.25);
}

.tta-promo-banner .promo-live {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 2px 8px;
  background: rgba(239, 68, 68, 0.95);
  border-radius: 999px;
  font-size: 0.66rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  animation: tta-promo-pulse 1.6s ease-in-out infinite;
}
.tta-promo-banner .promo-live .promo-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: #fff;
}
@keyframes tta-promo-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.6); }
  50%      { box-shadow: 0 0 0 5px rgba(239, 68, 68, 0); }
}

.tta-promo-banner .promo-title { font-weight: 700; }
.tta-promo-banner a.promo-title { color: inherit; text-decoration: none; }
.tta-promo-banner a.promo-title:hover { text-decoration: underline; text-underline-offset: 2px; }
.tta-promo-banner .promo-badge {
  padding: 2px 8px;
  background: rgba(251, 191, 36, 0.2);
  color: #fde68a;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 700;
}
.tta-promo-banner .promo-sep { opacity: 0.4; }
.tta-promo-banner .promo-price s { opacity: 0.55; margin-right: 4px; font-size: 0.74rem; }
.tta-promo-banner .promo-price b { font-weight: 700; }
.tta-promo-banner .promo-price em {
  margin-left: 4px;
  padding: 1px 6px;
  background: rgba(34, 197, 94, 0.3);
  color: #bbf7d0;
  border-radius: 4px;
  font-size: 0.66rem;
  font-weight: 700;
  font-style: normal;
}
.tta-promo-banner .promo-coupon code {
  padding: 1px 6px;
  background: rgba(251, 191, 36, 0.2);
  color: #fde68a;
  border-radius: 4px;
  font-family: "JetBrains Mono", ui-monospace, monospace;
  font-size: 0.74rem;
  font-weight: 700;
}
.tta-promo-banner .promo-cta {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 14px;
  background: #fff;
  color: #6d28d9;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.78rem;
  text-decoration: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.18);
  transition: transform 0.14s ease;
}
.tta-promo-banner .promo-cta:hover { transform: translateY(-1px); }
.tta-promo-banner .promo-wa {
  display: inline-grid;
  place-items: center;
  width: 28px; height: 28px;
  background: #22c55e;
  border-radius: 8px;
  color: #fff;
  font-size: 0.92rem;
  text-decoration: none;
}
.tta-promo-banner .promo-wa:hover { background: #16a34a; }
.tta-promo-banner .promo-close {
  position: absolute;
  right: 8px; top: 50%;
  transform: translateY(-50%);
  width: 28px; height: 28px;
  border: 0;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  font: inherit; font-size: 0.95rem;
  line-height: 1;
}
.tta-promo-banner .promo-close:hover { background: rgba(255, 255, 255, 0.22); }

@media (max-width: 900px) {
  body[data-banner="on"] { --banner-h: 60px; }
  .tta-promo-banner { height: auto; padding: 8px 40px 8px 12px; gap: 6px; font-size: 0.78rem; }
  .tta-promo-banner .promo-sep,
  .tta-promo-banner .promo-badge,
  .tta-promo-banner .promo-price s { display: none; }
}
@media (max-width: 640px) {
  body[data-banner="on"] { --banner-h: 80px; }
  .tta-promo-banner .promo-coupon { display: none; }
}

</style>

<style>
    .page-hero { display:flex; flex-direction:column; gap:12px; margin-bottom:24px; }
    .page-hero h1 { margin:0; font-family:"Inter",ui-sans-serif,system-ui,sans-serif; font-size:clamp(1.9rem,4vw,2.6rem); font-weight:600; letter-spacing:-0.025em; color:var(--ink); line-height:1.05; }
    .page-hero h1 em { font-style:italic; color:var(--accent); font-weight:500; }
    .page-hero p { max-width:74ch; margin:0; color:var(--muted); font-size:1rem; line-height:1.7; }

    .layout { display:grid; grid-template-columns:minmax(0,1fr) minmax(280px,360px); gap:22px; align-items:start; }
    .stage-card { padding:22px; border:1px solid var(--border); border-radius:var(--radius-lg); background:var(--surface); box-shadow:var(--shadow-sm); }
    .stage-card + .stage-card { margin-top:16px; }
    .stage-card h2 { margin:0 0 6px; font-size:1.15rem; font-weight:600; color:var(--ink); }
    .stage-card h3 { margin:18px 0 4px; font-size:1rem; font-weight:600; color:var(--ink); }
    .stage-card .help { margin:0 0 12px; color:var(--muted); font-size:0.92rem; line-height:1.65; }
    .stage-card p { margin:10px 0; color:var(--ink-soft); font-size:0.94rem; line-height:1.7; }
    .stage-card ul, .stage-card ol { margin:8px 0; padding-left: 22px; color:var(--ink-soft); font-size:0.93rem; line-height:1.7; }
    .stage-card li { margin: 4px 0; }

    .callout { padding:12px 14px; margin-top:12px; border-left:3px solid var(--accent); background:var(--accent-ghost); color:var(--ink-soft); font-size:0.9rem; line-height:1.6; border-radius:6px; }
    .callout strong { color:var(--accent-strong); }

    .target-row {
      display:flex; flex-wrap:wrap; align-items:center; gap:8px;
      padding:8px 10px;
      border:1px dashed var(--border-strong); border-radius:10px;
      background:var(--surface-2);
      font-family:"JetBrains Mono", monospace; font-size:0.82rem;
      margin: 12px 0;
    }
    .target-row b { color: var(--accent-strong); }

    .code-block { background:#0b1424; border-radius:10px; overflow:hidden; border:1px solid var(--border); margin-top:12px; }
    .code-head { padding:8px 14px; background:#152033; color:#94a3b8; font-family:"JetBrains Mono", monospace; font-size:0.78rem; border-bottom:1px solid #1f2a3f; display:flex; gap:8px; align-items:center; }
    .code-head .dot { width:10px; height:10px; border-radius:50%; }
    .code-head .dot.red { background:#ff5f56; } .code-head .dot.yellow { background:#ffbd2e; } .code-head .dot.green { background:#27ca40; }
    .code-head span:last-child { margin-left:auto; }
    .code-body { padding:14px 16px; overflow-x:auto; font-family:"JetBrains Mono", monospace; font-size:0.82rem; color:#d6e0f5; line-height:1.7; background:#0b1424; margin:0; }
    .code-body code, .code-body code * { background: transparent !important; color: inherit; padding: 0; border-radius: 0; font: inherit; }
    .code-body .k { color:#c792ea !important; } .code-body .s { color:#c3e88d !important; } .code-body .f { color:#82aaff !important; } .code-body .c { color:#5d6b89 !important; } .code-body .n { color:#f78c6c !important; } .code-body .p { color:#ffcb6b !important; } .code-body .t { color:#ff9cac !important; }

    .toc-jump { display:flex; flex-wrap:wrap; gap:6px; margin-bottom: 18px; position: sticky; top: calc(var(--topbar-h) + 6px); z-index: 2; padding: 8px; background: var(--bg); border-radius: 12px; border: 1px solid var(--border); }
    .toc-jump a {
      padding:6px 10px; border:1px solid var(--border); border-radius:999px;
      background:var(--surface); color:var(--ink-soft);
      font-size:0.84rem; font-weight:600; text-decoration:none;
    }
    .toc-jump a:hover { border-color:var(--accent); color:var(--accent-strong); }

    .stack-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; margin-top: 10px; }
    .stack-card { padding: 12px 14px; border: 1px solid var(--border); border-radius: 10px; background: var(--surface-2); }
    .stack-card h4 { margin: 0 0 4px; font-size: 0.95rem; font-weight: 600; color: var(--ink); display: flex; align-items: center; gap: 6px; }
    .stack-card h4 a { color: var(--accent-strong); text-decoration: none; font-size: 0.78rem; font-weight: 500; }
    .stack-card h4 a:hover { text-decoration: underline; }
    .stack-card p { margin: 0; color: var(--muted); font-size: 0.84rem; line-height: 1.55; }

    .folder-tree { padding: 14px 16px; background:#0b1424; color:#d6e0f5; font-family:"JetBrains Mono", monospace; font-size:0.78rem; line-height:1.55; border-radius:10px; overflow-x:auto; white-space: pre; border: 1px solid var(--border); }
    .folder-tree .c { color:#5d6b89; }

    .side-rail { display:flex; flex-direction:column; gap:16px; align-self:start; position:sticky; top:calc(var(--topbar-h) + 18px); }
    .side-card { padding:18px; border:1px solid var(--border); border-radius:var(--radius-lg); background:var(--surface); }
    .side-card h3 { margin:0 0 10px; font-size:1rem; font-weight:600; color:var(--ink); }
    .side-card ul { margin:0; padding:0; list-style:none; display:grid; gap:8px; }
    .side-card li { padding:10px 12px; border:1px solid var(--border); border-radius:10px; background:var(--bg); color:var(--ink-soft); font-size:0.88rem; line-height:1.5; }
    .side-card li b { color:var(--accent-strong); }
    .side-card a { color:var(--accent-strong); text-decoration:none; font-weight:600; }
    .side-card a:hover { text-decoration:underline; }

    .run-grid { display:grid; gap:8px; margin-top:10px; }
    .run-cmd { padding:10px 14px; background:#0b1424; color:#d6e0f5; border-radius:8px; font-family:"JetBrains Mono", monospace; font-size:0.82rem; border:1px solid var(--border); display:flex; gap:10px; align-items:center; }
    .run-cmd .arrow { color:#82aaff; }

    .report-svg { width:100%; max-width:560px; height:auto; margin-top:14px; background:#0b1424; border-radius:10px; padding:16px; border:1px solid var(--border); }

    @media (max-width:1100px) { .layout { grid-template-columns:1fr; } .side-rail { position:static; } .stack-grid { grid-template-columns: 1fr; } }
</style>

<main class="tta-content">
<section class="page-hero" aria-labelledby="page-title">
<span class="tta-eyebrow"><span class="dot"></span>Concept reference - End to end framework</span>
<h1 id="page-title">Advance Playwright <em>framework</em> - build it folder by folder</h1>
<p>
A step-by-step walk through every folder of the TTA Advance Playwright Framework - TypeScript,
Page Object Model, fixtures, data-driven specs, environment config, a custom HTML reporter, Docker,
and a sharded GitHub Actions workflow. Every code snippet is copy-paste-ready and targets the
TTA practice pages at <code>https://app.thetestingacademy.com/playwright/</code>.
</p>
</section>

<nav class="toc-jump" aria-label="Jump to topic">
<a href="#arch">0. Architecture</a>
<a href="#why">1. Why a framework</a>
<a href="#stack">2. Tech stack</a>
<a href="#folders">3. Folder structure</a>
<a href="#build">4. Build it</a>
<a href="#scenario">5. Worked scenario</a>
<a href="#run">6. Run it</a>
<a href="#ci">7. CI / GitHub Actions</a>
<a href="#next">8. Where to go next</a>
</nav>

<style>
          /* Architecture diagram (HLD) */
          .arch-wrap { display:grid; grid-template-columns: 1fr 1fr; gap: 18px; margin: 18px 0 28px; }
          @media (max-width: 980px) { .arch-wrap { grid-template-columns: 1fr; } }
          .arch-col {
            border: 1px solid var(--border); border-radius: 14px;
            background: var(--surface);
            padding: 0;
            display: flex; flex-direction: column; gap: 0;
            overflow: hidden;
          }
          .arch-col-head {
            padding: 14px 18px;
            background: #dbe8ff;
            color: #0b3a6f;
            font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
            font-weight: 700;
            font-size: 0.92rem;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            text-align: center;
            border-bottom: 1px solid #b6cdec;
          }
          .arch-col-body { padding: 16px; display: grid; gap: 12px; }
          .arch-block {
            border: 1px solid var(--border);
            border-radius: 8px;
            padding: 12px 14px;
            background: var(--bg);
          }
          .arch-block > h4 {
            margin: 0 0 8px;
            font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
            font-size: 0.96rem;
            font-weight: 700;
            color: var(--ink);
          }
          .arch-sub {
            border: 1px solid var(--border-strong);
            border-radius: 6px;
            padding: 10px 12px;
            background: var(--surface);
            font-family: "JetBrains Mono", ui-monospace, monospace;
            font-size: 0.78rem;
            line-height: 1.55;
            color: var(--ink-soft);
          }
          .arch-sub + .arch-sub { margin-top: 8px; }
          .arch-sub b {
            display: block;
            font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
            font-size: 0.84rem;
            color: var(--accent-strong);
            margin-bottom: 4px;
            font-weight: 700;
          }
          .arch-sub .hl { background: #fff3bf; padding: 0 3px; border-radius: 2px; }
          .arch-sub pre { margin: 0; white-space: pre-wrap; }
          .arch-hero {
            margin: 18px 0 6px;
            text-align: center;
          }
          .arch-hero h2 {
            margin: 0 0 6px;
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--ink);
          }
          .arch-hero p {
            margin: 0;
            color: var(--muted);
            font-size: 0.92rem;
          }
        </style>

<article class="stage-card" id="arch" style="padding: 20px 24px;">
<div class="arch-hero">
<h2>Architecture - the big picture (TTACart suite)</h2>
<p>Page Object Model + fixture-based architecture. TypeScript. Playwright Test runner. All 10 boxes use the actual TTACart pages (<code>/playwright/ttacart/...</code>) as the system under test. Left column = framework code. Right column = config + infra.</p>
</div>

<div class="arch-wrap">
<!-- ============= LEFT: framework code ============= -->
<div class="arch-col">
<div class="arch-col-head">Framework code (TTACart)</div>
<div class="arch-col-body">

<div class="arch-block" style="border-left:5px solid #db2777;background:#fff1f8;">
<h4 style="color:#9d174d;">1. Page Objects - <code>src/pages/</code></h4>
<div class="arch-sub">
<b>LoginPage.ts</b> - <code>/ttacart/index.html</code>

<pre>locators: usernameInput, passwordInput, loginBtn, errorBanner
- async open()
- async loginAs(username, password): Promise&lt;InventoryPage&gt;
- async expectErrorContains(text)</pre>
</div>
<div class="arch-sub">
<b>InventoryPage.ts</b> - <code>/ttacart/inventory.html</code>

<pre>locators: cardList, sortSelect, cartBadge, addBtn(productId)
- async sortBy(value: 'az'|'za'|'lohi'|'hilo')
- async addToCart(productId: string)
- async cartCount(): Promise&lt;number&gt;
- async openItem(productId): Promise&lt;ItemDetailPage&gt;</pre>
</div>
<div class="arch-sub">
<b>ItemDetailPage.ts</b> - <code>/ttacart/inventory-item.html</code>

<pre>locators: name, desc, price, addBtn, backBtn
- async addToCart()
- async readPrice(): Promise&lt;string&gt;</pre>
</div>
<div class="arch-sub">
<b>CartPage.ts</b> - <code>/ttacart/cart.html</code>

<pre>- async itemCount(): Promise&lt;number&gt;
- async remove(productId)
- async continueShopping(): InventoryPage
- async checkout(): CheckoutStepOnePage</pre>
</div>
<div class="arch-sub">
<b>CheckoutStepOnePage.ts</b> - <code>/ttacart/checkout-step-one.html</code>

<pre>- async fillGuest({ firstName, lastName, postalCode })
- async continue(): CheckoutStepTwoPage
- async expectError(text)</pre>
</div>
<div class="arch-sub">
<b>CheckoutStepTwoPage.ts</b> - <code>/ttacart/checkout-step-two.html</code>

<pre>- async readSubtotal(): Promise&lt;string&gt;
- async readTax(): Promise&lt;string&gt;
- async readTotal(): Promise&lt;string&gt;
- async finish(): CheckoutCompletePage</pre>
</div>
<div class="arch-sub">
<b>CheckoutCompletePage.ts</b> - <code>/ttacart/checkout-complete.html</code>

<pre>- async assertThankYou()
- async backHome(): InventoryPage</pre>
</div>
</div>

<div class="arch-block" style="border-left:5px solid #2563eb;background:#eff6ff;">
<h4 style="color:#1e40af;">2. Fixtures + Specs - <code>src/fixtures/</code> + <code>src/tests/</code></h4>
<div class="arch-sub">
<b>fixtures/test-base.ts</b>

<pre>import { test as base } from '@playwright/test';
type Fix = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutOne: CheckoutStepOnePage;
  checkoutTwo: CheckoutStepTwoPage;
};
export const test = base.extend&lt;Fix&gt;({
  loginPage: async ({ page }, use) =&gt; { await use(new LoginPage(page)); },
  inventoryPage: async ({ page }, use) =&gt; { await use(new InventoryPage(page)); },
  // ... one fixture per page
});
export { expect } from '@playwright/test';</pre>
</div>
<div class="arch-sub">
<b>tests/login.spec.ts</b>

<pre>test('@smoke standard_user logs in', async ({ loginPage, inventoryPage }) =&gt; {
  await loginPage.open();
  await loginPage.loginAs('standard_user', 'tta_secret');
  await expect(inventoryPage.cardList).toHaveCount(6);
});

test('@regression locked_out_user sees error', async ({ loginPage }) =&gt; {
  await loginPage.open();
  await loginPage.loginAs('locked_out_user', 'tta_secret');
  await loginPage.expectErrorContains('locked out');
});</pre>
</div>
<div class="arch-sub">
<b>tests/checkout.spec.ts</b>

<pre>test('@e2e add 2 items and finish checkout', async ({
  loginPage, inventoryPage, cartPage, checkoutOne, checkoutTwo,
}) =&gt; {
  await loginPage.open();
  await loginPage.loginAs('standard_user', 'tta_secret');
  await inventoryPage.addToCart('tta-practice-backpack');
  await inventoryPage.addToCart('tta-bike-light');
  await expect(inventoryPage.cartBadge).toHaveText('2');
  await cartPage.checkout();
  await checkoutOne.fillGuest({ firstName: 'Aarav', lastName: 'S', postalCode: '560001' });
  await checkoutOne.continue();
  await checkoutTwo.finish();
  await expect(page).toHaveURL(/checkout-complete\.html/);
});</pre>
</div>
</div>

<div class="arch-block" style="border-left:5px solid #f59e0b;background:#fffbeb;">
<h4 style="color:#92400e;">3. Utils / Helpers - <code>src/utils/</code></h4>
<div class="arch-sub">
<b>UtilElementLocator.ts</b>

<pre>type Flex = string | Locator;
class UtilElementLocator {
  click / doubleClick / rightClick / hover
  fill / type / pressSequentially / clear
  getText / getInnerText / getAllTexts
  getAttr / getValue / count
  isVisible / isEnabled / isChecked / isEditable
  waitForVisible / waitForPageLoad
  selectByText / selectByValue / selectByIndex
}</pre>
</div>
<div class="arch-sub">
<b>FileReader.ts</b>

<pre>readJSON&lt;T&gt;(path) - typed JSON fixture
readCSV&lt;T&gt;(path)  - csv-parse/sync
readXLSX&lt;T&gt;(path, sheet) - xlsx
writeJSON(path, data) - snapshot write</pre>
</div>
<div class="arch-sub">
<b>DataFactory.ts</b>

<pre>generateUser()    - faker name + email
generateCard()    - card number, expiry, cvc
randomZip()
pickProduct(): { id, name, price }</pre>
</div>
<div class="arch-sub">
<b>Logger.ts (Winston)</b>

<pre>logger.info(scope, msg, meta?)
levels: debug | info | warn | error
transports: console + logs/run-{ts}.log</pre>
</div>
</div>

<div class="arch-block" style="border-left:5px solid #16a34a;background:#f0fdf4;">
<h4 style="color:#166534;">4. Test data - <code>src/testdata/</code></h4>
<div class="arch-sub">
<b>users.json</b>

<pre>[
  { "user": "standard_user",           "pwd": "tta_secret", "kind": "ok" },
  { "user": "locked_out_user",         "pwd": "tta_secret", "kind": "blocked" },
  { "user": "problem_user",            "pwd": "tta_secret", "kind": "broken-ui" },
  { "user": "performance_glitch_user", "pwd": "tta_secret", "kind": "slow" },
  { "user": "error_user",              "pwd": "tta_secret", "kind": "flaky" },
  { "user": "visual_user",             "pwd": "tta_secret", "kind": "visual" }
]</pre>
</div>
<div class="arch-sub">
<b>products.csv</b>

<pre>id,name,price
tta-practice-backpack,TTA Practice Backpack,29.99
tta-bike-light,TTA Bike Light,9.99
tta-bolt-tshirt,TTA Bolt T-Shirt,15.99
tta-fleece-jacket,TTA Fleece Jacket,49.99
tta-junior-tester-onesie,TTA Junior Tester Onesie,7.99
test-allthethings-tshirt-red,Test.allTheThings T-Shirt (Red),15.99</pre>
</div>
<div class="arch-sub">
<b>register.xlsx</b>

<pre>sheet: checkout
  firstName | lastName | postalCode | expected
sheet: cards
  brand | number | expiry | cvc</pre>
</div>
</div>

<div class="arch-block" style="border-left:5px solid #06b6d4;background:#ecfeff;">
<h4 style="color:#155e75;">5. Observability - <code>logs/</code> + <code>tta-report/</code></h4>
<div class="arch-sub">
<b>logs/</b>

<pre>logs/run-{ISO}.log     - Winston output
logs/network/{spec}.har- HAR per spec
logs/console/{spec}.txt- browser console</pre>
</div>
<div class="arch-sub">
<b>tta-report/ (custom HTML)</b>

<pre>src/utils/CustomTTAReporter.ts
- onBegin / onTestBegin / onTestEnd / onEnd
- groups by spec file + project + tag
- inlines screenshot thumbs + trace links
- writes to tta-report/index.html</pre>
</div>
<div class="arch-sub">
<b>What to attach on failure</b>

<pre>- trace.zip
- screenshot.png (full-page)
- console.txt
- network.har
- the failing locator + selector chain</pre>
</div>
</div>

</div>
</div>

<!-- ============= RIGHT: config + infra ============= -->
<div class="arch-col">
<div class="arch-col-head">Configuration &amp; infrastructure</div>
<div class="arch-col-body">

<div class="arch-block" style="border-left:5px solid #8b5cf6;background:#f5f3ff;">
<h4 style="color:#5b21b6;">6. <code>playwright.config.ts</code> + envs</h4>
<div class="arch-sub">

<pre>import { defineConfig, devices } from '@playwright/test';

const ENV = process.env.TTA_ENV ?? 'qa';
const BASES = {
  qa  : 'https://app.thetestingacademy.com',
  stg : 'https://staging.thetestingacademy.com',
  dev : 'http://localhost:8082',
  prod: 'https://app.thetestingacademy.com',
};

export default defineConfig({
  testDir: './src/tests',
  timeout: 30_000,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : 6,
  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['json', { outputFile : 'playwright-report.json' }],
    ['allure-playwright'],
    ['./src/utils/CustomTTAReporter'],
  ],
  use: {
    baseURL: BASES[ENV],
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium',      use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox',       use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit',        use: { ...devices['Desktop Safari'] } },
    { name: 'mobile-chrome', use: { ...devices['Pixel 5'] } },
  ],
});</pre>
<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px;">
<span style="padding:2px 8px;border-radius:4px;font-size:0.74rem;font-weight:700;background:#dbeafe;color:#1e40af;">QA</span>
<span style="padding:2px 8px;border-radius:4px;font-size:0.74rem;font-weight:700;background:#fef3c7;color:#92400e;">STG</span>
<span style="padding:2px 8px;border-radius:4px;font-size:0.74rem;font-weight:700;background:#dcfce7;color:#166534;">DEV</span>
<span style="padding:2px 8px;border-radius:4px;font-size:0.74rem;font-weight:700;background:#fee2e2;color:#991b1b;">PROD</span>
</div>
</div>
</div>

<div class="arch-block" style="border-left:5px solid #ec4899;background:#fdf2f8;">
<h4 style="color:#9d174d;">7. Test execution + tags</h4>
<div class="arch-sub">
<b>Run commands</b>

<pre>TTA_ENV=qa  npx playwright test
            npx playwright test --project=chromium
            npx playwright test --grep @smoke
            npx playwright test --headed --workers=4
            npx playwright test --debug
TTA_ENV=stg npx playwright test --shard=1/4</pre>
</div>
<div class="arch-sub">
<b>Tag suites</b>

<pre>@smoke      - happy-path login + 1 add-to-cart + finish
@regression - 6 test users + sort + filter + edge cases
@e2e        - full checkout 2-step + payment + complete
@visual     - screenshot diff for visual_user
@flaky      - quarantine for error_user / perf_glitch</pre>
</div>
</div>

<div class="arch-block" style="border-left:5px solid #f97316;background:#fff7ed;">
<h4 style="color:#9a3412;">8. Reports + artifacts</h4>
<div class="arch-sub">
<b>HTML reporter (default)</b>

<pre>playwright-report/index.html
- Tests grouped by spec + project
- Screenshots / video / trace links
- Filterable by status + project</pre>
</div>
<div class="arch-sub">
<b>Allure</b>

<pre>allure-playwright reporter -&gt; allure-results/
allure generate ./allure-results --clean -o ./allure-report
allure open ./allure-report
- History across runs, categories, severity</pre>
</div>
<div class="arch-sub">
<b>Trace viewer</b>

<pre>npx playwright show-trace trace.zip
- Step-by-step timeline + DOM snapshots + network</pre>
</div>
<div class="arch-sub">
<b>Artifacts on failure</b>

<pre>test-results/
  {spec}-{title}/
    trace.zip
    screenshot-1.png
    video.webm
    error-context.md</pre>
</div>
</div>

<div class="arch-block" style="border-left:5px solid #0891b2;background:#ecfeff;">
<h4 style="color:#155e75;">9. CI/CD + Docker + cloud grid</h4>
<div class="arch-sub">
<b>.github/workflows/playwright.yml</b>

<pre>on: [push, pull_request]
jobs:
  test:
    strategy: { matrix: { shard: [1/4, 2/4, 3/4, 4/4] } }
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4 with: node-version: 20
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: TTA_ENV=qa npx playwright test --shard=${{ matrix.shard }}
      - uses: actions/upload-artifact@v4
        if: always()
        with: { name: report-${{ matrix.shard }}, path: playwright-report/ }
  merge:
    needs: test
    runs: playwright merge-reports
    publish: github-pages -&gt; tta-report/</pre>
</div>
<div class="arch-sub">
<b>Docker</b>

<pre>FROM mcr.microsoft.com/playwright:v1.57.0-jammy
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ENV TTA_ENV=qa
CMD ["npx", "playwright", "test"]</pre>
</div>
<div class="arch-sub">
<b>Remote / cross-browser cloud</b>

<pre>BrowserStack Automate - connectOptions.wsEndpoint with caps
LambdaTest HyperExecute - autosplit + concurrency
Microsoft Playwright Service - regional workers
Sauce Labs - capabilities object</pre>
</div>
<div class="arch-sub">
<b>Jenkins (optional)</b>

<pre>Jenkinsfile
agent docker { image 'mcr.microsoft.com/playwright:v1.57.0-jammy' }
stages: install -&gt; test -&gt; report
post { always { junit, allure, archiveArtifacts } }</pre>
</div>
</div>

<div class="arch-block" style="border-left:5px solid #d97706;background:#fef9c3;">
<h4 style="color:#854d0e;">10. Quality + package management + VCS</h4>
<div class="arch-sub">
<b>package.json scripts</b>

<pre>"test"          : "playwright test",
"test:smoke"    : "playwright test --grep @smoke",
"test:shard"    : "playwright test --shard=$SHARD",
"report"        : "playwright show-report",
"report:allure" : "allure generate ./allure-results -o ./allure-report",
"lint"          : "eslint . &amp;&amp; prettier --check .",
"typecheck"     : "tsc --noEmit"</pre>
</div>
<div class="arch-sub">
<b>Quality gates</b>

<pre>eslint            - ban absolute XPath, ban nth-child
prettier          - format on save
husky + lint-staged - run lint+typecheck on pre-commit
commitlint        - conventional commits
.editorconfig     - 2 spaces / LF / trim trailing
tsc --noEmit      - blocks merge on type errors</pre>
</div>
<div class="arch-sub">
<b>Dependencies snapshot</b>

<pre>devDependencies:
  @playwright/test
  @faker-js/faker
  csv-parse
  xlsx
  dotenv
  winston
  allure-playwright
  typescript
  eslint / prettier / husky / commitlint</pre>
</div>
<div class="arch-sub">
<b>Version control</b>

<pre>.gitignore: node_modules/, test-results/, playwright-report/, logs/
branching : main + feature/* + fix/*
PR rules  : 2 approvals + CI green + no draft merges
.nvmrc    : 20    .npmrc: engine-strict=true</pre>
</div>
</div>

</div>
</div>
</div>

<p class="help" style="text-align:center; margin-top: 18px;">Each card below the diagram zooms into one box - read top to bottom or jump via the TOC chips above. 10 boxes: 5 framework code on the left, 5 config + infra on the right. Every code reference targets a real TTACart page under <code>/playwright/ttacart/</code>.</p>
</article>

<style>
          .clone-banner {
            margin: 18px 0 28px;
            padding: 22px 26px;
            border-radius: 16px;
            background: linear-gradient(135deg, #0f172a, #1e293b);
            color: #e2e8f0;
            display: grid;
            grid-template-columns: minmax(0, 1.05fr) minmax(220px, 0.95fr);
            gap: 22px;
            align-items: center;
            border: 1px solid #1e293b;
            box-shadow: 0 18px 40px rgba(15, 23, 42, 0.25);
          }
          @media (max-width: 900px) { .clone-banner { grid-template-columns: 1fr; } }
          .clone-banner h3 { margin: 0 0 6px; color: #f8fafc; font-size: 1.25rem; }
          .clone-banner p { margin: 0 0 12px; color: #cbd5e1; font-size: 0.95rem; line-height: 1.55; max-width: 60ch; }
          .clone-banner .meta-row {
            display: flex; flex-wrap: wrap; gap: 6px;
            font-size: 0.72rem; font-weight: 700;
          }
          .clone-banner .meta-row .chip {
            padding: 3px 10px; border-radius: 999px;
            background: rgba(255,255,255,0.08);
            color: #e2e8f0;
            border: 1px solid rgba(255,255,255,0.16);
          }
          .clone-banner .actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; }
          .clone-banner .actions a {
            display: inline-flex; align-items: center; gap: 6px;
            padding: 9px 14px;
            border-radius: 8px;
            font-weight: 700;
            font-size: 0.86rem;
            text-decoration: none;
            transition: transform 0.14s ease;
          }
          .clone-banner .actions a:hover { transform: translateY(-1px); }
          .clone-banner .actions .primary { background: #22c55e; color: #052e16; }
          .clone-banner .actions .secondary { background: rgba(255,255,255,0.1); color: #f8fafc; border: 1px solid rgba(255,255,255,0.2); }
          .clone-banner .cmd-block {
            background: #020617;
            border: 1px solid #1e293b;
            border-radius: 10px;
            padding: 12px 14px;
            color: #e2e8f0;
            font-family: "JetBrains Mono", ui-monospace, monospace;
            font-size: 0.86rem;
            line-height: 1.7;
            overflow-x: auto;
          }
          .clone-banner .cmd-block .dim { color: #64748b; }
          .clone-banner .cmd-block .cmd { color: #86efac; }
          .clone-banner .cmd-block .arg { color: #fcd34d; }
        </style>

<aside class="clone-banner" data-test="clone-banner" id="clone">
<div>
<div class="meta-row">
<span class="chip">Branch: ttacart</span>
<span class="chip">SUT: /playwright/ttacart/</span>
<span class="chip">Public</span>
<span class="chip">MIT</span>
</div>
<h3 style="margin-top:10px;">Clone the TTACart branch</h3>
<p>The complete suite that maps the 10-box diagram above onto runnable specs lives on a dedicated branch of the Advance Playwright Framework repo. Clone it, install once, and you have every page object, fixture, test and CI workflow needed to start teaching from.</p>
<div class="actions">
<a class="primary" href="https://github.com/PramodDutta/Advance-Playwright-Framework/tree/ttacart" target="_blank" rel="noopener">
View ttacart branch
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
</a>
<a class="secondary" href="https://github.com/PramodDutta/Advance-Playwright-Framework/archive/refs/heads/ttacart.zip" target="_blank" rel="noopener">
Download .zip
</a>
<a class="secondary" href="https://github.com/PramodDutta/Advance-Playwright-Framework/pulls?q=is%3Apr+head%3Attacart" target="_blank" rel="noopener">
Open PR
</a>
</div>
</div>
<div class="cmd-block">
<span class="dim"># clone the TTACart branch</span>
<span class="cmd">git clone</span> <span class="arg">-b ttacart</span> https://github.com/PramodDutta/Advance-Playwright-Framework.git
<span class="cmd">cd</span> Advance-Playwright-Framework
<span class="cmd">npm ci</span>
<span class="cmd">npx playwright install</span> <span class="arg">--with-deps</span>
<span class="cmd">npx playwright test</span>          <span class="dim"># runs the TTACart suite</span>
<span class="cmd">npx playwright test</span> <span class="arg">--ui</span>     <span class="dim"># interactive mode</span>
</div>
</aside>


<style>
          .pr-strip {
            display: flex; flex-wrap: wrap; gap: 8px;
            margin: 0 0 14px;
            padding: 10px 14px;
            border: 1px solid var(--border);
            border-radius: 10px;
            background: var(--surface-2);
            font-size: 0.82rem;
            color: var(--ink-soft);
            align-items: center;
          }
          .pr-strip a {
            color: var(--accent-strong);
            font-weight: 600;
            text-decoration: none;
          }
          .pr-strip code {
            background: var(--bg);
            padding: 1px 6px;
            border-radius: 4px;
            font-family: "JetBrains Mono", monospace;
            font-size: 0.78rem;
          }
          .pr-strip .chip {
            padding: 2px 8px;
            border-radius: 999px;
            background: var(--accent-ghost);
            color: var(--accent-strong);
            font-weight: 700;
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 0.08em;
          }

          .mer-grid {
            display: grid;
            gap: 18px;
            grid-template-columns: 1fr;
            margin: 14px 0 18px;
          }
          .mer-card {
            border: 1px solid var(--border);
            border-radius: 12px;
            background: var(--surface);
            padding: 16px 18px;
            overflow: auto;
          }
          .mer-card h3 {
            margin: 0 0 4px;
            font-size: 1.02rem;
            font-weight: 600;
            color: var(--ink);
          }
          .mer-card .lede {
            margin: 0 0 12px;
            color: var(--muted);
            font-size: 0.86rem;
            line-height: 1.55;
          }
          .mer-card .mermaid {
            background: var(--bg);
            border-radius: 8px;
            padding: 14px;
            min-height: 80px;
          }

          .ss-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 14px;
            margin: 14px 0 0;
          }
          .ss-card {
            display: flex;
            flex-direction: column;
            gap: 6px;
            border: 1px solid var(--border);
            border-radius: 12px;
            background: var(--surface);
            overflow: hidden;
            transition: transform 0.14s ease, border-color 0.14s ease;
          }
          .ss-card:hover { transform: translateY(-2px); border-color: var(--accent); }
          .ss-card img {
            width: 100%;
            display: block;
            border-bottom: 1px solid var(--border);
            background: #fff;
          }
          .ss-card .ss-meta {
            padding: 10px 14px 12px;
          }
          .ss-card .ss-meta b {
            display: block;
            color: var(--ink);
            font-size: 0.9rem;
            font-weight: 600;
          }
          .ss-card .ss-meta small {
            display: block;
            color: var(--muted);
            font-size: 0.74rem;
            font-family: "JetBrains Mono", monospace;
            margin-top: 2px;
          }
        </style>

<article class="stage-card" id="diagrams-and-shots" style="padding: 20px 24px;">
<h2 style="margin:0 0 4px;">Diagrams + page screenshots (from the ttacart branch)</h2>
<p class="help">Same artefacts that ship in <code>README-TTACART.md</code> on the branch - rendered here so students see them without leaving the tutorial. Mermaid renders client-side; screenshots are pulled live from the branch's <code>docs/screenshots/</code>.</p>

<div class="pr-strip">
<span class="chip">PR #3</span>
<a href="https://github.com/PramodDutta/Advance-Playwright-Framework/pull/3" target="_blank" rel="noopener">Open PR</a>
<span>-</span>
<a href="https://github.com/PramodDutta/Advance-Playwright-Framework/pull/3#issuecomment-4507367190" target="_blank" rel="noopener">Review comment</a>
<span>-</span>
<span>HEAD: <code>34e68bf</code></span>
<span>-</span>
<a href="https://github.com/PramodDutta/Advance-Playwright-Framework/blob/ttacart/README-TTACART.md" target="_blank" rel="noopener">README on branch</a>
</div>

<div class="mer-grid">
<div class="mer-card">
<h3>1. 10-box framework architecture</h3>
<p class="lede">Framework code on the left, config + infra on the right. Reporter writes across the line into the right column.</p>
<div class="mermaid"><img alt="1. 10-box framework architecture" src="https://mermaid.ink/svg/JSV7aW5pdDogeyJ0aGVtZSI6Im5ldXRyYWwiLCJmb250RmFtaWx5IjoiSW50ZXIsIHVpLXNhbnMtc2VyaWYsIHNhbnMtc2VyaWYifX0lJQpncmFwaCBMUgogIGNsYXNzRGVmIGNvZGUgZmlsbDojZmRlN2YzLHN0cm9rZTojZGIyNzc3LGNvbG9yOiMxMTEKICBjbGFzc0RlZiBkYXRhIGZpbGw6I2QxZmFlNSxzdHJva2U6IzE2YTM0YSxjb2xvcjojMTExCiAgY2xhc3NEZWYgb2JzICBmaWxsOiNjZmZhZmUsc3Ryb2tlOiMwODkxYjIsY29sb3I6IzExMQogIGNsYXNzRGVmIGNmZyAgZmlsbDojZWRlOWZlLHN0cm9rZTojOGI1Y2Y2LGNvbG9yOiMxMTEKICBjbGFzc0RlZiBjaSAgIGZpbGw6I2ZmZWRkNSxzdHJva2U6I2Y5NzMxNixjb2xvcjojMTExCiAgY2xhc3NEZWYgcXR5ICBmaWxsOiNmZWY5YzMsc3Ryb2tlOiNkOTc3MDYsY29sb3I6IzExMQoKICBQWzEuIFBhZ2UgT2JqZWN0czxici8-c3JjL3BhZ2VzL3R0YWNhcnQvXTo6OmNvZGUgLS0-IEZbMi4gRml4dHVyZXMgKyBTcGVjczxici8-dGVzdC1iYXNlLnRzICsgdGVzdHMvXTo6OmNvZGUKICBQIC0tPiBVWzMuIFV0aWxzPGJyLz5VdGlsRWxlbWVudExvY2F0b3IgKyBMb2dnZXIgKyBEYXRhRmFjdG9yeSArIEZpbGVSZWFkZXIgKyBEYXRlVXRpbF06Ojpjb2RlCiAgRiAtLT4gRFs0LiBUZXN0IGRhdGE8YnIvPnVzZXJzLmpzb24gKyBwcm9kdWN0cy5jc3YgKyB0eXBlcy50c106OjpkYXRhCiAgVSAtLT4gT1s1LiBPYnNlcnZhYmlsaXR5PGJyLz5DdXN0b21UVEFSZXBvcnRlciAtPiB0dGEtcmVwb3J0L106OjpvYnMKICBEIC0tPiBPCgogIENbNi4gcGxheXdyaWdodC5jb25maWcudHM8YnIvPlRUQV9FTlYgcWEvc3RnL2Rldi9wcm9kXTo6OmNmZyAtLT4gRVs3LiBUZXN0IGV4ZWN1dGlvbiArIHRhZ3M8YnIvPnNtb2tlICsgcmVncmVzc2lvbiArIGUyZV06OjpjZmcKICBDIC0tPiBSWzguIFJlcG9ydHMgKyBhcnRpZmFjdHM8YnIvPkhUTUwgKyBBbGx1cmUgKyB0cmFjZV06OjpjZmcKICBFIC0tPiBDSVs5LiBDSS9DRCArIERvY2tlciArIGNsb3VkPGJyLz50dGFjYXJ0LnltbCBzaGFyZGVkIDQtd2F5XTo6OmNpCiAgUiAtLT4gQ0kKICBDSSAtLT4gUVsxMC4gUXVhbGl0eSArIHBhY2thZ2UgKyBWQ1M8YnIvPnNjcmlwdHMgKyBlc2xpbnQgKyBodXNreSArIGdpdGlnbm9yZV06OjpxdHkKCiAgTyAtLiB3cml0ZXMgcmVwb3J0IC4tPiBS" style="max-width:100%;height:auto;display:block;margin:0 auto;" /></div>
</div>

<div class="mer-card">
<h3>2. End-to-end checkout sequence</h3>
<p class="lede">One <code>@e2e</code> test wired through five page objects and the test fixture.</p>
<div class="mermaid"><img alt="2. End-to-end checkout sequence" src="https://mermaid.ink/svg/JSV7aW5pdDogeyJ0aGVtZSI6Im5ldXRyYWwiLCJmb250RmFtaWx5IjoiSW50ZXIsIHVpLXNhbnMtc2VyaWYsIHNhbnMtc2VyaWYifX0lJQpzZXF1ZW5jZURpYWdyYW0KICBhdXRvbnVtYmVyCiAgcGFydGljaXBhbnQgVCBhcyBUZXN0IChjaGVja291dC5zcGVjLnRzKQogIHBhcnRpY2lwYW50IExQIGFzIExvZ2luUGFnZQogIHBhcnRpY2lwYW50IElQIGFzIEludmVudG9yeVBhZ2UKICBwYXJ0aWNpcGFudCBDUCBhcyBDYXJ0UGFnZQogIHBhcnRpY2lwYW50IEMxIGFzIENoZWNrb3V0U3RlcE9uZVBhZ2UKICBwYXJ0aWNpcGFudCBDMiBhcyBDaGVja291dFN0ZXBUd29QYWdlCiAgcGFydGljaXBhbnQgT0sgYXMgQ2hlY2tvdXRDb21wbGV0ZVBhZ2UKCiAgVC0-PkxQOiBvcGVuICsgbG9naW5BcyhzdGFuZGFyZF91c2VyLCB0dGFfc2VjcmV0KQogIExQLS0-PlQ6IHJlZGlyZWN0IC9pbnZlbnRvcnkuaHRtbAogIFQtPj5JUDogYWRkVG9DYXJ0KHR0YS1wcmFjdGljZS1iYWNrcGFjaykKICBULT4-SVA6IGFkZFRvQ2FydCh0dGEtYmlrZS1saWdodCkKICBULT4-SVA6IGV4cGVjdCBjYXJ0Q291bnQgPSAyCiAgVC0-PklQOiBvcGVuQ2FydCgpCiAgSVAtPj5DUDogbmF2aWdhdGUgL2NhcnQuaHRtbAogIFQtPj5DUDogY2hlY2tvdXQoKQogIENQLT4-QzE6IG5hdmlnYXRlIC9jaGVja291dC1zdGVwLW9uZS5odG1sCiAgVC0-PkMxOiBmaWxsR3Vlc3Qoe2ZpcnN0TmFtZSwgbGFzdE5hbWUsIHBvc3RhbENvZGV9KQogIFQtPj5DMTogY29udGludWUoKQogIEMxLT4-QzI6IG5hdmlnYXRlIC9jaGVja291dC1zdGVwLXR3by5odG1sCiAgVC0-PkMyOiByZWFkIHN1YnRvdGFsICsgdGF4ICsgdG90YWwKICBULT4-QzI6IGZpbmlzaCgpCiAgQzItPj5PSzogbmF2aWdhdGUgL2NoZWNrb3V0LWNvbXBsZXRlLmh0bWwKICBULT4-T0s6IGV4cGVjdCBoZWFkZXJUZXh0IGNvbnRhaW5zICJUaGFuayB5b3Ui" style="max-width:100%;height:auto;display:block;margin:0 auto;" /></div>
</div>

<div class="mer-card">
<h3>3. CI sharding flow</h3>
<p class="lede">Four parallel jobs each take one quarter of the suite, merge-reports stitches them back, deploy-pages publishes a single HTML.</p>
<div class="mermaid"><img alt="3. CI sharding flow" src="https://mermaid.ink/svg/JSV7aW5pdDogeyJ0aGVtZSI6Im5ldXRyYWwiLCJmb250RmFtaWx5IjoiSW50ZXIsIHVpLXNhbnMtc2VyaWYsIHNhbnMtc2VyaWYifX0lJQpncmFwaCBMUgogIFRbcHVzaCB0byB0dGFjYXJ0PGJyLz5wdWxsX3JlcXVlc3RdIC0tPiBTMVtTaGFyZCAxLzRdCiAgVCAtLT4gUzJbU2hhcmQgMi80XQogIFQgLS0-IFMzW1NoYXJkIDMvNF0KICBUIC0tPiBTNFtTaGFyZCA0LzRdCiAgUzEgLS4gcmVwb3J0IC4tPiBNW21lcmdlLXJlcG9ydHM8YnIvPnBsYXl3cmlnaHQgbWVyZ2UtcmVwb3J0c10KICBTMiAtLiByZXBvcnQgLi0-IE0KICBTMyAtLiByZXBvcnQgLi0-IE0KICBTNCAtLiByZXBvcnQgLi0-IE0KICBNIC0tPiBEW2RlcGxveS1wYWdlcyAtPiBnaXRodWIuaW8vdHRhLXJlcG9ydF0KCiAgY2xhc3NEZWYgdHJpZyBmaWxsOiNhNWQ4ZmYsc3Ryb2tlOiMyNTYzZWIsY29sb3I6IzExMQogIGNsYXNzRGVmIHNoYXJkIGZpbGw6I2ZkZTdmMyxzdHJva2U6I2RiMjc3Nyxjb2xvcjojMTExCiAgY2xhc3NEZWYgbWVyZ2UgZmlsbDojZmZkOGE4LHN0cm9rZTojZjU5ZTBiLGNvbG9yOiMxMTEKICBjbGFzc0RlZiBzaGlwIGZpbGw6I2MzZmFlOCxzdHJva2U6IzIyYzU1ZSxjb2xvcjojMTExCiAgY2xhc3MgVCB0cmlnCiAgY2xhc3MgUzEsUzIsUzMsUzQgc2hhcmQKICBjbGFzcyBNIG1lcmdlCiAgY2xhc3MgRCBzaGlw" style="max-width:100%;height:auto;display:block;margin:0 auto;" /></div>
</div>
</div>

<h3 style="margin:18px 0 4px;">Live screenshots of every TTACart page</h3>
<p class="help">Captured by <code>scripts/capture-screenshots.ts</code> against the live site. Re-run after any layout change to refresh.</p>
<div class="ss-grid">
<div class="ss-card">
<img src="https://raw.githubusercontent.com/PramodDutta/Advance-Playwright-Framework/ttacart/docs/screenshots/login.png" loading="lazy" alt="TTACart login page">
<div class="ss-meta"><b>Login</b><small>/ttacart/index.html</small></div>
</div>
<div class="ss-card">
<img src="https://raw.githubusercontent.com/PramodDutta/Advance-Playwright-Framework/ttacart/docs/screenshots/inventory.png" loading="lazy" alt="TTACart inventory page (standard_user)">
<div class="ss-meta"><b>Inventory</b><small>/ttacart/inventory.html</small></div>
</div>
<div class="ss-card">
<img src="https://raw.githubusercontent.com/PramodDutta/Advance-Playwright-Framework/ttacart/docs/screenshots/inventory-item.png" loading="lazy" alt="TTACart item detail page">
<div class="ss-meta"><b>Item detail</b><small>/ttacart/inventory-item.html</small></div>
</div>
<div class="ss-card">
<img src="https://raw.githubusercontent.com/PramodDutta/Advance-Playwright-Framework/ttacart/docs/screenshots/cart.png" loading="lazy" alt="TTACart cart page with 2 items">
<div class="ss-meta"><b>Cart</b><small>/ttacart/cart.html</small></div>
</div>
<div class="ss-card">
<img src="https://raw.githubusercontent.com/PramodDutta/Advance-Playwright-Framework/ttacart/docs/screenshots/checkout-step-one.png" loading="lazy" alt="TTACart checkout step one - guest info">
<div class="ss-meta"><b>Checkout - guest info</b><small>/ttacart/checkout-step-one.html</small></div>
</div>
<div class="ss-card">
<img src="https://raw.githubusercontent.com/PramodDutta/Advance-Playwright-Framework/ttacart/docs/screenshots/checkout-step-two.png" loading="lazy" alt="TTACart checkout step two - overview totals">
<div class="ss-meta"><b>Checkout - overview</b><small>/ttacart/checkout-step-two.html</small></div>
</div>
<div class="ss-card">
<img src="https://raw.githubusercontent.com/PramodDutta/Advance-Playwright-Framework/ttacart/docs/screenshots/checkout-complete.png" loading="lazy" alt="TTACart thank-you page">
<div class="ss-meta"><b>Checkout complete</b><small>/ttacart/checkout-complete.html</small></div>
</div>
</div>
</article>

<section class="layout">
<div>

<article class="stage-card" id="why">
<h2>1. Why a framework?</h2>
<p class="help">A flat folder of <code>.spec.ts</code> files works for ten tests. It breaks at fifty.</p>
<p>
When tests grow, the same locator gets re-typed in twelve places. The login flow gets re-implemented for every spec.
Hard-coded URLs leak into the code. CSVs of users get pasted inline. The CI takes 40 minutes because every spec opens
its own browser.
</p>
<p>
A framework is the discipline that stops this. It gives you one place for locators (<code>pages/</code>), one place
for reusable flows (<code>modules/</code>), one place for data (<code>testdata/</code>), one place for environment
config (<code>.env</code> + <code>config/</code>), one place for utilities (<code>utils/</code>), and one place for
custom reporters and fixtures. Add Docker so it runs the same everywhere, then shard it across four GitHub Actions
runners and you have a 40-minute suite in 10 minutes.
</p>
<div class="callout">
<strong>What you build by the end of this page:</strong> a working TypeScript Playwright repo with Page Object Model,
reusable modules, fixtures, JSON test data, environment-aware config, a custom HTML reporter, a Dockerfile, and a
sharded GitHub Actions pipeline - all pointing at the TTA practice pages so you never need a third-party app.
</div>
</article>

<article class="stage-card" id="stack">
<h2>2. Tech stack</h2>
<p class="help">Read directly from <code>package.json</code> + <code>playwright.config.ts</code> of the upstream repo.</p>
<div class="stack-grid">
<div class="stack-card">
<h4>Playwright Test <a href="https://playwright.dev/" target="_blank" rel="noopener">docs</a></h4>
<p>Test runner + browser automation. Bundled <code>test()</code>, <code>expect()</code>, fixtures, parallel workers, sharding, traces, retries.</p>
</div>
<div class="stack-card">
<h4>TypeScript <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener">docs</a></h4>
<p>Strict types catch typos in locator names and bad data fixtures at compile-time. Path aliases like <code>@pages/*</code> keep imports clean.</p>
</div>
<div class="stack-card">
<h4>Page Object Model <a href="https://playwright.dev/docs/pom" target="_blank" rel="noopener">docs</a></h4>
<p>One file per page. Locators as arrow functions, actions as instance methods, assertions as expectations. Plus a higher-level <code>modules/</code> layer for multi-page flows.</p>
</div>
<div class="stack-card">
<h4>dotenv <a href="https://www.npmjs.com/package/dotenv" target="_blank" rel="noopener">npm</a></h4>
<p>Loads <code>.env</code> into <code>process.env</code>. Switch between dev / staging / prod by exporting <code>NODE_ENV</code> at the shell.</p>
</div>
<div class="stack-card">
<h4>JSON fixtures (<code>testdata/</code>)</h4>
<p>Test data as typed JSON. <code>users.json</code> + <code>types.ts</code> give you autocomplete on <code>validUsers[0].username</code>.</p>
</div>
<div class="stack-card">
<h4>Custom TTA Reporter</h4>
<p>A standalone <code>Reporter</code> implementation. Emits a branded HTML report into <code>tta-report/</code> with screenshots, steps, and per-file stats.</p>
</div>
<div class="stack-card">
<h4>Built-in HTML + JSON reporters</h4>
<p>Playwright's own HTML report (<code>npx playwright show-report</code>) and a <code>results.json</code> file for CI dashboards.</p>
</div>
<div class="stack-card">
<h4>ESLint + Prettier</h4>
<p><code>npm run lint</code> + <code>npm run format</code>. Husky + lint-staged run them on every commit.</p>
</div>
<div class="stack-card">
<h4>Docker <a href="https://hub.docker.com/_/microsoft-playwright" target="_blank" rel="noopener">image</a></h4>
<p>Base image <code>mcr.microsoft.com/playwright:v1.40.0-jammy</code>. Same browsers everywhere - local, CI, your colleague's laptop.</p>
</div>
<div class="stack-card">
<h4>GitHub Actions <a href="https://docs.github.com/en/actions" target="_blank" rel="noopener">docs</a></h4>
<p>Matrix shard 1/4 - 4/4 across four ubuntu runners. <code>merge-reports</code> stitches the four HTML outputs back into one.</p>
</div>
</div>
</article>

<article class="stage-card" id="folders">
<h2>3. Folder structure (TTACart branch)</h2>
<p class="help">Run <code>tree -L 3 -I node_modules</code> on the <code>ttacart</code> branch and you get this. Every file lines up with one box in the diagram above and one step in section 4.</p>

<pre class="folder-tree">Advance-Playwright-Framework/    <span class="c"># branch: ttacart</span>
.
|-- .env.example                      <span class="c"># TTA_ENV switch (qa / stg / dev / prod)</span>
|-- .github/
|   `-- workflows/
|       `-- ttacart.yml               <span class="c"># sharded 4-way CI + merge-reports</span>
|-- Dockerfile                        <span class="c"># mcr.microsoft.com/playwright + npm ci</span>
|-- package.json                      <span class="c"># scripts: test / test:smoke / test:e2e / report</span>
|-- playwright.config.ts              <span class="c"># env-switched baseURL + 4 projects + reporters</span>
|-- tsconfig.json                     <span class="c"># strict + path aliases (@pages/*, @utils/*)</span>
|-- README-TTACART.md                 <span class="c"># quick-start + test-user table</span>
|-- src/
|   |-- config/
|   |   `-- envs.ts                   <span class="c"># BASES map: qa/stg/dev/prod -&gt; URL</span>
|   |-- fixtures/
|   |   `-- test-base.ts              <span class="c"># test = base.extend&lt;Fix&gt; with one fixture per POM</span>
|   |-- pages/                        <span class="c"># one file per TTACart page</span>
|   |   |-- BasePage.ts
|   |   |-- LoginPage.ts              <span class="c"># /ttacart/index.html</span>
|   |   |-- InventoryPage.ts          <span class="c"># /ttacart/inventory.html</span>
|   |   |-- ItemDetailPage.ts         <span class="c"># /ttacart/inventory-item.html?id=...</span>
|   |   |-- CartPage.ts               <span class="c"># /ttacart/cart.html</span>
|   |   |-- CheckoutStepOnePage.ts    <span class="c"># /ttacart/checkout-step-one.html</span>
|   |   |-- CheckoutStepTwoPage.ts    <span class="c"># /ttacart/checkout-step-two.html</span>
|   |   `-- CheckoutCompletePage.ts   <span class="c"># /ttacart/checkout-complete.html</span>
|   |-- testdata/
|   |   |-- users.json                <span class="c"># 6 TTACart test users (standard / locked / problem / glitch / error / visual)</span>
|   |   |-- products.csv              <span class="c"># 6 TTA-branded products + prices</span>
|   |   `-- types.ts                  <span class="c"># RegData, LoginData, ProductRow type aliases</span>
|   |-- tests/                        <span class="c"># spec files - tagged @smoke @regression @e2e @visual @flaky</span>
|   |   |-- login.spec.ts             <span class="c"># 6 cases - one per test user</span>
|   |   |-- inventory.spec.ts         <span class="c"># sort + add-to-cart + badge</span>
|   |   |-- cart.spec.ts              <span class="c"># add / remove / continue / checkout button</span>
|   |   |-- checkout.spec.ts          <span class="c"># full e2e - login to thank-you</span>
|   |   |-- negative.spec.ts          <span class="c"># invalid inputs + problem_user quirk</span>
|   |   `-- data-driven.spec.ts       <span class="c"># CSV-fed add-to-cart for all 6 products</span>
|   `-- utils/
|       |-- UtilElementLocator.ts     <span class="c"># Flex = string | Locator wrapper</span>
|       |-- Logger.ts                 <span class="c"># Winston - file + console</span>
|       |-- DataFactory.ts            <span class="c"># Faker user / card / zip</span>
|       |-- FileReader.ts             <span class="c"># readJSON / readCSV / readXLSX</span>
|       |-- DateUtil.ts               <span class="c"># now / offset / formatYMD</span>
|       `-- CustomTTAReporter.ts      <span class="c"># branded HTML reporter -&gt; tta-report/</span>
|-- logs/                             <span class="c"># auto: run-{ISO}.log (Winston)</span>
|-- test-results/                     <span class="c"># auto: traces / videos / screenshots (gitignored)</span>
|-- playwright-report/                <span class="c"># auto: built-in HTML report (gitignored)</span>
`-- tta-report/                       <span class="c"># auto: custom branded HTML report</span></pre>
<p class="help" style="margin-top:14px;">
<b>What changed vs the original main branch:</b> the seven page objects + six spec files map 1-to-1 to the seven static HTML pages under
<code>/playwright/ttacart/</code>. The <code>modules/</code> folder is folded into focused multi-page flows inside <code>checkout.spec.ts</code>;
<code>api/</code> is omitted because TTACart has no real backend (state is localStorage only). The CI workflow is renamed
<code>ttacart.yml</code> to make it obvious which branch it belongs to.
</p>
</article>

<article class="stage-card" id="build">
<h2>4. Build the framework, folder by folder</h2>
<p class="help">Eight steps. Each step explains the folder, gives the <code>mkdir</code> / <code>touch</code> commands, and shows one representative file in full.</p>

<h3>Step 1 - <code>package.json</code> + <code>tsconfig.json</code> + <code>playwright.config.ts</code></h3>
<p>
Spin up the repo. <code>npm init -y</code>, install Playwright + TypeScript + dotenv, then scaffold the three root config files.
<code>playwright.config.ts</code> is the heart - it defines the test directory, projects (browsers), reporters, retries, workers,
and the default <code>baseURL</code>.
</p>
<div class="code-block">
<div class="code-head"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span><span>commands</span></div>

<pre class="code-body"><code>mkdir advance-playwright-framework &amp;&amp; cd advance-playwright-framework
npm init -y
npm i -D @playwright/test @types/node typescript dotenv
npx playwright install --with-deps
touch playwright.config.ts tsconfig.json .env .gitignore
mkdir -p src/{api,config,fixtures,modules,pages,testdata,tests,utils}</code></pre>
</div>

<div class="code-block">
<div class="code-head"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span><span>package.json</span></div>

<pre class="code-body"><code>{
  <span class="p">"name"</span>: <span class="s">"advance-playwright-framework"</span>,
  <span class="p">"version"</span>: <span class="s">"1.0.0"</span>,
  <span class="p">"description"</span>: <span class="s">"TTA Advance Playwright Framework - TypeScript + POM + fixtures"</span>,
  <span class="p">"scripts"</span>: {
    <span class="p">"test"</span>:           <span class="s">"playwright test"</span>,
    <span class="p">"test:headed"</span>:    <span class="s">"playwright test --headed"</span>,
    <span class="p">"test:ui"</span>:        <span class="s">"playwright test --ui"</span>,
    <span class="p">"test:debug"</span>:     <span class="s">"playwright test --debug"</span>,
    <span class="p">"test:chromium"</span>:  <span class="s">"playwright test --project=chromium"</span>,
    <span class="p">"test:firefox"</span>:   <span class="s">"playwright test --project=firefox"</span>,
    <span class="p">"test:webkit"</span>:    <span class="s">"playwright test --project=webkit"</span>,
    <span class="p">"test:smoke"</span>:     <span class="s">"playwright test --grep @Smoke"</span>,
    <span class="p">"test:regression"</span>: <span class="s">"playwright test --grep @Regression"</span>,
    <span class="p">"test:p0"</span>:        <span class="s">"playwright test --grep @P0"</span>,
    <span class="p">"test:report"</span>:    <span class="s">"playwright show-report"</span>,
    <span class="p">"test:ci"</span>:        <span class="s">"playwright test --reporter=list,json"</span>,
    <span class="p">"lint"</span>:           <span class="s">"eslint src/**/*.ts"</span>,
    <span class="p">"lint:fix"</span>:       <span class="s">"eslint src/**/*.ts --fix"</span>,
    <span class="p">"format"</span>:         <span class="s">"prettier --write \"src/**/*.ts\""</span>,
    <span class="p">"build"</span>:          <span class="s">"tsc"</span>,
    <span class="p">"clean"</span>:          <span class="s">"rm -rf dist test-results playwright-report tta-report"</span>
  },
  <span class="p">"keywords"</span>: [<span class="s">"playwright"</span>, <span class="s">"typescript"</span>, <span class="s">"testing"</span>, <span class="s">"automation"</span>, <span class="s">"e2e"</span>],
  <span class="p">"author"</span>: <span class="s">"The Testing Academy"</span>,
  <span class="p">"license"</span>: <span class="s">"ISC"</span>,
  <span class="p">"type"</span>: <span class="s">"commonjs"</span>,
  <span class="p">"devDependencies"</span>: {
    <span class="p">"@playwright/test"</span>: <span class="s">"^1.57.0"</span>,
    <span class="p">"@types/node"</span>:     <span class="s">"^25.0.6"</span>,
    <span class="p">"dotenv"</span>:          <span class="s">"^17.2.3"</span>,
    <span class="p">"typescript"</span>:      <span class="s">"^5.9.3"</span>
  }
}</code></pre>
</div>

<div class="code-block">
<div class="code-head"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span><span>tsconfig.json</span></div>

<pre class="code-body"><code>{
  <span class="p">"compilerOptions"</span>: {
    <span class="p">"target"</span>: <span class="s">"ES2020"</span>,
    <span class="p">"lib"</span>: [<span class="s">"ES2020"</span>, <span class="s">"DOM"</span>],
    <span class="p">"module"</span>: <span class="s">"commonjs"</span>,
    <span class="p">"moduleResolution"</span>: <span class="s">"node"</span>,
    <span class="p">"strict"</span>: <span class="k">true</span>,
    <span class="p">"esModuleInterop"</span>: <span class="k">true</span>,
    <span class="p">"skipLibCheck"</span>: <span class="k">true</span>,
    <span class="p">"resolveJsonModule"</span>: <span class="k">true</span>,
    <span class="p">"outDir"</span>: <span class="s">"./dist"</span>,
    <span class="p">"baseUrl"</span>: <span class="s">"."</span>,
    <span class="p">"paths"</span>: {
      <span class="p">"@pages/*"</span>:    [<span class="s">"src/pages/*"</span>],
      <span class="p">"@modules/*"</span>:  [<span class="s">"src/modules/*"</span>],
      <span class="p">"@utils/*"</span>:    [<span class="s">"src/utils/*"</span>],
      <span class="p">"@fixtures/*"</span>: [<span class="s">"src/fixtures/*"</span>],
      <span class="p">"@api/*"</span>:      [<span class="s">"src/api/*"</span>],
      <span class="p">"@config/*"</span>:   [<span class="s">"src/config/*"</span>],
      <span class="p">"@testdata/*"</span>: [<span class="s">"src/testdata/*"</span>]
    }
  },
  <span class="p">"include"</span>: [<span class="s">"**/*.ts"</span>],
  <span class="p">"exclude"</span>: [<span class="s">"node_modules"</span>, <span class="s">"dist"</span>]
}</code></pre>
</div>

<div class="code-block">
<div class="code-head"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span><span>playwright.config.ts</span></div>

<pre class="code-body"><code><span class="k">import</span> { defineConfig, devices } <span class="k">from</span> <span class="s">'@playwright/test'</span>;
<span class="k">import</span> * <span class="k">as</span> dotenv <span class="k">from</span> <span class="s">'dotenv'</span>;

dotenv.<span class="f">config</span>();

<span class="k">export default</span> <span class="f">defineConfig</span>({
  testDir: <span class="s">'./src/tests'</span>,
  timeout: <span class="n">60000</span>,
  expect: { timeout: <span class="n">10000</span> },
  fullyParallel: <span class="k">true</span>,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? <span class="n">2</span> : <span class="n">0</span>,
  workers:  process.env.CI ? <span class="n">2</span> : <span class="n">3</span>,

  reporter: [
    [<span class="s">'./src/utils/CustomTTAReporter.ts'</span>],
    [<span class="s">'html'</span>, { open: <span class="s">'never'</span> }],
    [<span class="s">'json'</span>, { outputFile: <span class="s">'test-results/results.json'</span> }],
    [<span class="s">'list'</span>],
  ],

  use: {
    baseURL:    process.env.BASE_URL || <span class="s">'https://app.thetestingacademy.com'</span>,
    screenshot: <span class="s">'only-on-failure'</span>,
    video:      <span class="s">'retain-on-failure'</span>,
    trace:      <span class="s">'retain-on-failure'</span>,
  },

  projects: [
    { name: <span class="s">'chromium'</span>,      use: { ...devices[<span class="s">'Desktop Chrome'</span>] } },
    { name: <span class="s">'firefox'</span>,       use: { ...devices[<span class="s">'Desktop Firefox'</span>] } },
    { name: <span class="s">'webkit'</span>,        use: { ...devices[<span class="s">'Desktop Safari'</span>] } },
    { name: <span class="s">'mobile-chrome'</span>, use: { ...devices[<span class="s">'Pixel 5'</span>] } },
  ],
});</code></pre>
</div>
<div class="callout">
<strong>Why three reporters?</strong> <code>html</code> is the built-in one for local debugging, <code>json</code> feeds CI dashboards
like Currents/Allure-TestOps, and <code>CustomTTAReporter</code> is the branded student-facing report. <code>list</code> just prints to stdout.
</div>

<h3>Step 2 - <code>src/pages/</code> Page Object Model</h3>
<p>
One file per page. Locators are declared as arrow functions returning a fresh <code>Locator</code> on every call - this avoids the stale-locator
problem when SPAs re-mount. Actions and assertions are instance methods. The <code>Page</code> object is injected via the constructor.
</p>
<div class="code-block">
<div class="code-head"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span><span>src/pages/LoginPage.ts</span></div>

<pre class="code-body"><code><span class="k">import</span> { expect, <span class="t">Page</span> } <span class="k">from</span> <span class="s">'@playwright/test'</span>;

<span class="k">export class</span> <span class="t">LoginPage</span> {
  <span class="k">private</span> page: <span class="t">Page</span>;

  <span class="f">constructor</span>(page: <span class="t">Page</span>) {
    <span class="k">this</span>.page = page;
  }

  <span class="c">// ============================================</span>
  <span class="c">// LOCATORS (arrow functions return fresh Locator)</span>
  <span class="c">// ============================================</span>
  usernameInput        = () =&gt; <span class="k">this</span>.page.<span class="f">locator</span>(<span class="s">'#username'</span>);
  passwordInput        = () =&gt; <span class="k">this</span>.page.<span class="f">locator</span>(<span class="s">'#password'</span>);
  loginButton          = () =&gt; <span class="k">this</span>.page.<span class="f">locator</span>(<span class="s">'button[type="submit"]'</span>);
  errorMessage         = () =&gt; <span class="k">this</span>.page.<span class="f">locator</span>(<span class="s">'[data-testid="error-message"]'</span>);
  rememberMeCheckbox   = () =&gt; <span class="k">this</span>.page.<span class="f">locator</span>(<span class="s">'#remember-me'</span>);
  forgotPasswordLink   = () =&gt; <span class="k">this</span>.page.<span class="f">locator</span>(<span class="s">'a:has-text("Forgot Password")'</span>);
  signUpLink           = () =&gt; <span class="k">this</span>.page.<span class="f">locator</span>(<span class="s">'a:has-text("Sign Up")'</span>);

  <span class="c">// ----- actions -----</span>
  <span class="k">async</span> <span class="f">navigate</span>() {
    <span class="k">await</span> <span class="k">this</span>.page.<span class="f">goto</span>(<span class="s">'/playwright/multiple_element_filter.html'</span>);
  }
  <span class="k">async</span> <span class="f">enterUsername</span>(value: <span class="t">string</span>) { <span class="k">await</span> <span class="k">this</span>.<span class="f">usernameInput</span>().<span class="f">fill</span>(value); }
  <span class="k">async</span> <span class="f">enterPassword</span>(value: <span class="t">string</span>) { <span class="k">await</span> <span class="k">this</span>.<span class="f">passwordInput</span>().<span class="f">fill</span>(value); }
  <span class="k">async</span> <span class="f">clickLogin</span>()                  { <span class="k">await</span> <span class="k">this</span>.<span class="f">loginButton</span>().<span class="f">click</span>(); }
  <span class="k">async</span> <span class="f">toggleRememberMe</span>()            { <span class="k">await</span> <span class="k">this</span>.<span class="f">rememberMeCheckbox</span>().<span class="f">click</span>(); }
  <span class="k">async</span> <span class="f">getErrorMessage</span>()             { <span class="k">return</span> (<span class="k">await</span> <span class="k">this</span>.<span class="f">errorMessage</span>().<span class="f">textContent</span>()) || <span class="s">''</span>; }

  <span class="c">// ----- assertions -----</span>
  <span class="k">async</span> <span class="f">expectOnLoginPage</span>()         { <span class="k">await</span> <span class="f">expect</span>(<span class="k">this</span>.page).<span class="f">toHaveURL</span>(<span class="s">/multiple_element_filter/</span>); }
  <span class="k">async</span> <span class="f">expectUsernameVisible</span>()     { <span class="k">await</span> <span class="f">expect</span>(<span class="k">this</span>.<span class="f">usernameInput</span>()).<span class="f">toBeVisible</span>(); }
  <span class="k">async</span> <span class="f">expectPasswordVisible</span>()     { <span class="k">await</span> <span class="f">expect</span>(<span class="k">this</span>.<span class="f">passwordInput</span>()).<span class="f">toBeVisible</span>(); }
  <span class="k">async</span> <span class="f">expectErrorVisible</span>()        { <span class="k">await</span> <span class="f">expect</span>(<span class="k">this</span>.<span class="f">errorMessage</span>()).<span class="f">toBeVisible</span>(); }
  <span class="k">async</span> <span class="f">expectLoginButtonEnabled</span>()  { <span class="k">await</span> <span class="f">expect</span>(<span class="k">this</span>.<span class="f">loginButton</span>()).<span class="f">toBeEnabled</span>(); }
}</code></pre>
</div>
<div class="callout">
<strong>Why arrow-function locators?</strong> A method like <code>usernameInput = () =&gt; this.page.locator(...)</code> returns a fresh <code>Locator</code>
every time it's called. That means if the page re-renders (e.g. after a React state change), the locator re-queries the DOM. A field like
<code>readonly usernameInput = this.page.locator(...)</code> would also work because Playwright locators are lazy, but the arrow style makes
the intent explicit.
</div>

<h3>Step 3 - <code>src/utils/UtilElementLocator.ts</code> + helpers</h3>
<p>
A thin wrapper that accepts <em>either</em> a string selector or a <code>Locator</code> object, centralises timeouts, and provides familiar
action / read / assertion verbs. Drop it next to <code>Logger.ts</code>, <code>WaitHelper.ts</code>, <code>DataGenerator.ts</code>,
<code>ApiHelper.ts</code>, and <code>CustomTTAReporter.ts</code>.
</p>
<div class="code-block">
<div class="code-head"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span><span>src/utils/UtilElementLocator.ts</span></div>

<pre class="code-body"><code><span class="k">import</span> { <span class="t">Page</span>, <span class="t">Locator</span> } <span class="k">from</span> <span class="s">'@playwright/test'</span>;

<span class="k">type</span> <span class="t">Flex</span> = <span class="t">string</span> | <span class="t">Locator</span>;

<span class="k">export class</span> <span class="t">UtilElementLocator</span> {
  <span class="k">private</span> page: <span class="t">Page</span>;
  <span class="k">private</span> defaultTimeOut: <span class="t">number</span>;

  <span class="f">constructor</span>(page: <span class="t">Page</span>, timeOut: <span class="t">number</span> = <span class="n">30000</span>) {
    <span class="k">this</span>.page = page;
    <span class="k">this</span>.defaultTimeOut = timeOut;
  }

  <span class="k">private</span> <span class="f">getLocator</span>(locator: <span class="t">Flex</span>): <span class="t">Locator</span> {
    <span class="k">return</span> <span class="k">typeof</span> locator === <span class="s">'string'</span> ? <span class="k">this</span>.page.<span class="f">locator</span>(locator) : locator;
  }

  <span class="c">// actions</span>
  <span class="k">async</span> <span class="f">click</span>(loc: <span class="t">Flex</span>) { <span class="k">await</span> <span class="k">this</span>.<span class="f">getLocator</span>(loc).<span class="f">click</span>({ timeout: <span class="k">this</span>.defaultTimeOut }); }
  <span class="k">async</span> <span class="f">fill</span>(loc: <span class="t">Flex</span>, text: <span class="t">string</span>) { <span class="k">await</span> <span class="k">this</span>.<span class="f">getLocator</span>(loc).<span class="f">fill</span>(text, { timeout: <span class="k">this</span>.defaultTimeOut }); }
  <span class="k">async</span> <span class="f">type</span>(loc: <span class="t">Flex</span>, text: <span class="t">string</span>, delay = <span class="n">50</span>) {
    <span class="k">await</span> <span class="k">this</span>.<span class="f">getLocator</span>(loc).<span class="f">pressSequentially</span>(text, { delay, timeout: <span class="k">this</span>.defaultTimeOut });
  }
  <span class="k">async</span> <span class="f">clear</span>(loc: <span class="t">Flex</span>) { <span class="k">await</span> <span class="k">this</span>.<span class="f">getLocator</span>(loc).<span class="f">clear</span>({ timeout: <span class="k">this</span>.defaultTimeOut }); }
  <span class="k">async</span> <span class="f">selectByValue</span>(loc: <span class="t">Flex</span>, value: <span class="t">string</span>) {
    <span class="k">await</span> <span class="k">this</span>.<span class="f">getLocator</span>(loc).<span class="f">selectOption</span>({ value }, { timeout: <span class="k">this</span>.defaultTimeOut });
  }

  <span class="c">// reads</span>
  <span class="k">async</span> <span class="f">getText</span>(loc: <span class="t">Flex</span>)  { <span class="k">return</span> (<span class="k">await</span> <span class="k">this</span>.<span class="f">getLocator</span>(loc).<span class="f">innerText</span>()).<span class="f">trim</span>(); }
  <span class="k">async</span> <span class="f">getValue</span>(loc: <span class="t">Flex</span>) { <span class="k">return</span> <span class="k">await</span> <span class="k">this</span>.<span class="f">getLocator</span>(loc).<span class="f">inputValue</span>(); }
  <span class="k">async</span> <span class="f">getAttr</span>(loc: <span class="t">Flex</span>, name: <span class="t">string</span>) { <span class="k">return</span> <span class="k">await</span> <span class="k">this</span>.<span class="f">getLocator</span>(loc).<span class="f">getAttribute</span>(name); }

  <span class="c">// waits</span>
  <span class="k">async</span> <span class="f">waitForVisible</span>(loc: <span class="t">Flex</span>, timeout = <span class="n">5000</span>) {
    <span class="k">try</span> { <span class="k">await</span> <span class="k">this</span>.<span class="f">getLocator</span>(loc).<span class="f">waitFor</span>({ state: <span class="s">'visible'</span>, timeout }); <span class="k">return</span> <span class="k">true</span>; }
    <span class="k">catch</span> { <span class="k">return</span> <span class="k">false</span>; }
  }
  <span class="k">async</span> <span class="f">waitForPageLoad</span>(state: <span class="s">'load'</span> | <span class="s">'domcontentloaded'</span> | <span class="s">'networkidle'</span> = <span class="s">'load'</span>) {
    <span class="k">await</span> <span class="k">this</span>.page.<span class="f">waitForLoadState</span>(state);
  }
}</code></pre>
</div>

<div class="code-block">
<div class="code-head"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span><span>src/utils/Logger.ts</span></div>

<pre class="code-body"><code><span class="k">export enum</span> <span class="t">LogLevel</span> { DEBUG = <span class="s">'DEBUG'</span>, INFO = <span class="s">'INFO'</span>, WARN = <span class="s">'WARN'</span>, ERROR = <span class="s">'ERROR'</span> }

<span class="k">export class</span> <span class="t">Logger</span> {
  <span class="k">private static</span> logLevel: <span class="t">LogLevel</span> = <span class="t">LogLevel</span>.INFO;

  <span class="f">constructor</span>(<span class="k">private</span> context: <span class="t">string</span>) {}

  <span class="k">static</span> <span class="f">create</span>(context: <span class="t">string</span>) { <span class="k">return new</span> <span class="t">Logger</span>(context); }
  <span class="k">static</span> <span class="f">setLogLevel</span>(level: <span class="t">LogLevel</span>) { <span class="t">Logger</span>.logLevel = level; }

  <span class="k">private</span> <span class="f">fmt</span>(level: <span class="t">LogLevel</span>, message: <span class="t">string</span>) {
    <span class="k">return</span> <span class="s">`[${</span><span class="k">new</span> <span class="t">Date</span>().<span class="f">toISOString</span>()<span class="s">}] [${level}] [${</span><span class="k">this</span>.context<span class="s">}] ${message}`</span>;
  }

  <span class="f">info</span>(m: <span class="t">string</span>)  { <span class="f">console</span>.<span class="f">info</span>(<span class="k">this</span>.<span class="f">fmt</span>(<span class="t">LogLevel</span>.INFO, m)); }
  <span class="f">warn</span>(m: <span class="t">string</span>)  { <span class="f">console</span>.<span class="f">warn</span>(<span class="k">this</span>.<span class="f">fmt</span>(<span class="t">LogLevel</span>.WARN, m)); }
  <span class="f">error</span>(m: <span class="t">string</span>, e?: <span class="k">unknown</span>) { <span class="f">console</span>.<span class="f">error</span>(<span class="k">this</span>.<span class="f">fmt</span>(<span class="t">LogLevel</span>.ERROR, m), e || <span class="s">''</span>); }
  <span class="f">step</span>(n: <span class="t">number</span>, desc: <span class="t">string</span>) { <span class="k">this</span>.<span class="f">info</span>(<span class="s">`Step ${n}: ${desc}`</span>); }
}</code></pre>
</div>

<h3>Step 4 - <code>src/testdata/</code> JSON fixtures + types</h3>
<p>
Test data lives next to the tests, version-controlled, typed. <code>users.json</code> holds valid users, invalid users with expected error
messages, a locked-out user, and a new-user template. <code>types.ts</code> turns it into autocomplete-friendly interfaces.
</p>
<div class="code-block">
<div class="code-head"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span><span>src/testdata/users.json</span></div>

<pre class="code-body"><code>{
  <span class="p">"validUsers"</span>: [
    {
      <span class="p">"id"</span>: <span class="s">"user-001"</span>,
      <span class="p">"username"</span>: <span class="s">"testuser@tta.dev"</span>,
      <span class="p">"password"</span>: <span class="s">"SecurePass123"</span>,
      <span class="p">"firstName"</span>: <span class="s">"Test"</span>,
      <span class="p">"lastName"</span>: <span class="s">"User"</span>,
      <span class="p">"role"</span>: <span class="s">"customer"</span>
    },
    {
      <span class="p">"id"</span>: <span class="s">"user-002"</span>,
      <span class="p">"username"</span>: <span class="s">"admin@tta.dev"</span>,
      <span class="p">"password"</span>: <span class="s">"AdminPass456"</span>,
      <span class="p">"firstName"</span>: <span class="s">"Admin"</span>,
      <span class="p">"lastName"</span>: <span class="s">"User"</span>,
      <span class="p">"role"</span>: <span class="s">"admin"</span>
    },
    {
      <span class="p">"id"</span>: <span class="s">"user-003"</span>,
      <span class="p">"username"</span>: <span class="s">"premium@tta.dev"</span>,
      <span class="p">"password"</span>: <span class="s">"PremiumPass789"</span>,
      <span class="p">"firstName"</span>: <span class="s">"Premium"</span>,
      <span class="p">"lastName"</span>: <span class="s">"Member"</span>,
      <span class="p">"role"</span>: <span class="s">"premium"</span>
    }
  ],
  <span class="p">"invalidUsers"</span>: [
    { <span class="p">"username"</span>: <span class="s">"invalid@tta.dev"</span>,     <span class="p">"password"</span>: <span class="s">"wrongpassword"</span>, <span class="p">"expectedError"</span>: <span class="s">"Invalid credentials"</span> },
    { <span class="p">"username"</span>: <span class="s">"nonexistent@tta.dev"</span>, <span class="p">"password"</span>: <span class="s">"anypassword"</span>,   <span class="p">"expectedError"</span>: <span class="s">"User not found"</span> },
    { <span class="p">"username"</span>: <span class="s">""</span>,                       <span class="p">"password"</span>: <span class="s">"somepassword"</span>,  <span class="p">"expectedError"</span>: <span class="s">"Username is required"</span> },
    { <span class="p">"username"</span>: <span class="s">"test@tta.dev"</span>,        <span class="p">"password"</span>: <span class="s">""</span>,               <span class="p">"expectedError"</span>: <span class="s">"Password is required"</span> }
  ],
  <span class="p">"newUserTemplate"</span>: {
    <span class="p">"username"</span>: <span class="s">"newuser_{timestamp}@tta.dev"</span>,
    <span class="p">"password"</span>: <span class="s">"NewUserPass123"</span>,
    <span class="p">"firstName"</span>: <span class="s">"New"</span>,
    <span class="p">"lastName"</span>: <span class="s">"User"</span>
  },
  <span class="p">"lockedUser"</span>: {
    <span class="p">"username"</span>: <span class="s">"locked@tta.dev"</span>,
    <span class="p">"password"</span>: <span class="s">"LockedPass123"</span>,
    <span class="p">"expectedError"</span>: <span class="s">"Account is locked"</span>
  }
}</code></pre>
</div>

<div class="code-block">
<div class="code-head"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span><span>src/testdata/types.ts</span></div>

<pre class="code-body"><code><span class="k">export interface</span> <span class="t">ValidUser</span> {
  id: <span class="t">string</span>;
  username: <span class="t">string</span>;
  password: <span class="t">string</span>;
  firstName: <span class="t">string</span>;
  lastName: <span class="t">string</span>;
  role: <span class="t">string</span>;
}

<span class="k">export interface</span> <span class="t">InvalidUser</span> {
  username: <span class="t">string</span>;
  password: <span class="t">string</span>;
  expectedError: <span class="t">string</span>;
}

<span class="k">export interface</span> <span class="t">UsersData</span> {
  validUsers: <span class="t">ValidUser</span>[];
  invalidUsers: <span class="t">InvalidUser</span>[];
  newUserTemplate: { username: <span class="t">string</span>; password: <span class="t">string</span>; firstName: <span class="t">string</span>; lastName: <span class="t">string</span> };
  lockedUser: { username: <span class="t">string</span>; password: <span class="t">string</span>; expectedError: <span class="t">string</span> };
}</code></pre>
</div>

<h3>Step 5 - <code>src/modules/</code> reusable multi-page flows</h3>
<p>
Page objects know <em>about</em> one page. Modules combine multiple page objects into a business flow - "login", "buy a product", "complete checkout".
Specs call modules, not raw page objects, so the test reads like a story.
</p>
<div class="code-block">
<div class="code-head"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span><span>src/modules/LoginModule.ts</span></div>

<pre class="code-body"><code><span class="k">import</span> { <span class="t">Page</span> } <span class="k">from</span> <span class="s">'@playwright/test'</span>;
<span class="k">import</span> { <span class="t">LoginPage</span> } <span class="k">from</span> <span class="s">'../pages/LoginPage'</span>;
<span class="k">import</span> { <span class="t">HomePage</span> } <span class="k">from</span> <span class="s">'../pages/HomePage'</span>;
<span class="k">import</span> { <span class="t">Logger</span> } <span class="k">from</span> <span class="s">'../utils/Logger'</span>;

<span class="k">export class</span> <span class="t">LoginModule</span> {
  <span class="k">private</span> page: <span class="t">Page</span>;
  <span class="k">private</span> loginPage: <span class="t">LoginPage</span>;
  <span class="k">private</span> homePage: <span class="t">HomePage</span>;
  <span class="k">private</span> log: <span class="t">Logger</span>;

  <span class="f">constructor</span>(page: <span class="t">Page</span>) {
    <span class="k">this</span>.page = page;
    <span class="k">this</span>.loginPage = <span class="k">new</span> <span class="t">LoginPage</span>(page);
    <span class="k">this</span>.homePage  = <span class="k">new</span> <span class="t">HomePage</span>(page);
    <span class="k">this</span>.log = <span class="t">Logger</span>.<span class="f">create</span>(<span class="s">'LoginModule'</span>);
  }

  <span class="k">async</span> <span class="f">doLogin</span>(username: <span class="t">string</span>, password: <span class="t">string</span>): <span class="t">Promise</span>&lt;<span class="t">boolean</span>&gt; {
    <span class="k">this</span>.log.<span class="f">step</span>(<span class="n">1</span>, <span class="s">'Navigate to login page'</span>);
    <span class="k">await</span> <span class="k">this</span>.loginPage.<span class="f">navigate</span>();

    <span class="k">this</span>.log.<span class="f">step</span>(<span class="n">2</span>, <span class="s">'Enter username'</span>);
    <span class="k">await</span> <span class="k">this</span>.loginPage.<span class="f">enterUsername</span>(username);

    <span class="k">this</span>.log.<span class="f">step</span>(<span class="n">3</span>, <span class="s">'Enter password'</span>);
    <span class="k">await</span> <span class="k">this</span>.loginPage.<span class="f">enterPassword</span>(password);

    <span class="k">this</span>.log.<span class="f">step</span>(<span class="n">4</span>, <span class="s">'Click login button'</span>);
    <span class="k">await</span> <span class="k">this</span>.loginPage.<span class="f">clickLogin</span>();

    <span class="k">this</span>.log.<span class="f">info</span>(<span class="s">'Login successful'</span>);
    <span class="k">return</span> <span class="k">true</span>;
  }

  <span class="k">async</span> <span class="f">attemptInvalidLogin</span>(username: <span class="t">string</span>, password: <span class="t">string</span>): <span class="t">Promise</span>&lt;<span class="t">string</span>&gt; {
    <span class="k">await</span> <span class="k">this</span>.loginPage.<span class="f">navigate</span>();
    <span class="k">await</span> <span class="k">this</span>.loginPage.<span class="f">enterUsername</span>(username);
    <span class="k">await</span> <span class="k">this</span>.loginPage.<span class="f">enterPassword</span>(password);
    <span class="k">await</span> <span class="k">this</span>.loginPage.<span class="f">clickLogin</span>();
    <span class="k">await</span> <span class="k">this</span>.loginPage.<span class="f">expectErrorVisible</span>();
    <span class="k">return</span> <span class="k">await</span> <span class="k">this</span>.loginPage.<span class="f">getErrorMessage</span>();
  }
}</code></pre>
</div>

<h3>Step 6 - <code>src/fixtures/</code> custom Playwright fixtures</h3>
<p>
Extend the base <code>test()</code> with your page-objects and modules. After this, every spec gets <code>{ loginPage, loginModule, authenticatedPage }</code>
injected directly - no manual <code>new LoginPage(page)</code> in <code>beforeEach</code>.
</p>
<div class="code-block">
<div class="code-head"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span><span>src/fixtures/index.ts</span></div>

<pre class="code-body"><code><span class="k">import</span> { test <span class="k">as</span> base, <span class="t">Page</span> } <span class="k">from</span> <span class="s">'@playwright/test'</span>;
<span class="k">import</span> { <span class="t">LoginPage</span> } <span class="k">from</span> <span class="s">'../pages/LoginPage'</span>;
<span class="k">import</span> { <span class="t">HomePage</span> } <span class="k">from</span> <span class="s">'../pages/HomePage'</span>;
<span class="k">import</span> { <span class="t">LoginModule</span> } <span class="k">from</span> <span class="s">'../modules/LoginModule'</span>;
<span class="k">import</span> { config } <span class="k">from</span> <span class="s">'../config'</span>;

<span class="k">export type</span> <span class="t">TestFixtures</span> = {
  loginPage: <span class="t">LoginPage</span>;
  homePage: <span class="t">HomePage</span>;
  loginModule: <span class="t">LoginModule</span>;
  authenticatedPage: <span class="t">Page</span>;
};

<span class="k">export const</span> test = base.<span class="f">extend</span>&lt;<span class="t">TestFixtures</span>&gt;({
  loginPage:   <span class="k">async</span> ({ page }, use) =&gt; { <span class="k">await</span> <span class="f">use</span>(<span class="k">new</span> <span class="t">LoginPage</span>(page)); },
  homePage:    <span class="k">async</span> ({ page }, use) =&gt; { <span class="k">await</span> <span class="f">use</span>(<span class="k">new</span> <span class="t">HomePage</span>(page)); },
  loginModule: <span class="k">async</span> ({ page }, use) =&gt; { <span class="k">await</span> <span class="f">use</span>(<span class="k">new</span> <span class="t">LoginModule</span>(page)); },

  <span class="c">// Pre-authenticated page - perform login once per test that requests it</span>
  authenticatedPage: <span class="k">async</span> ({ browser }, use) =&gt; {
    <span class="k">const</span> context = <span class="k">await</span> browser.<span class="f">newContext</span>();
    <span class="k">const</span> page = <span class="k">await</span> context.<span class="f">newPage</span>();

    <span class="k">const</span> loginPage = <span class="k">new</span> <span class="t">LoginPage</span>(page);
    <span class="k">await</span> loginPage.<span class="f">navigate</span>();
    <span class="k">await</span> loginPage.<span class="f">enterUsername</span>(config.testUser.username);
    <span class="k">await</span> loginPage.<span class="f">enterPassword</span>(config.testUser.password);
    <span class="k">await</span> loginPage.<span class="f">clickLogin</span>();

    <span class="k">await</span> <span class="f">use</span>(page);
    <span class="k">await</span> context.<span class="f">close</span>();
  },
});

<span class="k">export</span> { expect } <span class="k">from</span> <span class="s">'@playwright/test'</span>;</code></pre>
</div>

<h3>Step 7 - <code>.env</code> + <code>src/config/</code> environment layering</h3>
<p>
The <code>.env</code> file holds non-secret defaults. <code>src/config/index.ts</code> reads them via dotenv and exposes a typed
<code>config</code> object. <code>getEnvironmentConfig()</code> layers staging / prod overrides on top.
</p>
<div class="code-block">
<div class="code-head"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span><span>.env</span></div>

<pre class="code-body"><code><span class="c"># TTA practice host</span>
BASE_URL=https://app.thetestingacademy.com
API_BASE_URL=https://app.thetestingacademy.com/api

<span class="c"># Default test credentials</span>
TEST_USERNAME=testuser@tta.dev
TEST_PASSWORD=SecurePass123

<span class="c"># Timeouts</span>
API_TIMEOUT=30000
DEFAULT_TIMEOUT=30000

<span class="c"># Logging</span>
LOG_LEVEL=INFO

<span class="c"># Retry</span>
RETRY_COUNT=3</code></pre>
</div>

<div class="code-block">
<div class="code-head"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span><span>src/config/index.ts</span></div>

<pre class="code-body"><code><span class="k">import</span> * <span class="k">as</span> dotenv <span class="k">from</span> <span class="s">'dotenv'</span>;
dotenv.<span class="f">config</span>();

<span class="k">export interface</span> <span class="t">AppConfig</span> {
  baseUrl: <span class="t">string</span>;
  apiBaseUrl: <span class="t">string</span>;
  apiTimeout: <span class="t">number</span>;
  testUser: { username: <span class="t">string</span>; password: <span class="t">string</span> };
  logLevel: <span class="t">string</span>;
  retryCount: <span class="t">number</span>;
}

<span class="k">export const</span> config: <span class="t">AppConfig</span> = {
  baseUrl:     process.env.BASE_URL || <span class="s">'https://app.thetestingacademy.com'</span>,
  apiBaseUrl:  process.env.API_BASE_URL || <span class="s">'https://app.thetestingacademy.com/api'</span>,
  apiTimeout:  <span class="f">parseInt</span>(process.env.API_TIMEOUT || <span class="s">'30000'</span>, <span class="n">10</span>),
  testUser: {
    username: process.env.TEST_USERNAME || <span class="s">'testuser@tta.dev'</span>,
    password: process.env.TEST_PASSWORD || <span class="s">'SecurePass123'</span>,
  },
  logLevel:   process.env.LOG_LEVEL || <span class="s">'INFO'</span>,
  retryCount: <span class="f">parseInt</span>(process.env.RETRY_COUNT || <span class="s">'3'</span>, <span class="n">10</span>),
};

<span class="k">export function</span> <span class="f">getEnvironmentConfig</span>(env?: <span class="t">string</span>): <span class="t">Partial</span>&lt;<span class="t">AppConfig</span>&gt; {
  <span class="k">const</span> environment = env || process.env.NODE_ENV || <span class="s">'development'</span>;

  <span class="k">switch</span> (environment) {
    <span class="k">case</span> <span class="s">'production'</span>:
      <span class="k">return</span> { baseUrl: <span class="s">'https://app.thetestingacademy.com'</span>, retryCount: <span class="n">5</span> };
    <span class="k">case</span> <span class="s">'staging'</span>:
      <span class="k">return</span> { baseUrl: <span class="s">'https://staging.thetestingacademy.com'</span>, retryCount: <span class="n">3</span> };
    <span class="k">case</span> <span class="s">'development'</span>:
    <span class="k">default</span>:
      <span class="k">return</span> { baseUrl: <span class="s">'https://app.thetestingacademy.com'</span>, retryCount: <span class="n">2</span> };
  }
}

<span class="k">export default</span> config;</code></pre>
</div>

<h3>Step 8 - <code>src/utils/CustomTTAReporter.ts</code> + <code>tta-report/</code></h3>
<p>
Implements Playwright's <code>Reporter</code> interface. Captures per-test steps, screenshots, retries, and tags, then writes
a branded HTML page into <code>tta-report/index.html</code>. The reporter is registered at the top of <code>playwright.config.ts</code>.
</p>
<div class="code-block">
<div class="code-head"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span><span>src/utils/CustomTTAReporter.ts (signature)</span></div>

<pre class="code-body"><code><span class="k">import</span> {
  <span class="t">FullConfig</span>, <span class="t">FullResult</span>, <span class="t">Reporter</span>,
  <span class="t">Suite</span>, <span class="t">TestCase</span>, <span class="t">TestResult</span>, <span class="t">TestStep</span>,
} <span class="k">from</span> <span class="s">'@playwright/test/reporter'</span>;
<span class="k">import</span> * <span class="k">as</span> fs <span class="k">from</span> <span class="s">'fs'</span>;

<span class="k">interface</span> <span class="t">StepData</span> {
  title: <span class="t">string</span>; duration: <span class="t">number</span>;
  status: <span class="s">'passed'</span> | <span class="s">'failed'</span> | <span class="s">'skipped'</span>;
  screenshot?: <span class="t">string</span>; error?: <span class="t">string</span>;
}

<span class="k">class</span> <span class="t">CustomTTAReporter</span> <span class="k">implements</span> <span class="t">Reporter</span> {
  <span class="k">private</span> outputFile = <span class="s">'tta-report/index.html'</span>;
  <span class="k">private</span> stats = { total: <span class="n">0</span>, passed: <span class="n">0</span>, failed: <span class="n">0</span>, skipped: <span class="n">0</span> };

  <span class="f">onBegin</span>(config: <span class="t">FullConfig</span>, suite: <span class="t">Suite</span>) {
    <span class="k">this</span>.stats.total = suite.<span class="f">allTests</span>().length;
  }

  <span class="f">onTestEnd</span>(test: <span class="t">TestCase</span>, result: <span class="t">TestResult</span>) {
    <span class="k">if</span> (result.status === <span class="s">'passed'</span>)  <span class="k">this</span>.stats.passed++;
    <span class="k">if</span> (result.status === <span class="s">'failed'</span>)  <span class="k">this</span>.stats.failed++;
    <span class="k">if</span> (result.status === <span class="s">'skipped'</span>) <span class="k">this</span>.stats.skipped++;
  }

  <span class="k">async</span> <span class="f">onEnd</span>(result: <span class="t">FullResult</span>) {
    fs.<span class="f">mkdirSync</span>(<span class="s">'tta-report'</span>, { recursive: <span class="k">true</span> });
    <span class="k">const</span> html = <span class="s">`&lt;!doctype html&gt;&lt;html&gt;&lt;head&gt;&lt;title&gt;TTA Report&lt;/title&gt;&lt;/head&gt;
&lt;body&gt;&lt;h1&gt;TTA Playwright Report&lt;/h1&gt;
&lt;p&gt;Total: ${</span><span class="k">this</span>.stats.total<span class="s">} | Pass: ${</span><span class="k">this</span>.stats.passed<span class="s">} | Fail: ${</span><span class="k">this</span>.stats.failed<span class="s">}&lt;/p&gt;
&lt;/body&gt;&lt;/html&gt;`</span>;
    fs.<span class="f">writeFileSync</span>(<span class="k">this</span>.outputFile, html);
  }
}

<span class="k">export default</span> <span class="t">CustomTTAReporter</span>;</code></pre>
</div>
<div class="callout">
<strong>Production version</strong> handles per-test screenshots, per-step duration timelines, video clip start/end, console logs, file-group stats,
and dark-mode CSS. The signature above is enough to get a working report; expand <code>onEnd</code> to emit a full template literal.
</div>

<h3>Step 9 - <code>src/tests/</code> spec files (tagged + sharded-ready)</h3>
<p>
Specs import <code>test</code> from <code>../fixtures</code>, not <code>@playwright/test</code> directly. Title-prefix tags like <code>@P0</code>,
<code>@Smoke</code>, <code>@Regression</code> let you grep-filter at run-time: <code>npx playwright test --grep @P0</code>.
</p>
<div class="code-block">
<div class="code-head"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span><span>src/tests/login.spec.ts</span></div>

<pre class="code-body"><code><span class="k">import</span> { test, expect } <span class="k">from</span> <span class="s">'../fixtures'</span>;
<span class="k">import</span> usersData <span class="k">from</span> <span class="s">'../testdata/users.json'</span>;
<span class="k">import</span> { <span class="t">UsersData</span>, <span class="t">InvalidUser</span> } <span class="k">from</span> <span class="s">'../testdata/types'</span>;

<span class="k">const</span> typed = usersData <span class="k">as</span> <span class="t">UsersData</span>;
<span class="k">const</span> validUser = typed.validUsers[<span class="n">0</span>];
<span class="k">const</span> invalidUsers: <span class="t">InvalidUser</span>[] = typed.invalidUsers;

test.<span class="f">describe</span>(<span class="s">'@P1 @Regression @Login Login Feature'</span>, () =&gt; {

  test.<span class="f">describe</span>(<span class="s">'@P0 @Smoke Valid Login'</span>, () =&gt; {
    test(<span class="s">'should login with valid credentials'</span>, <span class="k">async</span> ({ loginModule, page }) =&gt; {
      <span class="k">await</span> test.<span class="f">step</span>(<span class="s">'login + verify URL'</span>, <span class="k">async</span> () =&gt; {
        <span class="k">await</span> loginModule.<span class="f">doLogin</span>(validUser.username, validUser.password);
        <span class="f">expect</span>(page.<span class="f">url</span>()).<span class="f">toContain</span>(<span class="s">'multiple_element_filter'</span>);
      });
    });
  });

  test.<span class="f">describe</span>(<span class="s">'@P1 @Regression Invalid Login'</span>, () =&gt; {
    test(<span class="s">'shows error with bad credentials'</span>, <span class="k">async</span> ({ loginModule }) =&gt; {
      <span class="k">const</span> [u] = invalidUsers;
      <span class="k">const</span> error = <span class="k">await</span> loginModule.<span class="f">attemptInvalidLogin</span>(u.username, u.password);
      <span class="f">expect</span>(error).<span class="f">toContain</span>(u.expectedError);
    });
  });

  test.<span class="f">describe</span>(<span class="s">'@P2 Login Page Elements'</span>, () =&gt; {
    test(<span class="s">'login form is fully rendered'</span>, <span class="k">async</span> ({ loginPage }) =&gt; {
      <span class="k">await</span> loginPage.<span class="f">navigate</span>();
      <span class="k">await</span> loginPage.<span class="f">expectUsernameVisible</span>();
      <span class="k">await</span> loginPage.<span class="f">expectPasswordVisible</span>();
      <span class="k">await</span> loginPage.<span class="f">expectLoginButtonEnabled</span>();
    });
  });
});

test.<span class="f">describe</span>(<span class="s">'@P0 @Smoke Login - via fixture'</span>, () =&gt; {
  test(<span class="s">'authenticated page is ready to use'</span>, <span class="k">async</span> ({ authenticatedPage }) =&gt; {
    <span class="k">await</span> <span class="f">expect</span>(authenticatedPage).<span class="f">toHaveURL</span>(<span class="s">/multiple_element_filter/</span>);
  });
});</code></pre>
</div>
</article>

<article class="stage-card" id="scenario">
<h2>5. Worked scenario - TTACart end-to-end checkout</h2>
<p class="help">One spec that ties every box of the diagram together: log in as <code>standard_user</code>, add 2 items, walk through both checkout steps, finish, then assert the thank-you screen. Targets the live TTACart pages.</p>

<ul>
<li><b>Login</b> page: <code>https://app.thetestingacademy.com/playwright/ttacart/index.html</code></li>
<li><b>Inventory</b>: <code>/playwright/ttacart/inventory.html</code></li>
<li><b>Cart</b>: <code>/playwright/ttacart/cart.html</code></li>
<li><b>Checkout step 1</b>: <code>/playwright/ttacart/checkout-step-one.html</code> (guest info)</li>
<li><b>Checkout step 2</b>: <code>/playwright/ttacart/checkout-step-two.html</code> (totals)</li>
<li><b>Complete</b>: <code>/playwright/ttacart/checkout-complete.html</code></li>
</ul>
<p>Test users live in a JSON fixture. The spec uses the fixture-based test runner from <code>src/fixtures/test-base.ts</code>.</p>

<div class="code-block">
<div class="code-head"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span><span>src/testdata/users.json</span></div>

<pre class="code-body"><code>[
  { <span class="p">"username"</span>: <span class="s">"standard_user"</span>,           <span class="p">"password"</span>: <span class="s">"tta_secret"</span>, <span class="p">"kind"</span>: <span class="s">"ok"</span> },
  { <span class="p">"username"</span>: <span class="s">"locked_out_user"</span>,         <span class="p">"password"</span>: <span class="s">"tta_secret"</span>, <span class="p">"kind"</span>: <span class="s">"blocked"</span> },
  { <span class="p">"username"</span>: <span class="s">"problem_user"</span>,            <span class="p">"password"</span>: <span class="s">"tta_secret"</span>, <span class="p">"kind"</span>: <span class="s">"broken-ui"</span> },
  { <span class="p">"username"</span>: <span class="s">"performance_glitch_user"</span>, <span class="p">"password"</span>: <span class="s">"tta_secret"</span>, <span class="p">"kind"</span>: <span class="s">"slow"</span> },
  { <span class="p">"username"</span>: <span class="s">"error_user"</span>,              <span class="p">"password"</span>: <span class="s">"tta_secret"</span>, <span class="p">"kind"</span>: <span class="s">"flaky"</span> },
  { <span class="p">"username"</span>: <span class="s">"visual_user"</span>,             <span class="p">"password"</span>: <span class="s">"tta_secret"</span>, <span class="p">"kind"</span>: <span class="s">"visual"</span> }
]</code></pre>
</div>

<div class="code-block">
<div class="code-head"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span><span>src/pages/LoginPage.ts</span></div>

<pre class="code-body"><code><span class="k">import</span> { expect, <span class="t">Locator</span>, <span class="t">Page</span> } <span class="k">from</span> <span class="s">'@playwright/test'</span>;
<span class="k">import</span> { UtilElementLocator } <span class="k">from</span> <span class="s">'../utils/UtilElementLocator'</span>;

<span class="k">export class</span> <span class="t">LoginPage</span> {
  <span class="k">private readonly</span> u: <span class="t">UtilElementLocator</span>;
  <span class="k">readonly</span> username: <span class="t">Locator</span>;
  <span class="k">readonly</span> password: <span class="t">Locator</span>;
  <span class="k">readonly</span> loginBtn: <span class="t">Locator</span>;
  <span class="k">readonly</span> errorBanner: <span class="t">Locator</span>;

  <span class="f">constructor</span>(<span class="k">private</span> page: <span class="t">Page</span>) {
    <span class="k">this</span>.u = <span class="k">new</span> <span class="t">UtilElementLocator</span>(page);
    <span class="k">this</span>.username    = page.<span class="f">getByTestId</span>(<span class="s">'username'</span>);
    <span class="k">this</span>.password    = page.<span class="f">getByTestId</span>(<span class="s">'password'</span>);
    <span class="k">this</span>.loginBtn    = page.<span class="f">getByTestId</span>(<span class="s">'login-button'</span>);
    <span class="k">this</span>.errorBanner = page.<span class="f">getByTestId</span>(<span class="s">'error'</span>);
  }

  <span class="k">async</span> <span class="f">open</span>() {
    <span class="k">await</span> <span class="k">this</span>.page.<span class="f">goto</span>(<span class="s">'/playwright/ttacart/index.html'</span>);
  }

  <span class="k">async</span> <span class="f">loginAs</span>(username: <span class="t">string</span>, password: <span class="t">string</span>): <span class="t">Promise</span>&lt;<span class="k">void</span>&gt; {
    <span class="k">await</span> <span class="k">this</span>.u.<span class="f">fill</span>(<span class="k">this</span>.username, username);
    <span class="k">await</span> <span class="k">this</span>.u.<span class="f">fill</span>(<span class="k">this</span>.password, password);
    <span class="k">await</span> <span class="k">this</span>.u.<span class="f">click</span>(<span class="k">this</span>.loginBtn);
  }

  <span class="k">async</span> <span class="f">expectErrorContains</span>(text: <span class="t">string</span>): <span class="t">Promise</span>&lt;<span class="k">void</span>&gt; {
    <span class="k">await</span> <span class="f">expect</span>(<span class="k">this</span>.errorBanner).<span class="f">toContainText</span>(text);
  }
}</code></pre>
</div>

<div class="code-block">
<div class="code-head"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span><span>src/pages/InventoryPage.ts (excerpt)</span></div>

<pre class="code-body"><code><span class="k">async</span> <span class="f">addToCart</span>(productId: <span class="t">string</span>): <span class="t">Promise</span>&lt;<span class="k">void</span>&gt; {
  <span class="k">await</span> <span class="k">this</span>.page.<span class="f">getByTestId</span>(<span class="s">`add-to-cart-${productId}`</span>).<span class="f">click</span>();
}

<span class="k">async</span> <span class="f">cartCount</span>(): <span class="t">Promise</span>&lt;<span class="t">number</span>&gt; {
  <span class="k">const</span> badge = <span class="k">this</span>.page.<span class="f">getByTestId</span>(<span class="s">'shopping-cart-badge'</span>);
  <span class="k">if</span> (!(<span class="k">await</span> badge.<span class="f">isVisible</span>())) <span class="k">return</span> <span class="n">0</span>;
  <span class="k">return</span> <span class="t">Number</span>(<span class="k">await</span> badge.<span class="f">innerText</span>());
}

<span class="k">async</span> <span class="f">openCart</span>(): <span class="t">Promise</span>&lt;<span class="k">void</span>&gt; {
  <span class="k">await</span> <span class="k">this</span>.page.<span class="f">getByTestId</span>(<span class="s">'shopping-cart-link'</span>).<span class="f">click</span>();
}</code></pre>
</div>

<div class="code-block">
<div class="code-head"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span><span>src/tests/checkout.spec.ts</span></div>

<pre class="code-body"><code><span class="k">import</span> { test, expect } <span class="k">from</span> <span class="s">'../fixtures/test-base'</span>;

test(<span class="s">'@e2e standard_user buys two items'</span>, <span class="k">async</span> ({
  page, loginPage, inventoryPage, cartPage, checkoutOne, checkoutTwo, completePage,
}) =&gt; {

  <span class="c">// 1) login</span>
  <span class="k">await</span> loginPage.<span class="f">open</span>();
  <span class="k">await</span> loginPage.<span class="f">loginAs</span>(<span class="s">'standard_user'</span>, <span class="s">'tta_secret'</span>);
  <span class="k">await</span> <span class="f">expect</span>(page).<span class="f">toHaveURL</span>(/inventory\.html/);

  <span class="c">// 2) add 2 items, assert cart badge</span>
  <span class="k">await</span> inventoryPage.<span class="f">addToCart</span>(<span class="s">'tta-practice-backpack'</span>);
  <span class="k">await</span> inventoryPage.<span class="f">addToCart</span>(<span class="s">'tta-bike-light'</span>);
  <span class="f">expect</span>(<span class="k">await</span> inventoryPage.<span class="f">cartCount</span>()).<span class="f">toBe</span>(<span class="n">2</span>);

  <span class="c">// 3) cart -&gt; checkout step 1</span>
  <span class="k">await</span> inventoryPage.<span class="f">openCart</span>();
  <span class="k">await</span> cartPage.<span class="f">assertLoaded</span>();
  <span class="k">await</span> cartPage.<span class="f">checkout</span>();

  <span class="c">// 4) guest details</span>
  <span class="k">await</span> checkoutOne.<span class="f">fillGuest</span>({ firstName: <span class="s">'Aarav'</span>, lastName: <span class="s">'Sharma'</span>, postalCode: <span class="s">'560001'</span> });
  <span class="k">await</span> checkoutOne.<span class="f">continue</span>();

  <span class="c">// 5) overview totals math</span>
  <span class="k">const</span> subtotal = <span class="k">await</span> checkoutTwo.<span class="f">subtotal</span>();   <span class="c">// 29.99 + 9.99</span>
  <span class="k">const</span> tax      = <span class="k">await</span> checkoutTwo.<span class="f">tax</span>();        <span class="c">// 8% of subtotal</span>
  <span class="k">const</span> total    = <span class="k">await</span> checkoutTwo.<span class="f">total</span>();      <span class="c">// subtotal + tax</span>
  <span class="f">expect</span>(total).<span class="f">toBeCloseTo</span>(<span class="n">subtotal</span> + <span class="n">tax</span>, <span class="n">2</span>);

  <span class="c">// 6) finish + assert thank-you</span>
  <span class="k">await</span> checkoutTwo.<span class="f">finish</span>();
  <span class="k">await</span> <span class="f">expect</span>(page).<span class="f">toHaveURL</span>(/checkout-complete\.html/);
  <span class="k">await</span> <span class="f">expect</span>(completePage.headerText()).<span class="f">resolves</span>.<span class="f">toContain</span>(<span class="s">'Thank you'</span>);
});</code></pre>
</div>

<div class="code-block">
<div class="code-head"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span><span>src/tests/negative.spec.ts (one case)</span></div>

<pre class="code-body"><code>test(<span class="s">'@regression locked_out_user sees the locked-out error'</span>, <span class="k">async</span> ({ loginPage }) =&gt; {
  <span class="k">await</span> loginPage.<span class="f">open</span>();
  <span class="k">await</span> loginPage.<span class="f">loginAs</span>(<span class="s">'locked_out_user'</span>, <span class="s">'tta_secret'</span>);
  <span class="k">await</span> loginPage.<span class="f">expectErrorContains</span>(<span class="s">'locked out'</span>);
});</code></pre>
</div>

<p class="help" style="margin-top:14px;">
Full source lives on the <a href="https://github.com/PramodDutta/Advance-Playwright-Framework/tree/ttacart" target="_blank" rel="noopener">ttacart branch</a> - look under <code>src/tests/</code> for the rest (<code>login.spec.ts</code>, <code>inventory.spec.ts</code>, <code>cart.spec.ts</code>, <code>data-driven.spec.ts</code>).
</p>
</article>

<article class="stage-card" id="run">
<h2>6. Run it</h2>
<p class="help">Eight commands from clone to coloured HTML report.</p>
<div class="run-grid">
<div class="run-cmd"><span class="arrow">$</span> git clone -b ttacart https://github.com/PramodDutta/Advance-Playwright-Framework.git</div>
<div class="run-cmd"><span class="arrow">$</span> cd Advance-Playwright-Framework</div>
<div class="run-cmd"><span class="arrow">$</span> npm ci</div>
<div class="run-cmd"><span class="arrow">$</span> npx playwright install --with-deps</div>
<div class="run-cmd"><span class="arrow">$</span> TTA_ENV=qa npx playwright test                      <span style="color:#5d6b89">  # full TTACart suite</span></div>
<div class="run-cmd"><span class="arrow">$</span> npx playwright test --grep @smoke                   <span style="color:#5d6b89">  # only smoke tagged</span></div>
<div class="run-cmd"><span class="arrow">$</span> npx playwright test --project=chromium --headed     <span style="color:#5d6b89">  # watch it run</span></div>
<div class="run-cmd"><span class="arrow">$</span> npx playwright show-report                          <span style="color:#5d6b89">  # built-in HTML report</span></div>
<div class="run-cmd"><span class="arrow">$</span> open tta-report/index.html                          <span style="color:#5d6b89">  # branded TTA report</span></div>
</div>

<h3>Expected report</h3>
<p>After a clean run the HTML report looks roughly like:</p>
<svg class="report-svg" viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mock Playwright report">
<rect x="0" y="0" width="560" height="240" fill="#0b1424"/>
<text x="20" y="32" fill="#82aaff" font-family="JetBrains Mono, monospace" font-size="14" font-weight="700">TTA Playwright Report</text>
<text x="20" y="52" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="10">advance-playwright-framework - chromium</text>

<g transform="translate(20,72)">
<rect x="0" y="0" width="160" height="58" fill="#152033" stroke="#1f2a3f"/>
<text x="14" y="20" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Total</text>
<text x="14" y="44" fill="#d6e0f5" font-family="Inter, sans-serif" font-size="22" font-weight="700">42</text>
</g>
<g transform="translate(200,72)">
<rect x="0" y="0" width="160" height="58" fill="#152033" stroke="#1f2a3f"/>
<text x="14" y="20" fill="#c3e88d" font-family="Inter, sans-serif" font-size="10">Passed</text>
<text x="14" y="44" fill="#c3e88d" font-family="Inter, sans-serif" font-size="22" font-weight="700">40</text>
</g>
<g transform="translate(380,72)">
<rect x="0" y="0" width="160" height="58" fill="#152033" stroke="#1f2a3f"/>
<text x="14" y="20" fill="#ff9cac" font-family="Inter, sans-serif" font-size="10">Failed</text>
<text x="14" y="44" fill="#ff9cac" font-family="Inter, sans-serif" font-size="22" font-weight="700">2</text>
</g>

<text x="20" y="160" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="10">login.spec.ts</text>
<rect x="20" y="170" width="520" height="14" fill="#152033"/>
<rect x="20" y="170" width="496" height="14" fill="#19c37d"/>
<text x="160" y="180" fill="#0b1424" font-family="Inter, sans-serif" font-size="9" font-weight="700">8 / 8 passed - 4.2s</text>

<text x="20" y="205" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="10">register-login.spec.ts</text>
<rect x="20" y="215" width="520" height="14" fill="#152033"/>
<rect x="20" y="215" width="320" height="14" fill="#19c37d"/>
<rect x="340" y="215" width="50"  height="14" fill="#ff5f56"/>
<text x="100" y="225" fill="#0b1424" font-family="Inter, sans-serif" font-size="9" font-weight="700">3 pass - 1 fail - 7.8s</text>
</svg>
</article>

<article class="stage-card" id="ci">
<h2>7. CI - GitHub Actions (sharded)</h2>
<p class="help">The sharded workflow runs 4 parallel jobs, each doing one quarter of the suite, then a final job stitches the four HTML reports back together with <code>npx playwright merge-reports</code>.</p>
<div class="code-block">
<div class="code-head"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span><span>.github/workflows/ttacart.yml</span></div>

<pre class="code-body"><code><span class="p">name</span>: <span class="s">TTACart Playwright Tests</span>

<span class="p">on</span>:
  <span class="p">push</span>:        { <span class="p">branches</span>: [<span class="s">ttacart</span>] }
  <span class="p">pull_request</span>: { <span class="p">branches</span>: [<span class="s">main</span>, <span class="s">ttacart</span>] }
  <span class="p">workflow_dispatch</span>:
    <span class="p">inputs</span>:
      <span class="p">test_tag</span>:
        <span class="p">description</span>: <span class="s">'Tag to run (@smoke / @regression / @e2e)'</span>
        <span class="p">required</span>: <span class="k">false</span>
        <span class="p">default</span>: <span class="s">''</span>

<span class="p">env</span>:
  <span class="p">CI</span>: <span class="k">true</span>
  <span class="p">NODE_VERSION</span>: <span class="s">'20'</span>

<span class="p">jobs</span>:
  <span class="p">test</span>:
    <span class="p">name</span>: <span class="s">Run Tests</span>
    <span class="p">runs-on</span>: <span class="s">ubuntu-latest</span>
    <span class="p">timeout-minutes</span>: <span class="n">30</span>
    <span class="p">strategy</span>:
      <span class="p">fail-fast</span>: <span class="k">false</span>
      <span class="p">matrix</span>: { <span class="p">shard</span>: [<span class="n">1</span>, <span class="n">2</span>, <span class="n">3</span>, <span class="n">4</span>] }

    <span class="p">steps</span>:
      - <span class="p">uses</span>: <span class="s">actions/checkout@v4</span>
      - <span class="p">uses</span>: <span class="s">actions/setup-node@v4</span>
        <span class="p">with</span>: { <span class="p">node-version</span>: <span class="s">'${{ env.NODE_VERSION }}'</span>, <span class="p">cache</span>: <span class="s">'npm'</span> }
      - <span class="p">name</span>: <span class="s">Install deps</span>
        <span class="p">run</span>: <span class="s">npm ci</span>
      - <span class="p">name</span>: <span class="s">Install Playwright browsers</span>
        <span class="p">run</span>: <span class="s">npx playwright install --with-deps chromium</span>
      - <span class="p">name</span>: <span class="s">Run shard ${{ matrix.shard }}/4</span>
        <span class="p">run</span>: |
          <span class="s">if [ -n "${{ github.event.inputs.test_tag }}" ]; then</span>
            <span class="s">npx playwright test --shard=${{ matrix.shard }}/4 --grep "${{ github.event.inputs.test_tag }}"</span>
          <span class="s">else</span>
            <span class="s">npx playwright test --shard=${{ matrix.shard }}/4</span>
          <span class="s">fi</span>
      - <span class="p">name</span>: <span class="s">Upload test results</span>
        <span class="p">if</span>: <span class="s">always()</span>
        <span class="p">uses</span>: <span class="s">actions/upload-artifact@v4</span>
        <span class="p">with</span>:
          <span class="p">name</span>: <span class="s">playwright-report-shard-${{ matrix.shard }}</span>
          <span class="p">path</span>: |
            <span class="s">playwright-report/</span>
            <span class="s">test-results/</span>
            <span class="s">tta-report/</span>
          <span class="p">retention-days</span>: <span class="n">30</span>

  <span class="p">merge-reports</span>:
    <span class="p">needs</span>: <span class="s">test</span>
    <span class="p">runs-on</span>: <span class="s">ubuntu-latest</span>
    <span class="p">if</span>: <span class="s">always()</span>
    <span class="p">steps</span>:
      - <span class="p">uses</span>: <span class="s">actions/checkout@v4</span>
      - <span class="p">uses</span>: <span class="s">actions/setup-node@v4</span>
        <span class="p">with</span>: { <span class="p">node-version</span>: <span class="s">'${{ env.NODE_VERSION }}'</span>, <span class="p">cache</span>: <span class="s">'npm'</span> }
      - <span class="p">run</span>: <span class="s">npm ci</span>
      - <span class="p">uses</span>: <span class="s">actions/download-artifact@v4</span>
        <span class="p">with</span>: { <span class="p">path</span>: <span class="s">all-reports</span>, <span class="p">pattern</span>: <span class="s">playwright-report-shard-*</span> }
      - <span class="p">name</span>: <span class="s">Merge HTML reports</span>
        <span class="p">run</span>: <span class="s">npx playwright merge-reports --reporter html ./all-reports</span>
      - <span class="p">uses</span>: <span class="s">actions/upload-artifact@v4</span>
        <span class="p">with</span>:
          <span class="p">name</span>: <span class="s">playwright-report-merged</span>
          <span class="p">path</span>: <span class="s">playwright-report/</span>
          <span class="p">retention-days</span>: <span class="n">30</span></code></pre>
</div>
<div class="callout">
<strong>Sharding mental model:</strong> <code>--shard=1/4</code> means "run only the first quarter of the test files this worker would otherwise have run".
Playwright distributes files (not individual tests) by hash, so two specs in the same file always end up on the same shard. Total wall-time drops by ~3.5x with 4 shards.
</div>

<h3>Dockerfile for local + CI parity</h3>
<div class="code-block">
<div class="code-head"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span><span>Dockerfile</span></div>

<pre class="code-body"><code><span class="c"># Official Playwright image with all browsers preinstalled</span>
<span class="k">FROM</span> mcr.microsoft.com/playwright:v1.57.0-jammy

<span class="k">WORKDIR</span> /app
<span class="k">ENV</span> CI=true
<span class="k">ENV</span> NODE_ENV=test
<span class="k">ENV</span> PLAYWRIGHT_BROWSERS_PATH=/ms-playwright

<span class="k">COPY</span> package*.json ./
<span class="k">RUN</span> npm ci

<span class="k">COPY</span> . .
<span class="k">RUN</span> npm run build
<span class="k">RUN</span> mkdir -p /app/test-results /app/playwright-report /app/tta-report

<span class="k">CMD</span> [<span class="s">"npx"</span>, <span class="s">"playwright"</span>, <span class="s">"test"</span>]

<span class="c"># Build:  docker build -t tta-playwright .</span>
<span class="c"># Run:    docker run --rm -v $(pwd)/test-results:/app/test-results tta-playwright</span>
<span class="c"># Shard:  docker run --rm tta-playwright npx playwright test --shard=1/4</span></code></pre>
</div>
</article>

<article class="stage-card" id="next">
<h2>8. Where to go next</h2>
<p class="help">Each of these has a dedicated TTA practice page or concept reference - click through and keep building.</p>
<ul>
<li><b>Sharding + parallel CI</b> - already shown above; tune <code>workers</code> + <code>matrix.shard</code> for your runner count.</li>
<li><b>Visual regression</b> - <code>await expect(page).toHaveScreenshot('home.png')</code>. Pair with <code>--update-snapshots</code> on a green main.</li>
<li><b>Hybrid API + UI</b> - use <code>APIRequestContext</code> to seed data via <code>/api/auth/register</code>, then drive the UI. See <a href="./network/intercept.html">Network interception</a>.</li>
<li><b>Custom fixtures</b> - explored above. Next steps: dependent fixtures, worker-scoped fixtures, and the <code>{ test, expect }</code> re-export pattern.</li>
<li><b>Global setup + teardown</b> - <code>globalSetup</code> in <code>playwright.config.ts</code> for one-time database seeding before all tests.</li>
<li><b>BasePage</b> - extract common methods (navigate-with-retry, wait-for-toast) into <code>pages/BasePage.ts</code>, then have <code>LoginPage extends BasePage</code>.</li>
<li><b>Allure history + categories</b> - swap or augment the HTML reporter with <code>allure-playwright</code> for trend graphs and category buckets.</li>
<li><b>Faker + data factories</b> - read <a href="./widgets/data-driven.html">Data-driven + POM</a> for Faker / CSV / JSON / XLSX patterns.</li>
<li><b>Test modifiers + hooks</b> - read <a href="./widgets/test-modifiers.html">Test modifiers, hooks, data</a> for <code>test.skip / slow / fixme / fail</code>, <code>test.step</code>, <code>describe.serial</code>.</li>
<li><b>Assertions cookbook</b> - <a href="./widgets/expect.html">Assertions (expect)</a> covers every locator-level expectation.</li>
</ul>
</article>
</div>

<aside class="side-rail">
<section class="side-card">
<h3>What you'll learn</h3>
<ul>
<li><b>Why</b> a framework exists - separation of concerns</li>
<li><b>Folder layout</b> - <code>pages/</code> <code>modules/</code> <code>utils/</code> <code>testdata/</code> <code>fixtures/</code> <code>config/</code></li>
<li><b>Page Object Model</b> - arrow-function locators, action methods, expectation methods</li>
<li><b>Modules</b> - business flows that compose page objects</li>
<li><b>Custom fixtures</b> - <code>test.extend()</code> with page-objects + pre-auth</li>
<li><b>Environment config</b> - <code>.env</code> + <code>dotenv</code> + <code>getEnvironmentConfig()</code></li>
<li><b>Tagged specs</b> - <code>@P0 @Smoke @Regression</code> for grep-filtering</li>
<li><b>Data-driven</b> - JSON + CSV fixtures, typed via <code>testdata/types.ts</code></li>
<li><b>Custom reporter</b> - implementing <code>Reporter</code> for a branded HTML output</li>
<li><b>CI + sharding</b> - 4-way matrix + <code>merge-reports</code></li>
</ul>
</section>

<section class="side-card">
<h3>Estimated time</h3>
<ul>
<li><b>Reading:</b> 25 minutes</li>
<li><b>Coding along:</b> 60-90 minutes</li>
<li><b>First green run:</b> ~5 minutes</li>
</ul>
</section>

<section class="side-card">
<h3>Source repo</h3>
<ul>
<li><a href="https://github.com/PramodDutta/Advance-Playwright-Framework" target="_blank" rel="noopener">Advance-Playwright-Framework</a> on GitHub - the upstream this page mirrors.</li>
<li>Clone: <code>git clone https://github.com/PramodDutta/Advance-Playwright-Framework.git</code></li>
<li>License: ISC</li>
</ul>
</section>

<section class="side-card">
<h3>Practice targets</h3>
<ul>
<li><a href="./multiple_element_filter.html">Multiple Element Filter</a> - the login page used by <code>TtaLoginPage</code></li>
<li><a href="./tables/practice.html">QA Profile Form</a> - the register page used by <code>RegisterPage</code></li>
<li><a href="./widgets/data-driven.html">Data-driven + POM</a> - companion concept reference</li>
<li><a href="./widgets/test-modifiers.html">Test modifiers, hooks, data</a> - companion concept reference</li>
</ul>
</section>
</aside>
</section>
</main>


<style>
  /* ---- Preview hardening -----------------------------------------------
     A Markdown viewer injects its own .markdown-body styles that can
     out-specify a few rules. These overrides keep the rendering identical
     to https://app.thetestingacademy.com/playwright/advance-framework.html
     (they are no-ops in a plain browser). */
  .markdown-body {
    padding: 0 !important;
    max-width: none !important;
    font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif !important;
    font-size: 15px !important;
    line-height: 1.55 !important;
    color: var(--ink) !important;
    background: var(--bg) !important;
  }

  .tta-content code {
    background: var(--code-bg) !important;
    color: var(--code-ink) !important;
    padding: 0.1em 0.36em !important;
    border-radius: 6px !important;
    font-family: "JetBrains Mono", "SFMono-Regular", Consolas, monospace !important;
    font-size: 0.86em !important;
    font-weight: 500 !important;
  }

  .tta-content .code-body code,
  .tta-content .code-body code * {
    background: transparent !important;
    color: inherit !important;
    padding: 0 !important;
    border-radius: 0 !important;
    font: inherit !important;
  }

  .tta-content pre.code-body {
    background: #0b1424 !important;
    color: #d6e0f5 !important;
    padding: 14px 16px !important;
    margin: 0 !important;
    border: 0 !important;
    border-radius: 0 !important;
    font-family: "JetBrains Mono", ui-monospace, monospace !important;
    font-size: 0.82rem !important;
    line-height: 1.7 !important;
    white-space: pre !important;
    overflow-x: auto !important;
  }

  .tta-content pre.folder-tree {
    background: #0b1424 !important;
    color: #d6e0f5 !important;
    padding: 14px 16px !important;
    margin: 0 !important;
    border: 1px solid var(--border) !important;
    border-radius: 10px !important;
    font-family: "JetBrains Mono", ui-monospace, monospace !important;
    font-size: 0.78rem !important;
    line-height: 1.55 !important;
    white-space: pre !important;
    overflow-x: auto !important;
  }

  .tta-content .arch-sub pre {
    background: transparent !important;
    color: var(--ink-soft) !important;
    padding: 0 !important;
    margin: 0 !important;
    border: 0 !important;
    border-radius: 0 !important;
    font-family: "JetBrains Mono", ui-monospace, monospace !important;
    font-size: 0.78rem !important;
    line-height: 1.55 !important;
    white-space: pre-wrap !important;
  }
</style>
