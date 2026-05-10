import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";
import logo from "@/assets/logo.png";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.057 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.892-11.893A11.821 11.821 0 0 0 20.4 3.488 11.824 11.824 0 0 0 12.057 0z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/95 text-background mt-24">
      <div className="container py-16 grid md:grid-cols-3 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-3 mb-4">
            <img src={logo} alt="GS Event Management logo" className="h-16 w-auto" />
            <div className="font-display text-2xl text-gradient-gold tracking-wide leading-tight">
              GS Event<br />Management
            </div>
          </Link>
          <p className="text-background/70 text-sm leading-relaxed max-w-sm">
            We design and deliver premium events that transform fleeting moments into
            timeless memories.
          </p>
        </div>

        <div>
          <h4 className="font-display text-xl mb-4 text-primary-glow">Explore</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li><Link to="/services" className="hover:text-primary-glow transition-smooth">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-primary-glow transition-smooth">Gallery</Link></li>
            <li><Link to="/testimonials" className="hover:text-primary-glow transition-smooth">Testimonials</Link></li>
            <li><Link to="/about" className="hover:text-primary-glow transition-smooth">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary-glow transition-smooth">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xl mb-4 text-primary-glow">Connect</h4>
          <div className="flex gap-3 mb-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="w-11 h-11 rounded-full bg-background/10 hover:bg-gradient-gold transition-smooth flex items-center justify-center"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 rounded-full bg-background/10 hover:bg-gradient-gold transition-smooth flex items-center justify-center"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-background/70">{SITE.phone}</p>
          <p className="text-sm text-background/70">{SITE.email}</p>
        </div>
      </div>

      <div className="container pb-10">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-gold p-6 md:p-8 text-primary-foreground shadow-gold">
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-background/20 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-background/10 blur-3xl" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
              <p className="font-display text-2xl md:text-3xl italic leading-snug">
                Loved This Website Experience? 😉
              </p>
              <p className="mt-1 text-sm md:text-base text-primary-foreground/90">
                Get a stunning, modern website designed uniquely for your business with premium UI, smooth experience, and powerful branding.
              </p>
            </div>
            <a
              href="tel:+916382074465"
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-foreground/90 hover:bg-foreground px-6 py-3 font-medium text-background transition-smooth hover:scale-105"
            >
              📞 +91 6382074465
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container py-5 text-center text-xs text-background/60">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved. · Loved the vibe? Tell a friend ✨
        </div>
      </div>
    </footer>
  );
}
