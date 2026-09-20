export default function Header() {
  return <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6 lg:px-8">
    <div><h1 className="text-lg font-semibold text-slate-900">Beneficiary Management</h1><p className="text-xs text-slate-500">Gujarat Family ID Platform</p></div>
    <div className="flex items-center gap-4"><button className="rounded-xl p-2 text-slate-500 hover:bg-slate-50">🔔</button><div className="flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">PA</div><div className="hidden sm:block"><div className="text-sm font-medium">Portal Admin</div><div className="text-xs text-slate-500">Administrator</div></div></div></div>
  </header>;
}