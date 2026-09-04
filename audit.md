# Harit Vikas Web App Audit Report

## Executive Summary
This audit evaluated the technical architecture, performance, accessibility, and design consistency of the Harit Vikas Next.js application. While the foundation leverages modern tools (Next.js 15+, Tailwind CSS, Framer Motion), the execution suffers from significant architectural antipatterns—most notably the blanket use of client components—and critical accessibility failures. From a design perspective, the UI feels incomplete due to missing placeholder assets, broken typography, and severe color contrast violations that render core messaging completely illegible. Addressing these issues is critical before pushing to production.

## Findings by Category

### 1. Performance
* **Unnecessary Client Components:** Every single component (e.g., [`Footer.tsx`](file:///d:/WORK/HARIT%20VIKAS/WEB/harit-vikas/components/Footer.tsx), `Hero.tsx`, `Nav.tsx`, `Projects.tsx`, etc.) is unnecessarily marked with `"use client"`. This breaks Next.js Server Component architecture, bloating the JavaScript bundle and increasing hydration time.
* **Heavy Font Loading:** [`app/layout.tsx`](file:///d:/WORK/HARIT%20VIKAS/WEB/harit-vikas/app/layout.tsx) loads 5 weights (400, 600, 700, 800, 900) of `Playfair Display` along with italics. Loading 10 font variations is a heavy hit to the critical render path.
* **Image Quality Config Warning:** `next.config.ts` lacks proper image qualities configuration. The Next.js dev server threw a warning: `Image with src "/bg.png" is using quality "90" which is not configured in images.qualities [75]. Please update your config to [75, 90].`

### 2. Code Quality & Architecture
* **Overuse of `use client`:** As mentioned above, presentational and static sections (like `Footer.tsx`) bypass server-side rendering benefits.
* **Leaked Developer Notes:** Explicit placeholders like `"Replace with: public/photos/vertical-rnd.jpg"` are hardcoded in production views (visible in the "Space Sciences & IoT R&D" card and "Community Impact" card).
* **Incomplete Copy:** The team section is filled with dummy content like `"Owner Name"`, `"Founder & CEO"`, and `"Team Member"`.

### 3. SEO
* **Missing `robots.txt` & `sitemap.ts`:** These essential crawlers and indexing tools are absent from the `app/` directory.
* **Missing Open Graph Image:** [`app/layout.tsx`](file:///d:/WORK/HARIT%20VIKAS/WEB/harit-vikas/app/layout.tsx) metadata configures title, description, and keywords, but lacks an `images` property in the `openGraph` object for social media unfurling.

### 4. Accessibility
* **Severe Color Contrast Failures (WCAG AA):** Sections with a dark emerald background (e.g., "Building systems for verifiable impact", "Partner with us...") use dark/black text (`var(--color-hv-ink)`). This is a critical WCAG AA failure as the text is virtually invisible.
* **Missing Image Assets:** The "Field operations" section image fails to load and merely renders the raw `alt` text. Team members show generic placeholder SVG icons instead of real `<img>` elements with proper `alt` tags.

### 5. Mobile & Responsive Design
* **Broken Navigation:** At mobile viewports (e.g., 375x812), the hamburger menu icon renders, but clicking it triggers no navigation drawer or mobile menu overlay.
* **Overlapping Development Elements:** The Next.js dev indicator (`N`) overlaps UI content in the bottom-left corner on narrow screens.

### 6. Visual & Content Design
* **Design Consistency:** Dark sections define `color: #fff` in `.dark-section` ([`globals.css`](file:///d:/WORK/HARIT%20VIKAS/WEB/harit-vikas/app/globals.css)), but utility classes in the React code (like `text-hv-ink`) override this, breaking the intended design.
* **Imagery Issues:** Stock/missing image placeholders compromise the premium feel of the brand.

---

## Section-by-Section Audit

* **Navbar (`Nav.tsx`)**
  * **State & Architecture:** Unnecessary `"use client"` directive. While the hamburger icon is present for mobile, the toggle state (`useState`) and menu overlay logic are entirely missing.
* **Hero (`Hero.tsx`)**
  * **Performance:** Implements `next/image` with `quality={90}` hardcoded, which triggers a Next.js configuration warning. 
  * **Brand Identity:** The logo is currently a CSS-styled text placeholder (`<span ...>HV</span>`) with the real `<Image>` component commented out.
* **TwoColumnSection (`TwoColumnSection.tsx`)**
  * **Content Strategy:** Hardcodes CTA destination (`#contact`). 
  * **Asset Handling:** Images rely on a fallback `unoptimized={imageSrc.endsWith(".svg")}` logic. "Vertical 02 - Community Impact" image is missing in production and showing raw `alt` text.
* **DarkAnalyticsSection (`DarkAnalyticsSection.tsx`)**
  * **Development Artifacts:** Ships with heavily mocked placeholder assets (`field-ops-wide.jpg`, `owner-1.svg`, `intern-2.svg`) and filler statistics.
* **Team (`Team.tsx`)**
  * **Data Integrity:** Dummy data is populating the production view (e.g., "Owner Name", "Founder & CEO").
  * **Image Optimization:** Relies on SVG placeholders (`unoptimized` flag) instead of actual WebP/AVIF portraits, which degrades the UI's perceived quality.
* **Footer (`Footer.tsx`)**
  * **Architecture:** Unnecessarily marked as `"use client"`. It's entirely static content and should be rendered on the server to reduce bundle size.

---

## Design System Snapshot

| Token Category | Defined Expected Value (`globals.css`) | Actual UI Usage / Audit Note |
| --- | --- | --- |
| **Brand Colors** | Forest (`#0F4C3A`), Dark Forest (`#0A3328`), Sage (`#4A8C6F`) | Used correctly for accents, but dark backgrounds fail contrast due to text color overrides. |
| **Neutral Colors** | Cream (`#F5F2EB`), White (`#FDFCF9`), Ink (`#1A2820`) | `Ink` is misapplied onto `Dark Forest` backgrounds, rendering text invisible. |
| **Typography** | `Playfair Display` (Display), `Inter` (Body) | Loading excessive font weights (400-900 + italics) for Playfair. |
| **Spacing / Layout** | `section-py` (6rem mobile, 8rem desktop) | Consistently applied, but mobile nav layout is broken. |
| **Radii / Shadows** | Pill (`9999px`), Card (`1.5rem`), Img (`1.25rem`) | Radii properly applied, but missing images undermine the card designs. |

---

## Top 10 Priority Fixes

| Rank | Issue | Category | Severity | Effort |
| :--- | :--- | :--- | :--- | :--- |
| 1 | **Fix Dark Section Contrast:** Remove dark text utility classes (`text-hv-ink`) overriding `.dark-section` white text. | Accessibility | **Critical** | Low |
| 2 | **Remove `"use client"` globally:** Strip `"use client"` from static components (`Footer`, `TwoColumnSection`, etc.). | Architecture | **Critical** | Medium |
| 3 | **Fix Mobile Navigation:** Implement the `useState` toggling logic and mobile drawer for the hamburger menu. | Mobile | **High** | Medium |
| 4 | **Remove Dev Placeholders:** Replace `"Replace with: ..."` strings and dummy team copy with actual content. | Content | **High** | Low |
| 5 | **Fix Missing Assets:** Supply the missing "Field operations" image and real team avatars. | Design/Visual | **High** | Low |
| 6 | **Optimize Playfair Font:** Reduce `Playfair Display` weights in `layout.tsx` to just 400 and 700. | Performance | **Medium** | Low |
| 7 | **Configure Next Image:** Add `images: { qualities: [75, 90] }` to `next.config.ts`. | Performance | **Medium** | Low |
| 8 | **Add SEO Files:** Generate `sitemap.ts` and `robots.txt` in the `app/` directory. | SEO | **Medium** | Low |
| 9 | **Add OG Image:** Add an `images` property to the `openGraph` metadata in `layout.tsx`. | SEO | **Low** | Low |
| 10 | **Audit Component Logic:** Move animation logic to smaller wrapper components instead of making entire pages/sections client components. | Architecture | **Low** | High |
