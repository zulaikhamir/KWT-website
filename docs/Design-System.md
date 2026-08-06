# Design System

## Colors

Primary: #18386B

Background: #FFFFFF

Surface: #F8FAFC

Text: #111827

Secondary Text: #6B7280

Border: #E5E7EB

---

## Typography

Headings: Inter

Body: Inter

---

## Components

- Button
- Card
- Input
- Textarea
- Navbar
- Footer

---

## Design Principles

- Clean
- Minimal
- Professional
- Accessible
- Responsive
- Consistent

---

## Icons

- Lucide React

---

## Images

Use official KWT branding and community images only.

Avoid stock images where possible.

---

## Color System

The KWT color system is defined in a single source of truth at [src/assets/styles/colors.css](src/assets/styles/colors.css).

- `--color-primary: #1B2A52` — headline text, pill text, primary UI
- `--color-secondary: #4A5568` — body/supporting text, labels
- `--color-accent: #EAE6FF` — lavender for tags, pills, and small surface areas only
- `--color-background: #FCFCFE` — page background

---

## Typography

The KWT typography system is defined in [src/assets/styles/typography.css](src/assets/styles/typography.css).

- `--font-heading: 'Sora', sans-serif` — used for headings and title-style text
- `--font-body: 'Inter', sans-serif` — used for body copy, paragraphs, labels, and supporting text
- `--fw-heading: 700` — heading weight
- `--fw-label: 500` — label or emphasis weight
- `--fw-body: 400` — default body weight

Usage rules:
- Headings such as `h1` through `h4` use the Sora heading font and the 700 weight.
- Body text such as `p`, `span`, and standard page copy uses Inter with the 400 weight.
- Use the 500 label weight sparingly for UI labels and short emphasis text.