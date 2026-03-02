import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import '../styles/Team.css'

const teamMembers = [
    {
        name: 'Shantanu Deshamane',
        stars: [1, 1, 1, 1, 0.5],
        description: 'Shantanu is the coder who brings our quizzes to life. With his expertise in front-end and back-end development, he turns ideas into reality, ensuring an exceptional user experience on our platform.',
        gradient: 'linear-gradient(135deg, #667eea, #764ba2)'
    },
    {
        name: 'Aditya Borgaonkar',
        stars: [1, 1, 1, 0.5, 0],
        description: 'As the visionary behind Quizzyy, Aditya is passionate about making learning fun through interactive quizzes. With experience in web development and a knack for creating captivating content.',
        gradient: 'linear-gradient(135deg, #f093fb, #f5576c)'
    },
    {
        name: 'Abhishek Chavhan',
        stars: [1, 1, 1, 0.5, 0],
        description: 'Abhishek is the creative force behind the quizzes you love. With a passion for writing, he curates exciting quiz topics and ensures that each quiz is not only entertaining but also informative.',
        gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)'
    }
]

function Team() {
    return (
        <section className="team-page" id="team-page">
            <div className="team-header anim">
                <h1>OUR TEAM</h1>
                <div className="team-header-line"></div>
            </div>
            <div className="team-grid">
                {teamMembers.map((member, idx) => (
                    <div className={`team-card anim anim-delay-${idx + 2}`} key={member.name}>
                        <div className="team-card-avatar" style={{ background: member.gradient }}>
                            <span className="team-card-initial">{member.name.charAt(0)}</span>
                        </div>
                        <h3 className="team-card-name">{member.name}</h3>
                        <div className="team-card-stars">
                            {member.stars.map((star, i) => (
                                star === 1 ? <FaStar key={i} /> :
                                    star === 0.5 ? <FaStarHalfAlt key={i} /> :
                                        <FaStar key={i} className="star-empty" />
                            ))}
                        </div>
                        <p className="team-card-desc">{member.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Team
