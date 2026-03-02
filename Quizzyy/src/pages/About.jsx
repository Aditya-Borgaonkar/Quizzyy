import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'
import '../styles/About.css'

function About() {
    return (
        <section className="about-page" id="about-page">
            <div className="about-container">
                <div className="about-text-section anim">
                    <div className="about-title">
                        <h1>About Us</h1>
                        <div className="about-title-line"></div>
                    </div>
                    <div className="about-body">
                        <h3 className="anim anim-delay-2">
                            Welcome to Quizzy, your ultimate destination for mastering coding languages through interactive quizzes!
                        </h3>
                        <p className="anim anim-delay-3">
                            At Quizzy, we're on a mission to make coding education accessible, enjoyable, and challenging.
                            Driven by our passion for coding, Quizzy is designed to ignite curiosity and inspire coding enthusiasts
                            of all levels. Experience the power of interactive learning! Quizzy brings coding languages to life through
                            dynamic quizzes that engage, educate, and empower. Whether you're a beginner or a seasoned coder,
                            Quizzy offers a diverse range of quizzes catering to multiple coding languages. Choose your path and level up!
                            Ready to embark on a coding adventure? Dive into the world of Quizzy, where coding meets quizzing,
                            and knowledge knows no bounds....
                        </p>
                    </div>
                    <div className="about-socials anim anim-delay-4">
                        <a href="#" aria-label="GitHub"><FaGithub /></a>
                        <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="#" aria-label="Twitter"><FaTwitter /></a>
                        <a href="#" aria-label="Facebook"><FaFacebook /></a>
                    </div>
                </div>
                <div className="about-image-section anim anim-delay-5">
                    <img src="/img/aboutUs.jpg" alt="About Quizzyy" />
                </div>
            </div>
            <Link to="/" className="back-btn" id="about-back-btn">← Back to Home</Link>
        </section>
    )
}

export default About
