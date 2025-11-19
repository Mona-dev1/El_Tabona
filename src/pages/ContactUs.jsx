// import React, { useState, useRef, useEffect } from "react";
// import emailjs from "@emailjs/browser";
// import "../assets/css/ContactUs.css";

// const ContactUs = () => {
//   const [theme, setTheme] = useState("dark");
//   const toggleTheme = () => {
//     setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
//   };

//   useEffect(() => {
//     document.body.className = `${theme}-theme`;
//   }, [theme]);

//   const SERVICE_ID = "YOUR_SERVICE_ID";
//   const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
//   const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

//   const formRef = useRef();
//   const [formData, setFormData] = useState({
//     user_name: "",
//     user_email: "",
//     subject: "",
//     reason: "Select a reason",
//     message: "",
//   });

//   const [isSending, setIsSending] = useState(false);
//   const [messageStatus, setMessageStatus] = useState("");
//   const [validationErrors, setValidationErrors] = useState({});

//   const isValidEmail = (email) => {
//     return /\S+@\S+\.\S+/.test(email);
//   };

//   const validateForm = () => {
//     let errors = {};
//     let isValid = true;

//     if (!formData.user_name.trim()) {
//       errors.user_name = "Please enter your name.";
//       isValid = false;
//     }
//     if (!formData.user_email.trim() || !isValidEmail(formData.user_email)) {
//       errors.user_email = "Your email is incorrect";
//       isValid = false;
//     }
//     if (!formData.subject.trim()) {
//       errors.subject = "Please enter the subject";
//       isValid = false;
//     }

//     if (formData.reason === "Select a reason") {
//       errors.reason = "Please select a reason for contacting us.";
//       isValid = false;
//     }
//     if (!formData.message.trim()) {
//       errors.message = "Please enter your message";
//       isValid = false;
//     }

//     setValidationErrors(errors);
//     return isValid;
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//     setValidationErrors({
//       ...validationErrors,
//       [e.target.name]: "",
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validateForm()) {
//       return;
//     }

//     setIsSending(true);
//     setMessageStatus("");

//     emailjs
//       .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
//       .then(
//         (result) => {
//           setMessageStatus("Your message has been sent successfully");
//           setFormData({
//             user_name: "",
//             user_email: "",
//             subject: "",
//             reason: "Select a reason",
//             message: "",
//           });
//           setValidationErrors({});
//         },
//         (error) => {
//           setMessageStatus("Failed to send the message. Please try again.");
//         }
//       )
//       .finally(() => {
//         setIsSending(false);
//       });
//   };

//   return (
//     <div className={`contact-page-container ${theme}-theme`}>
//       <button className="theme-toggle-button" onClick={toggleTheme}>
//         {theme === "light" ? "🌙 Light Mode" : "☀️ Dark Mode"}
//       </button>
//       <div className="contact-content-wrapper">
//         <div className="contact-form-card">
//           <h2 className="title">Get in Touch</h2>
//           <p className="description">
//             Have a question, feedback, or a special order request? We'd love to
//             hear from you. Please fill out the form below, and we'll get back to
//             you as soon as possible.
//           </p>
//           <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
//             <label htmlFor="user_name">Your Name</label>
//             <input
//               type="text"
//               id="user_name"
//               name="user_name"
//               value={formData.user_name}
//               onChange={handleChange}
//               placeholder="John Doe"
//               className={validationErrors.user_name ? "is-invalid" : ""}
//             />
//             {validationErrors.user_name && (
//               <p className="error-message">{validationErrors.user_name}</p>
//             )}

//             <label htmlFor="user_email">Your Email</label>
//             <input
//               type="email"
//               id="user_email"
//               name="user_email"
//               value={formData.user_email}
//               onChange={handleChange}
//               placeholder="john.doe@example.com"
//               className={validationErrors.user_email ? "is-invalid" : ""}
//             />
//             {validationErrors.user_email && (
//               <p className="error-message">{validationErrors.user_email}</p>
//             )}

//             <label htmlFor="subject">Subject</label>
//             <input
//               type="text"
//               id="subject"
//               name="subject"
//               value={formData.subject}
//               onChange={handleChange}
//               placeholder="Regarding an order / Product inquiry"
//               className={validationErrors.subject ? "is-invalid" : ""}
//             />
//             {validationErrors.subject && (
//               <p className="error-message">{validationErrors.subject}</p>
//             )}

//             <label htmlFor="reason">Reason for Contact</label>
//             <select
//               name="reason"
//               id="reason"
//               value={formData.reason}
//               onChange={handleChange}
//               className={validationErrors.reason ? "is-invalid" : ""}
//             >
//               <option value="Select a reason" disabled>
//                 Select a reason
//               </option>
//               <option value="Special Order"> Special Order Request</option>
//               <option value="Feedback">General Feedback</option>
//               <option value="Inquiry">Product Inquiry</option>
//             </select>
//             {validationErrors.reason && (
//               <p className="error-message">{validationErrors.reason}</p>
//             )}

//             <label htmlFor="message">Your Message</label>
//             <textarea
//               id="message"
//               name="message"
//               rows="6"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Tell us how we can help you ..."
//               className={validationErrors.message ? "is-invalid" : ""}
//             ></textarea>
//             {validationErrors.message && (
//               <p className="error-message">{validationErrors.message}</p>
//             )}

//             <button type="submit" className="send-button" disabled={isSending}>
//               {isSending ? "Sending Message ..." : "Send Message"}
//             </button>
//             {messageStatus && <p className="status-message">{messageStatus}</p>}
//           </form>
//         </div>

//         <div className="contact-details-card">
//           <h2 className="title">Our Details</h2>
//           <p className="description">
//             You can also reach us through the following channels or visit our
//             cozy bakery location
//           </p>
//           <div className="detail-item">
//             <i className="fas fa-map-marker-alt"></i>
//             <span className="detail-label">Location</span>
//             <p>123 Sweet Street, Bakersville, BC 12345</p>
//           </div>
//           <div className="detail-item">
//             <i className="fas fa-phone"></i>
//             <span className="detail-label">Phone</span>
//             <p>+1 (555) 123-4567</p>
//           </div>

//           <div className="detail-item">
//             <i className="fas fa-envelope"></i>
//             <span className="detail-label">Email</span>
//             <p>hello@flourishbakery.com</p>
//           </div>

//           <div className="detail-item hours">
//             <i className="fas fa-clock"></i>
//             <span className="detail-label">Hours</span>
//             <p>Mon - Fri: 8:00 AM – 6:00 PM</p>
//             <p>Sat - Sun: 9:00 AM – 5:00 PM</p>
//           </div>
//           <h3 className="map-title">Find Us on the Map</h3>
//           <div className="map-placeholder">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.5995104430986!2d-0.1542291765037319!3d51.52056307181625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ace9a2e67d7%3A0xd458de8d0fdc498e!2zQmFrZXIgU3QsIExvbmRvbiwg2KfZhNmF2YXZhNmD2Kkg2KfZhNmF2KrYrdiv2Kk!5e0!3m2!1sar!2seg!4v1763340544222!5m2!1sar!2seg"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Bakery Location Map"
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ContactUs;

import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "../assets/css/ContactUs-bs.css";

const ContactUs = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.className = `${theme}-theme`;
  }, [theme]);

  const SERVICE_ID = "YOUR_SERVICE_ID";
  const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
  const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    reason: "Select a reason",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [messageStatus, setMessageStatus] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.user_name.trim()) {
      errors.user_name = "Please enter your name.";
      isValid = false;
    }
    if (!formData.user_email.trim() || !isValidEmail(formData.user_email)) {
      errors.user_email = "Your email is incorrect";
      isValid = false;
    }
    if (!formData.subject.trim()) {
      errors.subject = "Please enter the subject";
      isValid = false;
    }
    if (formData.reason === "Select a reason") {
      errors.reason = "Please select a reason for contacting us.";
      isValid = false;
    }
    if (!formData.message.trim()) {
      errors.message = "Please enter your message";
      isValid = false;
    }

    setValidationErrors(errors);
    return isValid;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setValidationErrors({ ...validationErrors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSending(true);
    setMessageStatus("");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          setMessageStatus("Your message has been sent successfully");
          setFormData({
            user_name: "",
            user_email: "",
            subject: "",
            reason: "Select a reason",
            message: "",
          });
          setValidationErrors({});
        },
        () => {
          setMessageStatus("Failed to send the message. Please try again.");
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <div className={`contact-page-container py-5 ${theme}-theme`}>
      {/* Theme toggle */}
      <button className="btn theme-toggle-button" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Light Mode" : "☀️ Dark Mode"}
      </button>

      <div className="container">
        <div className="row g-4">
          {/* Form */}
          <div className="col-lg-6">
            <div className="card p-4 contact-form-card">
              <h2 className="title mb-3">Get in Touch</h2>
              <p className="description mb-4">
                Have a question, feedback, or a special order request? We'd love
                to hear from you. Please fill out the form below, and we'll get
                back to you as soon as possible.
              </p>

              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="user_name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    className={`form-control ${
                      validationErrors.user_name ? "is-invalid" : ""
                    }`}
                    placeholder="John Doe"
                  />
                  {validationErrors.user_name && (
                    <div className="invalid-feedback">
                      {validationErrors.user_name}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="user_email" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    className={`form-control ${
                      validationErrors.user_email ? "is-invalid" : ""
                    }`}
                    placeholder="john.doe@example.com"
                  />
                  {validationErrors.user_email && (
                    <div className="invalid-feedback">
                      {validationErrors.user_email}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`form-control ${
                      validationErrors.subject ? "is-invalid" : ""
                    }`}
                    placeholder="Regarding an order / Product inquiry"
                  />
                  {validationErrors.subject && (
                    <div className="invalid-feedback">
                      {validationErrors.subject}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="reason" className="form-label">
                    Reason for Contact
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className={`form-select ${
                      validationErrors.reason ? "is-invalid" : ""
                    }`}
                  >
                    <option value="Select a reason" disabled>
                      Select a reason
                    </option>
                    <option value="Special Order">Special Order Request</option>
                    <option value="Feedback">General Feedback</option>
                    <option value="Inquiry">Product Inquiry</option>
                  </select>
                  {validationErrors.reason && (
                    <div className="invalid-feedback">
                      {validationErrors.reason}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-control ${
                      validationErrors.message ? "is-invalid" : ""
                    }`}
                    placeholder="Tell us how we can help you ..."
                  ></textarea>
                  {validationErrors.message && (
                    <div className="invalid-feedback">
                      {validationErrors.message}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn send-button w-100"
                  disabled={isSending}
                >
                  {isSending ? "Sending Message ..." : "Send Message"}
                </button>

                {messageStatus && (
                  <div className="mt-2 text-center">{messageStatus}</div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Details */}
          <div className="col-lg-6">
            <div className="card p-4 contact-details-card">
              <h2 className="title mb-3">Our Details</h2>
              <p className="description mb-3">
                You can also reach us through the following channels or visit
                our cozy bakery location
              </p>

              <div className="mb-3 detail-item">
                <i className="fas fa-map-marker-alt me-2"></i>
                <span className="detail-label">Location</span>
                <p>123 Sweet Street, Bakersville, BC 12345</p>
              </div>

              <div className="mb-3 detail-item">
                <i className="fas fa-phone me-2"></i>
                <span className="detail-label">Phone</span>
                <p>+1 (555) 123-4567</p>
              </div>

              <div className="mb-3 detail-item">
                <i className="fas fa-envelope me-2"></i>
                <span className="detail-label">Email</span>
                <p>hello@flourishbakery.com</p>
              </div>

              <div className="mb-3 detail-item">
                <i className="fas fa-clock me-2"></i>
                <span className="detail-label">Hours</span>
                <p>Mon - Fri: 8:00 AM – 6:00 PM</p>
                <p>Sat - Sun: 9:00 AM – 5:00 PM</p>
              </div>

              <h3 className="map-title mt-4">Find Us on the Map</h3>
              <div className="map-placeholder mt-2 rounded overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.5995104430986!2d-0.1542291765037319!3d51.52056307181625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ace9a2e67d7%3A0xd458de8d0fdc498e!2zQmFrZXIgU3QsIExvbmRvbiwg2KfZhNmF2YXZhNmD2Kkg2KfZhNmF2KrYrdiv2Kk!5e0!3m2!1sar!2seg!4v1763340544222!5m2!1sar!2seg"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bakery Location Map"
                  className="w-100"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
