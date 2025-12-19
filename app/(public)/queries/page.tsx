"use client";

import { QueriesTable } from "@/components/queries/queries-table";
import { useState, useEffect } from "react";

export default function QueriesPage() {
  const [authorized, setAuthorized] = useState<boolean | null>(null);
  const [input, setInput] = useState("");

  // 🔐 Check if user is already authenticated (from localStorage)
  useEffect(() => {
    const isAuth = localStorage.getItem("admin-auth");
    setAuthorized(isAuth === "true");
  }, []);

  const handleLogin = () => {
    if (input === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      localStorage.setItem("admin-auth", "true"); // persist login
      setAuthorized(true);
    } else {
      alert("Incorrect password");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin-auth");
    setAuthorized(false);
  };

  // Show loading until we read localStorage
  if (authorized === null) return <p className="p-10">Checking session...</p>;

  // Not authorized → show password prompt
  if (!authorized) {
    return (
      <div className="p-10 max-w-sm mx-auto">
        <h1 className="text-xl mb-4 font-semibold">Admin Access Required</h1>

        <input
          className="border p-2 w-full mb-3 rounded"
          placeholder="Enter password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="password"
        />

        <button
          className="w-full bg-black text-white p-2 rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    );
  }

  // Authorized → show protected content
  return (
    <main className="p-10">
      <div className="flex justify-end mb-4">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Logout
        </button>
      </div>

      <QueriesTable />
    </main>
  );
}
