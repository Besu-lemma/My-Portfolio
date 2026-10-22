import { useEffect } from "react";

const ADMIN_ICON = "/admin-favicon.svg";
const SITE_ICON = "/favicon.svg";

function setIconHref(href: string) {
  const selectors = [
    'link[rel="icon"]',
    'link[rel="shortcut icon"]',
  ];
  for (const sel of selectors) {
    document.querySelectorAll(sel).forEach((node) => {
      const link = node as HTMLLinkElement;
      link.href = href;
      link.type = "image/svg+xml";
    });
  }
  // Ensure at least one icon link exists
  if (!document.querySelector('link[rel="icon"]')) {
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/svg+xml";
    link.href = href;
    document.head.appendChild(link);
  }
}

/** Swaps tab title + favicon while admin is mounted. */
export default function AdminDocumentMeta() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Admin · Portfolio CMS";
    setIconHref(ADMIN_ICON);

    return () => {
      document.title = prevTitle;
      setIconHref(SITE_ICON);
    };
  }, []);

  return null;
}
