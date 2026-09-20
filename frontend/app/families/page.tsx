import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { families } from "@/lib/mock-data";

export default function FamiliesPage() {
  return <div><PageHeader title="Families" description="Search and manage registered Family IDs." action={<Link href="/families/new" className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700">+ Register Family</Link>} />
    <Card className="mb-6 p-4"><div className="flex flex-col gap-3 md:flex-row"><input placeholder="Search Family ID, name or district..." className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500" /><button className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white">Search</button></div></Card>
    <Card className="overflow-hidden"><div className="overflow-x-auto"><table className="w-full min-w-[700px] text-left"><thead className="bg-slate-50 text-xs uppercase text-slate-500"><tr><th className="px-6 py-4">Family ID</th><th className="px-6 py-4">Head of Family</th><th className="px-6 py-4">Location</th><th className="px-6 py-4">Members</th><th className="px-6 py-4">Status</th><th className="px-6 py-4"></th></tr></thead><tbody className="divide-y divide-slate-100">{families.map((family) => <tr key={family.id} className="hover:bg-slate-50"><td className="px-6 py-5 text-sm font-semibold text-blue-700">{family.familyId}</td><td className="px-6 py-5 text-sm font-medium">{family.headName}</td><td className="px-6 py-5 text-sm text-slate-500">{family.district}, {family.village}</td><td className="px-6 py-5 text-sm text-slate-600">{family.members.length}</td><td className="px-6 py-5"><Badge type="success">Verified</Badge></td><td className="px-6 py-5"><Link href={`/families/${family.id}`} className="text-sm font-medium text-blue-600 hover:text-blue-800">View →</Link></td></tr>)}</tbody></table></div></Card>
  </div>;
}