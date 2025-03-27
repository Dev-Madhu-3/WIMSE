import './index.css'
import { useState } from 'react';

const UserInputForm = () => {


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        date: '',
        message: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Request Information</h2>
            <form onSubmit={handleSubmit} className="request-form">
                <div className="form-group">
                    <label>Enter Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Course Name</label>
                    <input
                        type="text"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Reservation Date</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Enter Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        required
                    ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                    Submit Request
                </button>
            </form>
        </div>
    )
}

export default UserInputForm