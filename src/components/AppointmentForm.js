'use client';

import { useState } from 'react';
import styles from './AppointmentForm.module.css';
import doctors from '@/data/doctors.json';

export default function AppointmentForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        doctor: '',
        date: '',
        time: '',
        reason: ''
    });

    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));

            // In a real app, this would call an API route to send emails
            console.log('Appointment Request:', formData);
            console.log('Sending email to admin...');
            console.log('Sending confirmation to patient...');

            setStatus('success');
            setFormData({
                name: '',
                phone: '',
                email: '',
                doctor: '',
                date: '',
                time: '',
                reason: ''
            });
        } catch (error) {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className={styles.successMessage}>
                <h2>Appointment Request Sent!</h2>
                <p>Thank you for booking an appointment. We have sent a confirmation to your email.</p>
                <p>Our team will contact you shortly to confirm the slot.</p>
                <button onClick={() => setStatus('idle')} className="btn btn-primary">Book Another</button>
            </div>
        );
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor="name">Patient Name *</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.row}>
                <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.formGroup}>
                    <label htmlFor="doctor">Select Doctor</label>
                    <select
                        id="doctor"
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleChange}
                    >
                        <option value="">-- Choose a Doctor --</option>
                        {doctors.map(doc => (
                            <option key={doc.id} value={doc.name}>{doc.name} ({doc.specialization})</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.formGroup}>
                    <label htmlFor="date">Preferred Date *</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="time">Preferred Time *</label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="reason">Reason for Visit / Notes</label>
                <textarea
                    id="reason"
                    name="reason"
                    rows="4"
                    value={formData.reason}
                    onChange={handleChange}
                ></textarea>
            </div>

            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending...' : 'Book Appointment'}
            </button>
        </form>
    );
}
