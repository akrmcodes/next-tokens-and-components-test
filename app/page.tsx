// app/page.tsx
import { BackgroundPaths } from "../components/blocks/background-paths";
import { MagicCard } from "../components/blocks/cards-showcase";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function Home() {
  return (
    <main>
      <BackgroundPaths title="Build Your Dreams" />

      <section className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-2 justify-center justify-items-center max-w-screen-lg">
        <div className="rounded-[var(--radius)]">
          <MagicCard className="p-6 mb-3">
            <h3 className="text-lg font-semibold text-foreground">Card 1</h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit am et consectetur adipisicing elit. Pariatur
              deserunt eos ea ut laborum nostrum facilis, cupiditate c ulpa
              dicta ducimus veniam corporis, quam, hic maxime vel et. Explicabo,
              natus minima.
            </p>
            <HoverBorderGradient
              as="button" // أو "a" لو تبغاه رابط
              className="text-sm md:text-base font-semibold cursor-pointer"
              containerClassName="rounded-[1.15rem]" // نفس انحناءة الزر القديم
              duration={1} // سرعة حركة الهايلايت
            >
              One
            </HoverBorderGradient>
          </MagicCard>
          <MagicCard className="p-6">
            <h3 className="text-lg font-semibold text-foreground">Card 2</h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit am et consectetur adipisicing elit. Pariatur
              deserunt eos ea ut laborum nostrum facilis, cupiditate c ulpa
              dicta ducimus veniam corporis, quam, hic maxime vel et. Explicabo,
              natus minima.
            </p>
            <HoverBorderGradient
              as="button" // أو "a" لو تبغاه رابط
              className="text-sm md:text-base font-semibold cursor-pointer"
              containerClassName="rounded-[1.15rem]" // نفس انحناءة الزر القديم
              duration={1} // سرعة حركة الهايلايت
            >
              Three
            </HoverBorderGradient>
          </MagicCard>
        </div>

        <div className="rounded-[var(--radius)] ">
          <MagicCard className="p-6 mb-3">
            <h3 className="text-lg font-semibold text-foreground">Card 2</h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit am et consectetur adipisicing elit. Pariatur
              deserunt eos ea ut laborum nostrum facilis, cupiditate c ulpa
              dicta ducimus veniam corporis, quam, hic maxime vel et. Explicabo,
              natus minima.
            </p>
            <HoverBorderGradient
              as="button" // أو "a" لو تبغاه رابط
              className="text-sm md:text-base font-semibold cursor-pointer"
              containerClassName="rounded-[1.15rem]" // نفس انحناءة الزر القديم
              duration={1} // سرعة حركة الهايلايت
            >
              Two
            </HoverBorderGradient>
          </MagicCard>
          <MagicCard className="p-6">
            <h3 className="text-lg font-semibold text-foreground">Card 2</h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit am et consectetur adipisicing elit. Pariatur
              deserunt eos ea ut laborum nostrum facilis, cupiditate c ulpa
              dicta ducimus veniam corporis, quam, hic maxime vel et. Explicabo,
              natus minima.
            </p>
            <HoverBorderGradient
              as="button" // أو "a" لو تبغاه رابط
              className="text-sm md:text-base font-semibold cursor-pointer"
              containerClassName="rounded-[1.15rem]" // نفس انحناءة الزر القديم
              duration={1} // سرعة حركة الهايلايت
            >
              Four
            </HoverBorderGradient>
          </MagicCard>
        </div>
      </section>
    </main>
  );
}
