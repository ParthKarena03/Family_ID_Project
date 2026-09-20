export type Member = {
  id: string;
  name: string;
  age: number;
  gender: "Male" | "Female" | "Other";
  relationship: string;
  occupation: string;
  education: string;
};

export type Family = {
  id: string;
  familyId: string;
  headName: string;
  district: string;
  village: string;
  income: number;
  members: Member[];
  verified: boolean;
};

export type Scheme = {
  id: string;
  name: string;
  department: string;
  description: string;
  category: string;
  beneficiaries: number;
  status: "Active" | "Inactive";
};

export type Application = {
  id: string;
  familyId: string;
  familyName: string;
  scheme: string;
  appliedDate: string;
  status: "Approved" | "Pending" | "Rejected";
};

export type Benefit = {
  id: string;
  familyId: string;
  scheme: string;
  amount: number;
  date: string;
  status: "Disbursed" | "Processing";
};