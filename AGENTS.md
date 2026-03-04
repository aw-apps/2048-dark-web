# AGENTS

## Project Goal
Build a polished web version of 2048 with dark theme support, smooth tile animations, and persistent best-score tracking.

## Product Description
This project starts from a lightweight, open-source 2048 baseline and customizes UX for modern usage: theme toggle, animation polish, and persistent player progress. The app should stay dependency-light and deploy as a static site.

## Tech Stack
- HTML5 (existing game markup)
- CSS3 (theme tokens, dark mode styles, transitions)
- Vanilla JavaScript (game logic and UI state)
- localStorage (best score and theme preference)
- Deployment: GitHub Pages (main branch, root)

## Architecture Overview
- `index.html`: Main UI layout and score panels
- `style/`: Visual styling, tile colors, transitions, dark theme classes
- `js/`: Game loop, input handling (keyboard + swipe), rendering, persistence
- `.github/workflows/`: Autonomous implementation/review pipeline
- `.github/skills/`: Execution quality standards for Copilot agents

## Open-source References
1. https://github.com/gabrielecirulli/2048  
   - Original static 2048 implementation with keyboard/swipe input and best-score support.
2. https://github.com/TheFurina/2048-game  
   - Feature-rich 2048 variant showing dark theme and advanced customization ideas.

## Fork/Scratch Decision
Fork selected: `gabrielecirulli/2048` already covers core gameplay, swipe handling, score/best-score persistence, and static deployment model (>60% of requested scope). We will customize dark-theme UX and polish.

## Global Acceptance Criteria
1. Users can play a complete 2048 round in browser with keyboard and touch/swipe controls.
2. Tile movement and merge animations are smooth and visually clear on desktop and mobile.
3. Users can switch between light and dark themes, and the chosen theme persists after refresh.
4. Current score and best score are shown during gameplay, with best score persisted across sessions.
5. App is deployable on GitHub Pages and the README documents local run + deployment steps.
