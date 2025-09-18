import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Download } from "lucide-react";

export default function DigitalLibraryPage() {
  return (<><Header/>
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Digital Library</h1>

      <section className="mb-8 bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">Book Bank</h2>
        <p className="text-gray-700 mb-2">
          Our Book Bank provides students with access to a wide range of physiotherapy textbooks, reference materials, and study guides. Books can be borrowed for the semester and are available for all major subjects.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Latest editions of physiotherapy textbooks</li>
          <li>Reference books for research and assignments</li>
          <li>Easy borrowing and return process</li>
        </ul>
      </section>

      <section className="mb-8 bg-blue-50 rounded-xl shadow p-6 border border-blue-200">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">E-Resources</h2>
        <p className="text-gray-700 mb-2">
          Access a variety of digital resources including e-books, online journals, video lectures, and interactive modules. Students and faculty can use these resources for enhanced learning and research.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Online physiotherapy journals and articles</li>
          <li>Video lectures by expert faculty</li>
          <li>Interactive learning modules and quizzes</li>
          <li>MUHS and Government recommended resources</li>
        </ul>
      </section>

      <section className="mb-8 bg-green-50 rounded-xl shadow p-6 border border-green-200">
        <h2 className="text-xl font-semibold text-green-700 mb-4">Research Journals</h2>
        <p className="text-gray-700 mb-2">
          The Digital Library offers access to national and international research journals in physiotherapy and allied health sciences. Students and faculty can browse, read, and download research papers for academic and clinical advancement.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Indexed journals and publications</li>
          <li>Latest research in physiotherapy</li>
          <li>Support for student and faculty research projects</li>
        </ul>
      </section>

      <section className="mb-8 bg-purple-50 rounded-xl shadow p-6 border border-purple-200">
        <h2 className="text-xl font-semibold text-purple-700 mb-4">Library Support</h2>
        <div className="text-gray-700 space-y-1">
          <div><span className="font-bold">Librarian:</span> Mrs. S. Deshmukh</div>
          <div><span className="font-bold">Email:</span> library@bbphysiotherapycollege.in</div>
          <div><span className="font-bold">Phone:</span> +91-8263043290</div>
        </div>
      </section>

      <p className="mt-8 text-center text-gray-500">
        For more details, visit the Digital Library or contact the librarian.
      </p>
    </div>
    <Footer/></>
  )
}