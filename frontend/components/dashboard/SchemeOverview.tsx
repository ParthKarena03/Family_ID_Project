import { schemes } from "@/lib/mock-data";
import Card from "../ui/Card";

export default function SchemeOverview() {
  return <Card><div className="border-b border-slate-100 p-5"><h3 className="font-semibold text-slate-900">Scheme Overview</h3></div><div className="p-5"><div className="space-y-5">{schemes.map((scheme) => <div key={scheme.id}><div className="mb-2 flex justify-between"><span className="text-sm font-medium text-slate-700">{scheme.name}</span><span className="text-xs text-slate-500">{scheme.beneficiaries.toLocaleString("en-IN")}</span></div><div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-blue-600" style={{ width: `${Math.min(100, scheme.beneficiaries / 400)}%` }} /></div></div>)}</div></div></Card>;
}