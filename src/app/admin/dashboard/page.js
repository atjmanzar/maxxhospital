'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Users, Activity, Settings, LogOut, Upload, X, MessageSquare } from 'lucide-react';
import styles from './page.module.css';
import doctorsData from '@/data/doctors.json';
import servicesData from '@/data/services.json';
import testimonialsData from '@/data/testimonials.json';

export default function AdminDashboard() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('doctors');
    const [doctors, setDoctors] = useState(doctorsData);
    const [services, setServices] = useState(servicesData);
    const [testimonials, setTestimonials] = useState(testimonialsData);

    useEffect(() => {
        const auth = localStorage.getItem('adminAuth');
        if (!auth) {
            router.push('/admin');
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('adminAuth');
        router.push('/admin');
    };

    // --- Doctors Management ---
    const [showAddDoctor, setShowAddDoctor] = useState(false);
    const [editingDoctor, setEditingDoctor] = useState(null);

    const [doctorForm, setDoctorForm] = useState({
        name: '',
        specialization: '',
        degrees: '',
        image: ''
    });

    // --- Testimonials Management ---
    const [showAddTestimonial, setShowAddTestimonial] = useState(false);
    const [editingTestimonial, setEditingTestimonial] = useState(null);
    const [testimonialForm, setTestimonialForm] = useState({
        name: '',
        initials: '',
        department: '',
        story: '',
        rating: 5,
        featured: false
    });

    const handleAddTestimonialClick = () => {
        setTestimonialForm({ name: '', initials: '', department: '', story: '', rating: 5, featured: false });
        setEditingTestimonial(null);
        setShowAddTestimonial(true);
    };

    const handleEditTestimonialClick = (testimonial) => {
        setTestimonialForm(testimonial);
        setEditingTestimonial(testimonial.id);
        setShowAddTestimonial(true);
    };

    const handleSaveTestimonial = (e) => {
        e.preventDefault();
        if (editingTestimonial) {
            setTestimonials(testimonials.map(t => t.id === editingTestimonial ? { ...testimonialForm, id: editingTestimonial } : t));
            alert('Testimonial updated successfully (Simulation)');
        } else {
            const id = (testimonials.length + 1).toString();
            const date = new Date().toISOString().split('T')[0];
            setTestimonials([...testimonials, { ...testimonialForm, id, date }]);
            alert('Testimonial added successfully (Simulation)');
        }
        setShowAddTestimonial(false);
        setEditingTestimonial(null);
    };

    const handleDeleteTestimonial = (id) => {
        if (confirm('Are you sure you want to delete this testimonial?')) {
            setTestimonials(testimonials.filter(t => t.id !== id));
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setDoctorForm(prev => ({ ...prev, image: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddClick = () => {
        setDoctorForm({ name: '', specialization: '', degrees: '', image: '' });
        setEditingDoctor(null);
        setShowAddDoctor(true);
    };

    const handleEditClick = (doctor) => {
        setDoctorForm(doctor);
        setEditingDoctor(doctor.id);
        setShowAddDoctor(true);
    };

    const handleSaveDoctor = (e) => {
        e.preventDefault();
        if (editingDoctor) {
            // Update existing
            setDoctors(doctors.map(doc => doc.id === editingDoctor ? { ...doctorForm, id: editingDoctor } : doc));
            alert('Doctor updated successfully (Simulation)');
        } else {
            // Add new
            const id = (doctors.length + 1).toString();
            setDoctors([...doctors, { ...doctorForm, id }]);
            alert('Doctor added successfully (Simulation)');
        }
        setShowAddDoctor(false);
        setEditingDoctor(null);
    };

    const handleDeleteDoctor = (id) => {
        if (confirm('Are you sure you want to delete this doctor?')) {
            setDoctors(doctors.filter(doc => doc.id !== id));
        }
    };

    return (
        <div className={styles.dashboard}>
            <aside className={styles.sidebar}>
                <div className={styles.sidebarHeader}>
                    <h2>Admin Panel</h2>
                </div>
                <nav className={styles.nav}>
                    <button
                        className={`${styles.navItem} ${activeTab === 'doctors' ? styles.active : ''}`}
                        onClick={() => setActiveTab('doctors')}
                    >
                        <Users size={20} /> Doctors
                    </button>
                    <button
                        className={`${styles.navItem} ${activeTab === 'services' ? styles.active : ''}`}
                        onClick={() => setActiveTab('services')}
                    >
                        <Activity size={20} /> Services
                    </button>
                    <button
                        className={`${styles.navItem} ${activeTab === 'testimonials' ? styles.active : ''}`}
                        onClick={() => setActiveTab('testimonials')}
                    >
                        <MessageSquare size={20} /> Testimonials
                    </button>
                    <button
                        className={`${styles.navItem} ${activeTab === 'settings' ? styles.active : ''}`}
                        onClick={() => setActiveTab('settings')}
                    >
                        <Settings size={20} /> Settings
                    </button>
                </nav>
                <div className={styles.sidebarFooter}>
                    <button onClick={handleLogout} className={styles.logoutBtn}>
                        <LogOut size={20} /> Logout
                    </button>
                </div>
            </aside>

            <main className={styles.content}>
                <header className={styles.header}>
                    <h1>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management</h1>
                    {activeTab === 'doctors' && !showAddDoctor && (
                        <button className="btn btn-primary" onClick={handleAddClick}>
                            Add New Doctor
                        </button>
                    )}
                    {activeTab === 'testimonials' && !showAddTestimonial && (
                        <button className="btn btn-primary" onClick={handleAddTestimonialClick}>
                            Add New Testimonial
                        </button>
                    )}
                </header>

                {activeTab === 'doctors' && (
                    <>
                        {showAddDoctor && (
                            <div className={styles.formCard}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                    <h3>{editingDoctor ? 'Edit Doctor' : 'Add New Doctor'}</h3>
                                    <button onClick={() => setShowAddDoctor(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                        <X size={24} />
                                    </button>
                                </div>

                                <form onSubmit={handleSaveDoctor}>
                                    <div className={styles.formGroup}>
                                        <label>Doctor Photo</label>
                                        <div className={styles.imageUpload}>
                                            {doctorForm.image && (
                                                <img src={doctorForm.image} alt="Preview" className={styles.previewImage} />
                                            )}
                                            <label className={styles.uploadBtn}>
                                                <Upload size={16} /> {doctorForm.image ? 'Change Photo' : 'Upload Photo'}
                                                <input type="file" accept="image/*" onChange={handleImageUpload} hidden />
                                            </label>
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={doctorForm.name}
                                            onChange={e => setDoctorForm({ ...doctorForm, name: e.target.value })}
                                            placeholder="Dr. Name"
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Specialization</label>
                                        <input
                                            type="text"
                                            required
                                            value={doctorForm.specialization}
                                            onChange={e => setDoctorForm({ ...doctorForm, specialization: e.target.value })}
                                            placeholder="e.g. Cardiology"
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Degrees</label>
                                        <input
                                            type="text"
                                            required
                                            value={doctorForm.degrees}
                                            onChange={e => setDoctorForm({ ...doctorForm, degrees: e.target.value })}
                                            placeholder="e.g. MBBS, MD"
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        {editingDoctor ? 'Update Doctor' : 'Save Doctor'}
                                    </button>
                                </form>
                            </div>
                        )}

                        {!showAddDoctor && (
                            <div className={styles.tableWrapper}>
                                <table className={styles.table}>
                                    <thead>
                                        <tr>
                                            <th>Photo</th>
                                            <th>Name</th>
                                            <th>Specialization</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {doctors.map(doc => (
                                            <tr key={doc.id}>
                                                <td>
                                                    <div className={styles.avatar}>
                                                        {doc.image ? (
                                                            <img src={doc.image} alt={doc.name} />
                                                        ) : (
                                                            <span>{doc.name.charAt(0)}</span>
                                                        )}
                                                    </div>
                                                </td>
                                                <td>{doc.name}</td>
                                                <td>{doc.specialization}</td>
                                                <td>
                                                    <button className={styles.actionBtn} onClick={() => handleEditClick(doc)}>Edit</button>
                                                    <button className={`${styles.actionBtn} ${styles.delete}`} onClick={() => handleDeleteDoctor(doc.id)}>Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </>
                )}

                {activeTab === 'services' && (
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {services.map(service => (
                                    <tr key={service.id}>
                                        <td>{service.title}</td>
                                        <td>{service.description.substring(0, 50)}...</td>
                                        <td>
                                            <button className={styles.actionBtn}>Edit</button>
                                            <button className={`${styles.actionBtn} ${styles.delete}`}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === 'testimonials' && (
                    <>
                        {showAddTestimonial && (
                            <div className={styles.formCard}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                    <h3>{editingTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}</h3>
                                    <button onClick={() => setShowAddTestimonial(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                        <X size={24} />
                                    </button>
                                </div>
                                <form onSubmit={handleSaveTestimonial}>
                                    <div className={styles.formGroup}>
                                        <label>Patient Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={testimonialForm.name}
                                            onChange={e => setTestimonialForm({ ...testimonialForm, name: e.target.value, initials: e.target.value.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2) })}
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Department</label>
                                        <select
                                            value={testimonialForm.department}
                                            onChange={e => setTestimonialForm({ ...testimonialForm, department: e.target.value })}
                                            required
                                            style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd' }}
                                        >
                                            <option value="">Select Department</option>
                                            <option value="Maternity">Maternity</option>
                                            <option value="Emergency Care">Emergency Care</option>
                                            <option value="Pediatrics">Pediatrics</option>
                                            <option value="General Medicine">General Medicine</option>
                                            <option value="Gynecology">Gynecology</option>
                                            <option value="Orthopedics">Orthopedics</option>
                                        </select>
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Story</label>
                                        <textarea
                                            required
                                            value={testimonialForm.story}
                                            onChange={e => setTestimonialForm({ ...testimonialForm, story: e.target.value })}
                                            placeholder="Share the patient experience..."
                                            rows="4"
                                            style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd' }}
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Rating (1-5)</label>
                                        <input
                                            type="number"
                                            min="1"
                                            max="5"
                                            value={testimonialForm.rating}
                                            onChange={e => setTestimonialForm({ ...testimonialForm, rating: parseInt(e.target.value) })}
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                                            <input
                                                type="checkbox"
                                                checked={testimonialForm.featured}
                                                onChange={e => setTestimonialForm({ ...testimonialForm, featured: e.target.checked })}
                                            />
                                            Feature on Home Page
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        {editingTestimonial ? 'Update Testimonial' : 'Save Testimonial'}
                                    </button>
                                </form>
                            </div>
                        )}

                        {!showAddTestimonial && (
                            <div className={styles.tableWrapper}>
                                <table className={styles.table}>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Department</th>
                                            <th>Rating</th>
                                            <th>Featured</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {testimonials.map(t => (
                                            <tr key={t.id}>
                                                <td>{t.name}</td>
                                                <td>{t.department}</td>
                                                <td>{t.rating} ★</td>
                                                <td>{t.featured ? 'Yes' : 'No'}</td>
                                                <td>
                                                    <button className={styles.actionBtn} onClick={() => handleEditTestimonialClick(t)}>Edit</button>
                                                    <button className={`${styles.actionBtn} ${styles.delete}`} onClick={() => handleDeleteTestimonial(t.id)}>Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </>
                )}

                {activeTab === 'settings' && (
                    <div className={styles.settings}>
                        <div className={styles.formCard}>
                            <h3>General Settings</h3>
                            <div className={styles.formGroup}>
                                <label>Hospital Name</label>
                                <input type="text" defaultValue="Maxx Hospital & Maternity Centre" />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Phone Number</label>
                                <input type="text" defaultValue="063910 04302" />
                            </div>
                            <button className="btn btn-primary">Save Changes</button>
                        </div>

                        <div className={styles.formCard} style={{ marginTop: '20px' }}>
                            <h3>Founders Messages</h3>
                            <p>Edit the messages displayed on the About page.</p>
                            <button className="btn btn-secondary">Edit Founders</button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
