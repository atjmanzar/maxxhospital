import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Doctors() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Header */}
      <header className="bg-medical-900 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Meet Our Experts</h1>
          <p className="text-xl text-medical-100">Dedicated Specialists Committed to Your Health.</p>
        </div>
      </header>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Dr. Fahmeena Faridi */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition border border-gray-100 flex flex-col items-center text-center">
              <div className="w-32 h-32 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 text-5xl mb-6">
                <i className="fa-solid fa-user-doctor"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Dr. Fahmeena Faridi</h3>
              <p className="text-medical-600 font-medium mb-2">MBBS, MS (Obs & Gynae)</p>
              <p className="text-gray-500 text-sm mb-4">Gynecologist & Obstetrician</p>
              <p className="text-gray-600 text-sm">A compassionate expert in women's health, specializing in high-risk pregnancies, infertility solutions, and complex gynecological surgeries.</p>
            </div>

            {/* Dr. S. Jamal */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition border border-gray-100 flex flex-col items-center text-center">
              <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 text-5xl mb-6">
                <i className="fa-solid fa-user-doctor"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Dr. S. Jamal</h3>
              <p className="text-medical-600 font-medium mb-2">MBBS, MD (Medicine)</p>
              <p className="text-gray-500 text-sm mb-4">Medicine Physician</p>
              <p className="text-gray-600 text-sm">Renowned physician with vast experience in treating chronic ailments, diabetes management, and cardiac care.</p>
            </div>

            {/* Dr. Danish Kamal */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition border border-gray-100 flex flex-col items-center text-center">
              <div className="w-32 h-32 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-500 text-5xl mb-6">
                <i className="fa-solid fa-baby"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Dr. Danish Kamal</h3>
              <p className="text-medical-600 font-medium mb-2">MBBS, DCH</p>
              <p className="text-gray-500 text-sm mb-4">Pediatrician / Child Specialist</p>
              <p className="text-gray-600 text-sm">Dedicated to the health and well-being of children, offering expert care from newborn stages to adolescence.</p>
            </div>

            {/* Dr. Kaleem Javed */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition border border-gray-100 flex flex-col items-center text-center">
              <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center text-green-500 text-5xl mb-6">
                <i className="fa-solid fa-stethoscope"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Dr. Kaleem Javed</h3>
              <p className="text-medical-600 font-medium mb-2">MBBS, MD</p>
              <p className="text-gray-500 text-sm mb-4">Diabetes & General Physician</p>
              <p className="text-gray-600 text-sm">Specialist in lifestyle disease management, focusing on diabetes control and general health wellness.</p>
            </div>

            {/* Dr. M. Krishna Prasad */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition border border-gray-100 flex flex-col items-center text-center">
              <div className="w-32 h-32 bg-purple-100 rounded-full flex items-center justify-center text-purple-500 text-5xl mb-6">
                <i className="fa-solid fa-scalpel"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Dr. M. Krishna Prasad</h3>
              <p className="text-medical-600 font-medium mb-2">MBBS, MS, F.MAS</p>
              <p className="text-gray-500 text-sm mb-4">General & Laparoscopic Surgeon</p>
              <p className="text-gray-600 text-sm">Skilled surgeon known for precision in laparoscopic procedures and general surgical interventions.</p>
            </div>

            {/* Dr. Shadab Rauf Ansari */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition border border-gray-100 flex flex-col items-center text-center">
              <div className="w-32 h-32 bg-red-100 rounded-full flex items-center justify-center text-red-500 text-5xl mb-6">
                <i className="fa-solid fa-heart-pulse"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Dr. Shadab Rauf Ansari</h3>
              <p className="text-medical-600 font-medium mb-2">MBBS, MD, DM (Cardiology)</p>
              <p className="text-gray-500 text-sm mb-4">Cardiologist</p>
              <p className="text-gray-600 text-sm">Expert heart specialist dedicated to advanced cardiac care and heart health management.</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
