import Link from 'next/link';
import { Phone, Star } from 'lucide-react';
import styles from './Hero.module.css';
import siteConfig from '@/data/site-config.json';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <div className={styles.rating}>
                        <Star size={16} fill="#ffc107" stroke="#ffc107" />
                        <span>{siteConfig.rating} Google Rated Hospital</span>
                    </div>
                    <h1 className={styles.title}>{siteConfig.name}</h1>
                    <p className={styles.subtitle}>Trusted Healthcare in Mau. Dedicated to providing compassionate care and advanced medical treatment.</p>

                    <div className={styles.actions}>
                        <a href={`tel:${siteConfig.phone}`} className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Phone size={18} />
                            Call {siteConfig.phone}
                        </a>
                        <Link href="/appointment" className="btn btn-secondary">
                            Book Appointment
                        </Link>
                    </div>
                </div>
                <div className={styles.image}>
                    {/* Placeholder for Hero Image - using a gradient or pattern if no image */}
                    <div className={styles.placeholderImage}>
                        <div className={styles.pulse}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
