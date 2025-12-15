import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <header className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 z-0">
          <img src="/hero_update.jpg" alt="Maxx Hospital Building" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-medical-900/80 to-medical-800/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-4 border border-white/30">
            24/7 Emergency & Maternity Care
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-md">
            Trusted Healthcare <br /> in <span className="text-medical-100">Mau</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto drop-shadow">
            The leading Multi-Speciality Hospital on Bypass Road, serving families from Mirzahadi Pura, Azamgarh, and Ballia with 24/7 Emergency Care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+916391004302" className="w-full sm:w-auto bg-white text-medical-700 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl shadow-xl transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
              Call Reception
            </a>
            <Link href="/appointment" className="w-full sm:w-auto bg-medical-600 hover:bg-medical-500 text-white font-bold py-4 px-8 rounded-xl shadow-xl transition transform hover:-translate-y-1 flex items-center justify-center gap-2 border border-medical-500">
              Book Appointment
            </Link>
          </div>
        </div>
      </header>

      {/* Promotional Banner */}
      <div className="w-full bg-white py-8">
        <div className="container mx-auto px-4">
          <img src="/banner_new.jpg" alt="Maxx Hospital Emergency & Doctors" className="w-full h-auto rounded-xl shadow-lg object-contain mx-auto max-w-6xl" />
        </div>
      </div>

      {/* Quick Links Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/specialties" className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border-t-4 border-medical-500 group block">
              <div className="w-16 h-16 bg-medical-100 text-medical-600 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-medical-600 group-hover:text-white transition">
                <i className="fa-solid fa-stethoscope"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Specialties</h4>
              <p className="text-gray-600">Explore our wide range of medical specialties including Gynecology, Pediatrics, and Surgery.</p>
            </Link>
            <Link href="/doctors" className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border-t-4 border-medical-500 group block">
              <div className="w-16 h-16 bg-medical-100 text-medical-600 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-medical-600 group-hover:text-white transition">
                <i className="fa-solid fa-user-doctor"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Our Doctors</h4>
              <p className="text-gray-600">Meet our team of experienced specialists dedicated to your health and well-being.</p>
            </Link>
            <Link href="/facilities" className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border-t-4 border-medical-500 group block">
              <div className="w-16 h-16 bg-medical-100 text-medical-600 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-medical-600 group-hover:text-white transition">
                <i className="fa-solid fa-hospital"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Facilities</h4>
              <p className="text-gray-600">Discover our state-of-the-art infrastructure, 24/7 emergency care, and advanced diagnostics.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 justify-between">
            <div className="md:w-1/3">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-medical-500 rounded flex items-center justify-center text-white">
                  <i className="fa-solid fa-hospital"></i>
                </div>
                <h2 className="text-2xl font-bold">Maxx Hospital</h2>
              </div>
              <p className="text-gray-400">A Legacy of Compassion, A Future of Health.</p>
            </div>
            <div className="md:w-1/3">
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/doctors" className="hover:text-white transition">Doctors</Link></li>
                <li><Link href="/appointment" className="hover:text-white transition">Book Appointment</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
              </ul>
            </div>
            <div className="md:w-1/3">
              <h3 className="text-xl font-bold mb-6">Contact</h3>
              <p className="text-gray-400 mb-2"><i className="fa-solid fa-location-dot mr-2"></i> SS Tower, 371/B, Bypass Road, Mau</p>
              <p className="text-gray-400 mb-2"><i className="fa-solid fa-phone mr-2"></i> +91 6391004302</p>
              <p className="text-gray-400"><i className="fa-solid fa-envelope mr-2"></i> maxxhospitalmau@gmail.com</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2024 Maxx Hospital & Maternity Centre. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Call Button */}
      <a href="tel:+916391004302" className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-2xl md:hidden animate-bounce">
        <i className="fa-solid fa-phone"></i>
      </a>
    </main>
  );
}
