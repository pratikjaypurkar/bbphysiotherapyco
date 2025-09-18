"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function Annexure3TrustDeadPage() {
	return (
		<>
			<Header />
			<main className="max-w-2xl mx-auto py-10 px-4">
				<h1 className="text-2xl font-bold mb-6 text-[#2D6CDF]">Annexure III – Trust Deed / Registration Certificate</h1>
				<div className="rounded-xl bg-white shadow-md overflow-hidden p-6 mb-6">
					<p className="text-gray-800 mb-4">
						<span className="font-semibold">Maharashtra University of Health Sciences, Nashik</span><br />
						<span className="font-semibold">Physiotherapy Faculty</span><br />
						Trust Deed / Bylaws / Registration Certificate<br />
						Registration Certificate (Trust / Hospital (Bombay Nursing Act))<br />
						<br />
						<span className="font-semibold">Name of College/Institute:</span> Bhojrajji Bhondekar Physiotherapy College, Bhandara
					</p>
									<p className="text-gray-800 mb-4">
										Bhondekar Shikshan Sanstha Established in 2002. Under Bhojrajji Bhondekar Physiotherapy College (Established in 2024).
									</p>
					<div className="overflow-x-auto mb-4">
						<table className="min-w-full text-sm text-gray-800 border border-gray-200 rounded-lg mb-4">
							<tbody>
								<tr className="bg-white">
									<td className="px-3 py-2 border font-semibold">Name of Trust / Society</td>
									<td className="px-3 py-2 border">Bhondekar Sanskrutik Krida Va Samajik Shikshan Sanstha, Bhandara</td>
								</tr>
								<tr className="bg-gray-50">
									<td className="px-3 py-2 border font-semibold">Registration Certificate</td>
									<td className="px-3 py-2 border">Trust / Society: 101/2002 (Bhandara)<br />Hospital (Bombay Nursing Act): DHB/BNHA/019/14</td>
								</tr>
								<tr className="bg-white">
									<td className="px-3 py-2 border font-semibold">Name of the College / Institute</td>
									<td className="px-3 py-2 border">Bhojrajji Bhondekar Physiotherapy College, Bhandara</td>
								</tr>
								<tr className="bg-gray-50">
									<td className="px-3 py-2 border font-semibold">Address</td>
									<td className="px-3 py-2 border">At. Post Mouja Sirsi, Tal & Dist. Bhandara</td>
								</tr>
								<tr className="bg-white">
									<td className="px-3 py-2 border font-semibold">Email ID</td>
									<td className="px-3 py-2 border">bbphysiotherapycollege@gmail.com</td>
								</tr>
								<tr className="bg-gray-50">
									<td className="px-3 py-2 border font-semibold">Telephone / Mobile No.(s)</td>
									<td className="px-3 py-2 border">08263043290</td>
								</tr>
								<tr className="bg-white">
									<td className="px-3 py-2 border font-semibold">Website</td>
									<td className="px-3 py-2 border">www.bbphysiotherapycollege.in</td>
								</tr>
								<tr className="bg-gray-50">
									<td className="px-3 py-2 border font-semibold">College Code</td>
									<td className="px-3 py-2 border">CET Code: 06296 | MUHS Code: 165118</td>
								</tr>
							</tbody>
						</table>
					</div>
					<p className="text-gray-800 mb-4">
						<span className="font-semibold">Registration Certificates:</span>
					</p>
					<ul className="list-disc pl-6 text-gray-800 mb-4">
						<li>Trust / Society Registration: 101/2002 (Bhandara)</li>
						<li>Hospital Registration (Bombay Nursing Act): DHB/BNHA/019/14</li>
					</ul>
					<p className="text-gray-800 mb-2">
						For official scanned certificates, please refer to the PDF available on the <Link href="/muhsMandate" className="text-[#2D6CDF] underline">MUHS Mandate & Annexures</Link> page.
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
