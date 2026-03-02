import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import './Footer.css'

function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="footer-waves">
                <div className="footer-wave" id="wave1"></div>
                <div className="footer-wave" id="wave2"></div>
                <div className="footer-wave" id="wave3"></div>
                <div className="footer-wave" id="wave4"></div>
            </div>
            <ul className="footer-social">
                <li><a href="#" className="footer-social-link" aria-label="Facebook"><FaFacebook /></a></li>
                <li><a href="#" className="footer-social-link" aria-label="Twitter"><FaTwitter /></a></li>
                <li><a href="#" className="footer-social-link" aria-label="LinkedIn"><FaLinkedin /></a></li>
                <li><a href="#" className="footer-social-link" aria-label="Instagram"><FaInstagram /></a></li>
            </ul>
            <ul className="footer-menu">
                <li><Link to="/" className="footer-menu-link">Home</Link></li>
                <li><Link to="/about" className="footer-menu-link">About</Link></li>
                <li><Link to="/quiz" className="footer-menu-link">Quiz</Link></li>
                <li><Link to="/team" className="footer-menu-link">Team</Link></li>
                <li><Link to="/contact" className="footer-menu-link">Contact</Link></li>
            </ul>
            <p className="footer-copy">&copy; 2024 Quizzyy | All Rights Reserved</p>
        </footer>
    )
}

export default Footer
