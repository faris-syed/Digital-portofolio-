# CLAUDE.md — Faris Syed portfolio

Drop this in the project root. Claude Code loads it automatically. It defines how to work on this repo and how to write anything in my name. **My CV (`Faris_Syed_CV_Updated_v2.pdf`) is the source of truth.** This file summarises it; if they ever disagree, the CV wins.

---

## What this repo is
A personal 3D portfolio: React + TypeScript + Vite + Three.js, customised from an MIT-licensed open-source template. The heavy "TechStack" logo section has already been removed. The 3D character is a generic template avatar (fine to keep).

## How to work on it
- Run locally: `npm install` then `npm run dev` (serves on `http://localhost:5173`).
- Build: `npm run build`. Deploy: it's a static site, push to Vercel/Netlify and it builds itself.
- Don't reintroduce the TechStack section.

## How I describe myself
I'm a **mechanical engineer with a focus on automotive and a background in business management.** Lead with that. Automotive is a focus, not the headline: name it once, don't hammer it. Describe my capability broadly (design, simulation, validation, project delivery, and the commercial bridge) and let the Projects and Experience sections carry the specifics. Don't reduce me to a single domain or a single project.

## Ground rules (read first)
- **The CV is the source of truth. Do not assert anything it doesn't support.** If a fact isn't here or in the CV, write a `[REPLACE-...]` placeholder, don't invent it.
- **Do not define a long-term career direction.** No "aspiring X", no "looking to move into Y", no framing the whole profile around one destination. I have not fixed a single target. Describe what I have done. If I name a specific role I'm applying to, tune emphasis *then*; otherwise keep the full range visible.
- **British English** throughout (modelling, optimisation, analyse, behaviour). No US spellings.
- **No em-dashes** in body copy. Commas, colons, full stops.
- **Honest verbs:** "led" / "designed" / "built" / "published" where I owned it; "contributed to" / "supported" where I helped. Don't upgrade contribution into ownership.
- **Quantify**, and bin the filler (passionate, synergy, leverage, results-driven, dynamic, cutting-edge).
- **Don't claim I designed the template.** Keep the LICENSE file; a small credit to the original author is good practice.

## Verified identity (use exactly)
- Name: **Faris Syed**
- Email: **faris.syed@live.in**
- Phone: **+971 54 325 1840**
- Location: **Dubai, United Arab Emirates**
- LinkedIn: **https://linkedin.com/in/faris-syed-104aa7179**
- GitHub: **not on my CV** — leave it out or ask me. Don't invent a handle.

## Education (exact)
- MSc Automotive Engineering with Business Management, University of Bath, 09/2024–09/2025. Merit, merit-based scholarship.
- BEng (Hons) **Automotive** Engineering, Heriot-Watt University (Dubai), 09/2021–07/2024. 2:1, merit-based scholarship.

## Experience

**Current status (confirmed directly, not yet on the CV):** I have left Alba Cars and am starting as a Graduate Engineer Trainee at Roll Group, a heavy-lift and transport multinational in Abu Dhabi. Treat Roll Group as my current/incoming role and Alba Cars as a past role. Start date still to confirm.

**From the CV (titles and dates exact):**
- **Workshop Coordinator — Alba Cars** (11/2025–03/2026, Dubai). Led daily refurbishment/service operations across partner workshops; directed readiness for ~1,000 vehicles in 4 months (~250/month) while managing 150+ concurrently; vendor/quotation control and KPI tracking, on Kissflow and Monday.com.
- **Research Technician — Heriot-Watt University** (10/2025, Dubai). Contributed to R&D of a liquid-cooled photovoltaic system for high-temperature environments; built and installed a double-glass PV panel with an internal water layer and submerged heat-sink fins; rooftop field testing.
- **Project Manager / Business Consultant — AVL Powertrain UK / University of Bath** (06/2025–09/2025, Bath). Led a graduate consulting engagement on the techno-economic feasibility of modular second-life LFP battery storage (BESS); owned the charter/WBS/Gantt; built the UK market and tech case (LFP vs NMC, G99/G100, UN38.3/UKCA) and a phased go-to-market roadmap; delivered a board-style presentation.
- **Engineering Consultant — Fuse.AE / Heriot-Watt University** (09/2023–04/2024, Dubai). Led a team to design and validate an immersion-cooled battery pack for a Bajaj Pulsar EV conversion; held cell temperatures at 44–48°C under Gulf duty cycles; validated in ANSYS and COMSOL; DFMEA/DFMA; MPS and BOM plus a commercial viability plan.
- **Motorsport Engineering Intern — CWS Engineering** (01/2024, Dubai). Pit work and setups; contributed to 1st and 2nd in class at the Dubai Autodrome 24-hour race.
- **Vehicle Diagnostics & Maintenance Intern — Mercedes-Benz Gargash** (06/2023–08/2023, Dubai). Advanced diagnostics and repairs with Xentry; warranty case review; workshop throughput.
- **Race / Data Engineer Intern — HRT Performance** (01/2022, Dubai). 24h of Dubai 2022; telemetry and live data analysis across four cars informing race strategy.

## Projects (recommended set for the Work section — real metrics)
- **Plug-in Hybrid Feasibility — Mazda CX-5 (P0+P4)**, AVL CRUISE M. 76.5 km electric range, 1.99 L/100 km, 34% CO2 reduction over 124,000 km vs the ICE baseline; full LCA showing 60% environmental improvement.
- **Autonomous Vehicle Object Detection (YOLOv5) for the UAE**. Real-time detection trained on a UAE dataset, benchmarked in CARLA, validated on a Quanser QCar under variable lighting/weather. (This underpins the publication below.)
- **Advanced BEV Simulation for Dubai Drive Cycles**, MATLAB/Simulink. Custom Al Barsha–Al Satwa drive cycle at 35°C and 45°C; 0.149 kWh/km, matching real Tesla Model 3 data (0.151 kWh/km).
- **Universal EV Conversion Kit for Classic Vehicles**. Led the electrical team; custom subframe mounting a Tesla Model 3 drive unit into a 1969 Mustang.
- **Strategic Analysis: Tesla UNBX Platform** (commercial counterweight). Porter's Five Forces, pricing benchmarks, competitor threat assessment (BYD, VW, Stellantis).

## Publication
"Advancing Autonomous Vehicle Perception Under Challenging Conditions: A YOLOv5-Based Approach for the UAE." Confirm the exact IEEE Xplore URL before linking it.

## About Me copy

**Live version (for `About.tsx`):**
> I'm a mechanical engineer with a focus on automotive and a background in business management. I take problems from design through simulation and testing to something that works, and I weigh the commercial side too: not just whether it runs, but whether it's worth building. I'd rather solve a problem than just talk about it.

**Optional fuller version (CV / LinkedIn):**
> I'm a mechanical engineer with a focus on automotive and a background in business management. I work across the full arc of a problem: design, simulation, validation, and the project delivery and commercial thinking that turn it into something real. That has taken shape across EV and energy systems, vehicle simulation, and autonomous-vehicle perception, but the approach travels. Build it, test it against real numbers, and be able to defend the result.
