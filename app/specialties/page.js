import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Specialties() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Header */}
      <header className="bg-medical-900 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Specialties</h1>
          <p className="text-xl text-medical-100">Expert Care Across Every Specialty.</p>
        </div>
      </header>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Gynecology */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-pink-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center text-2xl">
                  <i className="fa-solid fa-person-breastfeeding"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Gynecology & Obstetrics</h3>
              </div>
              <ul className="space-y-2 text-gray-600 ml-16 list-disc">
                <li>Management of High-Risk Pregnancies</li>
                <li>Infertility Treatment & Family Planning</li>
                <li>Normal & Painless Deliveries</li>
                <li>Cesarean Sections (C-Section)</li>
              </ul>
            </div>

            {/* Pediatrics */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-yellow-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-2xl">
                  <i className="fa-solid fa-baby"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Pediatrics (Child Care)</h3>
              </div>
              <ul className="space-y-2 text-gray-600 ml-16 list-disc">
                <li>Complete Vaccination/Immunization programs</li>
                <li>Newborn Care & Development assessment</li>
                <li>Phototherapy for Jaundice</li>
              </ul>
            </div>

            {/* Surgery */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl">
                  <i className="fa-solid fa-scalpel"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">General & Laparoscopic Surgery</h3>
              </div>
              <ul className="space-y-2 text-gray-600 ml-16 list-disc">
                <li>Minimally Invasive (Keyhole) Surgery</li>
                <li>Treatment for Kidney Stones, Hernia, and Appendix</li>
                <li>Gallbladder Surgery</li>
              </ul>
            </div>

            {/* Cardiology */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-red-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-2xl">
                  <i className="fa-solid fa-heart-pulse"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Cardiology (Heart Care)</h3>
              </div>
              <ul className="space-y-2 text-gray-600 ml-16 list-disc">
                <li>Management of Heart Attacks and Chest Pain</li>
                <li>Hypertension (High Blood Pressure) treatment</li>
                <li>ECG & Cardiac monitoring</li>
              </ul>
            </div>

            {/* General Medicine */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-green-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl">
                  <i className="fa-solid fa-stethoscope"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">General Medicine</h3>
              </div>
              <ul className="space-y-2 text-gray-600 ml-16 list-disc">
                <li>Diabetes Management & Thyroid disorders</li>
                <li>Treatment of Infectious Diseases (Dengue, Malaria, Typhoid)</li>
                <li>Respiratory & Stomach ailments</li>
              </ul>
            </div>

            {/* Orthopedics */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-orange-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-2xl">
                  <i className="fa-solid fa-bone"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Orthopedics</h3>
              </div>
              <ul className="space-y-2 text-gray-600 ml-16 list-disc">
                <li>Trauma & Fracture Care</li>
                <li>Joint Pain & Arthritis Management</li>
                <li>Bone Health clinics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
