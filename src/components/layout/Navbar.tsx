import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { whatsappLink, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-smooth",
        scrolled || open
          ? "bg-background/95 backdrop-blur-lg shadow-soft"
          : "bg-background/80 backdrop-blur-md"
      )}
    >
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="GS Event Management logo"
            className="h-12 w-auto group-hover:scale-105 transition-smooth"
          />
          <div className="leading-tight hidden sm:block">
            <div className="font-display text-lg font-semibold text-gradient-gold tracking-wide">
              GS Event Management
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              ✦ Crafting Celebrations ✦
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-smooth relative",
                  isActive
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="gold" size="sm">
            <a href={whatsappLink()} target="_blank" rel="noreferrer">Book Now</a>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-lg border-t border-border animate-fade-in">
          <nav className="container flex flex-col py-4 gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-3 rounded-lg font-medium transition-smooth",
                    isActive
                      ? "bg-secondary text-primary"
                      : "text-foreground/80 hover:bg-muted"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Button asChild variant="gold" className="mt-3">
              <a href={whatsappLink()} target="_blank" rel="noreferrer">Book Now on WhatsApp</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
