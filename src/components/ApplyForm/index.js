import './index.css'
import { useContext, useState } from 'react'
import emailjs from "@emailjs/browser"
import { MdClose } from "react-icons/md"
import AppContext from '../Context/context'
import { Zoom, Fade } from "react-awesome-reveal"


const ApplyForm = () => {
    const { openedApplyForm, changeApplyFormStatus, courseName } = useContext(AppContext)

    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        course: courseName,
        mode: 'distance'
    })

    const [showErrorMsg, setErrorMsgStatus] = useState(false)

    const onFormChange = (e) => {
        setErrorMsgStatus(false)
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onClose = () => {
        changeApplyFormStatus(!openedApplyForm)
    }

    const sendEmail = (e) => {
        e.preventDefault()
        if (formData.name.trim() && formData.email.trim() && formData.course.trim()) {
            emailjs
                .send(
                    "service_5q5t3da",  // Replace with your EmailJS Service ID
                    "template_b4x1p5g", // Replace with your EmailJS Template ID
                    formData,
                    "GLGmcDsZUpjSjFou5"  // Replace with your EmailJS Public Key
                )
                .then((response) => {
                    alert("Application Sent Successfully");
                    changeApplyFormStatus(!openedApplyForm)
                })
                .catch((error) => {
                    console.error("Error sending email:", error);
                });
        } else {
            setErrorMsgStatus(true)
        }

    }

    return (
        <Fade duration={300} className="apply-form-section">
            {/* <Zoom duration={1000}> */}
                <form noValidate onSubmit={sendEmail} className="apply-form animated-item zoom-in">
                    <MdClose aria-label="Toggle Menu" onClick={onClose} className='apply-form-close-icon' />
                    <h2 className="apply-form-title">{courseName ? "Quick Apply" : "Enqiry Now"}</h2>

                    <div className='apply-form-label-input-container'>
                        <label htmlFor="name" className="apply-form-label">Name</label>
                        <input id="name" name='name' value={formData.name} type="text" onChange={onFormChange} placeholder="Your name" required className="apply-form-input" />
                    </div>

                    <div className='apply-form-label-input-container'>
                        <label htmlFor="mobile" className="apply-form-label">Mobile</label>
                        <input id="mobile" name='mobile' required value={formData.mobile} type="text" onChange={onFormChange} placeholder="Your Mobile Number" className="apply-form-input" />
                    </div>
                    <div className='apply-form-label-input-container'>
                        <label htmlFor="email" className="apply-form-label">Email</label>
                        <input id="email" name='email' value={formData.email} type="email" onChange={onFormChange} placeholder="Your email" required className="apply-form-input" />
                    </div>

                    <div className='apply-form-label-input-container'>
                        <label htmlFor="email" className="apply-form-label">Course</label>
                        <input id="email" name='course' value={formData.course} type="email" onChange={onFormChange} placeholder="Enter Course Name" required className="apply-form-input" />
                    </div>
                    <div className='apply-form-label-input-container'>
                        <label htmlFor="age" className="apply-form-label">Learning Mode</label>
                        <select name='mode' id="age" value={formData.mode} onChange={onFormChange} type="text" required className="apply-form-input apply-form-select" >
                            <option value='distance'>Distance</option>
                            <option value='online'>Online</option>
                            <option value='regular'>Regular</option>
                            <option value='credit transfer'>Credit Transfer</option>
                        </select>
                    </div>
                    {showErrorMsg && <p className='error-msg'>*Enter Your Details To Proceed</p>}
                    <div className='apply-form-label-input-container'>
                        <button type="submit" onClick={sendEmail} className="apply-form-button">Send</button>
                    </div>
                </form>
            {/* </Zoom> */}
        </Fade>


    )

}

export default ApplyForm