import { useState } from "react";
import { Play, X } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { gallery, videos } from "@/data/gallery";
import heroImg from "@/assets/gallery-3.jpg";

const GalleryPage = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [video, setVideo] = useState<string | null>(null);

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Every event we design tells a beautiful story"
        image={heroImg}
      />

      <section className="py-24">
        <div className="container">
          <div className="columns-2 md:columns-3 gap-4 [&>*]:mb-4">
            {gallery.map((g, i) => (
              <button
                key={i}
                onClick={() => setLightbox(g.src)}
                className="block w-full overflow-hidden rounded-xl shadow-card group break-inside-avoid"
              >
                <img
                  src={g.src}
                  alt={g.caption}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-smooth duration-700"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-warm">
        <div className="container">
          <SectionHeader
            eyebrow="Watch"
            title={<>Stories in <em className="italic text-gradient-gold">motion</em></>}
          />
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {videos.map((v) => (
              <button
                key={v.title}
                onClick={() => setVideo(v.url)}
                className="group relative aspect-[9/12] rounded-2xl overflow-hidden shadow-card hover-lift"
              >
                <img src={v.thumb} alt={v.title} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-foreground/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-smooth">
                    <Play className="w-7 h-7 text-primary-foreground fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-background text-left">
                  <h3 className="font-display text-xl">{v.title}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <img src={lightbox} alt="" className="max-w-full max-h-full rounded-xl shadow-elegant" />
          <button className="absolute top-6 right-6 text-background" onClick={() => setLightbox(null)}>
            <X className="w-8 h-8" />
          </button>
        </div>
      )}

      {video && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setVideo(null)}
        >
          <div className="w-full max-w-md h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={video}
              title="Event video"
              className="w-full h-full rounded-xl shadow-elegant bg-background"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <button className="absolute top-6 right-6 text-background" onClick={() => setVideo(null)}>
            <X className="w-8 h-8" />
          </button>
        </div>
      )}
    </>
  );
};

export default GalleryPage;
