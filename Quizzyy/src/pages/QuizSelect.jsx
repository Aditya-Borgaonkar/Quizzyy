import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { quizTopics } from '../data'
import '../styles/QuizSelect.css'

function QuizSelect() {
    const { user } = useAuth()
    const [showQuiz, setShowQuiz] = useState(false)

    if (!user) {
        return (
            <section className="quiz-select-page" id="quiz-select-page">
                <div className="quiz-auth-prompt anim">
                    <h2>🔒 Please sign in to access quizzes</h2>
                    <p>You need to be logged in to take quizzes.</p>
                    <Link to="/signin" className="quiz-auth-btn">Sign In</Link>
                </div>
            </section>
        )
    }

    if (!showQuiz) {
        return (
            <section className="quiz-select-page" id="quiz-instructions">
                <div className="quiz-instructions anim">
                    <h1>Quiz Instructions</h1>
                    <ol>
                        <li>You will be asked questions one after another.</li>
                        <li>Each question carries 2 marks.</li>
                        <li>Time for the quiz is 5 minutes.</li>
                        <li>Each question has four options. You can choose only one option.</li>
                        <li>You can review and change answers before submit.</li>
                        <li>Once you submitted the question you are not able to make changes in it.</li>
                        <li>The result will be declared at the end of the quiz.</li>
                    </ol>
                    <button className="quiz-start-btn" onClick={() => setShowQuiz(true)} id="start-quiz-btn">
                        Start Quiz
                    </button>
                </div>
            </section>
        )
    }

    return (
        <section className="quiz-select-page" id="quiz-select-page">
            <h1 className="quiz-page-title anim">Let's Quizzzz</h1>
            <div className="quiz-grid">
                {Object.values(quizTopics).map((topic, idx) => (
                    <Link
                        to={`/quiz/${topic.id}`}
                        className={`quiz-topic-card anim anim-delay-${Math.min(idx + 1, 5)}`}
                        key={topic.id}
                        id={`quiz-topic-${topic.id}`}
                    >
                        <span className="quiz-topic-icon">{topic.icon}</span>
                        <h2>{topic.title}</h2>
                        <p>{topic.description}</p>
                        <span className="quiz-topic-tag" style={{ background: topic.color }}>
                            {topic.questions.length} Questions
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default QuizSelect
