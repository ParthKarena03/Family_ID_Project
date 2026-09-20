import PageHeader from "@/components/layout/PageHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { applications } from "@/lib/mock-data";

function getType(status: string) { if (status === "Approved") return "success"; if (status === "Pending") return "warning"; return "danger"; }

export default function ApplicationsPage() {
  return <div><PageHeader title="Applications" description="Track applications submitted for government schemes." /><Card className="overflow-hidden"><div className="overflow-x-auto"><table className="w-full min-w-[800px] text-left"><thead className="bg-slate-50 text-xs uppercase text-slate-500"><tr><th className="px-6 py-4">Application</th><th className="px-6 py-4">Family</th><th className="px-6 py-4">Scheme</th><th className="px-6 py-4">Date</th><th className="px-6 py-4">Status</th></tr></thead><tbody className="divide-y divide-slate-100">{applications.map((application) => <tr key={application.id} className="hover:bg-slate-50"><td className="px-6 py-5 text-sm font-semibold">{application.id}</td><td className="px-6 py-5"><div className="text-sm font-medium">{application.familyName}</div><div className="text-xs text-slate-500">{application.familyId}</div></td><td className="px-6 py-5 text-sm">{application.scheme}</td><td className="px-6 py-5 text-sm text-slate-500">{application.appliedDate}</td><td className="px-6 py-5"><Badge type={getType(application.status) as "success" | "warning" | "danger"}>{application.status}</Badge></td></tr>)}</tbody></table></div></Card></div>;
}