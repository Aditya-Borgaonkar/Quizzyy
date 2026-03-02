import { webQuestions } from './webQuestions'
import { dsQuestions } from './dsQuestions'
import { sqlQuestions } from './sqlQuestions'
import { cQuestions } from './cQuestions'
import { cppQuestions } from './cppQuestions'
import { javaQuestions } from './javaQuestions'

export const quizTopics = {
    web: {
        id: 'web',
        title: 'Web Development',
        description: "This is a basic quiz of Web Development. Let's go!",
        icon: '🌐',
        color: '#ff6b6b',
        questions: webQuestions
    },
    ds: {
        id: 'ds',
        title: 'Data Structure',
        description: "This is a basic quiz of Data Structures. Let's go!",
        icon: '🏗️',
        color: '#4ecdc4',
        questions: dsQuestions
    },
    sql: {
        id: 'sql',
        title: 'MySQL (Database)',
        description: "This is a basic quiz of SQL. Let's go!",
        icon: '🗃️',
        color: '#45b7d1',
        questions: sqlQuestions
    },
    c: {
        id: 'c',
        title: 'C',
        description: "This is a basic quiz of C Language. Let's go!",
        icon: '⚙️',
        color: '#96ceb4',
        questions: cQuestions
    },
    cpp: {
        id: 'cpp',
        title: 'C++',
        description: "This is a basic quiz of C++ Language. Let's go!",
        icon: '🔧',
        color: '#dda0dd',
        questions: cppQuestions
    },
    java: {
        id: 'java',
        title: 'Java',
        description: "This is a basic quiz of Java. Let's go!",
        icon: '☕',
        color: '#f7dc6f',
        questions: javaQuestions
    }
}
