import './index.css'
import { useContext, useState } from 'react'
import emailjs from "@emailjs/browser"
import { MdClose } from "react-icons/md"
import AppContext from '../../Context/context'
import { Fade } from "react-awesome-reveal"
import { RotatingLines } from 'react-loader-spinner'

const ApplyForm = () => {
    const [showSuccess, setShowSuccess] = useState(false)
    const { openedApplyForm, changeApplyFormStatus, courseName } = useContext(AppContext)

    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        course: courseName,
        mode: 'distance'
    })

    const [errorMsg, setErrorMsg] = useState(null)
    const [submissionError, setSubmissionError] = useState(null) // Added: to show send failure
    const [formLoading, setFormLoading] = useState(false)

    const onFormChange = (e) => {
        setErrorMsg(null)
        setSubmissionError(null) // Reset submission error on change
        setFormData({ ...formData, [e.target.name]: e.target.value.trimStart() })
    }

    const onClose = () => {
        changeApplyFormStatus(!openedApplyForm)
    }

    const sendEmail = (e) => {
        e.preventDefault()
        if (!formData.name.trim()) {
            setErrorMsg('Name is required')
        } else if (!formData.email) {
            setErrorMsg('Email is required')
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setErrorMsg('Email is invalid')
        } else if (!formData.mobile) {
            setErrorMsg('Mobile number is required')
        } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
            setErrorMsg('Invalid mobile number')
        } else if (!formData.course.trim()) {
            setErrorMsg('Course name is required')
        } else {
            setFormLoading(true)
            emailjs
                .send(
                    "service_5q5t3da",  // Your EmailJS Service ID
                    "template_b4x1p5g", // Your EmailJS Template ID
                    formData,
                    "5WS9x7gFrYdpyQ_Vi"  // Your EmailJS Public Key
                )
                .then((response) => {
                    setFormLoading(false)
                    setShowSuccess(true)

                    // ✅ Push GTM Event
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                        event: "form_submit",
                        form_id: "apply_form",
                        form_name: "Apply Now Form",
                        form_destination: window.location.href,
                        form_length: Object.values(formData).join(" ").length,
                        send_to: "G-JML27WPBBP" // Change if needed
                    });

                    setTimeout(() => {
                        setShowSuccess(false)
                        changeApplyFormStatus(!openedApplyForm)
                    }, 3500)
                })
                .catch((error) => {
                    setFormLoading(false)
                    console.error("Error sending email:", error)
                    setSubmissionError("Something went wrong. Please try again.") // Show inline error
                })
        }
    }

    return (
        <Fade duration={300} className="apply-form-section">
            {formLoading ? (
                <RotatingLines
                    visible={true}
                    height="96"
                    width="96"
                    strokeColor='#9c10ff'
                    strokeWidth="4"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                />
            ) : (
                <>
                    {showSuccess ? (
                        <div className="absolute top-5 right-5 bg-green-100 border border-green-400 text-green-800 px-6 py-4 rounded-lg shadow-lg animate-bounce transition transform duration-500 ease-in-out scale-100 z-50">
                            <p className="font-semibold">✅ Submitted Successfully!</p>
                            <p className="text-sm">We will get back to you shortly.</p>
                        </div>
                    ) : (<form noValidate onSubmit={sendEmail} className="apply-form animated-item zoom-in">
                        <MdClose aria-label="Toggle Menu" onClick={onClose} className='apply-form-close-icon' />
                        <h2 className="apply-form-title">{courseName ? "Quick Apply" : "Enquiry Now"}</h2>

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
                            <label htmlFor="course" className="apply-form-label">Course</label>
                            <input id="course" name='course' value={formData.course} type="text" onChange={onFormChange} placeholder="Enter Course Name" required className="apply-form-input" />
                        </div>

                        <div className='apply-form-label-input-container'>
                            <label htmlFor="mode" className="apply-form-label">Learning Mode</label>
                            <select name='mode' id="mode" value={formData.mode} onChange={onFormChange} required className="apply-form-input apply-form-select">
                                <option value='distance'>Distance</option>
                                <option value='online'>Online</option>
                                <option value='regular'>Regular</option>
                                <option value='credit transfer'>Credit Transfer</option>
                            </select>
                        </div>

                        {errorMsg && (
                            <p className='text-left text-red-500 text-[1.1rem] mt-1'>*{errorMsg}</p>
                        )}
                        {submissionError && (
                            <p className='text-left text-red-600 text-[1.1rem] mt-1'>*{submissionError}</p>
                        )}

                        <div className='apply-form-label-input-container'>
                            <button type="submit" className="apply-form-button">Submit</button>
                        </div>
                    </form>)}


                </>
            )}
        </Fade>
    )
}

export default ApplyForm
