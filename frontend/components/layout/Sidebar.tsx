"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Dashboard", href: "/dashboard", icon: "⌂" },
  { name: "Families", href: "/families", icon: "👥" },
  { name: "Schemes", href: "/schemes", icon: "▣" },
  { name: "Applications", href: "/applications", icon: "◫" },
  { name: "Benefits", href: "/benefits", icon: "₹" }
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="fixed left-0 top-0 z-30 hidden h-screen w-64 border-r border-slate-200 bg-white lg:block">
      <div className="flex h-20 items-center border-b border-slate-100 px-6">
        <div><div className="text-xl font-bold text-blue-700">FamilyID</div><div className="text-xs text-slate-400">Gujarat</div></div>
      </div>
      <nav className="space-y-1 p-4">
        {links.map((link) => {
          const active = pathname.startsWith(link.href);
          return <Link key={link.href} href={link.href} className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium ${active ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}><span>{link.icon}</span>{link.name}</Link>;
        })}
      </nav>
      <div className="absolute bottom-6 left-4 right-4 rounded-xl bg-slate-50 p-4">
        <div className="text-xs font-semibold text-slate-700">Government Portal</div>
        <div className="mt-1 text-xs text-slate-500">Beneficiary Management System</div>
      </div>
    </aside>
  );
}