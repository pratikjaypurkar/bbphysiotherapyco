import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function EquipmentsInstrumentsPage() {
  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold mb-6 text-[#2D6CDF]">Annexure VI – Equipments & Instruments</h1>
        <div className="rounded-xl bg-white shadow-md overflow-hidden p-6 mb-6">
          <h2 className="text-xl font-semibold mb-1 text-center text-gray-800">Details of Equipment and Instruments Required for Physiotherapy Laboratory as per MSR</h2>
          <div className="mb-4 text-center text-gray-800">
            <p><span className="font-semibold">Faculty:</span> Physiotherapy</p>
            <p><span className="font-semibold">Year:</span> 2025-2026</p>
            <p><span className="font-semibold">College:</span> Bhojrajji Bhondekar Physiotherapy College, Bhandara</p>
            <p><span className="font-semibold">CET Code:</span> 06296 | <span className="font-semibold">MUHS Code:</span> 165118</p>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold mb-2 text-gray-800">Equipment's required for laboratories (as per M.S.R.)</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-gray-800 border border-gray-200 rounded-lg mb-4">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-2 py-1">Sr. No.</th>
                    <th className="border px-2 py-1">Particulars to be verified</th>
                    <th className="border px-2 py-1">Actual Available</th>
                    <th className="border px-2 py-1">Lacuna</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border px-2 py-1 text-center">01</td>
                    <td className="border px-2 py-1">
                      <span className="font-semibold">Electrotherapy & Electro diagnosis</span> (as per M.S.R.):<br />
                      Cubicles with Separate Power line (earthed), Hot Pack Unit (Machine), Hot Packs, Cold Pack Unit, Cold Packs, Paraffin Wax Bath (PWB), Open circuit Stimulator, Shortwave Diathermy - 500W, UVR Lamp (Floor Model), Ultrasound Unit, I.R. lamp, Whirlpool Bath (Desirable), Diagnostic Stimulators, TENS Unit, Interferential Current Therapy Unit (IFT), LASER Unit (Therapeutic) (Desirable), Cervical cum lumber traction Units, Wall Mounted Cervical Traction Unit, Contrast Bath, Exam Couch, Two channeled EMG with IP analyzer, Biofeedback /multi stimulator.
                    </td>
                    <td className="border px-2 py-1 text-center">Available & Adequate</td>
                    <td className="border px-2 py-1 text-center">-</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-2 py-1 text-center">02</td>
                    <td className="border px-2 py-1">
                      <span className="font-semibold">Kinesiotherapy</span> (as per M.S.R.):<br />
                      Cubicles, Parallel Bar with Mirror, Wall Bar (In metal Frame), Stair Case (Straight Type – 60CM Wide), Suspension App., Tilt Table (Manual), Ergocycle, Rowing Machine, Exam Couch, Exercise Mat, Dumbells& Springs, Weightcuffsm Wedges, Sand Bags, Medicine Ball, Therabands, Swiss Ball (Physio Balls)55cms, 65cms, 75cms, 85cms., Hand Dynamometer, Hand Evaluation Kit, Delorme’s Boot with weight, Hand Exercise Unit, CPM Unit, Shoulder Wheel, Finger ladder, Skates, Skate Board, Axillary / Elbow Crutches , Walkers, Canes, Gutter Crutch, Wobble Board, Equilibrium Board Paediatric and Adult, Quadriceps Table, Ankle Exerciser, Bed Cycle,Rachet, Wrist Roller / Wrist Exerciser, Therapeutic Folded Wheel Chair, Pelvic Inclinometers, B.P. Apparatus, Goniometer, Hammer, Yoga Mat.
                    </td>
                    <td className="border px-2 py-1 text-center">Available & Adequate</td>
                    <td className="border px-2 py-1 text-center">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-gray-800 mb-2">
            For official equipment and instruments list, please refer to the PDF available on the <Link href="/muhsMandate" className="text-[#2D6CDF] underline">MUHS Mandate & Annexures</Link> page.
          </p>
        </div>
        <div className="mt-6 text-sm text-gray-600 text-center">
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
