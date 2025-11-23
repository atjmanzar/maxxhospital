import Link from 'next/link';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import styles from './Footer.module.css';
import siteConfig from '@/data/site-config.json';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.column}>
                    <h3>Maxx Hospital</h3>
                    <p>Trusted Healthcare in Mau. We are committed to providing compassionate and quality medical services.</p>
                    <div className={styles.contactItem}>
                        <MapPin size={18} />
                        <span>{siteConfig.address}</span>
                    </div>
                    <div className={styles.contactItem}>
                        <Phone size={18} />
                        <span>{siteConfig.phone}</span>
                    </div>
                    <div className={styles.contactItem}>
                        <Mail size={18} />
                        <span>{siteConfig.email}</span>
                    </div>
                </div>

                <div className={styles.column}>
                    <h3>Quick Links</h3>
                    <ul className={styles.links}>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/doctors">Our Doctors</Link></li>
                        <li><Link href="/departments">Departments</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/appointment">Book Appointment</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Opening Hours</h3>
                    <div className={styles.contactItem}>
                        <Clock size={18} />
                        <span>Emergency: 24x7</span>
                    </div>
                    <div className={styles.contactItem}>
                        <Clock size={18} />
                        <span>OPD: 10:00 AM - 8:00 PM</span>
                    </div>
                    <div className={styles.contactItem}>
                        <Clock size={18} />
                        <span>Pharmacy: 24x7</span>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>&copy; {new Date().getFullYear()} Maxx Hospital & Maternity Centre. All rights reserved.</p>
            </div>
        </footer>
    );
}
