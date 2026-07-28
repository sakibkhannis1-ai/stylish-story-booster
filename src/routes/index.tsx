import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Terra — Dark Brown Luxury Fashion Studio" },
      {
        name: "description",
        content:
          "Maison Terra crafts warm, earth-toned tailoring in cocoa, camel and umber. Explore the dark brown seasonal collection.",
      },
      { property: "og:title", content: "Maison Terra — Dark Brown Luxury Fashion" },
      {
        property: "og:description",
        content: "Warm earth-toned tailoring in cocoa, camel and umber.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const collection = [
  { name: "Cocoa Wool Coat", detail: "Double-faced cashmere, belted" },
  { name: "Umber Silk Slip", detail: "Bias cut, hand-finished hem" },
  { name: "Espresso Tailoring", detail: "Structured shoulder, wide leg" },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="text-lg tracking-[0.35em] uppercase">Maison Terra</span>
        <nav className="hidden gap-8 text-sm tracking-widest uppercase text-muted-foreground sm:flex">
          <a href="#collection" className="transition-colors hover:text-primary">
            Collection
          </a>
          <a href="#atelier" className="transition-colors hover:text-primary">
            Atelier
          </a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-10 md:grid-cols-2">
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-primary">Autumn Edit</p>
          <h1 className="mt-6 text-5xl leading-[1.05] font-light md:text-6xl">
            Dressed in
            <span className="block italic text-primary">dark brown</span>
            warmth.
          </h1>
          <p className="mt-6 max-w-md text-muted-foreground">
            A palette of cocoa, umber and burnt caramel. Quiet tailoring made to be
            lived in, season after season.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#collection"
              className="rounded-sm bg-primary px-8 py-3 text-sm tracking-widest uppercase text-primary-foreground transition-opacity hover:opacity-90"
            >
              Shop the edit
            </a>
            <a
              href="#atelier"
              className="rounded-sm border border-border px-8 py-3 text-sm tracking-widest uppercase transition-colors hover:bg-secondary"
            >
              Our atelier
            </a>
          </div>
        </div>
        <div
          className="overflow-hidden rounded-sm"
          style={{ boxShadow: "var(--shadow-warm)" }}
        >
          <img
            src={heroImage}
            alt="Model wearing a camel and dark brown wool coat"
            width={1408}
            height={1600}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section id="collection" className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-px bg-border sm:grid-cols-3">
          {collection.map((item) => (
            <article
              key={item.name}
              className="bg-card px-8 py-14 transition-colors hover:bg-secondary"
            >
              <h2 className="text-xl font-light text-card-foreground">{item.name}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="atelier" className="mx-auto max-w-3xl px-6 py-28 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-primary">Atelier</p>
        <p className="mt-6 text-2xl leading-relaxed font-light">
          Every piece is cut and finished in small runs, using naturally dyed wool
          and silk in deep earth tones.
        </p>
      </section>

      <footer className="border-t border-border py-10 text-center text-xs tracking-widest uppercase text-muted-foreground">
        © {new Date().getFullYear()} Maison Terra
      </footer>
    </main>
  );
}
