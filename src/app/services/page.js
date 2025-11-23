import { Ambulance, Pill, Stethoscope, Baby, Activity, Microscope, Zap } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
    title: 'Our Services - Maxx Hospital',
    description: 'Comprehensive medical services including 24x7 Emergency, Maternity Care, Pharmacy, and Diagnostics.',
};

export default function Services() {
    return (
        <div className="container section">
            <h1 className={styles.pageTitle}>Our Services</h1>

            <div className={styles.servicesList}>
                <section className={styles.serviceRow}>
                    <div className={styles.serviceContent}>
                        <div className={styles.iconBox}><Stethoscope size={32} /></div>
                        <h2>OPD (Out Patient Department)</h2>
                        <p>Our OPD services are available daily with senior consultants across various specialties. We ensure minimal waiting time and comprehensive consultation for all patients.</p>
                        <ul className={styles.featureList}>
                            <li>General Medicine</li>
                            <li>Pediatrics</li>
                            <li>Gynecology</li>
                            <li>Orthopedics</li>
                        </ul>
                    </div>
                    <div className={styles.serviceImage}>
                        {/* Placeholder */}
                        <div className={styles.placeholder} style={{ background: '#e3f2fd' }}>OPD</div>
                    </div>
                </section>

                <section className={`${styles.serviceRow} ${styles.reverse}`}>
                    <div className={styles.serviceContent}>
                        <div className={styles.iconBox}><Zap size={32} /></div>
                        <h2>Emergency & Trauma 24x7</h2>
                        <p>We are equipped to handle all kinds of medical emergencies 24/7. Our trauma center is staffed with critical care specialists and advanced life support systems.</p>
                        <ul className={styles.featureList}>
                            <li>Accident & Trauma Care</li>
                            <li>Cardiac Emergencies</li>
                            <li>Critical Care Unit</li>
                        </ul>
                    </div>
                    <div className={styles.serviceImage}>
                        <div className={styles.placeholder} style={{ background: '#ffebee' }}>Emergency</div>
                    </div>
                </section>

                <section className={styles.serviceRow}>
                    <div className={styles.serviceContent}>
                        <div className={styles.iconBox}><Baby size={32} /></div>
                        <h2>Maternity & Newborn Care</h2>
                        <p>We provide holistic care for mothers and newborns. From prenatal checkups to safe delivery and postnatal care, we are with you at every step.</p>
                        <ul className={styles.featureList}>
                            <li>Normal & C-Section Delivery</li>
                            <li>High-Risk Pregnancy Care</li>
                            <li>NICU (Newborn Intensive Care)</li>
                            <li>Vaccination</li>
                        </ul>
                    </div>
                    <div className={styles.serviceImage}>
                        <div className={styles.placeholder} style={{ background: '#fce4ec' }}>Maternity</div>
                    </div>
                </section>

                <section className={`${styles.serviceRow} ${styles.reverse}`}>
                    <div className={styles.serviceContent}>
                        <div className={styles.iconBox}><Microscope size={32} /></div>
                        <h2>Diagnostics & Pathology</h2>
                        <p>Our in-house laboratory and diagnostic center provide accurate and timely reports to aid in effective treatment.</p>
                        <ul className={styles.featureList}>
                            <li>Digital X-Ray</li>
                            <li>Ultrasound / Sonography</li>
                            <li>Computerized Lab Tests</li>
                            <li>ECG</li>
                        </ul>
                    </div>
                    <div className={styles.serviceImage}>
                        <div className={styles.placeholder} style={{ background: '#e8f5e9' }}>Diagnostics</div>
                    </div>
                </section>

                <section className={styles.serviceRow}>
                    <div className={styles.serviceContent}>
                        <div className={styles.iconBox}><Pill size={32} /></div>
                        <h2>Pharmacy & Ambulance</h2>
                        <p>We ensure round-the-clock availability of medicines and emergency transport services.</p>
                        <ul className={styles.featureList}>
                            <li>24x7 Pharmacy</li>
                            <li>Home Delivery (Local)</li>
                            <li>AC / Non-AC Ambulance</li>
                        </ul>
                    </div>
                    <div className={styles.serviceImage}>
                        <div className={styles.placeholder} style={{ background: '#fff3e0' }}>Support</div>
                    </div>
                </section>
            </div>
        </div>
    );
}
