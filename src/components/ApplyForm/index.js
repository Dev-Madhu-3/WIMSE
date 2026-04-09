import { useContext, useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  MdClose,
  MdPerson,
  MdEmail,
  MdPhone,
  MdSchool,
  MdBook,
} from "react-icons/md";
import AppContext from "../../Context/context";
import { motion, AnimatePresence } from "framer-motion";
import { RotatingLines } from "react-loader-spinner";

const CRM_LEADS_URL =
  "https://wimse.neomatrics.com/api/public/integrations/leads/google?tenant=wimse";
const CRM_WEBHOOK_TOKEN = "crm_37bbb3499e007ede9cc6f4049d28c6b7bb74573424400b8e";
const CRM_LEADS_REQUEST_URL = `${CRM_LEADS_URL}&token=${encodeURIComponent(
  CRM_WEBHOOK_TOKEN,
)}`;

const ApplyForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const { openedApplyForm, changeApplyFormStatus, courseName, formTitle } =
    useContext(AppContext);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    course: courseName,
    mode: "distance",
  });
  const [errorMsg, setErrorMsg] = useState(null);
  const [submissionError, setSubmissionError] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onFormChange = (e) => {
    setErrorMsg(null);
    setSubmissionError(null);
    setFormData({ ...formData, [e.target.name]: e.target.value.trimStart() });
  };

  const onClose = () => {
    changeApplyFormStatus(!openedApplyForm);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setErrorMsg("");
    setSubmissionError("");

    if (!formData.name.trim()) {
      setErrorMsg("Name is required");
      return;
    }

    if (!formData.email) {
      setErrorMsg("Email is required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMsg("Email is invalid");
      return;
    }

    if (!formData.mobile) {
      setErrorMsg("Mobile number is required");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      setErrorMsg("Invalid mobile number");
      return;
    }

    try {
      setFormLoading(true);

      const crmPayload = {
        name: formData.name,
        email: formData.email,
        phone: formData.mobile,
        course: formData.course,
        mode: formData.mode,
        campaign: "Apply Now Form",
      };

      // Use a CORS-safe request for browser clients.
      await Promise.all([
        emailjs.send(
          "service_5q5t3da",
          "template_b4x1p5g",
          formData,
          "5WS9x7gFrYdpyQ_Vi",
        ),
        fetch(CRM_LEADS_REQUEST_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain;charset=UTF-8",
          },
          body: JSON.stringify(crmPayload),
        }),
      ]);

      setFormLoading(false);
      setShowSuccess(true);

      // GTM push
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "form_submit",
        form_id: "apply_form",
        form_name: "Apply Now Form",
        form_destination: window.location.href,
        form_length: Object.values(formData).join(" ").length,
      });

      // Optional: reset form
      // setFormData({
      //   name: "",
      //   email: "",
      //   mobile: "",
      //   message: "",
      // });

      setTimeout(() => {
        setShowSuccess(false);
        changeApplyFormStatus(!openedApplyForm);
      }, 3500);
    } catch (error) {
      setFormLoading(false);
      console.error("Submission error:", error);
      setSubmissionError("Something went wrong. Please try again.");
    }
  };

  return (
    <AnimatePresence>
      {openedApplyForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        >
          {formLoading ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center justify-center"
            >
              <RotatingLines
                visible={true}
                height="80"
                width="80"
                strokeColor="#8b5cf6"
                strokeWidth="4"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-4 text-white text-lg font-medium"
              >
                Submitting your application...
              </motion.p>
            </motion.div>
          ) : (
            <>
              {showSuccess ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 rounded-2xl shadow-2xl max-w-md w-full"
                >
                  <div className="flex flex-col items-center justify-center text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 500,
                      }}
                      className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4"
                    >
                      <svg
                        className="w-8 h-8 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-2xl font-bold text-white mb-2"
                    >
                      Application Submitted!
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-white/90"
                    >
                      We'll get back to you shortly.
                    </motion.p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  ref={formRef}
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  transition={{ type: "spring", damping: 25 }}
                  className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
                >
                  {/* Background Image */}
                  {/* <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1521791136064-7a6e3af3a0a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                      alt="Education Background" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-indigo-900/90"></div>
                  </div> */}

                  {/* Form Content */}
                  <div className="relative z-10 bg-white/90 backdrop-blur-sm p-8 rounded-2xl">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={onClose}
                      className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <MdClose className="text-2xl" />
                    </motion.button>

                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-center mb-8"
                    >
                      <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        {formTitle}
                        {console.log("formTitle", formTitle)}
                      </h2>
                      <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full"></div>
                    </motion.div>

                    <form onSubmit={sendEmail} className="space-y-5">
                      {/* Name Field */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                      >
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <MdPerson className="text-gray-500" />
                        </div>
                        <input
                          id="name"
                          name="name"
                          value={formData.name}
                          type="text"
                          onChange={onFormChange}
                          placeholder="Your name"
                          required
                          className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        />
                      </motion.div>

                      {/* Mobile Field */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="relative"
                      >
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <MdPhone className="text-gray-500" />
                        </div>
                        <input
                          id="mobile"
                          name="mobile"
                          value={formData.mobile}
                          type="text"
                          onChange={onFormChange}
                          placeholder="Your Mobile Number"
                          required
                          className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        />
                      </motion.div>

                      {/* Email Field */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="relative"
                      >
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <MdEmail className="text-gray-500" />
                        </div>
                        <input
                          id="email"
                          name="email"
                          value={formData.email}
                          type="email"
                          onChange={onFormChange}
                          placeholder="Your email"
                          required
                          className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        />
                      </motion.div>

                      {/* Course Field */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="relative"
                      >
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <MdSchool className="text-gray-500" />
                        </div>
                        <input
                          id="course"
                          name="course"
                          value={formData.course}
                          type="text"
                          onChange={onFormChange}
                          placeholder="Enter Course Name (Optional)"
                          className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        />
                      </motion.div>

                      {/* Mode Field */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="relative"
                      >
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <MdBook className="text-gray-500" />
                        </div>
                        <select
                          name="mode"
                          id="mode"
                          value={formData.mode}
                          onChange={onFormChange}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all appearance-none"
                        >
                          <option value="distance">Distance</option>
                          <option value="online">Online</option>
                          <option value="regular">Regular</option>
                          <option value="credit transfer">
                            Credit Transfer
                          </option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg
                            className="w-5 h-5 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </motion.div>

                      {/* Error Messages */}
                      <AnimatePresence>
                        {(errorMsg || submissionError) && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-500 text-sm font-medium"
                          >
                            *{errorMsg || submissionError}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Submit Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
                      >
                        Submit Application
                      </motion.button>
                    </form>
                  </div>
                </motion.div>
              )}
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ApplyForm;
