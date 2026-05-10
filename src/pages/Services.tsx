import { useState } from "react";
import { Check, X, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { services, type Service } from "@/data/services";
import { whatsappLink } from "@/lib/site";
import hero from "@/assets/service-wedding.jpg";

const ServicesPage = () => {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="A curated suite of services to bring every kind of event to life."
        image={hero}
      />

      <section className="py-24">
        <div className="container">
          <SectionHeader
            eyebrow="Full Service Studio"
            title={<>From concept to <em className="italic text-gradient-gold">Moments & Memories</em></>}
            subtitle="Click any service to explore everything we include."
          />

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <button
                key={s.slug}
                id={s.slug}
                onClick={() => setActive(s)}
                className="group text-left relative overflow-hidden rounded-2xl bg-card shadow-card hover-lift animate-fade-in-up"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-smooth">
                    View details <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-foreground/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActive(null)}
        >
          <div
            className="bg-card rounded-2xl shadow-elegant max-w-3xl w-full max-h-[90vh] overflow-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
              <img src={active.image} alt={active.title} className="w-full h-full object-cover" />
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 hover:bg-background flex items-center justify-center transition-smooth"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-8">
              <h3 className="font-display text-4xl">{active.title}</h3>
              <p className="text-muted-foreground mt-2">{active.short}</p>
              <div className="mt-6 rounded-xl border-l-4 border-primary bg-primary/10 p-4">
                <p className="text-sm font-semibold text-foreground">
                  ✦ We warmly welcome your customization!
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  The list below is for reference only. For more details and tailored preferences,{" "}
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary underline underline-offset-2 hover:opacity-80"
                  >
                    contact us
                  </a>
                  .
                </p>
              </div>
              <h4 className="mt-6 text-xs uppercase tracking-[0.3em] text-primary font-medium font-serif">
                What's included (for reference)
              </h4>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                {active.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 w-5 h-5 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              {active.slug === "wedding-planning" && (
                <div className="mt-8 rounded-xl border-l-4 border-primary bg-primary/10 p-5">
                  <p className="text-sm font-semibold text-foreground">
                    ✦ Already planned your wedding? We've still got you covered!
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    If you only need specific add-on services, we proudly provide{" "}
                    <span className="font-medium text-foreground">
                      Popcorn Stall, Cotton Candy Stall, Ice Cream Stall, Sweet Corn Stall,
                      Sweet Beeda Stall, Fruit Salad Stall, Pani Puri Stall, 90s Kids Stall,
                      and Welcome Drinks
                    </span>{" "}
                    — booked individually, just the way you want.{" "}
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-primary underline underline-offset-2 hover:opacity-80"
                    >
                      Contact us
                    </a>{" "}
                    to customise your selection.
                  </p>
                </div>
              )}
              <Button asChild variant="gold" size="lg" className="mt-8 w-full sm:w-auto">
                <a href={whatsappLink()} target="_blank" rel="noreferrer">
                  Book {active.title}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServicesPage;
