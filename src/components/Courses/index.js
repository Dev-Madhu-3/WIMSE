import React from 'react';
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
  ];

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
                <img src='' />
                <div>
                  <h3>{category.title}</h3>
                  <p>
                    {category.items.reduce((acc, curr) => acc +", "+ curr)}
                  </p>
                </div>
             
             </div>
             ))}
        </div>
      </div>

      <div className="course-grid">
        
      </div>
    </div>
  );
};

export default Courses;