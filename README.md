# anagha-portfolio

Personal portfolio for **Anagha P Kulkarni** — AI/ML Engineer & Full-Stack Developer.

Built with Next.js 14 (App Router), Tailwind CSS, and zero external dependencies beyond `lucide-react`.

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + custom CSS animations
- **Fonts**: Bebas Neue (display), Outfit (body), IBM Plex Mono
- **Icons**: lucide-react
- **Theme**: Dark, editorial amber/orange — no third-party UI libraries

---

## Local Setup

```bash
# 1. Clone the repo
git clone https://github.com/Anu-253/anagha-portfolio.git
cd anagha-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
src/
├── app/
│   ├── globals.css       # All custom CSS, animations, design tokens
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Page composition
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx          # Typewriter animation, stats
│   ├── Ticker.tsx        # Marquee skill strip
│   ├── About.tsx
│   ├── Projects.tsx      # Featured + secondary projects
│   ├── Experience.tsx    # Timeline layout
│   ├── Skills.tsx        # Animated skill bars
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── SectionLabel.tsx
└── lib/
    ├── data.ts           # All portfolio content — edit this file
    └── useReveal.ts      # IntersectionObserver scroll hook
```

---

## Customisation

All content lives in **`src/lib/data.ts`**. Update your projects, experience, skills, and contact info there — the UI reacts automatically.

To change the accent colour, search for `#F59E0B` in `globals.css` and replace with your preferred colour.

---

## Build

```bash
npm run build
npm start
```
