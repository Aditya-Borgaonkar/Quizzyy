import { useState, useEffect, useCallback } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { quizTopics } from '../data'
import '../styles/QuizPlay.css'

function QuizPlay() {
    const { topic } = useParams()
    const navigate = useNavigate()
    const quizData = quizTopics[topic]

    const [questionIndex, setQuestionIndex] = useState(0)
    const [selectedAnswers, setSelectedAnswers] = useState([])
    const [submittedAnswers, setSubmittedAnswers] = useState([])
    const [score, setScore] = useState(0)
    const [timeRemaining, setTimeRemaining] = useState(5 * 60)
    const [quizFinished, setQuizFinished] = useState(false)

    useEffect(() => {
        if (quizData) {
            setSelectedAnswers(Array(quizData.questions.length).fill(null))
            setSubmittedAnswers(Array(quizData.questions.length).fill(false))
        }
    }, [quizData])

    const finishQuiz = useCallback((finalScore) => {
        setQuizFinished(true)
        setScore(finalScore)
    }, [])

    // Timer
    useEffect(() => {
        if (quizFinished || !quizData) return
        const timer = setInterval(() => {
            setTimeRemaining(prev => {
                if (prev <= 1) {
                    clearInterval(timer)
                    // Calculate score from submitted answers
                    let s = 0
                    submittedAnswers.forEach((submitted, i) => {
                        if (submitted !== false && selectedAnswers[i] !== null) {
                            if (selectedAnswers[i] === parseInt(quizData.questions[i].ans) - 1) s++
                        }
                    })
                    finishQuiz(s)
                    return 0
                }
                return prev - 1
            })
        }, 1000)
        return () => clearInterval(timer)
    }, [quizFinished, quizData, submittedAnswers, selectedAnswers, finishQuiz])

    if (!quizData) {
        return (
            <section className="quizplay-page">
                <div className="quizplay-error anim">
                    <h2>❌ Quiz not found</h2>
                    <p>The quiz topic "{topic}" does not exist.</p>
                    <Link to="/quiz" className="quizplay-back-btn">Back to Quizzes</Link>
                </div>
            </section>
        )
    }

    const questions = quizData.questions
    const currentQ = questions[questionIndex]
    const isSubmitted = submittedAnswers[questionIndex]

    const handleSelect = (optionIndex) => {
        if (isSubmitted) return
        const newAnswers = [...selectedAnswers]
        newAnswers[questionIndex] = optionIndex
        setSelectedAnswers(newAnswers)
    }

    const handleSubmitAnswer = () => {
        if (selectedAnswers[questionIndex] === null) return
        const newSubmitted = [...submittedAnswers]
        newSubmitted[questionIndex] = true
        setSubmittedAnswers(newSubmitted)

        // Check score
        if (selectedAnswers[questionIndex] === parseInt(currentQ.ans) - 1) {
            setScore(prev => prev + 1)
        }

        // Auto-advance
        if (questionIndex < questions.length - 1) {
            setTimeout(() => setQuestionIndex(questionIndex + 1), 300)
        }
    }

    const handleFinishQuiz = () => {
        finishQuiz(score)
    }

    const minutes = Math.floor(timeRemaining / 60)
    const seconds = timeRemaining % 60

    const answeredCount = submittedAnswers.filter(s => s !== false).length

    if (quizFinished) {
        const totalScore = score * 2
        const maxScore = questions.length * 2
        const percent = Math.round((score / questions.length) * 100)

        return (
            <section className="quizplay-page" id="quiz-results">
                <div className="quizplay-result anim">
                    <div className="result-emoji">{percent >= 70 ? '🏆' : percent >= 40 ? '👍' : '📚'}</div>
                    <h2>Quiz Complete!</h2>
                    <p className="result-subtitle">{quizData.title}</p>
                    <div className="result-score-ring">
                        <svg viewBox="0 0 120 120">
                            <circle cx="60" cy="60" r="52" fill="none" stroke="#e8e8e8" strokeWidth="8" />
                            <circle
                                cx="60" cy="60" r="52" fill="none"
                                stroke="var(--primary)" strokeWidth="8"
                                strokeLinecap="round"
                                strokeDasharray={`${percent * 3.27} 327`}
                                transform="rotate(-90 60 60)"
                                style={{ transition: 'stroke-dasharray 1s ease' }}
                            />
                        </svg>
                        <span className="result-percent">{percent}%</span>
                    </div>
                    <div className="result-stats">
                        <div className="result-stat">
                            <span className="result-stat-value">{totalScore}/{maxScore}</span>
                            <span className="result-stat-label">Score</span>
                        </div>
                        <div className="result-stat">
                            <span className="result-stat-value">{answeredCount}/{questions.length}</span>
                            <span className="result-stat-label">Answered</span>
                        </div>
                        <div className="result-stat">
                            <span className="result-stat-value">{score}</span>
                            <span className="result-stat-label">Correct</span>
                        </div>
                    </div>
                    <div className="result-actions">
                        <button onClick={() => navigate(0)} className="result-replay-btn">Play Again</button>
                        <Link to="/quiz" className="result-back-btn">All Quizzes</Link>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="quizplay-page" id="quizplay-page">
            <div className="quizplay-header">
                <span className="quizplay-topic-badge" style={{ background: quizData.color }}>
                    {quizData.icon} {quizData.title}
                </span>
                <span className={`quizplay-timer ${timeRemaining < 60 ? 'timer-danger' : ''}`}>
                    ⏱ {minutes}:{seconds < 10 ? '0' : ''}{seconds}
                </span>
            </div>

            <div className="quizplay-card anim">
                <div className="quizplay-progress">
                    <div
                        className="quizplay-progress-fill"
                        style={{ width: `${((questionIndex + 1) / questions.length) * 100}%` }}
                    ></div>
                </div>
                <h2 className="quizplay-question">{currentQ.question}</h2>
                <ul className="quizplay-options">
                    {['a', 'b', 'c', 'd'].map((opt, idx) => (
                        <li
                            key={opt}
                            className={`quizplay-option ${selectedAnswers[questionIndex] === idx ? 'selected' : ''} ${isSubmitted ? 'locked' : ''}`}
                            onClick={() => handleSelect(idx)}
                            id={`option-${opt}`}
                        >
                            <span className="option-letter">{opt.toUpperCase()}</span>
                            <span className="option-text">{currentQ[opt]}</span>
                        </li>
                    ))}
                </ul>
                <div className="quizplay-actions">
                    <button
                        className="quizplay-btn quizplay-prev"
                        onClick={() => setQuestionIndex(Math.max(0, questionIndex - 1))}
                        disabled={questionIndex === 0}
                        id="quiz-prev-btn"
                    >
                        ← Previous
                    </button>
                    {!isSubmitted ? (
                        <button
                            className="quizplay-btn quizplay-submit"
                            onClick={handleSubmitAnswer}
                            disabled={selectedAnswers[questionIndex] === null}
                            id="quiz-submit-btn"
                        >
                            Submit
                        </button>
                    ) : (
                        <button className="quizplay-btn quizplay-submitted" disabled>✓ Submitted</button>
                    )}
                    {questionIndex < questions.length - 1 ? (
                        <button
                            className="quizplay-btn quizplay-next"
                            onClick={() => setQuestionIndex(questionIndex + 1)}
                            id="quiz-next-btn"
                        >
                            Next →
                        </button>
                    ) : (
                        <button className="quizplay-btn quizplay-finish" onClick={handleFinishQuiz} id="quiz-finish-btn">
                            Finish
                        </button>
                    )}
                </div>
            </div>

            <div className="quizplay-squares" id="question-squares">
                {questions.map((_, i) => (
                    <button
                        key={i}
                        className={`quizplay-square ${i === questionIndex ? 'current' : ''} ${submittedAnswers[i] ? 'answered' : 'unanswered'}`}
                        onClick={() => setQuestionIndex(i)}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </section>
    )
}

export default QuizPlay
