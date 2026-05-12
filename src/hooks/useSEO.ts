import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

const DEFAULT_SEO = {
  title: "GS Event Management | Wedding & Event Planners in Tamil Nadu",
  description:
    "GS Event Management — Tamil Nadu's premier event planning company. Weddings, birthdays, corporate events & more. Call us today!",
  canonical: "https://www.gseventmanagement.in/",
  ogImage: "https://www.gseventmanagement.in/og-image.jpg",
};

export function useSEO(props: SEOProps = {}) {
  const { title, description, canonical, ogImage } = {
    ...DEFAULT_SEO,
    ...props,
  };

  useEffect(() => {
    document.title = title;
    setMeta("description", description);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:url", canonical, true);
    setMeta("og:image", ogImage, true);
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setCanonical(canonical);
  }, [title, description, canonical, ogImage]);
}

function setMeta(name: string, content: string, isProperty = false) {
  const attr = isProperty ? "property" : "name";
  let el = document.querySelector(
    `meta[${attr}="${name}"]`
  ) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.querySelector(
    'link[rel="canonical"]'
  ) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}
