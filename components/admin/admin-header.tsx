"use client";

import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { toast } from "sonner";
import { useState } from "react";

export function AdminHeader() {
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    try {
      if (!confirm("Are you sure you want to logout?")) return;
      setLoading(true);
      await signOut(auth);
      toast.success("Logged out");
      // Auth state listener on /dashboard will automatically
      // switch to <LoginView />
      setLoading(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="mb-8 flex w-full items-center justify-between">
      <div>
        <h1 className="font-heading text-4xl font-semibold tracking-tight">
          <span className="gradient-text">Admin Dashboard</span>
        </h1>
        <p className="mt-2 text-muted-foreground">
          Manage and monitor platform data
        </p>
      </div>

      <button
        onClick={handleLogout}
        disabled={loading}
        className="cursor-pointer rounded-md bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}
