import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Maxx Hospital & Maternity Centre - Mau, UP",
  description: "Trusted Healthcare in Mau. 24/7 Emergency & Maternity Care.",
  keywords: [
    "Maxx Hospital Mau", "Best Hospital in Mau", "Top Gynecologist Mau", "Child Specialist Mau", 
    "24x7 Emergency Mau", "ICU Hospital Mau", "Laparoscopic Surgery Mau", "Normal Delivery Hospital Mau", 
    "Best Orthopedic Doctor Mau", "Gallbladder Stone Surgery Mau", "Kidney Stone Treatment Mau", 
    "Infertility Specialist Mau", "NICU Mau", "Trauma Centre Mau", "Ultrasound Centre Mau", 
    "Bypass Road Hospital Mau", "Mirzahadi Pura Doctor", "Dr Fahmeena Faridi Mau", "Affordable Hospital Mau", 
    "Ambulance Service Mau", "C-Section Cost Mau", "Best Nursing Home Mau", "Digital X-Ray Mau", 
    "Pathology Lab Mau", "Heart Specialist Mau", "Diabetes Doctor Mau"
  ],
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Maxx Hospital & Maternity Centre",
    "url": "https://www.maxxhospital.in",
    "logo": "https://www.maxxhospital.in/logo.jpg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-6391004302",
      "contactType": "emergency",
      "areaServed": "Mau"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "SS Tower, 371/B, Bypass Road, Mirzahadi Pura",
      "addressLocality": "Mau",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "275101",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.9500",
      "longitude": "83.5600"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/maxxhospitalmau",
      "https://www.instagram.com/maxxhospitalmau"
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
