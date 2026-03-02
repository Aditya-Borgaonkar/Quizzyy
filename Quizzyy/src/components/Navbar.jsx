import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

function Navbar() {
    const { user, logout } = useAuth()
    const location = useLocation()
    const [menuOpen, setMenuOpen] = useState(false)

    const isActive = (path) => location.pathname === path

    const handleLogout = () => {
        logout()
        setMenuOpen(false)
    }

    return (
        <nav className="navbar" id="main-navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" id="navbar-logo">Quizzyy</Link>
                <button
                    className="navbar-toggle"
                    id="navbar-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
                <ul className={`navbar-links ${menuOpen ? 'active' : ''}`} id="navbar-links">
                    <li>
                        <Link to="/" className={isActive('/') ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={() => setMenuOpen(false)}>About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={() => setMenuOpen(false)}>Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/team" className={isActive('/team') ? 'active' : ''} onClick={() => setMenuOpen(false)}>Our Team</Link>
                    </li>
                    {user ? (
                        <>
                            <li>
                                <Link to="/quiz" className={`nav-quiz-btn ${isActive('/quiz') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Quiz</Link>
                            </li>
                            <li>
                                <button className="nav-logout-btn" onClick={handleLogout}>Logout</button>
                            </li>
                        </>
                    ) : (
                        <li>
                            <Link to="/signup" className="nav-signup-btn" onClick={() => setMenuOpen(false)}>Sign Up</Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
