import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function DeclarationPage() {
	return (
		<>
			<Header />
			<main className="max-w-2xl mx-auto py-10 px-4">
				<h1 className="text-2xl font-bold mb-6 text-[#2D6CDF] text-center">Annexure XIV – Declaration</h1>
						<div className="rounded-xl bg-white shadow-md overflow-hidden p-6 mb-6 flex justify-center">
							<iframe
								src="/pdfs/annexure-14-declaration.pdf"
								title="Declaration - Physiotherapy Faculty Annexure XIV PDF"
								width="100%"
								height="700px"
								className="rounded"
							/>
						</div>
						<p className="mt-2 text-center text-sm text-gray-600">Declaration document for Physiotherapy Faculty (PDF)</p>
				{/* Back link for navigation consistency */}
				<a href="/muhsMandate" className="inline-block px-4 py-2 bg-[#2D6CDF] text-white rounded-lg font-semibold shadow hover:bg-[#1E4FBF] transition-colors mt-4">
					← Back to MUHS Mandate
				</a>
			</main>
			<Footer />
		</>
	);
}
