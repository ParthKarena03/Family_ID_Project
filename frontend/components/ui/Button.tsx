"use client";

export default function Button({ children, onClick, variant = "primary", type = "button" }: { children: React.ReactNode; onClick?: () => void; variant?: "primary" | "secondary"; type?: "button" | "submit" }) {
  return <button type={type} onClick={onClick} className={variant === "primary" ? "rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700" : "rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"}>{children}</button>;
}