import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <p className="font-mono-meta text-xs text-primary tracking-widest mb-3">
          404
        </p>
        <h1 className="font-display text-3xl font-semibold mb-3">
          Page not found
        </h1>
        <p className="text-muted-foreground mb-6 text-sm">
          No route matches <span className="font-mono-meta">{location.pathname}</span>
        </p>
        <Link
          to="/"
          className="inline-flex items-center text-sm text-primary hover:underline"
        >
          Return to portfolio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
