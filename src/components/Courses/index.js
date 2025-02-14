import React, {useState}from 'react'
import './index.css'

const Courses = () => {
  const CoursesList = [
    {
      title: "BACHELOR'S DEGREE COURSES",
      items: [
        'Architecture Studies',
        'Business Studies',
        'Computer Science',
        'Electrical',
        'Electronics',
        'Administration Studies',
        'Food and Beverage'
      ]
    },
    {
      title: "MASTER'S DEGREE COURSES",
      items: [
        'Master In Arts',
        'Master In Commerce',
        'Master in Science',
        'Business Administration'
      ]
    },
    {
      title: "DIPLOMA COURSES",
      items: [
        'Mechanical Engineering',
        'Civil Engineering',
        'Chemical Engineering',
        'Information Technology',
        'Programming',
        'Hardware',
        'Networking',
        'Cyber Security'
      ]
    },
    {
      title: "HOTEL MANAGEMENT",
      items: [
        'Hospitality Management',
        'Culinary Arts',
        'Tourism Management',
        'Event Management'
      ]
    }
  ]


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
    <div className="institute-courses-container">
      <div className="institue-intro">
        <div>
            <h1 className='institute-title'>WELCOME TO WIMSE EDUCATION</h1>
            <h2 className='institute-sub-title'>WITS INSTITUTE OF MANAGEMENT & SCIENCE</h2>
            <p className="institute-description">
              WIMSE, short for Wits Institute of Management & Science, believes that the best way to help students pursue
              education is by providing a flexible curriculum. We provide diploma courses for Degree Courses in Delhi NCR,
              M.Com, B.A, BTech, and B.Sc. Our online courses can be pursued from anywhere in the world. We offer
              premium quality education for all.
            </p>
        </div>
        <div className='institute-courses'>
            {CoursesList.map((category, index) => (
             <div className="each-course-item" key={index}>
                <img className='each-course-item-img' src='' />

                <div>
                  <h3 className='each-course-item-text-con-h3'>{category.title}</h3>
                  <p className='each-course-item-text-con-p'>
                    {category.items.reduce((acc, curr) => acc +", "+ curr)}
                  </p>
                </div>
             </div>
             ))}
        </div>
      </div>

      <div className="course-grid">
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
      </div>
    </div>
  );
};

export default Courses;