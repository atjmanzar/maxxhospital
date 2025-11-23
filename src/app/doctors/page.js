import { Clock } from 'lucide-react';
import styles from './page.module.css';
import doctors from '@/data/doctors.json';

export const metadata = {
    title: 'Our Doctors - Maxx Hospital',
    description: 'Meet our expert team of doctors and specialists at Maxx Hospital.',
};

export default function Doctors() {
    return (
        <div className="container section">
            <h1 className={styles.pageTitle}>Our Doctors</h1>
            <p className={styles.intro}>Meet our dedicated team of specialists committed to your health and well-being.</p>

            <div className={styles.grid}>
                {doctors.map((doctor) => (
                    <div key={doctor.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <div className={styles.placeholder}>{doctor.name.charAt(0)}</div>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.name}>{doctor.name}</h3>
                            <span className={styles.degrees}>{doctor.degrees}</span>
                            <span className={styles.specialization}>{doctor.specialization}</span>
                            {doctor.designation && <span className={styles.designation}>{doctor.designation}</span>}

                            <div className={styles.timing}>
                                <Clock size={16} />
                                <span>{doctor.opd_timing}</span>
                            </div>

                            <p className={styles.bio}>{doctor.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
