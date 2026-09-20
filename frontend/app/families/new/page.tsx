"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import PageHeader from "@/components/layout/PageHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function NewFamilyPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", district: "", village: "", income: "", members: "1" });

  function submit(e: FormEvent) {
    e.preventDefault();
    alert("Family registered successfully! Family ID: GJ-2026-000125");
    router.push("/families");
  }

  return <div><PageHeader title="Register New Family" description="Create a Family ID and add basic household information." />
    <Card className="max-w-3xl p-6"><form onSubmit={submit} className="space-y-6"><div><h3 className="font-semibold">Family Information</h3><p className="mt-1 text-sm text-slate-500">Enter the basic information required to create the family profile.</p></div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Head of Family" value={form.name} onChange={(value) => setForm({ ...form, name: value })} placeholder="Enter full name" />
        <Field label="District" value={form.district} onChange={(value) => setForm({ ...form, district: value })} placeholder="Enter district" />
        <Field label="Village / City" value={form.village} onChange={(value) => setForm({ ...form, village: value })} placeholder="Enter village or city" />
        <Field label="Annual Family Income" value={form.income} onChange={(value) => setForm({ ...form, income: value })} placeholder="Enter annual income" />
        <Field label="Number of Members" value={form.members} onChange={(value) => setForm({ ...form, members: value })} placeholder="Number of members" />
      </div>
      <div className="rounded-xl bg-blue-50 p-4 text-sm text-blue-700">After successful verification, a unique Family ID will be generated for this household.</div>
      <div className="flex justify-end gap-3"><Button variant="secondary" onClick={() => router.back()}>Cancel</Button><Button type="submit">Create Family ID</Button></div>
    </form></Card>
  </div>;
}

function Field({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (value: string) => void; placeholder: string }) {
  return <div><label className="mb-2 block text-sm font-medium text-slate-700">{label}</label><input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} required className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" /></div>;
}