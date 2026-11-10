import { useState } from "react";
import office from "@/assets/labsmart-office.jpeg.asset.json";
import wireframes from "@/assets/labsmart-wireframes.jpeg.asset.json";
import admin from "@/assets/labsmart-admin.jpeg.asset.json";
import atWork from "@/assets/labsmart-at-work.jpeg.asset.json";
import team from "@/assets/labsmart-team.jpeg.asset.json";
import "./LabsmartSection.css";

type ExperienceCard =
  | { type: "text"; title: string; body: string }
  | { type: "photo"; caption: string; image: string };

const cards: ExperienceCard[] = [
  { type: "text", title: "Role and scope", body: "Product Specialist Intern, working with the founder, developers and clients." },
  { type: "photo", caption: "At the Labsmart office", image: office.url },
  { type: "text", title: "Month 1", body: "Learned how labs work, trained on the Labsmart software, closed 3 sales." },
  { type: "text", title: "Customer research", body: "Personally interviewed 50+ clients for feature requests." },
  { type: "photo", caption: "Where every feature started: pen-and-paper wireframes", image: wireframes.url },
  { type: "text", title: "Prioritization", body: "Used the RICE framework to decide what to build first vs. later." },
  { type: "text", title: "Prototyping", body: "Pen-and-paper prototype, then Figma; 10–12 wireframes." },
  { type: "photo", caption: "Building features for Labsmart Admin", image: admin.url },
  { type: "text", title: "Delivery", body: "Founder approval, handoff to the developer team, who built the features." },
  { type: "text", title: "Customer profile redesign (Labsmart Admin)", body: "Turned an overloaded multi-tab page into a 3-column layout (customer details, graph and stats, lab activity) with a tenure and total-paid summary banner." },
  { type: "photo", caption: "Product Specialist Intern at work", image: atWork.url },
  { type: "photo", caption: "Labsmart team", image: team.url },
];

const LabsmartSection = () => {
  const [touching, setTouching] = useState(false);

  return (
    <section id="labsmart" aria-labelledby="labsmart-title" className="labsmart-section py-20 md:py-28">
      <div className="section-container mb-10 md:mb-14">
        <div className="mb-6 flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-10 bg-secondary" />
          <p className="text-xs font-medium uppercase text-muted-foreground">Experience: Labsmart</p>
        </div>
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
          <h2 id="labsmart-title" className="max-w-2xl font-serif text-4xl leading-tight text-foreground md:text-5xl">
            Product Specialist Intern, <span className="italic">Labsmart</span>
          </h2>
          <p className="shrink-0 border-l-2 border-accent pl-4 text-sm text-muted-foreground">
            Aug–Oct 2026<span className="mt-1 block">3 months</span>
          </p>
        </div>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">
          Moved from sales into product management at a lab management software company and shipped features end to end.
        </p>
      </div>

      <div
        className="labsmart-row py-5"
        role="region"
        aria-label="Labsmart experience cards"
        tabIndex={0}
        data-touching={touching}
        onTouchStart={() => setTouching(true)}
        onTouchEnd={() => setTouching(false)}
        onTouchCancel={() => setTouching(false)}
      >
        <div className="labsmart-track">
          {[false, true].map((duplicate) => (
            <div key={String(duplicate)} className="labsmart-set" aria-hidden={duplicate ? "true" : undefined}>
              {cards.map((card, index) => (
                <article key={index} className="labsmart-card relative overflow-hidden rounded-lg border border-border bg-card text-card-foreground">
                  {card.type === "photo" ? (
                    <figure className="h-full p-4">
                      <img src={card.image} alt={card.caption} className="aspect-[4/5] w-full rounded-md object-cover" draggable={false} />
                      <figcaption className="mt-4 text-sm font-medium leading-6">{card.caption}</figcaption>
                    </figure>
                  ) : (
                    <div className="flex h-full flex-col p-7">
                      <span aria-hidden="true" className="font-serif text-5xl italic leading-none text-secondary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="my-auto py-6">
                        <h3 className="font-serif text-3xl leading-tight">{card.title}</h3>
                        <p className="mt-5 text-base leading-7 text-muted-foreground">{card.body}</p>
                      </div>
                      <span aria-hidden="true" className="h-px w-12 bg-accent" />
                    </div>
                  )}
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabsmartSection;