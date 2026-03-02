import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import '../styles/Home.css'

function Home() {
    const { user } = useAuth()

    return (
        <section className="hero" id="home-hero">
            <div className="hero-content">
                <h1 className="anim">
                    Ready For <br />A Brain Workout
                </h1>
                <p className="anim anim-delay-2">
                    Think you know it all? Prove it with our challenging quizzes!
                    Challenge your knowledge boundaries with Quizzyy's quizzes.
                </p>
                {user ? (
                    <Link to="/quiz" className="hero-btn anim anim-delay-3" id="hero-play-btn">Play now</Link>
                ) : (
                    <Link to="/signin" className="hero-btn anim anim-delay-3" id="hero-play-btn">Play now</Link>
                )}
            </div>
            <div className="hero-image-wrapper anim anim-delay-4">
                <div className="hero-image-glow"></div>
                <img src="/img/person.png" alt="Quiz character" className="hero-image" />
            </div>
        </section>
    )
}

export default Home
