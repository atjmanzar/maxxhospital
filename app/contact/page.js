import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Header */}
      <header className="bg-medical-900 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-medical-100">Have questions? Need emergency assistance? Reach out to us anytime.</p>
        </div>
      </header>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 mb-16">
            {/* Contact Info */}
            <div className="md:w-1/2 space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-medical-500">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">SS Tower, 371/B, Bypass Road,<br />Mirzahadi Pura, Mau, Uttar Pradesh.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-medical-500">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600 text-lg font-medium">
                  <a href="tel:+916391004302" className="hover:text-medical-600">+91 6391004302</a><br />
                  <a href="tel:+916391004304" className="hover:text-medical-600">+91 6391004304</a>
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-medical-500">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600"><a href="mailto:maxxhospitalmau@gmail.com" className="hover:text-medical-600">maxxhospitalmau@gmail.com</a></p>
              </div>
            </div>

            {/* Map */}
            <div className="md:w-1/2 h-96 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.698063852835!2d83.5600!3d25.9500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDU3JzAwLjAiTiA4M8KwMzMnMzYuMCJF!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy">
              </iframe>
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-lg text-gray-900 mb-2">Do you have an ambulance service?</h4>
                <p className="text-gray-600">Yes, we provide 24/7 ambulance services for emergency patient transport.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-lg text-gray-900 mb-2">Is the pharmacy open 24/7?</h4>
                <p className="text-gray-600">Yes, our in-house pharmacy is open round-the-clock to ensure access to medicines at any time.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-lg text-gray-900 mb-2">Do you accept health insurance?</h4>
                <p className="text-gray-600">Yes, we accept major health insurance plans and government schemes like Ayushman Bharat. Please check with our billing desk for specific details.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
