import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'


const AuthContext = createContext()


const LS_USER_KEY = 'cmw_user'


export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)


    useEffect(() => {
        const saved = localStorage.getItem(LS_USER_KEY)
        if (saved) setUser(JSON.parse(saved))
    }, [])


    const login = (role, name) => {
        const u = { id: crypto.randomUUID(), role, name }
        setUser(u)
        localStorage.setItem(LS_USER_KEY, JSON.stringify(u))
    }


    const logout = () => {
        setUser(null)
        localStorage.removeItem(LS_USER_KEY)
    }


    const value = useMemo(() => ({ user, login, logout }), [user])


    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}


export function useAuth() {
    const ctx = useContext(AuthContext)
    if (!ctx) throw new Error('useAuth must be used within AuthProvider')
    return ctx
}