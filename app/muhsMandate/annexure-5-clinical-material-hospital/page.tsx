import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function ClinicalMaterialHospitalPage() {
  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold mb-6 text-[#2D6CDF]">Annexure V – Clinical Material & Hospital</h1>
        <div className="rounded-xl bg-white shadow-md overflow-hidden p-6 mb-6">
          <h2 className="text-xl font-semibold mb-1 text-center text-gray-800">Maharashtra University of Health Sciences, Nashik</h2>
          <h3 className="text-lg font-medium mb-4 text-center text-gray-800">Physiotherapy Faculty Inspection Report for Academic Year 2025 - 2026</h3>
          <div className="mb-4 text-center text-gray-800">
            <p><span className="font-semibold">College/Institute:</span> Bhojrajji Bhondekar Physiotherapy College, Bhandara</p>
            <p><span className="font-semibold">Parent/Attached Hospital:</span> PES Hospital & Research Center, Bhandara</p>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold mb-1 text-gray-800">Clinical Material in Hospital</h4>
            <ul className="list-disc pl-5 text-gray-800">
              <li>Parent/attached hospital with minimum <span className="font-bold">500 beds</span> (Available: <span className="font-bold">No. 1 Multi-Speciality Hospital</span>).</li>
              <li>Student to patient ratio minimum <span className="font-bold">1:5</span> (Available).</li>
            </ul>
          </div>
          <div className="mb-6">
            <h4 className="font-semibold mb-2 text-gray-800">Student Patient Ratio (as per M.S.R.):</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-gray-800 border border-gray-200 rounded-lg mb-4">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-2 py-1">Specialty</th>
                    <th className="border px-2 py-1">10 to 30 Intake</th>
                    <th className="border px-2 py-1">31 to 40 Intake</th>
                    <th className="border px-2 py-1">41 to 50 Intake</th>
                    <th className="border px-2 py-1">51 to 60 Intake</th>
                    <th className="border px-2 py-1">61 to 100 Intake</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["General Medicine", 30, 40, 50, 60, 100],
                    ["General Surgery", 30, 40, 50, 60, 100],
                    ["Orthopedics", 30, 50, 50, 60, 100],
                    ["Obst & Gynac", 15, 20, 30, 30, 60],
                    ["Pediatrics", 15, 20, 30, 30, 60],
                    ["Medical ICU", 5, 5, 10, 10, 15],
                    ["Surgical ICU", 5, 5, 10, 10, 15],
                    ["PICU + NICU", 5, 5, 5, 10, 15],
                    ["ICCU + RICU", 5, 5, 5, 10, 15],
                    ["Burns Unit / ICU", 5, 5, 5, 10, 10],
                    ["Emergency", 5, 5, 5, 10, 10],
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      {row.map((cell, i) => (
                        <td key={i} className="border px-2 py-1 text-center">{cell}</td>
                      ))}
                    </tr>
                  ))}
                  <tr className="font-semibold bg-gray-100">
                    <td className="border px-2 py-1">Total</td>
                    <td className="border px-2 py-1">150</td>
                    <td className="border px-2 py-1">200</td>
                    <td className="border px-2 py-1">250</td>
                    <td className="border px-2 py-1">300</td>
                    <td className="border px-2 py-1">500</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-gray-800">Student : Bed Ratio (Undergraduate): <span className="font-bold">1:5</span></p>
            <p className="text-gray-800">Average Bed Occupancy in %: <span className="font-bold">80-82%</span></p>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold mb-1 text-gray-800">Registration & OPD Details</h4>
            <ul className="list-disc pl-5 text-gray-800">
              <li>Registration room available at OPD: <span className="font-bold">Yes</span></li>
              <li>Total patients registered in last year: <span className="font-bold">22154</span></li>
              <li>New patients registered daily (avg): <span className="font-bold">22</span></li>
              <li>Old patients registered daily (avg): <span className="font-bold">68</span></li>
              <li>Current year OPD attendance: <span className="font-bold">22154</span></li>
              <li>Records of patient registration are well maintained: <span className="font-bold">Yes</span></li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold mb-1 text-gray-800">Infrastructure & Department Areas</h4>
            <ul className="list-disc pl-5 text-gray-800">
              <li>Indoor Physiotherapy Department Areas: <span className="font-bold">Available</span></li>
              <li>Outdoor Physiotherapy Department Areas: <span className="font-bold">Available</span></li>
              <li>Functional physiotherapy department providing outpatient & inpatient services for at least 12 months: <span className="font-bold">Available</span></li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold mb-1 text-gray-800">Certificate of Registration</h4>
            <p className="text-gray-800">This is to certify that Bhondekar Sanskrutik Krida & Samajik Shikshan Sanstha BHANDARA has been registered under the Bombay Nursing Homes registration act, 1949 in respect of PES Hospital and Research Centre, situated at Bank Colony, Sahakar Nagar, Near Balaji Mandir, Bhandara and has been authorized to carry on the said Nursing Home & Maternity Home.</p>
            <ul className="list-disc pl-5 text-gray-800">
              <li>Date of Registration: <span className="font-bold">15/05/2014</span></li>
              <li>Date of Renewal: <span className="font-bold">1/04/2023</span></li>
              <li>Date of issue: <span className="font-bold">3rd April 2023</span></li>
              <li>Valid up to: <span className="font-bold">31st March 2026</span></li>
              <li>Total Beds: <span className="font-bold">No. 1 Multi-Speciality Hospital</span> (370 Old + 235 New)</li>
            </ul>
            <p className="mt-2 text-gray-800">General Hospital Bhandara</p>
          </div>
          <p className="text-gray-800 mb-2">
            For official documents and certificates, please refer to the PDF available on the <Link href="/muhsMandate" className="text-[#2D6CDF] underline">MUHS Mandate & Annexures</Link> page.
          </p>
        </div>
        <div className="mt-6 text-sm text-gray-600 text-center">
          <p>As per Central Council/University Norms, above infrastructure must be available at College.</p>
          <p>If infrastructure is available, mark "Adequate" & do not attach documents. If "Inadequate", mark as such with evidence.</p>
          <p>Verified by The LIC Committee Members</p>
          <p className="font-semibold">Principal, Bhojrajji Bhondekar Physiotherapy College</p>
        </div>
        <Link href="/muhsMandate" className="inline-block px-4 py-2 bg-[#2D6CDF] text-white rounded-lg font-semibold shadow hover:bg-[#1E4FBF] transition-colors mt-6">
          ← Back to MUHS Mandate
        </Link>
      </main>
      <Footer />
    </>
  );
}
