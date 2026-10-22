import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from "@formspree/react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
  Download,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import SectionShell from "@/components/effects/SectionShell";
import MovingBorder from "@/components/effects/MovingBorder";
import { site } from "@/data/site";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formState, handleSubmit] = useForm("xvgqovag");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getFirstName = () => formData.name.trim().split(" ")[0] || "there";

  const socialLinks = [
    { name: "GitHub", icon: Github, url: site.links.github },
    { name: "LinkedIn", icon: Linkedin, url: site.links.linkedin },
    { name: "Twitter", icon: Twitter, url: site.links.twitter },
  ];

  return (
    <SectionShell id="contact" variant="noise">
        <SectionHeader
          index="06 / Contact"
          title="Let's talk systems"
          description="Full-stack product work, software engineering collaboration, ERP systems, or applied AI/ML in a real product—reach out with context."
        />

        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 space-y-6">
            <div className="border border-border bg-card/80 backdrop-blur-sm p-6 space-y-5">
              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-3 group"
              >
                <span className="mt-0.5 text-primary">
                  <Mail className="h-4 w-4" />
                </span>
                <span>
                  <span className="font-mono-meta text-[10px] uppercase tracking-widest text-muted-foreground block">
                    Email
                  </span>
                  <span className="text-sm group-hover:text-primary transition-colors">
                    {site.email}
                  </span>
                </span>
              </a>
              <a href={`tel:${site.phoneHref}`} className="flex items-start gap-3 group">
                <span className="mt-0.5 text-primary">
                  <Phone className="h-4 w-4" />
                </span>
                <span>
                  <span className="font-mono-meta text-[10px] uppercase tracking-widest text-muted-foreground block">
                    Phone
                  </span>
                  <span className="text-sm group-hover:text-primary transition-colors">
                    {site.phone}
                  </span>
                </span>
              </a>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>
                  <span className="font-mono-meta text-[10px] uppercase tracking-widest text-muted-foreground block">
                    Location
                  </span>
                  <span className="text-sm">{site.location}</span>
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
              <a
                href={site.cvUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center gap-2 px-3 border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
              >
                <Download className="h-3.5 w-3.5" />
                Download CV
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            {formState.succeeded ? (
              <MovingBorder className="rounded-sm">
                <div className="p-8 text-center">
                  <p className="font-display text-xl font-semibold mb-2">
                    Thanks, {getFirstName()}.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Your message was sent. I'll get back to you soon.
                  </p>
                </div>
              </MovingBorder>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border border-border bg-card/80 backdrop-blur-sm p-5 sm:p-8 shadow-[0_0_60px_-20px_hsl(var(--primary)/0.25)]"
              >
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="font-mono-meta text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="rounded-sm border-border"
                      placeholder="Your name"
                    />
                    <ValidationError prefix="Name" field="name" errors={formState.errors} />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-mono-meta text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="rounded-sm border-border"
                      placeholder="you@company.com"
                    />
                    <ValidationError prefix="Email" field="email" errors={formState.errors} />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="font-mono-meta text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="rounded-sm border-border"
                    placeholder="Product build, engineering role, or collaboration"
                  />
                  <ValidationError prefix="Subject" field="subject" errors={formState.errors} />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="font-mono-meta text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="rounded-sm border-border resize-none"
                    placeholder="Context, timeline, and what you're looking for…"
                  />
                  <ValidationError prefix="Message" field="message" errors={formState.errors} />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={formState.submitting}
                  className="rounded-sm w-full sm:w-auto"
                >
                  {formState.submitting ? (
                    "Sending…"
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send message
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
    </SectionShell>
  );
}
