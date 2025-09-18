
'use client';
import Image from 'next/image';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const staffData = [
	{
		photo: '/placeholder-user.jpg',
		name: 'Dr. Rafii Mohammadi',
		designation: 'Principal',
		qualification: 'MPT, PhD',
		experience: '17Y 7M',
		contact: '9989296941',
		email: 'rafii.pt@bbptc.com',
		approved: true,
	},
	{
		photo: '/placeholder-user.jpg',
		name: 'Dr. Pramendra Nayak',
		designation: 'Professor',
		qualification: 'MPT, PhD',
		experience: '33Y 5M',
		contact: '9893234320',
		email: 'nayak.pramendra@bbptc.com',
		approved: true,
	},
	// ...add more staff objects as needed...
];

// ...existing code...
export default function Annexure8TeachingStaff() {
	return (
		<>
			<Header />
			<main className="max-w-2xl mx-auto py-10 px-4">
				<h1 className="text-2xl font-bold mb-6 text-[#2D6CDF] text-center">
					Annexure VIII – Subjectwise Approved/Not Approved Teaching Staff
				</h1>
				<div className="rounded-xl bg-white shadow-md overflow-hidden p-6 mb-6">
					<div className="overflow-x-auto mb-4">
						<table className="min-w-full text-sm text-gray-800 border border-gray-200 rounded-lg mb-4">
							<thead className="bg-gray-100">
								<tr>
									<th className="border px-3 py-2">Photo</th>
									<th className="border px-3 py-2">Name</th>
									<th className="border px-3 py-2">Designation</th>
									<th className="border px-3 py-2">Qualification</th>
									<th className="border px-3 py-2">Experience</th>
									<th className="border px-3 py-2">Contact</th>
									<th className="border px-3 py-2">Email</th>
									<th className="border px-3 py-2">Approved</th>
								</tr>
							</thead>
							<tbody>
								{staffData.map((staff, idx) => (
									<tr key={idx} className="text-center bg-white">
										<td className="border px-3 py-2">
											<Image
												src={staff.photo}
												alt={staff.name}
												width={48}
												height={48}
												className="rounded-full mx-auto"
											/>
										</td>
										<td className="border px-3 py-2 font-semibold">{staff.name}</td>
										<td className="border px-3 py-2">{staff.designation}</td>
										<td className="border px-3 py-2">{staff.qualification}</td>
										<td className="border px-3 py-2">{staff.experience}</td>
										<td className="border px-3 py-2">{staff.contact}</td>
										<td className="border px-3 py-2">{staff.email}</td>
										<td className="border px-3 py-2">
											{staff.approved ? (
												<span className="text-green-600 font-bold">Yes</span>
											) : (
												<span className="text-red-600 font-bold">No</span>
											)}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<p className="mt-2 text-sm text-gray-600 text-center">
						Verified by The LEC Committee Members
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
