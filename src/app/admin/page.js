'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        // Hardcoded credentials for demo
        if (username === 'admin' && password === 'admin123') {
            // Set a simple auth token in localStorage
            localStorage.setItem('adminAuth', 'true');
            router.push('/admin/dashboard');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <h1>Admin Login</h1>
                {error && <p className={styles.error}>{error}</p>}
                <form onSubmit={handleLogin}>
                    <div className={styles.formGroup}>
                        <label>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            placeholder="admin"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="admin123"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Login</button>
                </form>
            </div>
        </div>
    );
}
