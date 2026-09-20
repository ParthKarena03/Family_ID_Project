import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/layout/PageHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { families, schemes } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

export default async function FamilyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const family = families.find((item) => item.id === id);
  if (!family) notFound();

  return <div><PageHeader title={family.familyId} description={`Family profile of ${family.headName}`} action={<Link href="/families" className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium">← Back</Link>} />
    <div className="grid gap-6 xl:grid-cols-3">
      <Card className="p-6 xl:col-span-1"><div className="flex items-center gap-4"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-xl font-bold text-blue-700">{family.headName.charAt(0)}</div><div><h3 className="font-semibold">{family.headName}</h3><p className="text-sm text-slate-500">Head of Family</p></div></div><div className="mt-6 space-y-4"><div><p className="text-xs text-slate-400">Family ID</p><p className="mt-1 font-medium">{family.familyId}</p></div><div><p className="text-xs text-slate-400">District</p><p className="mt-1 font-medium">{family.district}</p></div><div><p className="text-xs text-slate-400">Village</p><p className="mt-1 font-medium">{family.village}</p></div><div><p className="text-xs text-slate-400">Annual Income</p><p className="mt-1 font-medium">{formatCurrency(family.income)}</p></div><Badge type="success">Identity Verified</Badge></div></Card>
      <Card className="xl:col-span-2"><div className="border-b border-slate-100 p-6"><h3 className="font-semibold">Family Members</h3></div><div className="divide-y divide-slate-100">{family.members.map((member) => <div key={member.id} className="grid gap-3 p-5 md:grid-cols-4"><div><p className="text-sm font-semibold">{member.name}</p><p className="text-xs text-slate-500">{member.relationship}</p></div><div><p className="text-xs text-slate-400">Age</p><p className="text-sm">{member.age}</p></div><div><p className="text-xs text-slate-400">Occupation</p><p className="text-sm">{member.occupation}</p></div><div><p className="text-xs text-slate-400">Education</p><p className="text-sm">{member.education}</p></div></div>)}</div></Card>
    </div>
    <Card className="mt-6"><div className="border-b border-slate-100 p-6"><h3 className="font-semibold">Potentially Eligible Schemes</h3><p className="mt-1 text-sm text-slate-500">Based on the information currently available.</p></div><div className="grid gap-4 p-6 md:grid-cols-2">{schemes.slice(0, 3).map((scheme) => <div key={scheme.id} className="rounded-xl border border-slate-200 p-5"><div className="flex items-start justify-between gap-4"><div><h4 className="font-medium">{scheme.name}</h4><p className="mt-1 text-xs text-slate-500">{scheme.department}</p></div><Badge type="success">Potentially Eligible</Badge></div><p className="mt-4 text-sm leading-6 text-slate-600">{scheme.description}</p><button className="mt-4 text-sm font-medium text-blue-600">View eligibility →</button></div>)}</div></Card>
  </div>;
}