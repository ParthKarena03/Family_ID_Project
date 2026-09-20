import React from "react";

export default function Badge({ children, type = "default" }: { children: React.ReactNode; type?: "success" | "warning" | "danger" | "default" }) {
  const styles = {
    success: "bg-emerald-50 text-emerald-700",
    warning: "bg-amber-50 text-amber-700",
    danger: "bg-red-50 text-red-700",
    default: "bg-slate-100 text-slate-700"
  };
  return <span className={`rounded-full px-3 py-1 text-xs font-medium ${styles[type]}`}>{children}</span>;
}