// ...existing code...
'use client';

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function MuhsMandateDetails() {
  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold mb-6 text-[#2D6CDF] text-center">Annexure XII – Attendance / Research / Welfare Scheme Details (2025-2026)</h1>
        <h2 className="text-lg font-semibold mb-2 text-center">Bhojrajji Bhondekar Physiotherapy College, Bhandara</h2>
        <div className="rounded-xl bg-white shadow-md overflow-hidden p-6 mb-6">
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full text-sm text-gray-800 border border-gray-200 rounded-lg mb-4">
              <tbody>
                <tr className="bg-gray-100">
                  <td className="border px-3 py-2 font-semibold" colSpan={2}>Attendance</td>
                  <td className="border px-3 py-2" colSpan={2}>Month-wise Biometric attendance to be uploaded by the college on College Website<br/>(No hard copies of attendance to be submitted to the University)</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">Teaching Staff</td>
                  <td className="border px-3 py-2">&nbsp;</td>
                  <td className="border px-3 py-2">Non teaching staff</td>
                  <td className="border px-3 py-2">&nbsp;</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">Hospital Staff</td>
                  <td className="border px-3 py-2">&nbsp;</td>
                  <td className="border px-3 py-2">UG & PG Students</td>
                  <td className="border px-3 py-2">&nbsp;</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border px-3 py-2 font-semibold" colSpan={2}>Project</td>
                  <td className="border px-3 py-2" colSpan={2}>Not Applicable</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">Research Articles/Publications</td>
                  <td className="border px-3 py-2">0</td>
                  <td className="border px-3 py-2">Research Award (Student/Teacher)</td>
                  <td className="border px-3 py-2">0</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border px-3 py-2 font-semibold" colSpan={4}>Utilization of Student Welfare Schemes</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">Earn and Learn Scheme</td>
                  <td className="border px-3 py-2">0</td>
                  <td className="border px-3 py-2">Dhanwantri Vidyadhan Scheme</td>
                  <td className="border px-3 py-2">0</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">Sanjivani Student Safety Scheme</td>
                  <td className="border px-3 py-2">0</td>
                  <td className="border px-3 py-2">Student Safety Scheme</td>
                  <td className="border px-3 py-2">0</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">Book Bank Scheme</td>
                  <td className="border px-3 py-2">0</td>
                  <td className="border px-3 py-2">Savitribai Phule Vidyadhan Scheme</td>
                  <td className="border px-3 py-2">0</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">Bahishal Shikshan Mandal Scheme</td>
                  <td className="border px-3 py-2">0</td>
                  <td className="border px-3 py-2">&nbsp;</td>
                  <td className="border px-3 py-2">&nbsp;</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border px-3 py-2 font-semibold" colSpan={4}>Sport participants/Other Activities</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">University/State level Avishkar Competition</td>
                  <td className="border px-3 py-2">0</td>
                  <td className="border px-3 py-2">Regional/State level Sports Competition</td>
                  <td className="border px-3 py-2">38 (Cricket, Volleyball, Khoko & Kabbadi) Intercollegiate competition</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">Cultural Activities</td>
                  <td className="border px-3 py-2">35 (Institutional Competition)</td>
                  <td className="border px-3 py-2">Does the college have NSS Unit?</td>
                  <td className="border px-3 py-2">No</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border px-3 py-2 font-semibold" colSpan={3}>Whether "Swaccha Bharat Abhiyan" implemented in college</td>
                  <td className="border px-3 py-2">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-2 text-sm text-gray-700 text-center">
            <p className="font-semibold">Verified by The LIC Committee Members</p>
            <p className="mt-1 text-xs text-gray-500">Dean/Principal Stamp & Signature</p>
            <p className="mt-1 text-xs text-purple-700 font-bold">Principal Bhojrajji Bhondekar Physiotherapy College, Sirsi, Bhandara</p>
          </div>
        </div>
        {/* Back link for navigation consistency */}
        <a href="/muhsMandate" className="inline-block px-4 py-2 bg-[#2D6CDF] text-white rounded-lg font-semibold shadow hover:bg-[#1E4FBF] transition-colors">
          ← Back to MUHS Mandate
        </a>
      </main>
      <Footer />
    </>
  );
}
// ...existing code...