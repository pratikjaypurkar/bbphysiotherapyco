"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useState } from "react";

const annexures = [
  { title: "Annexure I – Seat Matrix", page: "/muhsMandate/annexure-1-seat-matrix" },
  { title: "Annexure II – Infrastructure", page: "/muhsMandate/annexure-2-infrastructure" },
  { title: "Annexure III – Trust Dead", page: "/muhsMandate/annexure-3-trust-dead" },
  { title: "Annexure IV – Library", page: "/muhsMandate/annexure-4-library" },
  { title: "Annexure V – Clinical Material Hospital", page: "/muhsMandate/annexure-5-clinical-material-hospital" },
  { title: "Annexure VI – Equipments and Instruments", page: "/muhsMandate/annexure-6-equipments-instruments" },
  { title: "Annexure VII – Chart of Teaching Staff", page: "/muhsMandate/annexure-7-chart-teaching-staff" },
  { title: "Annexure VIII – Subjectwise Approved & Not Approved Teaching Staff", page: "/muhsMandate/annexure-8-subjectwise-approved-not-approved-teaching-staff" },
  { title: "Annexure IX – Non-Teaching Staff", page: "/muhsMandate/annexure-9-non-teaching-staff" },
  { title: "Annexure X – Part Time Teaching Staff", page: "/muhsMandate/annexure-10-part-time-teaching-staff" },
  { title: "Annexure XI – Webinar / Workshop", page: "/muhsMandate/annexure-11-webinar-workshop" },
  { title: "Annexure XII – MUHS Mandate", page: "/muhsMandate/annexure-12-muhs-mandate" },
  { title: "Annexure XIII – AISHE certificate", page: "/muhsMandate/annexure-13-aishe-certificate" },
  { title: "Annexure XIV – Declaration", page: "/muhsMandate/annexure-14-declaration" },
];

export default function MUHSMandatePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold mb-6 text-[#2D6CDF]">MUHS Mandate & Annexures</h1>
        <div className="rounded-xl bg-white shadow-md overflow-hidden">
          {annexures.map((annexure, idx) => (
            <div key={idx} className="border-b last:border-b-0 border-gray-200">
              <a
                href={annexure.page}
                className="block w-full text-left px-6 py-4 font-semibold text-base text-gray-800 transition-colors hover:bg-gray-100"
              >
                {annexure.title}
              </a>
            </div>
          ))}
        </div>
        <div className="mt-8 mb-6 text-neutral-700">
          For more details, visit the official MUHS website:{" "}
          <a
            href="https://www.muhs.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2D6CDF] underline"
          >
            www.muhs.ac.in
          </a>
        </div>
        <div className="text-xs text-neutral-500 mb-4">
          Reference: <a href="https://bbphysiotherapycollege.in/muhsmandate.html" target="_blank" rel="noopener noreferrer" className="underline">bbphysiotherapycollege.in/muhsmandate.html</a>
        </div>
      </main>
      <Footer />
    </>
  );
}