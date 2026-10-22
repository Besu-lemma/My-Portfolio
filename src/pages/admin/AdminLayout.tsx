import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  Briefcase,
  FolderKanban,
  LayoutDashboard,
  LogOut,
  Settings2,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { setAdminAuthed } from "@/lib/content-storage";
import ThemeToggle from "@/components/ThemeToggle";
import AdminDocumentMeta from "@/components/admin/AdminDocumentMeta";

const links = [
  { to: "/admin", end: true, label: "Overview", icon: LayoutDashboard },
  { to: "/admin/experience", label: "Experience", icon: Briefcase },
  { to: "/admin/projects", label: "Projects", icon: FolderKanban },
  { to: "/admin/capabilities", label: "Capabilities", icon: Wrench },
  { to: "/admin/site", label: "Site & profile", icon: Settings2 },
];

export default function AdminLayout() {
  const navigate = useNavigate();

  const logout = () => {
    setAdminAuthed(false);
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <AdminDocumentMeta />
      <aside className="hidden md:flex w-56 shrink-0 flex-col border-r border-border bg-card/40">
        <div className="p-5 border-b border-border">
          <p className="font-mono-meta text-[10px] text-primary tracking-widest">
            PORTFOLIO CMS
          </p>
          <p className="font-display font-semibold mt-1">Admin</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {links.map(({ to, end, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                )
              }
            >
              <Icon className="h-4 w-4" />
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="p-3 border-t border-border space-y-2">
          <Button variant="outline" size="sm" className="w-full" asChild>
            <a href="/" target="_blank" rel="noreferrer">
              View site
            </a>
          </Button>
          <Button variant="ghost" size="sm" className="w-full" onClick={logout}>
            <LogOut className="h-4 w-4" />
            Sign out
          </Button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          <div className="md:hidden flex gap-1 overflow-x-auto">
            {links.map(({ to, end, label }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  cn(
                    "whitespace-nowrap px-2.5 py-1.5 text-xs rounded-md font-mono-meta tracking-wide",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground"
                  )
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
          <p className="hidden md:block font-mono-meta text-[10px] text-muted-foreground tracking-wider">
            Changes save to this browser · export JSON to keep a backup
          </p>
          <div className="flex items-center gap-2 ml-auto">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={logout}
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </header>
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-5xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
