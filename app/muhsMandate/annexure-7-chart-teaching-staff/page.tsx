import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function ChartTeachingStaffPage() {
  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold mb-6 text-[#2D6CDF]">Annexure VII – Chart Teaching Staff</h1>
        <div className="rounded-xl bg-white shadow-md overflow-hidden p-6 mb-6">
          <h2 className="text-xl font-semibold mb-1 text-center text-gray-800">Maharashtra University of Health Sciences, Nashik</h2>
          <h3 className="text-lg font-medium mb-4 text-center text-gray-800">Physiotherapy Faculty Teaching Staff Chart<br />Academic Year 2025 - 2026</h3>
          <div className="mb-4 text-center text-gray-800">
            <p><span className="font-semibold">College:</span> Bhojrajji Bhondekar Physiotherapy College, Bhandara</p>
            <p><span className="font-semibold">CET Code:</span> 06296 | <span className="font-semibold">MUHS Code:</span> 165118</p>
          </div>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full text-xs text-gray-800 border border-gray-200 rounded-lg mb-4">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-2 py-1">Sr. No.</th>
                  <th className="border px-2 py-1">Department</th>
                  <th className="border px-2 py-1">Intake</th>
                  <th className="border px-2 py-1">Principal Cum Professor</th>
                  <th className="border px-2 py-1">Professor</th>
                  <th className="border px-2 py-1">Associate Professor</th>
                  <th className="border px-2 py-1">Assistant Professor</th>
                </tr>
              </thead>
              <tbody>
                {/* Example row, repeat for each department/intake as per chart */}
                <tr className="bg-white">
                  <td className="border px-2 py-1 text-center">1</td>
                  <td className="border px-2 py-1">Any Subject</td>
                  <td className="border px-2 py-1">Up to 10</td>
                  <td className="border px-2 py-1 text-center">Req: 01, Exist: 01, Deficit: -</td>
                  <td className="border px-2 py-1 text-center">N.A.</td>
                  <td className="border px-2 py-1 text-center">N.A.</td>
                  <td className="border px-2 py-1 text-center">N.A.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border px-2 py-1 text-center">2</td>
                  <td className="border px-2 py-1">Electrotherapy & Electrodiagnosis</td>
                  <td className="border px-2 py-1">Up to 10</td>
                  <td className="border px-2 py-1 text-center">N.A.</td>
                  <td className="border px-2 py-1 text-center">N.A.</td>
                  <td className="border px-2 py-1 text-center">N.A.</td>
                  <td className="border px-2 py-1 text-center">N.A.</td>
                </tr>
                <tr className="bg-white">
                  <td className="border px-2 py-1 text-center">3</td>
                  <td className="border px-2 py-1">Kinesiotherapy & Physical Diagnosis</td>
                  <td className="border px-2 py-1">Up to 10</td>
                  <td className="border px-2 py-1 text-center">N.A.</td>
                  <td className="border px-2 py-1 text-center">01*</td>
                  <td className="border px-2 py-1 text-center">01</td>
                  <td className="border px-2 py-1 text-center">02</td>
                </tr>
                {/* ...repeat for all rows as per chart... */}
                <tr className="font-semibold bg-gray-100">
                  <td className="border px-2 py-1" colSpan={2}>TOTAL (Up to 10)</td>
                  <td className="border px-2 py-1">05</td>
                  <td className="border px-2 py-1">01</td>
                  <td className="border px-2 py-1">01</td>
                  <td className="border px-2 py-1">02</td>
                  <td className="border px-2 py-1">04</td>
                </tr>
                {/* ...add other totals as per chart... */}
              </tbody>
            </table>
          </div>
          <div className="text-xs text-gray-700 mb-4">
            <p><span className="font-bold">Note:</span> '*' Required anyone from Electrotherapy & Electro diagnosis or Kinesiotherapy & Physical Diagnosis subjects.</p>
            <p>'**' For Professor Cadre, Any Two out of 4 Clinical Subjects (Sr. No. 4 to 7) will be applicable as per approved Staffing Pattern & Advertisement by the University. (Kindly verify from MUHS Advertisement)</p>
            <p>'#' Sports Physiotherapy: Teaching Staff Shall be available with those Colleges who are conducting Sports Physiotherapy Course.</p>
          </div>
          <p className="text-gray-800 mb-2 text-xs">
            For official teaching staff chart, please refer to the PDF available on the <Link href="/muhsMandate" className="text-[#2D6CDF] underline">MUHS Mandate & Annexures</Link> page.
          </p>
        </div>
        <div className="mt-6 text-sm text-gray-600 text-center">
          <p>Date: 31/12/2024</p>
          <p>Verified by The LIC Committee Members</p>
          <p className="font-semibold">Principal, Bhojrajji Bhondekar Physiotherapy College, Sirsi, Bhandara</p>
        </div>
        <Link href="/muhsMandate" className="inline-block px-4 py-2 bg-[#2D6CDF] text-white rounded-lg font-semibold shadow hover:bg-[#1E4FBF] transition-colors mt-6">
          ← Back to MUHS Mandate
        </Link>
      </main>
      <Footer />
    </>
  );
}
