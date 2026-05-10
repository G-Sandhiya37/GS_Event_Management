import { Heart, Sparkles, Award, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import heroImg from "@/assets/about-team.jpg";
import side from "@/assets/gallery-5.jpg";

const features = [
  { icon: Users, title: "Professional Team", body: "Specialists in design, production, hospitality & logistics." },
  { icon: Sparkles, title: "Creative Ideas", body: "Original concepts tailored to your story and audience." },
  { icon: Heart, title: "Affordable Pricing", body: "Premium experiences within transparent budgets." },
  { icon: Award, title: "End-to-End Service", body: "From the first sketch to the final farewell." },
];

const About = () => {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="A passionate studio crafting moments that linger long after the lights dim."
        image={heroImg}
      />

      <section className="py-24">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={side}
              alt="Event setup"
              loading="lazy"
              className="rounded-2xl shadow-elegant w-full aspect-[4/5] object-cover"
            />
          </div>

          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium font-serif">
              Who We Are
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
              Where <em className="italic text-gradient-gold">artistry</em> meets execution
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-justify">
              GS Event Management is a team of passionate event planners dedicated to creating unforgettable celebrations with elegance and perfection. We specialize in delivering complete A to Z event management services designed to bring your vision to life beautifully. Whether it is a dream wedding, a lively birthday celebration, or a professional corporate gathering, we focus on every small detail to ensure a smooth, joyful, and stress-free experience.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our mission is to create magical moments that leave lasting smiles and cherished memories for every client.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-warm">
        <div className="container">
          <SectionHeader
            eyebrow="Why Choose Us"
            title={<>The GS Event Management <em className="italic text-gradient-gold">difference</em></>}
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="p-8 bg-card rounded-2xl shadow-card hover-lift text-center animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-gradient-gold flex items-center justify-center shadow-gold mb-5">
                  <f.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl">{f.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container max-w-4xl text-center">
          <SectionHeader
            eyebrow="What Makes Us Different"
            title={<>Unique concepts. Personal planning. <em className="italic text-gradient-gold">Obsessive</em> detail.</>}
            subtitle="We don't recycle templates. Every event begins as a blank canvas — sketched around you, your guests, and the story you want to tell."
          />
        </div>
      </section>
    </>
  );
};

export default About;
