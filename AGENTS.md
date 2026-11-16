# SONORA — AI Project Instructions

> Read this file before creating, editing, or deleting any project file. These rules are the source of truth for future AI-assisted development.

## 1. Project Overview

SONORA is a dark, editorial-style music knowledge archive. It introduces music genres, artists, albums, and listening concepts through concise, carefully structured articles. The project is designed to grow by adding new content pages while preserving a consistent visual system and navigation experience.

Primary goals:
- Present music knowledge in a browsable, readable archive.
- Make new pages predictable to create and easy to maintain.
- Demonstrate that an AI assistant can extend the project by following this document.

Audience: general music listeners and students who want accessible introductions to music topics.

## 2. Technology and Constraints

- Use semantic HTML5, CSS3, and vanilla JavaScript.
- Do not introduce React, Vue, build tools, package managers, or server-side dependencies unless the project owner explicitly approves.
- The site must work as a static website on GitHub Pages.
- Use relative paths for all local assets and internal links.
- Do not require API keys, user accounts, a database, or external services.
- Avoid adding third-party libraries for features that can be implemented with a small amount of vanilla JavaScript.

## 3. Directory Structure

```text
SONORA/
├── AGENTS.md                 # Mandatory AI development rules
├── README.md                 # Project overview and deployment guide
├── index.html                # Homepage and archive directory
├── assets/
│   ├── css/style.css         # Global design system and responsive styles
│   ├── js/main.js            # Shared navigation, search, and UI behavior
│   └── images/               # Locally stored project images
└── pages/
    ├── genres/               # Genre introduction pages
    ├── artists/              # Artist profile pages
    └── albums/               # Album guide pages
```

File placement:
- Genre articles belong in `pages/genres/`.
- Artist profiles belong in `pages/artists/`.
- Album guides belong in `pages/albums/`.
- Shared styles and scripts must remain in `assets/css/` and `assets/js/`.
- Do not place one-off CSS or JavaScript in an article unless explicitly approved.

## 4. Visual Design System

Visual direction: dark editorial archive, restrained and atmospheric rather than flashy.

Design tokens (maintain these unless asked to redesign):
- Page background: `#0B0D12`
- Raised surface: `#141821`
- Secondary surface: `#1B2230`
- Main text: `#F2F0EA`
- Muted text: `#9AA3B2`
- Accent: `#C7A6FF`
- Secondary accent: `#8DD8C7`
- Border: `rgba(255,255,255,.10)`

Typography:
- Use system sans-serif for interface and body text.
- Use a serif display treatment for large editorial headings where available.
- Keep body line length comfortable and line-height generous.
- Use uppercase micro-labels sparingly for metadata.

Layout:
- Center content with a readable maximum width.
- Use generous spacing and consistent card radii.
- Cards must have visible hover and keyboard-focus states.
- Responsive behavior is required at mobile, tablet, and desktop widths.
- Do not use emoji as a substitute for icons in the primary navigation.

## 5. Shared Page Structure

Every content page must include:
1. Shared site header with SONORA brand and navigation.
2. Breadcrumb or clear route back to the archive.
3. Category label and page title.
4. A short introductory summary.
5. Main content divided into meaningful sections with headings.
6. A related-content or return-to-archive link.
7. Shared footer.

The header, footer, spacing, typography, and color tokens must remain consistent across pages.

## 6. Content Templates

### Genre page
Required sections:
- Overview
- Key characteristics
- Common instruments or production traits (when relevant)
- Historical context (only when adequately supported)
- Suggested listening / related topics

### Artist page
Required sections:
- Introduction
- Musical identity
- Selected works
- Why the artist matters
- Related genres or albums

### Album page
Required sections:
- Album overview
- Sound and arrangement
- Themes and context
- Listening guide
- Related artists or genres

Content rules:
- Write in Traditional Chinese (Taiwan usage), while retaining original English names where useful.
- Explain specialist terms briefly on first use.
- Prefer concise, informative paragraphs over exaggerated promotional language.
- Distinguish verifiable facts from interpretation or opinion.
- Never invent release dates, credits, chart positions, awards, quotations, or historical claims.
- If a fact cannot be verified, omit it or label it as an interpretation.
- Do not reproduce copyrighted song lyrics, long passages, album artwork, or proprietary editorial copy.
- Do not embed or redistribute commercial recordings. Use original text and properly licensed or self-created visuals only.

## 7. Naming and Linking Rules

- Use lowercase English filenames with hyphens: `alternative-rock.html`.
- Use descriptive names; avoid spaces, Chinese filenames, and names such as `new1.html`.
- Use `.html` for pages, `.css` for stylesheets, `.js` for scripts, and `.json` for structured data.
- All links must be valid relative paths and must be tested from the page where they appear.
- When adding a page, add a link to it from the homepage or a relevant related-content section.
- Do not rename or delete existing files without explicit approval.

## 8. JavaScript and Accessibility Rules

- Keep shared behavior in `assets/js/main.js`.
- JavaScript must fail gracefully if an optional element is absent.
- Search and filters must have a useful empty state.
- Use semantic landmarks (`header`, `nav`, `main`, `section`, `footer`).
- Images need meaningful `alt` text; decorative images use empty alt text.
- Interactive elements must be keyboard accessible and have visible focus styles.
- Respect reduced-motion preferences.
- Do not rely on color alone to communicate meaning.

## 9. AI Change Protocol

Before making changes:
1. Read this `AGENTS.md`.
2. Inspect the existing page and shared assets that are relevant to the task.
3. Reuse existing components, classes, and page patterns.
4. Identify which files need to change; avoid unrelated rewrites.

When adding a content page:
1. Choose the correct directory and filename.
2. Follow the matching content template in Section 6.
3. Reuse the shared CSS and JavaScript; do not create a new visual system.
4. Use the correct relative paths from the new page's directory.
5. Add a homepage or related-content link.
6. Check title, metadata, navigation, and footer consistency.

When modifying existing pages:
- Preserve existing working features unless the owner requests otherwise.
- Make the smallest change that satisfies the request.
- Do not overwrite user-authored content without explaining the change.
- Do not add dependencies or external network calls without approval.

## 10. Quality Checklist

Before considering a change complete, verify:
- [ ] Page uses the correct directory and filename.
- [ ] Shared header, navigation, and footer are present.
- [ ] Page follows its required content template.
- [ ] All internal links and asset paths are correct.
- [ ] No placeholder text, broken links, or empty sections remain.
- [ ] Layout is usable on narrow mobile screens.
- [ ] Keyboard focus is visible and controls have labels.
- [ ] No copyrighted lyrics or unlicensed media are included.
- [ ] Homepage or related pages link to the new content.
- [ ] Existing pages and features still work.

## 11. GitHub Pages Deployment

- Publish the repository root using GitHub Pages.
- Keep `index.html` at the repository root.
- Use relative paths; do not use machine-specific absolute paths.
- After deployment, open the public URL and test the homepage plus at least one nested article page.
- If a deployment path changes, re-check all CSS, JavaScript, and navigation links.

## 12. Definition of Done

A task is complete only when the requested page or feature is implemented, follows this document, is linked into the site where appropriate, and passes the Quality Checklist. If any requirement cannot be verified, report that limitation clearly rather than claiming it passed.
