import { useState } from "react";
import { Phone, Mail, MapPin, Instagram, Send, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { SITE, whatsappLink } from "@/lib/site";
import heroImg from "@/assets/gallery-3.jpg";

const eventTypes = [
  "Wedding", "Birthday", "Corporate Event", "College Event",
  "Awards Ceremony", "Product Launch", "Other",
];

const ContactPage = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", eventType: "", budget: "", date: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.eventType) return;
    const text = `New Event Enquiry%0A%0A*Name:* ${encodeURIComponent(form.name)}%0A*Event Type:* ${encodeURIComponent(form.eventType)}%0A*Budget:* ${encodeURIComponent(form.budget || "—")}%0A*Date:* ${encodeURIComponent(form.date || "—")}%0A*Message:* ${encodeURIComponent(form.message || "—")}`;
    window.open(`https://wa.me/${SITE.whatsapp}?text=${text}`, "_blank");
    setSent(true);
  };

  const WhatsAppIcon = (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.057 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.892-11.893A11.821 11.821 0 0 0 20.4 3.488 11.824 11.824 0 0 0 12.057 0z"/>
    </svg>
  );

  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="Tell us about your event — we'd love to bring it to life."
        image={heroImg}
      />

      <section className="py-24">
        <div className="container grid lg:grid-cols-2 gap-12">
          {/* Contact info + map */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-6 bg-card rounded-2xl shadow-card">
                <Phone className="w-6 h-6 text-primary mb-3" />
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Call</div>
                <a href={`tel:${SITE.phone}`} className="font-medium hover:text-primary">{SITE.phone}</a>
              </div>
              <div className="p-6 bg-card rounded-2xl shadow-card">
                <Mail className="w-6 h-6 text-primary mb-3" />
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                <a href={`mailto:${SITE.email}`} className="font-medium hover:text-primary break-all">{SITE.email}</a>
              </div>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="p-6 bg-gradient-gold text-primary-foreground rounded-2xl shadow-gold hover-lift">
                {WhatsAppIcon}
                <div className="text-xs uppercase tracking-widest mt-3 opacity-80">WhatsApp</div>
                <div className="font-medium">Chat with us</div>
              </a>
              <a href={SITE.instagram} target="_blank" rel="noreferrer" className="p-6 bg-card rounded-2xl shadow-card hover-lift">
                <Instagram className="w-6 h-6 text-primary mb-3" />
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Instagram</div>
                <div className="font-medium">@gs_event_management_21</div>
              </a>
            </div>

            <div className="p-6 bg-card rounded-2xl shadow-card">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Studio</div>
                  <div className="font-medium">{SITE.address}</div>
                </div>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps?q=Periya+Kajiyar+Street+Chidambaram+608001&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-8 md:p-10 bg-card rounded-2xl shadow-elegant">
            {sent ? (
              <div className="text-center py-12 animate-scale-in">
                <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="font-display text-3xl">Thank you!</h3>
                <p className="text-muted-foreground mt-2">
                  We've received your enquiry — we'll be in touch within 24 hours.
                </p>
                <Button onClick={() => { setSent(false); setForm({ name: "", eventType: "", budget: "", date: "", message: "" }); }} variant="outlineGold" className="mt-6">
                  Send another
                </Button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div>
                  <h3 className="font-display text-3xl">Plan your event</h3>
                  <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours.</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name *</Label>
                  <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Sathish" />
                </div>
                <div className="space-y-2">
                  <Label>Event Type *</Label>
                  <Select value={form.eventType} onValueChange={(v) => setForm({ ...form, eventType: v })}>
                    <SelectTrigger><SelectValue placeholder="Select event type" /></SelectTrigger>
                    <SelectContent>
                      {eventTypes.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget</Label>
                    <Input id="budget" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} placeholder="Type your budget here" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Event Date</Label>
                    <Input id="date" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="msg">Tell us about it</Label>
                  <Textarea id="msg" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Theme, guest count, location..." />
                </div>
                <Button type="submit" variant="gold" size="lg" className="w-full">
                  <Send /> Send Enquiry
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
