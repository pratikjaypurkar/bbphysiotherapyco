import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function ResearchPage() {
  return (<><Header/>
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Research</h1>

      <section className="mb-8 bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">Research Cell</h2>
        <p className="text-gray-700 mb-2">
          The Research Cell at Bhojrajji Bhondekar Physiotherapy College promotes scientific inquiry, innovation, and evidence-based practice among students and faculty. We encourage research activities, workshops, and collaborations with healthcare institutions and universities.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Guidance for student and faculty research projects</li>
          <li>Workshops on research methodology and ethics</li>
          <li>Support for publication in national and international journals</li>
          <li>Collaboration with MUHS and other research bodies</li>
        </ul>
      </section>

      <section className="mb-8 bg-blue-50 rounded-xl shadow p-6 border border-blue-200">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">Projects & Papers</h2>
        <ul className="list-decimal pl-6 text-gray-700 space-y-2">
          <li>
            <span className="font-semibold">Recent Student Projects:</span>
            <ul className="list-disc pl-6 mt-1">
              <li>Effect of Exercise Therapy in Stroke Rehabilitation</li>
              <li>Role of Physiotherapy in Post-Surgical Recovery</li>
              <li>Community-based Physiotherapy Interventions</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Faculty Publications:</span>
            <ul className="list-disc pl-6 mt-1">
              <li>Innovations in Musculoskeletal Physiotherapy</li>
              <li>Cardiorespiratory Physiotherapy: A Review</li>
              <li>Physical Therapy for Geriatric Population</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Research Opportunities:</span>
            <ul className="list-disc pl-6 mt-1">
              <li>Collaborative projects with MUHS and other institutions</li>
              <li>Participation in conferences and seminars</li>
              <li>Grants and scholarships for research work</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-8 bg-green-50 rounded-xl shadow p-6 border border-green-200">
        <h2 className="text-xl font-semibold text-green-700 mb-4">Contact Research Cell</h2>
        <div className="text-gray-700 space-y-1">
          <div><span className="font-bold">Coordinator:</span> Dr. A. Sharma</div>
          <div><span className="font-bold">Email:</span> research@bbphysiotherapycollege.in</div>
          <div><span className="font-bold">Phone:</span> +91-8263043290</div>
        </div>
      </section>

      <p className="mt-8 text-center text-gray-500">
        For more details, visit the Research Cell or contact us.
      </p>
    </div>
    <Footer/></>
  )
}