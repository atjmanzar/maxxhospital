import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import siteConfig from '@/data/site-config.json';
import { Phone } from 'lucide-react';

export const metadata = {
    title: 'Maxx Hospital & Maternity Centre - Mau',
    description: 'Trusted Healthcare in Mau — 4.7★ Google Rated Hospital. Maternity Care, Emergency Services, OPD, Pediatric care and Diagnostics.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Roboto:wght@500;700&display=swap" rel="stylesheet" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Hospital",
                            "name": "Maxx Hospital & Maternity Centre",
                            "image": "https://maxxhospital.com/logo.png",
                            "telephone": siteConfig.phone,
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": siteConfig.address,
                                "addressLocality": "Mau",
                                "addressRegion": "Uttar Pradesh",
                                "postalCode": "275101",
                                "addressCountry": "IN"
                            },
                            "rating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.7",
                                "reviewCount": "120"
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
                            }
                        })
                    }}
                />
            </head>
            <body>
                <Header />
                <main style={{ minHeight: '80vh' }}>
                    {children}
                </main>
                <Footer />

                {/* Mobile Sticky Call Button */}
                <a href={`tel:${siteConfig.phone}`} className="mobile-call-btn">
                    <Phone size={24} />
                </a>
            </body>
        </html>
    );
}
