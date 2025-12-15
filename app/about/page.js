import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Header */}
      <header className="bg-medical-900 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-medical-100">A Legacy of Compassion, A Future of Health.</p>
        </div>
      </header>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Welcome to Maxx Hospital & Maternity Centre, a beacon of hope and healing in Mau, Uttar Pradesh. Founded with a steadfast commitment to "Effective Medical Treatment," we have grown from a humble clinic into a premier multi-speciality healthcare institution. Our journey is defined by a passion for patient care, where every life matters, and every recovery is a victory. We believe in treating not just the ailment, but the person, with dignity, respect, and empathy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-medical-50 p-8 rounded-2xl border-l-4 border-medical-500">
              <h3 className="text-xl font-bold text-medical-900 mb-3">Our Mission</h3>
              <p className="text-gray-700">To provide accessible, affordable, and advanced medical care to every citizen of Mau and its surrounding regions. We strive to bridge the gap between quality healthcare and affordability.</p>
            </div>
            <div className="bg-medical-50 p-8 rounded-2xl border-l-4 border-medical-500">
              <h3 className="text-xl font-bold text-medical-900 mb-3">Our Vision</h3>
              <p className="text-gray-700">To be the most trusted healthcare partner in the region, recognized for our clinical excellence, ethical practices, and state-of-the-art infrastructure.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                <div>
                  <strong className="block text-gray-900">Multi-Speciality Excellence</strong>
                  <span className="text-gray-600">From complex surgeries to routine checkups, we offer a wide spectrum of medical services under one roof.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                <div>
                  <strong className="block text-gray-900">Patient-Centric Approach</strong>
                  <span className="text-gray-600">Your health and comfort are our top priorities. We treat every patient like family.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
