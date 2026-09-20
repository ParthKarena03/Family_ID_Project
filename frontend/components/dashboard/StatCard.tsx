import Card from "../ui/Card";

export default function StatCard({ title, value, change, icon }: { title: string; value: string; change?: string; icon: string }) {
  return <Card className="p-5"><div className="flex items-start justify-between"><div><p className="text-sm text-slate-500">{title}</p><h3 className="mt-2 text-2xl font-bold text-slate-900">{value}</h3>{change && <p className="mt-2 text-xs font-medium text-emerald-600">{change}</p>}</div><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-lg">{icon}</div></div></Card>;
}