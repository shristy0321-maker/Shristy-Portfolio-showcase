# Experience: Labsmart

## Scope
Add **one section immediately after the hero/intro**, before Projects. Leave every existing section, project, image, link, and style unchanged.

## Heading
- Section label: **Experience: Labsmart**
- Title: **Product Specialist Intern, Labsmart**
- Dates: **Aug–Oct 2026, 3 months**
- Subtitle: “Moved from sales into product management at a lab management software company and shipped features end to end.”

## One continuous card row
Use the existing portfolio colors, fonts, borders, and rounded card styling. All text and photo cards share one horizontally moving row, approximately 320px per card with 16px gaps.

Keep this exact order and content:
1. **Role and scope:** Product Specialist Intern, working with the founder, developers and clients.
2. **Photo:** At the Labsmart office — uploaded selfie against the white office wall.
3. **Month 1:** Learned how labs work, trained on the Labsmart software, closed 3 sales.
4. **Customer research:** Personally interviewed 50+ clients for feature requests.
5. **Photo:** Where every feature started: pen-and-paper wireframes — laptop website and sketchbook.
6. **Prioritization:** Used the RICE framework to decide what to build first vs. later.
7. **Prototyping:** Pen-and-paper prototype, then Figma; 10–12 wireframes.
8. **Photo:** Building features for Labsmart Admin — hand holding the Labsmart keychain.
9. **Delivery:** Founder approval, handoff to the developer team, who built the features.
10. **Customer profile redesign (Labsmart Admin):** Turned an overloaded multi-tab page into a 3-column layout (customer details, graph and stats, lab activity) with a tenure and total-paid summary banner.
11. **Photo:** Product Specialist Intern at work — seated at the desk with the silver laptop.
12. **Photo:** Labsmart team — group outside the restaurant.

Photo cards show a rounded 4:5 image above the caption, with the caption also used as alt text. Text cards use a title and concise supporting text; the longer redesign description will wrap without clipping.

## Movement and accessibility
- Continuous right-to-left motion, roughly 50 seconds per full set, with subtle faded edges.
- Pause while hovering or touching the row; allow manual horizontal scrolling when motion is disabled.
- Turn animation off for reduced-motion preferences and retain manual scrolling.
- Make the row keyboard-accessible and pause when focused.

## Technical details
- Build one isolated section with scoped CSS; insert only its import and placement into the home page.
- Store the five uploaded photos as site asset pointers without replacing existing assets.
- Use pure CSS `translateX` keyframes with two identical complete sets in a single track. Each set includes its trailing gap so the halfway translation loops seamlessly.
- Mark the second set `aria-hidden="true"`.
- Reuse existing semantic design tokens; do not alter global styling or the existing marquee component.

## Verification
Check placement and all 12 cards, image loading, seamless movement, hover/touch pauses, reduced-motion manual scrolling, and desktop/mobile layout. Confirm the rest of the portfolio remains unchanged.