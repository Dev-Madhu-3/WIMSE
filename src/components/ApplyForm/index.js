import './index.css'
import { useContext, useState } from 'react'
import emailjs from "@emailjs/browser"
import { MdClose } from "react-icons/md"
import AppContext from '../Context/context'
import { Fade } from "react-awesome-reveal"
import { RotatingLines } from 'react-loader-spinner'


const ApplyForm = () => {
    const { openedApplyForm, changeApplyFormStatus, courseName } = useContext(AppContext)

    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        course: courseName,
        mode: 'distance'
    })

    const [errorMsg, setErrorMsg] = useState(null)
    const [formLoading, setFormLoading] = useState(false)

    const onFormChange = (e) => {
        setErrorMsg(null)
        setFormData({ ...formData, [e.target.name]: e.target.value })
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
        } else if (formData.course.trim()) {
            setErrorMsg('Courese name is required')
        } else {
            setFormLoading(true)
            emailjs
                .send(
                    "service_5q5t3da",  // Replace with your EmailJS Service ID
                    "template_b4x1p5g", // Replace with your EmailJS Template ID
                    formData,
                    "511PQC_I9vUFwtHkr"  // Replace with your EmailJS Public Key
                )
                .then((response) => {
                    setFormLoading(false)
                    changeApplyFormStatus(!openedApplyForm)
                    alert("Application Sent Successfully")
                })
                .catch((error) => {
                    console.error("Error sending email:", error)
                })
        }
    }

    return (
        <Fade duration={300} className="apply-form-section">
            {formLoading ?
                <RotatingLines
                    visible={true}
                    height="96"
                    width="96"
                    strokeColor='#9c10ff'
                    strokeWidth="4"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
                :
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
                    {errorMsg && <p className='text-left text-red-500 text-[1.1rem] mt-1'>*{errorMsg}</p>}
                    <div className='apply-form-label-input-container'>
                        <button type="submit" onClick={sendEmail} className="apply-form-button ">Submit</button>
                    </div>
                </form>
            }
        </Fade>


    )

}

export default ApplyForm