import { FormEvent, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  getAdminPassword,
  isAdminAuthed,
  setAdminAuthed,
} from "@/lib/content-storage";
import AdminDocumentMeta from "@/components/admin/AdminDocumentMeta";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (isAdminAuthed()) {
    return <Navigate to="/admin" replace />;
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (password === getAdminPassword()) {
      setAdminAuthed(true);
      navigate("/admin", { replace: true });
      return;
    }
    setError("Incorrect password");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <AdminDocumentMeta />
      <div className="w-full max-w-sm border border-border bg-card p-8 shadow-sm">
        <p className="font-mono-meta text-[10px] text-primary tracking-widest mb-2">
          ADMIN
        </p>
        <h1 className="font-display text-2xl font-bold mb-1">Content desk</h1>
        <p className="text-sm text-muted-foreground mb-6">
          Sign in to manage portfolio content.
        </p>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              autoFocus
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
            />
          </div>
          {error && (
            <p className="text-sm text-destructive" role="alert">
              {error}
            </p>
          )}
          <Button type="submit" className="w-full">
            Enter
          </Button>
        </form>
      </div>
    </div>
  );
}
