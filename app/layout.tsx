import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FreelancerTax – Scan Bank Statements for Missed Deductions",
  description: "Upload your bank or credit card statements and let AI find every tax deduction you missed. Built for freelancers making $50k+."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="83c020c6-483b-4ac2-87cc-46558d76b88f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
