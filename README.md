# Yago Böhm — Portfolio V2

> Creative Developer · Automation · AI

A personal portfolio focused on the intersection between **digital experiences, automation and applied AI**.

The project is being designed as an interactive, cinematic experience rather than a traditional developer portfolio — combining visual storytelling, motion, real-world projects and intelligent systems.

---

## ✦ Concept

**I build digital experiences and intelligent systems.**

The portfolio explores three core areas:

### Automation / Flow

Workflows, integrations and systems designed to reduce manual operations and connect business processes.

### Web / Experience

Websites, interfaces and interactive experiences built with a strong focus on visual direction, responsiveness and motion.

### AI / Processing

Applied AI for qualification, communication, data processing, automation and decision support.

These three areas orbit around the visual core of the project: the **BRX Labs Erlenmeyer**, representing experimentation, technology and the integration of different systems.

---

## ◉ Visual Direction

The project follows a visual language based on:

- Dark
- Minimal
- Cinematic
- Technological
- Large typography
- Strong media
- Controlled motion
- Deep purple atmosphere
- Cyan highlights
- Generous negative space

The goal is closer to:

**Apple × Porsche × Creative Development**

rather than a traditional SaaS dashboard or generic AI landing page.

---

## ✦ Current Hero Experience

The first major experiment of the portfolio is an interactive scrollytelling Hero.

The scene contains:

```text
              AI / PROCESSING
                     ●

AUTOMATION / FLOW ●  ⚗  ● WEB / EXPERIENCE

                BRX CORE
```

As the user scrolls, each discipline moves forward and becomes the active part of the narrative.

Planned sequence:

```text
INTRO
  ↓
AUTOMATION / FLOW
  ↓
WEB / EXPERIENCE
  ↓
AI / PROCESSING
  ↓
SELECTED WORK
```

The motion system is being built with **GSAP + ScrollTrigger**.

---

## 🧪 Stack

### Front-end

- React
- Vite
- JavaScript
- Tailwind CSS

### Motion

- GSAP
- ScrollTrigger
- CSS animations

### Visual Experiments

- React Bits
- SVG
- Generative assets
- Three.js / React Three Fiber — planned

### Development

- VS Code
- Git
- GitHub
- Vercel

---

## 📐 Responsive Experience

Responsiveness is treated as part of the experience itself, not as a final adaptation.

The project is designed around four main contexts:

### Mobile

Vertical storytelling, touch-first interaction and reduced motion complexity.

### Tablet / iPad

Dedicated compositions with larger media, split layouts and richer motion.

### Desktop

Cinematic layouts, scroll-driven storytelling and interactive transitions.

### Wide / Ultrawide

Expanded compositions, larger visual scenes and greater use of negative space.

The same idea may use different animation strategies depending on the device.

---

## Selected Work

The portfolio will initially feature real projects including:

### Daniel Burlini

**Digital Hub / Web Development**

Transformation from isolated product pages into a complete digital ecosystem with products, portfolio and unified navigation.

### Débora Böhm

**Website Redesign / Web Development**

Transformation from a simple presentation page into a warmer, clearer and more refined digital experience.

---

## Intelligent Systems

The portfolio will also visualize real automation and AI concepts in a way that can be understood by both technical and non-technical users.

Planned cases include:

- AI Lead Qualification
- Spreadsheet Automation
- AI Sales Assistant
- CRM integrations
- WhatsApp automation
- Automated prospecting
- Data processing workflows

Instead of simply displaying complex n8n workflows, the goal is to visually communicate:

```text
INPUT
  ↓
PROCESSING
  ↓
AUTOMATION / AI
  ↓
RESULT
```

---

## Project Structure

```text
src/
│
├── assets/
│   ├── erlenmeyer/
│   ├── images/
│   └── projects/
│       ├── daniel/
│       └── debora/
│
├── components/
│
├── sections/
│   ├── Hero/
│   ├── SelectedWork/
│   ├── IntelligentSystems/
│   ├── About/
│   ├── Labs/
│   └── Contact/
│
├── styles/
│
├── App.jsx
├── index.css
└── main.jsx
```

---

## Roadmap

### Foundation

- [x] React + Vite setup
- [x] Tailwind CSS
- [x] Manrope + Inter typography
- [x] Visual design tokens
- [x] Initial responsive Hero
- [x] BRX Erlenmeyer visual core

### Hero Scrollytelling

- [x] Orbital system concept
- [x] SVG orbit structure
- [x] Initial ScrollTrigger prototype
- [ ] Redesign system orbs
- [ ] Atmospheric background
- [ ] Automation stage
- [ ] Web stage
- [ ] AI stage
- [ ] Orbit motion
- [ ] Hero → Selected Work transition
- [ ] Tablet motion refinement
- [ ] Mobile experience refinement

### Portfolio

- [ ] Daniel Burlini case
- [ ] Débora Böhm case
- [ ] Selected Work section
- [ ] Intelligent Systems
- [ ] About
- [ ] Labs
- [ ] Contact

### Refinement

- [ ] Accessibility
- [ ] Performance optimization
- [ ] Reduced motion support
- [ ] Mobile testing
- [ ] Tablet / iPad testing
- [ ] Ultrawide testing
- [ ] Production deployment

---

## Running Locally

Clone the repository:

```bash
git clone <repository-url>
```

Enter the project:

```bash
cd portfolio-v2
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will provide the local development URL, usually:

```text
http://localhost:5173
```

---

## Development Workflow

The project uses feature branches for larger experiments.

Example:

```text
main
│
└── feature/hero-scrollytelling
```

This makes it possible to experiment aggressively with motion and visual effects while keeping stable checkpoints of the project.

---

## Philosophy

The goal is not to fill every section with effects.

Every visual element should help at least one of these:

**Hierarchy · Narrative · Interaction · Understanding**

If an effect does not improve the experience, it does not belong in the interface.

---

## Author

**Yago Böhm**

Creative Development · Automation · Applied AI