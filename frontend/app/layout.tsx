import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="bg-slate-50 text-slate-900"><Sidebar /><div className="lg:pl-64"><Header /><main className="p-6 lg:p-8">{children}</main></div></body></html>;
}