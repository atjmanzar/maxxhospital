import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Appointment() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Header */}
      <header className="bg-medical-900 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Book Your Consultation</h1>
          <p className="text-xl text-medical-100">Your Health Can't Wait.</p>
        </div>
      </header>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-8 rounded-2xl shadow-sm mb-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Book</h2>
            <p className="text-gray-600 mb-8">Schedule an appointment with our specialists easily. Whether you need a routine checkup or a specialist consultation, we are here to help.</p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a href="tel:+916391004302" className="flex items-center justify-center gap-3 bg-medical-600 text-white py-4 px-8 rounded-xl font-bold hover:bg-medical-700 transition shadow-lg">
                <i className="fa-solid fa-phone"></i>
                Call 6391004302
              </a>
              <a href="tel:+916391004304" className="flex items-center justify-center gap-3 bg-medical-600 text-white py-4 px-8 rounded-xl font-bold hover:bg-medical-700 transition shadow-lg">
                <i className="fa-solid fa-phone"></i>
                Call 6391004304
              </a>
            </div>
            
            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg inline-block">
              <p className="text-yellow-800 font-medium"><i className="fa-solid fa-triangle-exclamation mr-2"></i>Emergency cases are attended to immediately without prior appointment.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-medical-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <i className="fa-solid fa-person-walking text-medical-500"></i> Walk-In Registration
              </h3>
              <p className="text-gray-600">Visit our reception desk for instant registration. Our staff will guide you to the appropriate department.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-medical-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <i className="fa-solid fa-clipboard-list text-medical-500"></i> What to Bring
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-green-500 mt-1"></i> Valid ID Proof (Aadhar Card / Voter ID)</li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-green-500 mt-1"></i> Previous Medical Reports & Prescriptions</li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-green-500 mt-1"></i> Health Insurance Card (if availing cashless facility)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
