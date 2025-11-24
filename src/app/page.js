import Link from 'next/link';
import { Calendar, Users, Activity, CheckCircle } from 'lucide-react';
import Hero from '@/components/Hero';
import styles from './page.module.css';
import siteConfig from '@/data/site-config.json';

export default function Home() {
    return (
        <div>
            <Hero />

            {/* Quick Actions */}
            <section className={styles.quickActions}>
                <div className="container">
                    <div className={styles.actionGrid}>
                        <Link href="/appointment" className={styles.actionCard}>
                            <Calendar size={32} className={styles.actionIcon} />
                            <h3>Book Appointment</h3>
                            <p>Schedule a visit with our specialists.</p>
                        </Link>
                        <Link href="/doctors" className={styles.actionCard}>
                            <Users size={32} className={styles.actionIcon} />
                            <h3>View Doctors</h3>
                            <p>Meet our expert medical team.</p>
                        </Link>
                        <Link href="/departments" className={styles.actionCard}>
                            <Activity size={32} className={styles.actionIcon} />
                            <h3>Departments</h3>
                            <p>Explore our specialized services.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section">
                <div className="container">
                    <h2 className={styles.sectionTitle}>Why Choose Maxx Hospital?</h2>
                    <div className={styles.featuresGrid}>
                        {siteConfig.why_choose_us.map((point, index) => (
                            <div key={index} className={styles.featureItem}>
                                <CheckCircle size={24} className={styles.featureIcon} />
                                <span>{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founders Message */}
            <section className={`section ${styles.foundersSection}`}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Words from our Founders</h2>
                    <div className={styles.foundersGrid}>
                        {siteConfig.founders.map((founder, index) => (
                            <div key={index} className={styles.founderCard}>
                                <div className={styles.founderContent}>
                                    <p className={styles.founderQuote}>"{founder.short_message}"</p>
                                    <div className={styles.founderInfo}>
                                        <h4>{founder.name}</h4>
                                        <span>{founder.degrees}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '30px' }}>
                        <Link href="/about" className="btn btn-secondary">Read Full Story</Link>
                    </div>
                </div>
            </section>
            {/* Featured Testimonials Carousel */}
            <section className="section" style={{ background: 'linear-gradient(to bottom, #f0f8ff, #ffffff)' }}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Featured Patient Experiences</h2>

                    <div className={styles.carouselContainer}>
                        <div className={styles.carouselTrack}>
                            {require('@/data/testimonials.json')
                                .filter(t => t.featured)
                                .map((testimonial) => (
                                    <div key={testimonial.id} className={styles.carouselCard}>
                                        <div className={styles.testimonialHeader}>
                                            <div className={styles.testimonialAvatar}>
                                                {testimonial.initials}
                                            </div>
                                            <div>
                                                <h4>{testimonial.name}</h4>
                                                <span className={styles.testimonialDept}>{testimonial.department}</span>
                                            </div>
                                        </div>
                                        <p className={styles.testimonialQuote}>"{testimonial.story.substring(0, 150)}..."</p>
                                        <div className={styles.testimonialRating}>
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} style={{ color: i < testimonial.rating ? '#ffc107' : '#ddd' }}>★</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '40px' }}>
                        <Link href="/testimonials" className="btn btn-primary">Read More Stories →</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
