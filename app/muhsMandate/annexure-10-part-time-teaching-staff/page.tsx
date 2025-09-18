// ...existing code...
'use client';

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const partTimeFaculty = [
	{ sr: 1, name: 'Dr. Vaibhav Anjankar', subject: 'Human Anatomy', post: 'Asst. Professor' },
	{ sr: 2, name: 'Dr. Swapnil Bhirange', subject: 'Human Physiology', post: 'Asst. Professor' },
	{ sr: 3, name: 'Dr. Hitendra Khandekar', subject: 'Pathology', post: 'Asst. Professor' },
	{ sr: 4, name: 'Dr. Ankush Zode', subject: 'Pathology', post: 'Asst. Professor' },
	{ sr: 5, name: 'Dr. Hema Mathurkar', subject: 'Microbiology', post: 'Asst. Professor' },
	{ sr: 6, name: 'Dr. Akshay Dahiwale', subject: 'Pharmacology', post: 'Asst. Professor' },
];

export default function PartTimeTeachingStaff() {
	return (<><Header/>
		<main className="max-w-2xl mx-auto py-10 px-4">
			<h1 className="text-2xl font-bold mb-6 text-[#2D6CDF] text-center">
				Annexure X – Part Time / Guest Faculty (2025-2026)
			</h1>
			<h2 className="text-lg font-semibold mb-2 text-center">
				Bhojrajji Bhondekar Physiotherapy College, Bhandara
			</h2>
			<div className="rounded-xl bg-white shadow-md overflow-hidden p-6 mb-6">
				<div className="overflow-x-auto mb-4">
					<table className="min-w-full text-sm text-gray-800 border border-gray-200 rounded-lg mb-4">
						<thead className="bg-gray-100">
							<tr>
								<th className="border px-3 py-2">Sr. No.</th>
								<th className="border px-3 py-2">Name of the Teachers</th>
								<th className="border px-3 py-2">Subject</th>
								<th className="border px-3 py-2">Post</th>
							</tr>
						</thead>
						<tbody>
							{partTimeFaculty.map((row) => (
								<tr key={row.sr} className="text-center bg-white">
									<td className="border px-3 py-2">{row.sr}</td>
									<td className="border px-3 py-2 font-semibold">{row.name}</td>
									<td className="border px-3 py-2">{row.subject}</td>
									<td className="border px-3 py-2">{row.post}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className="mt-2 text-sm text-gray-700 text-center">
					<p>
						(Human Anatomy, Human Physiology, Biochemistry, Pathology, Microbiology,
						Pharmacology, Psychiatry including Psychology, Surgery-I, Surgery-II,
						Medicine-I, Medicine-II, Community Medicine &amp; Sociology, Obstetrics
						&amp; Gynecology, Dermatology, etc.... subjects Teachers)
					</p>
					<p className="mt-2 font-semibold">
						Verified by The LIC Committee Members
					</p>
					<p className="mt-1 text-xs text-gray-500">
						Signature of Dean / Principal with Seal
					</p>
					<p className="mt-1 text-xs text-purple-700 font-bold">
						Principal Bhojrajji Bhondekar Physiotherapy College, Sirsi, Bhandara
					</p>
				</div>
			</div>
			{/* Back link for navigation consistency */}
			<a href="/muhsMandate" className="inline-block px-4 py-2 bg-[#2D6CDF] text-white rounded-lg font-semibold shadow hover:bg-[#1E4FBF] transition-colors">
				← Back to MUHS Mandate
			</a>
		</main>
        <Footer/></>
	);
}
// ...existing code...