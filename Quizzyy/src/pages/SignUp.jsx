import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import '../styles/Auth.css'

function SignUp() {
    const { signup } = useAuth()
    const navigate = useNavigate()
    const [form, setForm] = useState({
        firstName: '', lastName: '', phone: '', email: '', password: '', confirmPassword: ''
    })
    const [error, setError] = useState('')

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        setError('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (form.password !== form.confirmPassword) {
            setError('Passwords do not match')
            return
        }
        if (form.password.length < 8) {
            setError('Password must be at least 8 characters')
            return
        }
        const result = signup({
            firstName: form.firstName,
            lastName: form.lastName,
            phone: form.phone,
            email: form.email,
            password: form.password
        })
        if (result.success) {
            navigate('/signin')
        } else {
            setError(result.message)
        }
    }

    return (
        <section className="auth-page" id="signup-page">
            <div className="auth-card auth-card-wide anim">
                <h1 className="auth-logo">Sign Up</h1>
                <form onSubmit={handleSubmit} id="signup-form">
                    <div className="auth-row">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={form.firstName}
                            onChange={handleChange}
                            required
                            id="signup-firstname"
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={form.lastName}
                            onChange={handleChange}
                            required
                            id="signup-lastname"
                        />
                    </div>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Enter 10 Digit Contact Number"
                        value={form.phone}
                        onChange={handleChange}
                        pattern="[0-9]{10}"
                        required
                        id="signup-phone"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        id="signup-email"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Create Password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        id="signup-password"
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        required
                        id="signup-confirm-password"
                    />
                    {error && <p className="auth-error">{error}</p>}
                    <button type="submit" className="auth-submit-btn" id="signup-submit">Continue</button>
                </form>
                <span className="auth-switch-text">Already have an account?</span>
                <Link to="/signin" className="auth-switch-link">Log In</Link>
            </div>
        </section>
    )
}

export default SignUp
