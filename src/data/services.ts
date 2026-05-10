import wedding from "@/assets/service-wedding.jpg";
import birthday from "@/assets/service-birthday.jpg";
import corporate from "@/assets/service-corporate.jpg";
import college from "@/assets/service-college.jpg";
import awards from "@/assets/service-awards.jpg";
import launch from "@/assets/service-launch.jpg";
import Exhibitions from "@/assets/service-Exhibitions.jpg";
import Parties from "@/assets/service-Corporate-Parties.jpg";
import Cultural from "@/assets/service-Cultural.jpg";
import Annual from "@/assets/service-Annual.jpg";

export type Service = {
  slug: string;
  title: string;
  short: string;
  image: string;
  includes: string[];
};

export const services: Service[] = [
  {
    slug: "wedding-planning",
    title: "Wedding Planning",
    short: "Timeless ceremonies designed with elegance and grace.",
    image: wedding,
    includes: [
      "Welcome Girls",
      "Security Guard",
      "Bride & Groom Entry",
      "Stage Decoration",
      "DJ Sound & Music",
      "Photography & Videography",
      "Kerala Melam",
      "Makeup Artist",
      "Catering Service",
      "Chariot Entry",
      "Aarthi Plates",
      "Bouncers",
      "Bangles Stall",
    ],
  },
  {
    slug: "birthday-parties",
    title: "Birthday Parties",
    short: "Joyful celebrations with playful themes for every age.",
    image: birthday,
    includes: [
      "Theme Decoration",
      "Balloon Setup",
      "Cake Arrangement",
      "Cartoon Characters",
      "Magic Show",
      "Games Host",
      "Return Gifts",
    ],
  },
  {
    slug: "corporate-events",
    title: "Corporate Events",
    short: "Polished productions that elevate your brand.",
    image: corporate,
    includes: [
      "Stage Setup",
      "LED Screens",
      "Sound System",
      "Anchors",
      "Branding Backdrops",
      "Lighting",
    ],
  },
  {
    slug: "college-events",
    title: "College Events",
    short: "High-energy fests with full production support.",
    image: college,
    includes: [
      "Concert-grade Stage",
      "Lighting & Trussing",
      "Artist Management",
      "DJ & Sound",
      "Crowd Control",
      "Backstage Logistics",
    ],
  },
  {
    slug: "awards-ceremonies",
    title: "Awards & Recognition",
    short: "Glamorous nights that honour excellence.",
    image: awards,
    includes: [
      "Stage & Podium Design",
      "Trophy & Branding",
      "Anchors & Hosts",
      "Cinematic Lighting",
      "Coverage & Live Stream",
    ],
  },
  {
    slug: "product-launch",
    title: "Product Launch",
    short: "Spotlight reveals that get the world talking.",
    image: launch,
    includes: [
      "Concept & Theme",
      "Reveal Mechanism",
      "Press & Media",
      "Hospitality",
      "Stage & AV",
      "Photography",
    ],
  },
  {
    slug: "annual-day",
    title: "Annual Day",
    short: "Memorable showcases for schools & companies.",
    image: Annual,
    includes: ["Stage Setup", "Backdrops", "Lighting", "Anchors", "Awards", "Catering"],
  },
  {
    slug: "conference",
    title: "Conference & Business Meets",
    short: "Seamless conferences with premium hospitality.",
    image: corporate,
    includes: ["Registration Setup", "AV Production", "Translation", "Catering", "Branding"],
  },
  {
    slug: "cultural-theme",
    title: "Cultural & Theme Events",
    short: "Immersive worlds built around your story.",
    image: Cultural,
    includes: ["Theme Design", "Costumes", "Performers", "Decor", "Music", "Photography"],
  },
  {
    slug: "trade-shows",
    title: "Trade Shows & Exhibitions",
    short: "Booth design and management that draws crowds.",
    image: Exhibitions,
    includes: ["Booth Design", "Branding", "Hostesses", "AV Setup", "Lead Capture"],
  },
  {
    slug: "festive-corporate",
    title: "Festive Corporate Parties",
    short: "Celebrate milestones with your team in style.",
    image: Parties,
    includes: ["Theme Decor", "Live Music", "Catering", "Games & Activities", "Photography"],
  },
];
