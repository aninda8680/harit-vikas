# Harit Vikas — Investor Demo Website

**Company:** Horizon Vikas Technologies  
**Brand:** Harit Vikas  
**Stack:** Next.js 16 · TypeScript · Tailwind CSS v4 · Framer Motion  

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
harit-vikas/
├── app/
│   ├── layout.tsx          # Root layout (fonts, Navbar, Footer, SEO metadata)
│   ├── page.tsx            # Main page — assembles all sections in order
│   └── globals.css         # Brand design tokens & global styles
├── components/
│   ├── Navbar.tsx          # Sticky nav with scroll blur effect
│   ├── Hero.tsx            # Hero with staggered entrance animations
│   ├── About.tsx           # Capabilities grid
│   ├── Verticals.tsx       # Two business verticals (R&D + Impact)
│   ├── FocusAreas.tsx      # Three impact focus area cards
│   ├── Projects.tsx        # Data-driven project cards
│   ├── Team.tsx            # Founders + Core team photo grid
│   ├── CTA.tsx             # Investor CTA section
│   └── Footer.tsx          # Contact + links footer
├── data/
│   ├── team.ts             # ← EDIT TEAM NAMES/ROLES HERE
│   ├── projects.ts         # ← ADD/EDIT PROJECTS HERE
│   └── focusAreas.ts       # Focus area descriptions
└── public/
    └── placeholders/
        ├── owner-1.svg     # ← REPLACE WITH REAL PHOTOS
        ├── owner-2.svg
        ├── owner-3.svg
        ├── owner-4.svg
        ├── intern-1.svg
        ├── intern-2.svg
        ├── intern-3.svg
        ├── intern-4.svg
        └── project-aim.svg # ← REPLACE WITH REAL SCREENSHOT
```

---

## ✏️ Before the Conference — What to Update

### 1. Team Members (Names, Roles, Photos)
Edit **`data/team.ts`** to fill in real names and roles:

```ts
// In founders array:
{ id: "owner-1", name: "Actual Name Here", role: "Founder & CEO", ... }

// In coreTeam array:
{ id: "intern-1", name: "Actual Name Here", role: "Hardware Engineer", tag: "Hardware", ... }
```

### 2. Team Photos
Drop real photos into **`public/placeholders/`** with the exact same filenames:
- `owner-1.jpg`, `owner-2.jpg`, `owner-3.jpg`, `owner-4.jpg`
- `intern-1.jpg`, `intern-2.jpg`, `intern-3.jpg`, `intern-4.jpg`

Then update the `image` field in `data/team.ts` to point to the `.jpg` extension:
```ts
image: "/placeholders/owner-1.jpg",  // change .svg → .jpg
```

### 3. Project Screenshot
Replace **`public/placeholders/project-aim.svg`** with an actual screenshot:
- Save as `public/placeholders/project-aim.png` (or `.jpg`)
- Update `data/projects.ts`: change `image: "/placeholders/project-aim.svg"` → `.png`

### 4. Add More Projects
In **`data/projects.ts`**, push another entry to the `projects` array:
```ts
{
  id: "new-project",
  name: "Project Name",
  initiative: "Initiative Name",
  description: "One-line description",
  longDescription: "Full description...",
  url: "https://newproject.harit-vikas.com",
  image: "/placeholders/project-new.png",
  tags: ["Tag1", "Tag2"],
  status: "Live",
}
```
No layout code needs to change — it's fully data-driven.

### 5. Brand Colors
All brand colors are defined in **`app/globals.css`** under `@theme inline`. Change `--color-hv-forest`, `--color-hv-sage`, etc. to adjust the palette globally.

---

## 🎨 Brand Palette

| Token | Value | Usage |
|---|---|---|
| `--color-hv-forest` | `#0F4C3A` | Primary — headings, CTAs |
| `--color-hv-forest-dark` | `#0A3328` | Hover states, dark text |
| `--color-hv-sage` | `#4A8C6F` | Mid-green accents |
| `--color-hv-mint` | `#88B8A0` | Tags, highlights |
| `--color-hv-mist` | `#C8DDD6` | Subtle fills, dividers |
| `--color-hv-cream` | `#F5F9F7` | Page background |
| `--color-hv-ink` | `#1E2E28` | Primary text |

---

## 🏗️ Build for Production

```bash
npm run build
npm start
```

---

*Built by Harit Vikas development team. All rights reserved.*
