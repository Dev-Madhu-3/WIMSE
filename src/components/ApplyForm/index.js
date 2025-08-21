import { useContext, useState, useRef, useEffect } from "react"
import emailjs from "@emailjs/browser"
import { MdClose } from "react-icons/md"
import AppContext from "../../Context/context"
import { Fade } from "react-awesome-reveal"
import { RotatingLines } from "react-loader-spinner"

const ApplyForm = () => {
  const [showSuccess, setShowSuccess] = useState(false)
  const { openedApplyForm, changeApplyFormStatus, courseName } =
    useContext(AppContext)

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    course: courseName,
    mode: "distance",
  })

  const [errorMsg, setErrorMsg] = useState(null)
  const [submissionError, setSubmissionError] = useState(null)
  const [formLoading, setFormLoading] = useState(false)
  const formRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        onClose()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const onFormChange = (e) => {
    setErrorMsg(null)
    setSubmissionError(null)
    setFormData({ ...formData, [e.target.name]: e.target.value.trimStart() })
  }

  const onClose = () => {
    changeApplyFormStatus(!openedApplyForm)
  }

  const sendEmail = (e) => {
    e.preventDefault()
    if (!formData.name.trim()) {
      setErrorMsg("Name is required")
    } else if (!formData.email) {
      setErrorMsg("Email is required")
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMsg("Email is invalid")
    } else if (!formData.mobile) {
      setErrorMsg("Mobile number is required")
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      setErrorMsg("Invalid mobile number")
    } else if (!formData.course.trim()) {
      setErrorMsg("Course name is required")
    } else {
      setFormLoading(true)
      emailjs
        .send(
          "service_5q5t3da",
          "template_b4x1p5g",
          formData,
          "5WS9x7gFrYdpyQ_Vi"
        )
        .then(() => {
          setFormLoading(false)
          setShowSuccess(true)

          // GTM push
          window.dataLayer = window.dataLayer || []
          window.dataLayer.push({
            event: "form_submit",
            form_id: "apply_form",
            form_name: "Apply Now Form",
            form_destination: window.location.href,
            form_length: Object.values(formData).join(" ").length,
          })

          setTimeout(() => {
            setShowSuccess(false)
            changeApplyFormStatus(!openedApplyForm)
          }, 3500)
        })
        .catch((error) => {
          setFormLoading(false)
          console.error("Error sending email:", error)
          setSubmissionError("Something went wrong. Please try again.")
        })
    }
  }

  return (
    <Fade
      duration={300}
      className="fixed top-0 left-0 z-40 flex min-h-screen w-full items-center justify-center bg-black/80 text-gray-900"
    >
      {formLoading ? (
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          strokeColor="#9c10ff"
          strokeWidth="4"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
        />
      ) : (
        <>
          {showSuccess ? (
            <div className="absolute top-5 right-5 z-50 animate-bounce rounded-lg border border-green-400 bg-green-100 px-6 py-4 text-green-800 shadow-lg transition duration-500 ease-in-out">
              <p className="font-semibold">✅ Submitted Successfully!</p>
              <p className="text-sm">We will get back to you shortly.</p>
            </div>
          ) : (
            <form
              ref={formRef}
              noValidate
              onSubmit={sendEmail}
              className="relative w-[30rem] rounded-lg bg-gray-50 p-8 sm:p-6 text-center shadow-md sm:w-[90%]"
            >
              <MdClose
                aria-label="Toggle Menu"
                onClick={onClose}
                className="absolute right-3 top-3 cursor-pointer text-[25px]"
              />
              <h2 className="mb-4 text-[1.8rem] sm:text-[1.4rem] font-bold leading-snug text-[#313131]">
                {courseName ? "Quick Apply" : "Enquiry Now"}
              </h2>

              {/* Name */}
              <div className="mt-3 w-full text-left">
                <label
                  htmlFor="name"
                  className="mb-1 ml-1 block text-gray-800"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  type="text"
                  onChange={onFormChange}
                  placeholder="Your name"
                  required
                  className="w-full rounded-md border border-gray-300 bg-gray-100 px-2 py-2 outline-none transition focus:border-purple-600 focus:shadow-md"
                />
              </div>

              {/* Mobile */}
              <div className="mt-3 w-full text-left">
                <label
                  htmlFor="mobile"
                  className="mb-1 ml-1 block text-gray-800"
                >
                  Mobile
                </label>
                <input
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  type="text"
                  onChange={onFormChange}
                  placeholder="Your Mobile Number"
                  required
                  className="w-full rounded-md border border-gray-300 bg-gray-100 px-2 py-2 outline-none transition focus:border-purple-600 focus:shadow-md"
                />
              </div>

              {/* Email */}
              <div className="mt-3 w-full text-left">
                <label
                  htmlFor="email"
                  className="mb-1 ml-1 block text-gray-800"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  value={formData.email}
                  type="email"
                  onChange={onFormChange}
                  placeholder="Your email"
                  required
                  className="w-full rounded-md border border-gray-300 bg-gray-100 px-2 py-2 outline-none transition focus:border-purple-600 focus:shadow-md"
                />
              </div>

              {/* Course */}
              <div className="mt-3 w-full text-left">
                <label
                  htmlFor="course"
                  className="mb-1 ml-1 block text-gray-800"
                >
                  Course
                </label>
                <input
                  id="course"
                  name="course"
                  value={formData.course}
                  type="text"
                  onChange={onFormChange}
                  placeholder="Enter Course Name"
                  required
                  className="w-full rounded-md border border-gray-300 bg-gray-100 px-2 py-2 outline-none transition focus:border-purple-600 focus:shadow-md"
                />
              </div>

              {/* Mode */}
              <div className="mt-3 w-full text-left">
                <label
                  htmlFor="mode"
                  className="mb-1 ml-1 block text-gray-800"
                >
                  Learning Mode
                </label>
                <select
                  name="mode"
                  id="mode"
                  value={formData.mode}
                  onChange={onFormChange}
                  required
                  className="w-full rounded-md border border-gray-300 bg-gray-100 px-2 py-2 outline-none transition focus:border-purple-600 focus:shadow-md"
                >
                  <option value="distance">Distance</option>
                  <option value="online">Online</option>
                  <option value="regular">Regular</option>
                  <option value="credit transfer">Credit Transfer</option>
                </select>
              </div>

              {/* Errors */}
              {errorMsg && (
                <p className="mt-1 text-left text-[1.1rem] text-red-500">
                  *{errorMsg}
                </p>
              )}
              {submissionError && (
                <p className="mt-1 text-left text-[1.1rem] text-red-600">
                  *{submissionError}
                </p>
              )}

              {/* Submit */}
              <div className="mt-4 w-full text-left">
                <button
                  type="submit"
                  className="mt-2 h-[2.7rem] w-full rounded-md bg-purple-600 text-[1.2rem] font-semibold text-white transition hover:bg-purple-800"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </>
      )}
    </Fade>
  )
}

export default ApplyForm
