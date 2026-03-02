import { useState } from 'react'
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin, FaPaperPlane } from 'react-icons/fa'
import '../styles/Contact.css'

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
        setForm({ name: '', email: '', phone: '', message: '' })
    }

    return (
        <section className="contact-page" id="contact-page">
            <div className="contact-card anim">
                <div className="contact-info">
                    <h2>Let's get in touch</h2>
                    <img
                        src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740"
                        alt="Customer support illustration"
                        className="contact-illustration"
                    />
                    <div className="contact-info-links">
                        <span>Contact with us</span>
                        <div className="contact-socials">
                            <a href="#" aria-label="Facebook"><FaFacebook /></a>
                            <a href="#" aria-label="Twitter"><FaTwitter /></a>
                            <a href="#" aria-label="YouTube"><FaYoutube /></a>
                            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
                <div className="contact-form-section">
                    <h3>Contact Us</h3>
                    {submitted && (
                        <div className="contact-success">
                            <FaPaperPlane /> Message sent successfully!
                        </div>
                    )}
                    <form onSubmit={handleSubmit} id="contact-form">
                        <div className="form-group">
                            <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder=" " id="contact-name" />
                            <label htmlFor="contact-name">Name</label>
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder=" " id="contact-email" />
                            <label htmlFor="contact-email">Email</label>
                        </div>
                        <div className="form-group">
                            <input type="tel" name="phone" value={form.phone} onChange={handleChange} pattern="[0-9]{10}" required placeholder=" " id="contact-phone" />
                            <label htmlFor="contact-phone">Phone</label>
                        </div>
                        <div className="form-group">
                            <textarea name="message" value={form.message} onChange={handleChange} required rows="4" placeholder=" " id="contact-message"></textarea>
                            <label htmlFor="contact-message">Message</label>
                        </div>
                        <button type="submit" className="contact-submit-btn" id="contact-submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
