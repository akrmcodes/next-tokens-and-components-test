// app/page.tsx
import { BackgroundPaths } from "../components/blocks/background-paths";
import { MagicCard } from "../components/blocks/cards-showcase";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <BackgroundPaths title="Build Your Dreams" />

      {/* Section للكروت */}
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 space-y-10 p-10">
        <div className="rounded-[var(--radius)]">
          <MagicCard className="p-6">
            <h3 className="text-lg font-semibold text-foreground">Card 1</h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit am et consectetur adipisicing elit. Pariatur
              deserunt eos ea ut laborum nostrum facilis, cupiditate c ulpa
              dicta ducimus veniam corporis, quam, hic maxime vel et. Explicabo,
              natus minima.
            </p>
          </MagicCard>
        </div>

        <div className="rounded-[var(--radius)]">
          <MagicCard className="p-6">
            <h3 className="text-lg font-semibold text-foreground">Card 2</h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit am et consectetur adipisicing elit. Pariatur
              deserunt eos ea ut laborum nostrum facilis, cupiditate c ulpa
              dicta ducimus veniam corporis, quam, hic maxime vel et. Explicabo,
              natus minima.
            </p>
          </MagicCard>
        </div>
      </section>
    </main>
  );
}
