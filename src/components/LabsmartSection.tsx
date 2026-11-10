import { useState } from "react";
import office from "@/assets/labsmart-office.jpeg.asset.json";
import wireframes from "@/assets/labsmart-wireframes.jpeg.asset.json";
import admin from "@/assets/labsmart-admin.jpeg.asset.json";
import atWork from "@/assets/labsmart-at-work.jpeg.asset.json";
import team from "@/assets/labsmart-team.jpeg.asset.json";
import "./LabsmartSection.css";

const cards = [
  { title: "At the Labsmart office", body: "Product Specialist Intern, Aug–Oct 2026. Learned how labs work and closed 3 sales in month 1.", image: office.url },
  { title: "Where every feature started", body: "Interviewed 50+ clients, prioritized with RICE, and drew 10–12 wireframes.", image: wireframes.url },
  { title: "Building features for Labsmart Admin", body: "Redesigned the customer profile page into a 3-column layout with a tenure and total-paid banner.", image: admin.url },
  { title: "Product Specialist Intern at work", body: "Worked with the founder, developers and clients, then handed approved prototypes to the dev team.", image: atWork.url },
  { title: "Labsmart team", body: "The people behind the product.", image: team.url },
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
        aria-label="Labsmart experience photos"
        tabIndex={0}
        data-touching={touching}
        onTouchStart={() => setTouching(true)}
        onTouchEnd={() => setTouching(false)}
        onTouchCancel={() => setTouching(false)}
      >
        <div className="labsmart-track">
          {cards.map((card) => (
            <article key={card.title} className="labsmart-card relative overflow-hidden rounded-lg border border-border bg-card">
              <img src={card.image} alt={card.title} className="h-full w-full object-cover" draggable={false} />
              <div className="labsmart-caption absolute inset-x-0 bottom-0 p-5 pt-16">
                <h3 className="text-lg font-bold leading-snug">{card.title}</h3>
                <p className="mt-1 text-sm leading-5 opacity-90">{card.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabsmartSection;
