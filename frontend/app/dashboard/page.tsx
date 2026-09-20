import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import StatCard from "@/components/dashboard/StatCard";
import RecentApplications from "@/components/dashboard/RecentApplications";
import SchemeOverview from "@/components/dashboard/SchemeOverview";
import Card from "@/components/ui/Card";

export default function DashboardPage() {
  return <div><PageHeader title="Dashboard" description="Overview of family registrations and government scheme delivery." />
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard title="Registered Families" value="1,24,521" change="+8.4% this month" icon="👥" />
      <StatCard title="Applications" value="84,320" change="+12.2% this month" icon="◫" />
      <StatCard title="Pending Applications" value="7,231" change="Needs attention" icon="⏳" />
      <StatCard title="Benefits Distributed" value="₹48.6 Cr" change="+6.8% this month" icon="₹" />
    </div>
    <div className="mt-6 grid gap-6 xl:grid-cols-2"><RecentApplications /><SchemeOverview /></div>
    <Card className="mt-6 overflow-hidden"><div className="flex flex-col justify-between gap-4 p-6 sm:flex-row sm:items-center"><div><h3 className="text-lg font-semibold">Manage Family Records</h3><p className="mt-1 text-sm text-slate-500">Register a new family or search existing Family IDs.</p></div><Link href="/families/new" className="rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-medium text-white hover:bg-blue-700">Register Family</Link></div></Card>
  </div>;
}