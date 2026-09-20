import PageHeader from "@/components/layout/PageHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { schemes } from "@/lib/mock-data";

export default function SchemesPage() {
  return <div><PageHeader title="Government Schemes" description="Manage schemes and view beneficiary coverage." /><div className="grid gap-5 md:grid-cols-2">{schemes.map((scheme) => <Card key={scheme.id} className="p-6"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-medium uppercase text-blue-600">{scheme.category}</p><h3 className="mt-2 text-lg font-semibold">{scheme.name}</h3><p className="mt-1 text-xs text-slate-500">{scheme.department}</p></div><Badge type="success">{scheme.status}</Badge></div><p className="mt-5 text-sm leading-6 text-slate-600">{scheme.description}</p><div className="mt-6 border-t border-slate-100 pt-5"><p className="text-xs text-slate-400">Registered Beneficiaries</p><p className="mt-1 text-xl font-bold">{scheme.beneficiaries.toLocaleString("en-IN")}</p></div></Card>)}</div></div>;
}