import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import '../styles/Auth.css'

function SignIn() {
    const { login } = useAuth()
    const navigate = useNavigate()
    const [form, setForm] = useState({ email: '', phone: '', password: '' })
    const [error, setError] = useState('')

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        setError('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const result = login(form.email, form.password)
        if (result.success) {
            navigate('/')
        } else {
            setError(result.message)
        }
    }

    return (
        <section className="auth-page" id="signin-page">
            <div className="auth-card anim">
                <h1 className="auth-logo">QUIZZYY</h1>
                <form onSubmit={handleSubmit} id="signin-form">
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        id="signin-email"
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Enter phone number"
                        value={form.phone}
                        onChange={handleChange}
                        pattern="[0-9]{10}"
                        required
                        id="signin-phone"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        id="signin-password"
                    />
                    {error && <p className="auth-error">{error}</p>}
                    <button type="submit" className="auth-submit-btn" id="signin-submit">Sign In</button>
                </form>
                <span className="auth-switch-text">Don't have an account?</span>
                <Link to="/signup" className="auth-switch-link">Sign Up</Link>
            </div>
        </section>
    )
}

export default SignIn
