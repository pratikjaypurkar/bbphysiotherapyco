import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Image from "next/image";

export default function BPTHPage() {
  return (<><Header/> 
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-4 text-[#2D6CDF]">BPTH Seat Matrix 2025-2026</h1>
      <p className="mb-6 text-neutral-700">
        <strong>College:</strong> Bhojrajji Bhondekar Physiotherapy College, Bhandara<br />
        <strong>University:</strong> Maharashtra University of Health Sciences, Nashik
      </p>
      <div className="mb-8">
        <table className="w-full border border-gray-300 rounded-lg overflow-hidden text-sm">
          <thead className="bg-blue-50">
            <tr>
              <th className="border px-3 py-2">Degree</th>
              <th className="border px-3 py-2">Intake as per University/Council</th>
              <th className="border px-3 py-2">Max. Seats Permitted by MUHS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2 font-semibold">UG Degree (B.P.Th. / BPT)</td>
              <td className="border px-3 py-2">100</td>
              <td className="border px-3 py-2">100</td>
            </tr>
            <tr>
              <td className="border px-3 py-2 font-semibold">PG Degree</td>
              <td className="border px-3 py-2">Not Applicable</td>
              <td className="border px-3 py-2">Not Applicable</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">PG Specializations</h2>
        <table className="w-full border border-gray-300 rounded-lg overflow-hidden text-sm">
          <thead className="bg-blue-50">
            <tr>
              <th className="border px-3 py-2">Specialization</th>
              <th className="border px-3 py-2">Intake</th>
              <th className="border px-3 py-2">Max. Seats Permitted</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">Musculoskeletal Physiotherapy</td>
              <td className="border px-3 py-2">Not Applicable</td>
              <td className="border px-3 py-2">Not Applicable</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Neuro Physiotherapy</td>
              <td className="border px-3 py-2">Not Applicable</td>
              <td className="border px-3 py-2">Not Applicable</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Community Physiotherapy</td>
              <td className="border px-3 py-2">Not Applicable</td>
              <td className="border px-3 py-2">Not Applicable</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Cardiovascular & Respiratory Physiotherapy</td>
              <td className="border px-3 py-2">Not Applicable</td>
              <td className="border px-3 py-2">Not Applicable</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Sports Physiotherapy</td>
              <td className="border px-3 py-2">Not Applicable</td>
              <td className="border px-3 py-2">Not Applicable</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Official Document</h2>
        <Image
          src="/seat-matrix-2025-2026.jpg"
          alt="BPTH Seat Matrix Document"
          width={556}
          height={646}
          className="rounded-lg border shadow"
        />
      </div> */}
      <div className="text-xs text-neutral-500">
        Verified by The LIC Committee Members.<br />
        Principal: Bhojrajji Bhondekar Physiotherapy College, Sirsi, Bhandara.
      </div>
    </main>
    <Footer/></>
  );
}