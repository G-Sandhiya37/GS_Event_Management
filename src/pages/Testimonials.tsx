import { Star, Quote } from "lucide-react";
import PageHero from "@/components/PageHero";
import { testimonials } from "@/data/testimonials";
import heroImg from "@/assets/gallery-5.jpg";

const TestimonialsPage = () => {
  return (
    <>
      <PageHero
        title="Testimonials"
        subtitle="Our clients' happiness is our biggest achievement"
        image={heroImg}
      />

      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="relative p-8 md:p-10 bg-card rounded-2xl shadow-card hover-lift animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                <p className="font-display text-2xl italic leading-snug">"{t.quote}"</p>
                <div className="flex gap-1 text-primary mt-6">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <img src={t.photo} alt={t.name} loading="lazy" className="w-14 h-14 rounded-full object-cover" />
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
    </>
  );
};

export default TestimonialsPage;
