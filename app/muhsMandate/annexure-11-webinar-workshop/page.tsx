// ...existing code...
'use client';

const activities = [
	{
		sr: 1,
		title: 'WORKSHOP-Ethics workshop',
		description:
			'Bhojrajji Bhondekar Physiotherapy College organized a workshop on Ethics for medical professionals on the date 22nd of January 2025. Medical professionals of physiotherapy college, allied health sciences and physiotherapy department attended the workshop on ethical alliance.',
	},
	{
		sr: 2,
		title: '21/12/2024 Workshop',
		description:
			'Bhojrajji Bhondekar Physiotherapy College and bhojrajji Bhondekar ayurvedic Mahavidyalay hosted yoga Program. The session focused on teaching practical techniques to manage stress and anxiety through mindfulness and relaxation practices. Students and faculty were engaged in guided meditation and therapeutic yoga exercises.',
	},
];

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function WebinarWorkshopPage() {
	return (
		<>
			<Header />
			<main className="max-w-2xl mx-auto py-10 px-4">
				<h1 className="text-2xl font-bold mb-6 text-[#2D6CDF] text-center">
					Annexure XI – Webinar / Workshop / CME / Activities (2024-2025)
				</h1>
				<h2 className="text-lg font-semibold mb-2 text-center">
					Bhojrajji Bhondekar Physiotherapy College, Bhandara
				</h2>
				<div className="rounded-xl bg-white shadow-md overflow-hidden p-6 mb-6">
					<div className="overflow-x-auto mb-4">
						<table className="min-w-full text-sm text-gray-800 border border-gray-200 rounded-lg mb-4">
							<thead className="bg-gray-100">
								<tr>
									<th className="border px-3 py-2">Sr No</th>
									<th className="border px-3 py-2">Webinar / Workshop / CME / Any other Academic Activities</th>
								</tr>
							</thead>
							<tbody>
								{activities.map((row) => (
									<tr key={row.sr} className="align-top bg-white">
										<td className="border px-3 py-2 text-center font-semibold">{row.sr}</td>
										<td className="border px-3 py-2">
											<span className="font-bold block mb-1">{row.title}</span>
											<span className="block text-gray-700">{row.description}</span>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div className="mt-2 text-sm text-gray-700 text-center">
						<p className="font-semibold">Verified by The LIC Committee Members</p>
						<p className="mt-1 text-xs text-gray-500">Dean/Principal Stamp & Signature</p>
						<p className="mt-1 text-xs text-purple-700 font-bold">Principal Bhojrajji Bhondekar Physiotherapy College, Sirsi, Bhandara</p>
					</div>
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