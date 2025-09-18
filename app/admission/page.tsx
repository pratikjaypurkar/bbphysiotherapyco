import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Metadata } from "next"
export const metadata: Metadata = {
  title: "Admission | Bhojrajji Bhondekar Physiotherapy College",
  description: "Admission details, documents required, fee proposal, and conduct & discipline for BBPC."
}

export default function AdmissionPage() {
  return (<>
  <Header/>
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Admission 2025-26</h1>

      <section className="mb-8 bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">List of Documents Required</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>10th & 12th Marksheet and Passing Certificate (Original + 2 sets of photocopies)</li>
          <li>Transfer Certificate (TC) / Leaving Certificate</li>
          <li>Migration Certificate (if applicable)</li>
          <li>Nationality Certificate / Domicile Certificate</li>
          <li>Caste Certificate (if applicable)</li>
          <li>Income Certificate (for scholarship applicants)</li>
          <li>Medical Fitness Certificate</li>
          <li>Passport size photographs (6 copies)</li>
          <li>Aadhar Card copy</li>
          <li>Any other document as per MUHS/Government norms</li>
        </ul>
      </section>

      <section className="mb-8 bg-blue-50 rounded-xl shadow p-6 border border-blue-200">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">Fee Proposal</h2>
        <p className="mb-2 text-gray-700">
          <strong>For Govt./AIQ Seats:</strong> ₹1,00,000 per year (Total ₹4,00,000 for 4 years)
        </p>
        <p className="mb-2 text-gray-700">
          <strong>For IQ Institutional Quota:</strong> ₹3,00,000 per year (Total ₹12,00,000 for 4 years)
        </p>
        <p className="mb-2 text-gray-700">
          <strong>Other Fees:</strong> Hostel, Mess, Curriculum Kit, Sports & Extra Curricular Activity Fees (as applicable)
        </p>
        <p className="text-gray-700">
          <strong>Payment Mode:</strong> DD/NEFT/RTGS only. Cash payments are not accepted.
        </p>
      </section>

      <section className="mb-8 bg-green-50 rounded-xl shadow p-6 border border-green-200">
        <h2 className="text-xl font-semibold text-green-700 mb-4">Conduct & Discipline</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Students must follow all college rules and regulations.</li>
          <li>Ragging is strictly prohibited as per government and MUHS guidelines.</li>
          <li>Attendance is mandatory as per university norms.</li>
          <li>Any act of indiscipline may lead to suspension or expulsion.</li>
          <li>Respect faculty, staff, and fellow students at all times.</li>
        </ul>
      </section>

      <section className="mb-8 bg-purple-50 rounded-xl shadow p-6 border border-purple-200">
        <h2 className="text-xl font-semibold text-purple-700 mb-4">Contact for Admission</h2>
        <div className="text-gray-700 space-y-1">
          <div><span className="font-bold">Phone:</span> +91-8263043290</div>
          <div><span className="font-bold">Email:</span> info@bbphysiotherapycollege.in</div>
          <div><span className="font-bold">Address:</span> Market Road, Bhandara, Maharashtra, India</div>
        </div>
      </section>

      <p className="mt-8 text-center text-gray-500">
        For more details, visit the college office or contact us.
      </p>
    </div>
    <Footer/></>
  )
}