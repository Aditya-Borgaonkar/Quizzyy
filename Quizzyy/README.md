# 🧠 Quizzyy — Brain Workout

**Challenge your knowledge with interactive coding quizzes!**

Quizzyy is a modern, single-page quiz application built with React. Test your skills across multiple programming topics including Web Development, Data Structures, SQL, C, C++, and Java.

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-Private-red)

---

## ✨ Features

- **📝 Multiple Quiz Topics** — Web Development, Data Structures, SQL, C, C++, and Java
- **🎯 Interactive Quiz Play** — Answer questions with instant feedback
- **🔐 Authentication** — Sign In / Sign Up with mock auth via localStorage
- **📱 Responsive Design** — Works seamlessly on desktop, tablet, and mobile
- **⚡ Fast & Lightweight** — Powered by Vite for blazing-fast development and builds
- **🎨 Premium UI** — Modern design with smooth animations, Google Fonts (Inter), and a polished look

---

## 🛠️ Tech Stack

| Technology      | Purpose                 |
| --------------- | ----------------------- |
| React 18        | UI framework            |
| React Router v6 | Client-side routing     |
| React Icons     | Icon library            |
| Vite 6          | Build tool & dev server |
| Vanilla CSS     | Styling                 |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/quizzyy.git
   cd quizzyy
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 📁 Project Structure

```
Quizzyy/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.jsx      # Navigation bar
│   │   └── Footer.jsx      # Footer section
│   ├── context/            # React context providers
│   ├── data/               # Quiz question data
│   │   ├── webQuestions.js  # Web Development questions
│   │   ├── dsQuestions.js   # Data Structures questions
│   │   ├── sqlQuestions.js  # SQL questions
│   │   ├── cQuestions.js    # C language questions
│   │   ├── cppQuestions.js  # C++ questions
│   │   ├── javaQuestions.js # Java questions
│   │   └── index.js        # Data exports
│   ├── pages/              # Application pages
│   │   ├── Home.jsx        # Landing page
│   │   ├── About.jsx       # About us
│   │   ├── Contact.jsx     # Contact form
│   │   ├── Team.jsx        # Team members
│   │   ├── QuizSelect.jsx  # Quiz topic selection
│   │   ├── QuizPlay.jsx    # Quiz gameplay
│   │   ├── SignIn.jsx      # Sign in page
│   │   └── SignUp.jsx      # Sign up page
│   ├── styles/             # CSS stylesheets
│   ├── App.jsx             # Root app component with routing
│   └── main.jsx            # Application entry point
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
└── package.json            # Project metadata & dependencies
```

---

## 🗺️ Routes

| Path           | Page        | Description                     |
| -------------- | ----------- | ------------------------------- |
| `/`            | Home        | Landing page                    |
| `/about`       | About       | About the project               |
| `/contact`     | Contact     | Contact form                    |
| `/team`        | Team        | Meet the team                   |
| `/quiz`        | Quiz Select | Choose a quiz topic             |
| `/quiz/:topic` | Quiz Play   | Play a quiz on the chosen topic |
| `/signin`      | Sign In     | User login                      |
| `/signup`      | Sign Up     | User registration               |

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is private and not currently licensed for public distribution.

---

<p align="center">Made with ❤️ by the <strong>Quizzyy Team</strong></p>
