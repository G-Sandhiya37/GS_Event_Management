import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { gallery } from "@/data/gallery";
import { whatsappLink } from "@/lib/site";
import hero from "@/assets/hero-wedding.jpg";

const Home = () => {
  const previewServices = services.slice(0, 6);
  const previewGallery = gallery.slice(0, 6);
  const previewReviews = testimonials.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <img
          src={hero}
          alt="Elegant wedding hall with floral arches"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/40 to-foreground/80" />

        <div className="relative z-10 container py-32 text-background">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-primary-glow" />
              <span className="text-xs uppercase tracking-[0.3em] text-primary-glow font-serif">
                Premium Event Designers
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.05]">
              We turn your moments into{" "}
              <span className="italic text-gradient-gold">unforgettable</span>{" "}
              memories
            </h1>
            <p className="mt-6 text-lg md:text-xl text-background/85 max-w-2xl leading-relaxed">
              From intimate weddings to grand corporate productions — every detail,
              designed. Every emotion, elevated.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="gold" size="xl">
                <a href={whatsappLink()} target="_blank" rel="noreferrer">
                  Book Now <ArrowRight />
                </a>
              </Button>
              <Button asChild variant="outlineGold" size="xl">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 bg-gradient-warm">
        <div className="container">
          <SectionHeader
            eyebrow="What We Do"
            title={<>Crafted for every <em className="italic text-gradient-gold">occasion</em></>}
            subtitle="A full-service event studio offering end-to-end planning, design and execution."
          />

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewServices.map((s, i) => (
              <Link
                key={s.slug}
                to={`/services#${s.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-card shadow-card hover-lift animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-smooth">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="gold" size="lg">
              <Link to="/services">View All Services <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-24">
        <div className="container">
          <SectionHeader
            eyebrow="Moments & Memories"
            title={<>A glimpse into our <em className="italic text-gradient-gold">stories</em></>}
          />
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {previewGallery.map((g, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-xl shadow-card group ${
                  i === 0 ? "row-span-2 col-span-2 md:col-span-1 md:row-span-2" : ""
                }`}
              >
                <img
                  src={g.src}
                  alt={g.caption}
                  loading="lazy"
                  className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-smooth duration-700"
                />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outlineGold" size="lg">
              <Link to="/gallery">View Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section className="py-24 bg-gradient-warm">
        <div className="container">
          <SectionHeader
            eyebrow="Kind Words"
            title={<>Loved by <em className="italic text-gradient-gold">hundreds</em> of clients</>}
          />
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {previewReviews.map((t, i) => (
              <div
                key={t.name}
                className="p-8 bg-card rounded-2xl shadow-card hover-lift animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex gap-1 text-primary mb-4">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="font-display text-xl italic leading-snug">
                  “{t.quote}”
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={t.photo}
                    alt={t.name}
                    loading="lazy"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-foreground via-foreground to-foreground/90 p-12 md:p-20 text-background text-center shadow-elegant">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-primary-glow/20 blur-3xl" />
            <div className="relative">
              <Sparkles className="w-10 h-10 text-primary-glow mx-auto mb-6" />
              <h2 className="font-display text-4xl md:text-6xl font-medium leading-tight">
                Let's plan your <em className="italic text-gradient-gold">dream event</em> today
              </h2>
              <p className="mt-5 text-background/80 max-w-xl mx-auto">
                Tell us your vision — we'll handle every petal, every spotlight, every moment.
              </p>
              <Button asChild variant="gold" size="xl" className="mt-10">
                <a href={whatsappLink()} target="_blank" rel="noreferrer">
                  <Heart /> Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
