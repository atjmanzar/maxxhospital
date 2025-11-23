import Link from 'next/link';
import * as Icons from 'lucide-react';
import styles from './page.module.css';
import services from '@/data/services.json';

export const metadata = {
    title: 'Departments - Maxx Hospital',
    description: 'Explore our specialized medical departments including General Medicine, Maternity, Pediatrics, and more.',
};

export default function Departments() {
    return (
        <div className="container section">
            <h1 className={styles.pageTitle}>Our Departments</h1>
            <p className={styles.intro}>We offer a wide range of specialized medical departments to cater to all your healthcare needs.</p>

            <div className={styles.grid}>
                {services.map((dept) => {
                    const IconComponent = Icons[dept.icon] || Icons.Activity;
                    return (
                        <div key={dept.id} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <IconComponent size={40} strokeWidth={1.5} />
                            </div>
                            <h3>{dept.title}</h3>
                            <p>{dept.description}</p>
                            <Link href="/services" className={styles.link}>Learn More &rarr;</Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
