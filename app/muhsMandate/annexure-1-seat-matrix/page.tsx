"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function Annexure1SeatMatrixPage() {
		return (
			<>
				<Header />
						<main className="max-w-2xl mx-auto py-10 px-4">
							<h1 className="text-2xl font-bold mb-6 text-[#2D6CDF]">Annexure I – Seat Matrix</h1>
							<div className="rounded-xl bg-white shadow-md overflow-hidden p-6 mb-6">
								<p className="text-gray-800 mb-4">
									<span className="font-semibold">Maharashtra University of Health Sciences, Nashik</span><br />
									<span className="font-semibold">Physiotherapy Faculty</span><br />
									Information of Subject-wise Intake as per College &amp; University Recognition, Permitted<br />
									<span className="font-semibold">Seat-Matrix Chart Academic Year 2025 - 2026</span><br />
									<br />
									<span className="font-semibold">Name of College:</span> Bhojrajji Bhondekar Physiotherapy College, Bhandara
								</p>
								<div className="overflow-x-auto mb-4">
									<table className="min-w-full text-sm text-gray-800 border border-gray-200 rounded-lg">
										<thead className="bg-gray-100">
											<tr>
												<th className="px-3 py-2 border">UG Degree/PG Degree</th>
												<th className="px-3 py-2 border">Intake as per University /Council</th>
												<th className="px-3 py-2 border">Max. Seats Permitted by MUHS as per Teacher: Student Ratio (1:3)</th>
											</tr>
										</thead>
										<tbody>
											<tr className="bg-white">
												<td className="px-3 py-2 border font-semibold">UG Degree (B.P.Th. /BPT)</td>
												<td className="px-3 py-2 border">100</td>
												<td className="px-3 py-2 border">100</td>
											</tr>
											<tr className="bg-gray-50">
												<td className="px-3 py-2 border font-semibold">PG Degree</td>
												<td className="px-3 py-2 border">Not Applicable</td>
												<td className="px-3 py-2 border">Not Applicable</td>
											</tr>
											<tr className="bg-white">
												<td className="px-3 py-2 border">Musculoskeletal Physiotherapy</td>
												<td className="px-3 py-2 border">Not Applicable</td>
												<td className="px-3 py-2 border">Not Applicable</td>
											</tr>
											<tr className="bg-gray-50">
												<td className="px-3 py-2 border">Neuro physiotherapy</td>
												<td className="px-3 py-2 border">Not Applicable</td>
												<td className="px-3 py-2 border">Not Applicable</td>
											</tr>
											<tr className="bg-white">
												<td className="px-3 py-2 border">Community Physiotherapy</td>
												<td className="px-3 py-2 border">Not Applicable</td>
												<td className="px-3 py-2 border">Not Applicable</td>
											</tr>
											<tr className="bg-gray-50">
												<td className="px-3 py-2 border">Cardiovascular &amp; Respiratory Physiotherapy</td>
												<td className="px-3 py-2 border">Not Applicable</td>
												<td className="px-3 py-2 border">Not Applicable</td>
											</tr>
											<tr className="bg-white">
												<td className="px-3 py-2 border">Sports Physiotherapy</td>
												<td className="px-3 py-2 border">Not Applicable</td>
												<td className="px-3 py-2 border">Not Applicable</td>
											</tr>
										</tbody>
									</table>
								</div>
								<p className="text-gray-800 mb-2">
									For the official seat matrix document, please refer to the PDF available on the <Link href="/muhsMandate" className="text-[#2D6CDF] underline">MUHS Mandate & Annexures</Link> page.
								</p>
							</div>
							<Link href="/muhsMandate" className="inline-block px-4 py-2 bg-[#2D6CDF] text-white rounded-lg font-semibold shadow hover:bg-[#1E4FBF] transition-colors">
								← Back to MUHS Mandate
							</Link>
				</main>
				<Footer />
			</>
		);
}
