import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const stored = localStorage.getItem('quizzyy_user')
        if (stored) {
            try {
                setUser(JSON.parse(stored))
            } catch {
                localStorage.removeItem('quizzyy_user')
            }
        }
    }, [])

    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem('quizzyy_users') || '[]')
        const found = users.find(u => u.email === email && u.password === password)
        if (found) {
            const userData = { email: found.email, firstName: found.firstName, lastName: found.lastName }
            setUser(userData)
            localStorage.setItem('quizzyy_user', JSON.stringify(userData))
            return { success: true }
        }
        return { success: false, message: 'Invalid email or password' }
    }

    const signup = (userData) => {
        const users = JSON.parse(localStorage.getItem('quizzyy_users') || '[]')
        const exists = users.find(u => u.email === userData.email)
        if (exists) {
            return { success: false, message: 'Email already registered' }
        }
        users.push(userData)
        localStorage.setItem('quizzyy_users', JSON.stringify(users))
        return { success: true }
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('quizzyy_user')
    }

    return (
        <AuthContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) throw new Error('useAuth must be used within AuthProvider')
    return context
}
