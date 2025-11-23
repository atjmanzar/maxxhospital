import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import styles from './Header.module.css';
import siteConfig from '@/data/site-config.json';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <div className={styles.logo}>
                    <Link href="/">
                        <h1>Maxx Hospital</h1>
                        <span className={styles.tagline}>& Maternity Centre</span>
                    </Link>
                </div>

                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/doctors">Doctors</Link></li>
                        <li><Link href="/departments">Departments</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/appointment" className="btn btn-primary">Book Appointment</Link></li>
                    </ul>
                </nav>

                <div className={styles.emergency}>
                    <Phone size={20} />
                    <div>
                        <span>Emergency</span>
                        <a href={`tel:${siteConfig.emergency_phone}`}>{siteConfig.emergency_phone}</a>
                    </div>
                </div>
            </div>
        </header>
    );
}
