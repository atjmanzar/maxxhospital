import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Facilities() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Header */}
      <header className="bg-medical-900 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Facilities</h1>
          <p className="text-xl text-medical-100">World-Class Infrastructure for Critical Care.</p>
        </div>
      </header>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
            At Maxx Hospital, we are equipped with cutting-edge technology and modern infrastructure to handle medical emergencies and complex procedures with precision.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Emergency */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-2xl mb-4">
                <i className="fa-solid fa-truck-medical"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24x7 Emergency</h3>
              <p className="text-gray-600">Dedicated emergency wing ready to handle trauma, poisoning, road accidents, and acute crises round the clock.</p>
            </div>

            {/* ICU/NICU */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-blue-500">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl mb-4">
                <i className="fa-solid fa-bed-pulse"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Critical Care (ICU/NICU)</h3>
              <p className="text-gray-600">Advanced ICU for adults, Level-3 NICU for newborns, and PICU for specialized pediatric care.</p>
            </div>

            {/* Diagnostics */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-purple-500">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-2xl mb-4">
                <i className="fa-solid fa-microscope"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Diagnostics</h3>
              <p className="text-gray-600">4D/3D Ultrasound, Color Doppler, Digital X-Ray, and fully automated Pathology Labs.</p>
            </div>

            {/* OT */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl mb-4">
                <i className="fa-solid fa-user-doctor"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Modular OT</h3>
              <p className="text-gray-600">Ultra-clean, sterile environment equipped with modern surgical technology for infection-free surgeries.</p>
            </div>

            {/* Pharmacy */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-yellow-500">
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-2xl mb-4">
                <i className="fa-solid fa-pills"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">In-house Pharmacy</h3>
              <p className="text-gray-600">Fully stocked pharmacy with genuine medicines available 24/7 for patient convenience.</p>
            </div>

            {/* Ambulance */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-orange-500">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-2xl mb-4">
                <i className="fa-solid fa-ambulance"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ambulance Service</h3>
              <p className="text-gray-600">Rapid response ambulance fleet available for emergency patient transport.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
