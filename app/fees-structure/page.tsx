import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import Image from "next/image"

export default function FeesStructurePage() {
  return (<><Header/>
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Fees Structure 2025-26
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow-lg border border-gray-200">
          <thead className="bg-gradient-to-r from-blue-600 to-blue-400 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Quota</th>
              <th className="py-3 px-4 text-center">Seats</th>
              <th className="py-3 px-4 text-center">2025-26<br />1 Year</th>
              <th className="py-3 px-4 text-center">2026-27<br />1 Year</th>
              <th className="py-3 px-4 text-center">2027-28<br />1 Year</th>
              <th className="py-3 px-4 text-center">2028-29<br />1 Year</th>
              <th className="py-3 px-4 text-center">Total Fees</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3 px-4 font-semibold">For Govt./AIQ Seats</td>
              <td className="py-3 px-4 text-center">85</td>
              <td className="py-3 px-4 text-center">₹1,00,000</td>
              <td className="py-3 px-4 text-center">₹1,00,000</td>
              <td className="py-3 px-4 text-center">₹1,00,000</td>
              <td className="py-3 px-4 text-center">₹1,00,000</td>
              <td className="py-3 px-4 text-center font-bold text-green-700">
                ₹4,00,000
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-semibold">For IQ Institutional Quota</td>
              <td className="py-3 px-4 text-center">15</td>
              <td className="py-3 px-4 text-center">₹3,00,000</td>
              <td className="py-3 px-4 text-center">₹3,00,000</td>
              <td className="py-3 px-4 text-center">₹3,00,000</td>
              <td className="py-3 px-4 text-center">₹3,00,000</td>
              <td className="py-3 px-4 text-center font-bold text-green-700">
                ₹12,00,000
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8 bg-blue-50 rounded-xl p-6 shadow">
        <h2 className="text-xl font-semibold text-blue-700 mb-2">
          Important Notes
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>All amounts in INR.</li>
          <li>Fees should be paid by DD/NEFT/RTGS only. Cash will not be accepted.</li>
          <li>Fees should be paid yearly according to the academic year.</li>
        </ul>
      </div>

      <div className="mt-8 bg-green-50 rounded-xl p-6 shadow">
        <h2 className="text-xl font-semibold text-green-700 mb-2">Other Fees</h2>
        <ul className="list-decimal pl-6 text-gray-700 space-y-1">
          <li>Hostel</li>
          <li>Mess</li>
          <li>Curriculum Kit</li>
          <li>Sports and Extra Curricular Activity Fees</li>
        </ul>
      </div>

      <div className="mt-8 bg-purple-50 rounded-xl p-6 shadow">
        <h2 className="text-xl font-semibold text-purple-700 mb-2">
          Payment Details
        </h2>
        <div className="text-gray-700 space-y-1">
          <div>
            <span className="font-bold">DD For:</span>{" "}
            BHOJRAJJI BHONDEKAR PHYSIOTHERAPY COLLEGE
          </div>
          <div>
            <span className="font-bold">A/C No.:</span>{" "}
            <span className="text-blue-700 font-mono">50200102064472</span>
          </div>
          <div>
            <span className="font-bold">RTGS/NEFT IFSC:</span>{" "}
            <span className="text-blue-700 font-mono">HDFC0001181</span>
          </div>
          <div>
            <span className="font-bold">Branch:</span> MARKET ROAD BHANDARA
          </div>
        </div>
      </div>

      <p className="mt-8 text-center text-gray-500">
        For more details, contact the college office.
      </p>
    </div>
    <Footer/>
    </>
  )
}