import { TextField, AreaField } from "@/components/admin/Field";
import { useContent } from "@/context/ContentContext";

export default function AdminSite() {
  const { site, setSite } = useContent();

  const patch = <K extends keyof typeof site>(key: K, value: (typeof site)[K]) => {
    setSite({ ...site, [key]: value });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-bold">Site & profile</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Identity, SEO, contact, education, and nav labels.
        </p>
      </div>

      <section className="space-y-4 border border-border bg-card/50 p-5">
        <h2 className="font-display font-semibold">Identity</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <TextField label="Full name" value={site.name} onChange={(v) => patch("name", v)} />
          <TextField label="Short name" value={site.shortName} onChange={(v) => patch("shortName", v)} />
          <div className="sm:col-span-2">
            <TextField label="Headline" value={site.headline} onChange={(v) => patch("headline", v)} />
          </div>
          <div className="sm:col-span-2">
            <TextField label="Role line" value={site.role} onChange={(v) => patch("role", v)} />
          </div>
          <div className="sm:col-span-2">
            <AreaField label="Summary" value={site.summary} onChange={(v) => patch("summary", v)} rows={4} />
          </div>
          <TextField label="Location" value={site.location} onChange={(v) => patch("location", v)} />
          <TextField label="Site URL" value={site.url} onChange={(v) => patch("url", v)} />
        </div>
      </section>

      <section className="space-y-4 border border-border bg-card/50 p-5">
        <h2 className="font-display font-semibold">Contact</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <TextField label="Email" value={site.email} onChange={(v) => patch("email", v)} />
          <TextField label="Phone display" value={site.phone} onChange={(v) => patch("phone", v)} />
          <TextField label="Phone href" value={site.phoneHref} onChange={(v) => patch("phoneHref", v)} />
          <TextField label="CV URL" value={site.cvUrl} onChange={(v) => patch("cvUrl", v)} />
        </div>
      </section>

      <section className="space-y-4 border border-border bg-card/50 p-5">
        <h2 className="font-display font-semibold">Links</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <TextField
            label="LinkedIn"
            value={site.links.linkedin}
            onChange={(v) => patch("links", { ...site.links, linkedin: v })}
          />
          <TextField
            label="GitHub"
            value={site.links.github}
            onChange={(v) => patch("links", { ...site.links, github: v })}
          />
          <TextField
            label="Twitter / X"
            value={site.links.twitter}
            onChange={(v) => patch("links", { ...site.links, twitter: v })}
          />
          <TextField
            label="Portfolio"
            value={site.links.portfolio}
            onChange={(v) => patch("links", { ...site.links, portfolio: v })}
          />
        </div>
      </section>

      <section className="space-y-4 border border-border bg-card/50 p-5">
        <h2 className="font-display font-semibold">Education</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <TextField
            label="Degree"
            value={site.education.degree}
            onChange={(v) => patch("education", { ...site.education, degree: v })}
          />
          <TextField
            label="School"
            value={site.education.school}
            onChange={(v) => patch("education", { ...site.education, school: v })}
          />
          <TextField
            label="Period"
            value={site.education.period}
            onChange={(v) => patch("education", { ...site.education, period: v })}
          />
        </div>
      </section>

      <section className="space-y-4 border border-border bg-card/50 p-5">
        <h2 className="font-display font-semibold">SEO</h2>
        <div className="grid gap-4">
          <TextField
            label="Title"
            value={site.seo.title}
            onChange={(v) => patch("seo", { ...site.seo, title: v })}
          />
          <AreaField
            label="Description"
            value={site.seo.description}
            onChange={(v) => patch("seo", { ...site.seo, description: v })}
          />
          <TextField label="OG image path" value={site.ogImage} onChange={(v) => patch("ogImage", v)} />
        </div>
      </section>

      <section className="space-y-4 border border-border bg-card/50 p-5">
        <h2 className="font-display font-semibold">Navigation labels</h2>
        <p className="text-xs text-muted-foreground">
          Keep hrefs as section anchors (e.g. #work). Edit names shown in the nav.
        </p>
        <div className="space-y-3">
          {site.nav.map((item, i) => (
            <div key={i} className="grid sm:grid-cols-2 gap-3">
              <TextField
                label={`Nav ${i + 1} name`}
                value={item.name}
                onChange={(v) => {
                  const nav = site.nav.map((n, j) =>
                    j === i ? { ...n, name: v } : n
                  );
                  patch("nav", nav);
                }}
              />
              <TextField
                label={`Nav ${i + 1} href`}
                value={item.href}
                onChange={(v) => {
                  const nav = site.nav.map((n, j) =>
                    j === i ? { ...n, href: v } : n
                  );
                  patch("nav", nav);
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
