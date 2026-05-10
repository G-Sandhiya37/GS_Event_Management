import { ReactNode } from "react";

type Props = {
  title: string;
  subtitle?: ReactNode;
  image: string;
};

export default function PageHero({ title, subtitle, image }: Props) {
  return (
    <section className="relative h-[55vh] min-h-[420px] w-full flex items-center justify-center overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative z-10 container text-center text-background animate-fade-in-up">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="h-px w-10 bg-primary-glow" />
          <span className="text-sm md:text-base uppercase tracking-[0.3em] text-gradient-gold font-serif font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            GS Event Management
          </span>
          <span className="h-px w-10 bg-primary-glow" />
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-medium leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl mx-auto text-background/85 text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
