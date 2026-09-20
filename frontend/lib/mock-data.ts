import { Application, Benefit, Family, Scheme } from "@/types";

export const families: Family[] = [
  {
    id: "1",
    familyId: "GJ-2026-000123",
    headName: "Rajesh Patel",
    district: "Ahmedabad",
    village: "Sanand",
    income: 240000,
    verified: true,
    members: [
      { id: "m1", name: "Rajesh Patel", age: 45, gender: "Male", relationship: "Father", occupation: "Farmer", education: "Graduate" },
      { id: "m2", name: "Kiran Patel", age: 41, gender: "Female", relationship: "Mother", occupation: "Homemaker", education: "12th" },
      { id: "m3", name: "Ankit Patel", age: 20, gender: "Male", relationship: "Son", occupation: "Student", education: "B.Tech" },
      { id: "m4", name: "Riya Patel", age: 15, gender: "Female", relationship: "Daughter", occupation: "Student", education: "10th" }
    ]
  },
  {
    id: "2",
    familyId: "GJ-2026-000124",
    headName: "Mahesh Shah",
    district: "Gandhinagar",
    village: "Kalol",
    income: 180000,
    verified: true,
    members: [
      { id: "m5", name: "Mahesh Shah", age: 50, gender: "Male", relationship: "Father", occupation: "Business", education: "Graduate" },
      { id: "m6", name: "Neha Shah", age: 46, gender: "Female", relationship: "Mother", occupation: "Homemaker", education: "Graduate" }
    ]
  }
];

export const schemes: Scheme[] = [
  { id: "s1", name: "Student Scholarship Scheme", department: "Education Department", description: "Financial assistance for eligible students pursuing higher education.", category: "Education", beneficiaries: 21430, status: "Active" },
  { id: "s2", name: "Farmer Support Scheme", department: "Agriculture Department", description: "Financial support and assistance for eligible agricultural families.", category: "Agriculture", beneficiaries: 28770, status: "Active" },
  { id: "s3", name: "Family Healthcare Assistance", department: "Health Department", description: "Healthcare assistance for eligible families.", category: "Healthcare", beneficiaries: 34120, status: "Active" },
  { id: "s4", name: "Women Empowerment Scheme", department: "Women & Child Development", description: "Support programs for eligible women and families.", category: "Social Welfare", beneficiaries: 12800, status: "Active" }
];

export const applications: Application[] = [
  { id: "APP-1001", familyId: "GJ-2026-000123", familyName: "Rajesh Patel", scheme: "Student Scholarship Scheme", appliedDate: "18 Sep 2026", status: "Approved" },
  { id: "APP-1002", familyId: "GJ-2026-000124", familyName: "Mahesh Shah", scheme: "Family Healthcare Assistance", appliedDate: "17 Sep 2026", status: "Pending" },
  { id: "APP-1003", familyId: "GJ-2026-000123", familyName: "Rajesh Patel", scheme: "Farmer Support Scheme", appliedDate: "15 Sep 2026", status: "Approved" },
  { id: "APP-1004", familyId: "GJ-2026-000124", familyName: "Mahesh Shah", scheme: "Women Empowerment Scheme", appliedDate: "12 Sep 2026", status: "Rejected" }
];

export const benefits: Benefit[] = [
  { id: "B-1001", familyId: "GJ-2026-000123", scheme: "Student Scholarship Scheme", amount: 25000, date: "20 Sep 2026", status: "Disbursed" },
  { id: "B-1002", familyId: "GJ-2026-000123", scheme: "Farmer Support Scheme", amount: 12000, date: "15 Sep 2026", status: "Disbursed" },
  { id: "B-1003", familyId: "GJ-2026-000124", scheme: "Family Healthcare Assistance", amount: 15000, date: "19 Sep 2026", status: "Processing" }
];