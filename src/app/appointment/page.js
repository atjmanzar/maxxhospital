import AppointmentForm from '@/components/AppointmentForm';
import styles from './page.module.css';

export const metadata = {
    title: 'Book Appointment - Maxx Hospital',
    description: 'Schedule an appointment with our expert doctors online.',
};

export default function Appointment() {
    return (
        <div className="container section">
            <h1 className={styles.pageTitle}>Book an Appointment</h1>
            <p className={styles.intro}>Fill out the form below to schedule your visit. We will confirm your appointment via email.</p>

            <AppointmentForm />
        </div>
    );
}
