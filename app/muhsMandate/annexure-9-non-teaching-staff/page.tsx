// ...existing code...

'use client';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const staffRows = [
	{
		category: 'P/A Academic Clerk/Junior Clerk',
		required: 3,
		existing: 3,
		deficiency: 0,
	},
	{
		category: 'Storekeeper',
		required: 2,
		existing: 2,
		deficiency: 0,
	},
	{
		category: 'Registration and Data Entry Operator',
		required: 1,
		existing: 1,
		deficiency: 0,
	},
	{
		category: 'Peon',
		required: 4,
		existing: 4,
		deficiency: 0,
	},
	{
		category: 'Lab Assistant',
		required: 1,
		existing: 1,
		deficiency: 0,
	},
	{
		category: 'Account Clerk',
		required: 2,
		existing: 2,
		deficiency: 0,
	},
	{
		category: 'Librarian',
		required: 1,
		existing: 1,
		deficiency: 0,
	},
	{
		category: 'Sweeper',
		required: 2,
		existing: 2,
		deficiency: 0,
	},
];

export default function NonTeachingStaffTable() {
	return (
		<>
			<Header />
			<main className="max-w-2xl mx-auto py-10 px-4">
				<h1 className="text-2xl font-bold mb-6 text-[#2D6CDF] text-center">
					Annexure IX – Non-Teaching Staff (2025-2026)
				</h1>
				<div className="rounded-xl bg-white shadow-md overflow-hidden p-6 mb-6">
					<div className="overflow-x-auto mb-4">
						<table className="min-w-full text-sm text-gray-800 border border-gray-200 rounded-lg mb-4">
							<thead className="bg-gray-100">
								<tr>
									<th className="border px-3 py-2">Category</th>
									<th className="border px-3 py-2">Required</th>
									<th className="border px-3 py-2">Existing</th>
									<th className="border px-3 py-2">Deficiency</th>
								</tr>
							</thead>
							<tbody>
								{staffRows.map((row, idx) => (
									<tr key={idx} className="text-center bg-white">
										<td className="border px-3 py-2 font-semibold">{row.category}</td>
										<td className="border px-3 py-2">{row.required}</td>
										<td className="border px-3 py-2">{row.existing}</td>
										<td className="border px-3 py-2">{row.deficiency}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<p className="mt-2 text-sm text-gray-600 text-center">
						Verified by The LEC Committee Members
					</p>
					<p className="mt-1 text-xs text-gray-500 text-center">
						Dean/Principal Stamp & Signature
					</p>
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