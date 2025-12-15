import Link from "next/link";

export default function Footer() {
  return (
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
            <p className="text-gray-400 mb-4">A Legacy of Compassion, A Future of Health.</p>
            <p className="text-gray-500 text-sm">Proudly serving patients from Mau, Ghazipur, and surrounding Purvanchal districts. Located near SS Tower, Mau.</p>
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
  );
}
