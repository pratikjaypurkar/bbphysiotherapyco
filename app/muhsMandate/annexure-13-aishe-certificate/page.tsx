// ...existing code...
'use client';

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function AisheCertificateDetails() {
  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold mb-6 text-[#2D6CDF] text-center">Annexure XIII – AISHE Certificate Details (2025-2026)</h1>
        <h2 className="text-lg font-semibold mb-2 text-center">Bhojrajji Bhondekar Physiotherapy College, Bhandara</h2>
        <div className="rounded-xl bg-white shadow-md overflow-hidden p-6 mb-6 max-w-xl mx-auto">
          <div className="mb-2 flex justify-between">
            <span className="font-semibold">College / Institute Code of AISHE:</span>
            <span>Applied</span>
          </div>
          <div className="mb-2 flex justify-between">
            <span className="font-semibold">Certificate Date with reference No.:</span>
            <span>Pending</span>
          </div>
          <div className="mb-2">
            <span className="font-semibold">Certificate details to be verified on the College web site</span>
          </div>
        </div>
        <div className="mt-2 text-sm text-gray-700 text-center">
          <p className="font-semibold">Verified by The LIC Committee Members</p>
          <p className="mt-1 text-xs text-gray-500">Dean/Principal Stamp & Signature</p>
          <p className="mt-1 text-xs text-purple-700 font-bold">Principal Bhojrajji Bhondekar Physiotherapy College, Sirsi, Bhandara</p>
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