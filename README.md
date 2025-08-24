# 🚀 Next.js Components Playground

This project is a **boilerplate** designed for experimenting with and showcasing modern UI components.  
It integrates **Next.js**, **Tailwind CSS**, **Framer Motion**, and multiple open-source component libraries.  
The goal is to provide a clean playground for quickly testing, previewing, and customizing components with **themes** and **dark mode** support.

---

## ✨ Features

- ⚡️ **Next.js 14 + App Router** with **pnpm** for fast performance.
- 🎨 **Tailwind CSS + TweakCN** with CSS Variables for color tokens, fonts, shadows, etc.
- 🧩 Components from multiple sources:
  - [shadcn/ui](https://ui.shadcn.com/) → Navbar, Accordion, Button, Sheet, Navigation Menu.
  - [Shadcn Blocks](https://www.shadcnblocks.com/) → Example Navbar.
  - [MagicUI](https://magicui.design/) → Magic Card (interactive hover card).
  - [Aceternity UI](https://ui.aceternity.com/) → Hover Border Gradient Button.
  - [21st.dev](https://21st.dev/) → Futuristic Hero animation (replaced with a lighter **Framer Motion** version).
- 🌗 **Dark Mode** powered by [next-themes](https://github.com/pacocoursey/next-themes).
- 🎨 **3 ready-to-use themes**:
  - Vercel Theme (default)
  - Clean Theme
  - Amber Theme
- 🔄 **Theme Preview Toggle** → 3 quick buttons to switch themes (Vercel / Clean / Amber).
- 🧑‍🦽 **Accessibility (A11y)**: All buttons and interactive components support `focus-visible` and proper outlines.
- 🛠 **Organized folder structure**:
  - `components/ui` → UI elements (shadcn/ui, MagicCard, HoverBorderGradient, ThemeToggle).
  - `components/blocks` → Layout blocks (Navbar, Hero).
  - `lib/utils.ts` → Utility functions (`cn`).
- ✅ **Best practices** with ESLint + Tailwind class utilities.

---

## 📦 Tech Stack

- **Framework**: Next.js 14
- **Package Manager**: pnpm
- **Styling**: Tailwind CSS + TweakCN
- **UI Libraries**:
  - shadcn/ui
  - MagicUI
  - Aceternity UI
  - Shadcn Blocks
  - 21st.dev
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Themes**: next-themes
- **Helpers**: clsx + tailwind-variants (used in shadcn)

---

## 🛠 Getting Started

### 1. Install dependencies
```bash
pnpm install
```

```bash
pnpm dev
# http://localhost:3000
```
```bash
app/
  layout.tsx            # Global layout with Navbar
  page.tsx              # Homepage with Hero + Cards
components/
  ui/
    accordion.tsx
    button.tsx
    navigation-menu.tsx
    sheet.tsx
    magic-card.tsx
    hover-border-gradient.tsx
    theme-preview-toggle.tsx   # Theme switch buttons
  blocks/
    navbar-shadcn.tsx
    background-paths.tsx       # Hero component
lib/
  utils.ts              # Helper functions (cn)
styles/
  globals.css           # Themes (Vercel, Clean, Amber)
components.json         # shadcn config
```
🎨 Themes
Default (Vercel Theme)

Defined inside globals.css under :root.

Clean Theme

Defined as:
```bash
.root { ... } #vercel
.dark { ... } #vercel
```

```bash
.theme-clean { ... }
.theme-clean.dark { ... }
```
```bash
.theme-amber { ... }
.theme-amber.dark { ... }
```
🔘 Theme Switcher

Component: components/ui/theme-preview-toggle.tsx

Usage:
```bash
<ThemePreviewToggle/>
```
Available themes:

Vercel → Default theme

Clean → Minimal, soft look

Amber → Warm golden theme

🧑‍💻 Adding New Components

Pick a component from a library (Shadcn / MagicUI / Aceternity / 21st.dev).

Add it inside components/ui or components/blocks.

If it requires a new package, install it:
```bash
pnpm add package-name
```
Replace hardcoded colors with theme tokens:

bg-background

text-foreground

border-border

ring-ring

Use the component in page.tsx or in a new page.

💡 Notes

Dark Mode is separate from themes:

A toggle button enables dark class.

3 theme buttons (Vercel / Clean / Amber) switch the root class.

Accessibility:
```bash
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-ring
focus-visible:ring-offset-2
focus-visible:ring-offset-background
```
🌍 Sources

shadcn/ui

Shadcn Blocks

MagicUI

Aceternity UI

21st.dev

✅ Ready to Use

Run the project locally.

Preview components (Navbar, Hero, Magic Cards, Buttons).

Switch between Light/Dark and Vercel / Clean / Amber themes.

Extend the playground with new components easily.
