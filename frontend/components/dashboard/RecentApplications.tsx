import { applications } from "@/lib/mock-data";
import Badge from "../ui/Badge";
import Card from "../ui/Card";

function statusType(status: string) { if (status === "Approved") return "success"; if (status === "Pending") return "warning"; return "danger"; }

export default function RecentApplications() {
  return <Card><div className="border-b border-slate-100 p-5"><h3 className="font-semibold text-slate-900">Recent Applications</h3></div><div className="divide-y divide-slate-100">{applications.map((application) => <div key={application.id} className="flex items-center justify-between p-5"><div><div className="text-sm font-medium text-slate-900">{application.scheme}</div><div className="mt-1 text-xs text-slate-500">{application.familyName} · {application.appliedDate}</div></div><Badge type={statusType(application.status) as "success" | "warning" | "danger"}>{application.status}</Badge></div>)}</div></Card>;
}