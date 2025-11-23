import Image from 'next/image';
import styles from './page.module.css';
import siteConfig from '@/data/site-config.json';

export const metadata = {
    title: 'About Us - Maxx Hospital',
    description: 'Learn about Maxx Hospital, our vision, mission, and the dedicated founders serving Mau.',
};

export default function About() {
    return (
        <div className="container section">
            <h1 className={styles.pageTitle}>About Maxx Hospital</h1>

            <div className={styles.storySection}>
                <div className={styles.storyContent}>
                    <h2>Our Story</h2>
                    <p>
                        Maxx Hospital & Maternity Centre was established with a singular goal: to bring world-class healthcare to the heart of Mau.
                        Recognizing the need for specialized medical services in the region, our founders embarked on a journey to create a facility
                        where patients are treated with dignity, compassion, and the best medical expertise.
                    </p>
                    <p>
                        Over the years, we have grown into a trusted institution, known for our excellence in Maternity Care, General Medicine,
                        and Emergency Services. We are proud to serve our community and are committed to continuous improvement.
                    </p>
                </div>
                <div className={styles.visionMission}>
                    <div className={styles.card}>
                        <h3>Our Vision</h3>
                        <p>To be the most trusted and leading healthcare provider in the region, known for clinical excellence and patient-centric care.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Our Mission</h3>
                        <p>To provide affordable, accessible, and high-quality medical services to every section of society with a focus on ethical practices.</p>
                    </div>
                </div>
            </div>

            <div className={styles.foundersSection}>
                <h2 className={styles.sectionTitle}>Meet Our Founders</h2>
                <div className={styles.foundersList}>
                    {siteConfig.founders.map((founder, index) => (
                        <div key={index} className={styles.founderCard}>
                            <div className={styles.founderImage}>
                                {/* Placeholder for Founder Image */}
                                <div className={styles.imagePlaceholder}>{founder.name.charAt(0)}</div>
                            </div>
                            <div className={styles.founderDetails}>
                                <h3>{founder.name}</h3>
                                <span className={styles.degrees}>{founder.degrees}</span>
                                <span className={styles.designation}>{founder.designation}</span>
                                <div className={styles.message}>
                                    <p>"{founder.message}"</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
