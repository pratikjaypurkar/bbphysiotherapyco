"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function Annexure4LibraryPage() {
	return (
		<>
			<Header />
			<main className="max-w-2xl mx-auto py-10 px-4">
				<h1 className="text-2xl font-bold mb-6 text-[#2D6CDF]">Annexure IV – Library</h1>
				<div className="rounded-xl bg-white shadow-md overflow-hidden p-6 mb-6">
					<p className="text-gray-800 mb-4">
						<span className="font-semibold">Maharashtra University of Health Sciences, Nashik</span><br />
						<span className="font-semibold">Physiotherapy Faculty</span><br />
						Inspection Committee Report for Academic Year 2025-2026<br />
						<br />
						<span className="font-semibold">Details of Library</span><br />
						Faculty: Physiotherapy<br />
						Name of College/Institute: Bhojrajji Bhondekar Physiotherapy College, Bhandara
					</p>
					<div className="overflow-x-auto mb-4">
						<table className="min-w-full text-sm text-gray-800 border border-gray-200 rounded-lg mb-4">
							<thead className="bg-gray-100">
								<tr>
									<th className="px-3 py-2 border">#</th>
									<th className="px-3 py-2 border">Particulars</th>
									<th className="px-3 py-2 border">Details</th>
								</tr>
							</thead>
							<tbody>
								<tr className="bg-white">
									<td className="px-3 py-2 border">1</td>
									<td className="px-3 py-2 border">Total Books</td>
									<td className="px-3 py-2 border">344</td>
								</tr>
								<tr className="bg-gray-50">
									<td className="px-3 py-2 border">2</td>
									<td className="px-3 py-2 border">Last year purchase</td>
									<td className="px-3 py-2 border">142</td>
								</tr>
								<tr className="bg-white">
									<td className="px-3 py-2 border">3</td>
									<td className="px-3 py-2 border">Invoice & payment details</td>
									<td className="px-3 py-2 border">Attached</td>
								</tr>
								<tr className="bg-gray-50">
									<td className="px-3 py-2 border">4</td>
									<td className="px-3 py-2 border">List of Journal subscribed year</td>
									<td className="px-3 py-2 border">List Attached</td>
								</tr>
							</tbody>
						</table>
					</div>
					<p className="text-gray-800 mb-2">
						For official documents and attached lists, please refer to the PDF available on the <Link href="/muhsMandate" className="text-[#2D6CDF] underline">MUHS Mandate & Annexures</Link> page.
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
