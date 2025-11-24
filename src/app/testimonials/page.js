'use client';

import { useState } from 'react';
import styles from './page.module.css';
import testimonialsData from '@/data/testimonials.json';
import { Star, CheckCircle, PlayCircle, X } from 'lucide-react';

export default function TestimonialsPage() {
    const [filter, setFilter] = useState('All');
    const [selectedVideo, setSelectedVideo] = useState(null);

    const departments = ['All', ...new Set(testimonialsData.map(t => t.department))];

    const filteredTestimonials = filter === 'All'
        ? testimonialsData
        : testimonialsData.filter(t => t.department === filter);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Patient Stories & Testimonials</h1>
                <p className={styles.subtitle}>
                    Real stories from our patients about their journey to recovery at Maxx Hospital.
                    We are proud to have touched so many lives.
                </p>
            </header>

            <div className={styles.filters}>
                {departments.map(dept => (
                    <button
                        key={dept}
                        className={`${styles.filterBtn} ${filter === dept ? styles.active : ''}`}
                        onClick={() => setFilter(dept)}
                    >
                        {dept}
                    </button>
                ))}
            </div>

            <div className={styles.grid}>
                {filteredTestimonials.map((testimonial, index) => (
                    <div
                        key={testimonial.id}
                        className={styles.card}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className={styles.quoteIcon}>"</div>

                        <div className={styles.cardHeader}>
                            <div className={styles.avatar}>
                                {testimonial.photo ? (
                                    <img src={testimonial.photo} alt={testimonial.name} />
                                ) : (
                                    <span>{testimonial.initials}</span>
                                )}
                            </div>
                            <div className={styles.meta}>
                                <h3>{testimonial.name}</h3>
                                <span className={styles.department}>{testimonial.department}</span>
                            </div>
                        </div>

                        <div className={styles.rating}>
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={18}
                                    fill={i < testimonial.rating ? "#ffc107" : "none"}
                                    stroke={i < testimonial.rating ? "#ffc107" : "#ddd"}
                                />
                            ))}
                        </div>

                        <p className={styles.story}>"{testimonial.story}"</p>

                        {testimonial.videoUrl && (
                            <button
                                className={styles.videoBtn}
                                onClick={() => setSelectedVideo(testimonial.videoUrl)}
                            >
                                <PlayCircle size={16} /> Watch Story
                            </button>
                        )}

                        <div className={styles.footer}>
                            <span>{new Date(testimonial.date).toLocaleDateString()}</span>
                            <span className={styles.verified}>
                                <CheckCircle size={14} /> Verified
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Video Modal */}
            {selectedVideo && (
                <div className={styles.modalOverlay} onClick={() => setSelectedVideo(null)}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeModal} onClick={() => setSelectedVideo(null)}>
                            <X size={30} />
                        </button>
                        <iframe
                            width="100%"
                            height="100%"
                            src={selectedVideo}
                            title="Patient Testimonial"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
}
