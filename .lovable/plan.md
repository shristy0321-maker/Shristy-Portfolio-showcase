# Edit Experience: Labsmart cards

## Scope
Edit only the existing Labsmart section. Heading, dates, and subtitle stay the same. Nothing else on the site changes.

## Cards
Exactly 5 photo cards, each photo used once, no text-only cards, no numbers:
1. Office selfie: "At the Labsmart office". "Product Specialist Intern, Aug–Oct 2026. Learned how labs work and closed 3 sales in month 1."
2. Laptop + wireframes: "Where every feature started". "Interviewed 50+ clients, prioritized with RICE, and drew 10–12 wireframes."
3. Keychain: "Building features for Labsmart Admin". "Redesigned the customer profile page into a 3-column layout with a tenure and total-paid banner."
4. Desk with silver laptop: "Product Specialist Intern at work". "Worked with the founder, developers and clients, then handed approved prototypes to the dev team."
5. Team outside restaurant: "Labsmart team". "The people behind the product."

Each card: full 4:5 rounded photo with a soft dark gradient at the bottom showing a bold title and one line of text. Alt text = title.

## Movement
- Remove the duplicated set; one row of 5 cards.
- Slowly slides from first card to last, then back, repeating (about 25 seconds each way, smooth ease-in-out).
- Keep: pause on hover/touch, soft faded edges, no motion for reduced-motion users (manual scrolling instead).

## Technical details
- Update `LabsmartSection.tsx` and `LabsmartSection.css` only.
- Keyframes translateX from 0 to `calc(-100% + 100vw)` on the track, `alternate ease-in-out 25s infinite`.
- Update the AGENTS.md rule about the duplicated track to describe the single alternating row.
