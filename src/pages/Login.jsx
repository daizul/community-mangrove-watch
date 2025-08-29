import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'


export default function Login() {
    const [role, setRole] = useState('user')
    const [name, setName] = useState('')
    const { login } = useAuth()
    const navigate = useNavigate()


    const onSubmit = (e) => {
        e.preventDefault()
        if (!name.trim()) return alert('Please enter your name')
        login(role, name.trim())
        navigate(role === 'user' ? '/user' : '/gov', { replace: true })
    }


    return (
        <div className="max-w-lg mx-auto">
            <div className="card p-6">
                <h1 className="text-2xl font-bold">Welcome to Community Mangrove Watch</h1>
                <p className="text-mangrove-700 mt-1">Log in as a community user or a government official.</p>
                <form className="mt-6 space-y-4" onSubmit={onSubmit}>
                    <div>
                        <label className="label">Full Name</label>
                        <input className="input" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        <span className="label">Select Role</span>
                        <div className="grid grid-cols-2 gap-3">
                            <button type="button" className={`btn ${role === 'user' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setRole('user')}>User</button>
                            <button type="button" className={`btn ${role === 'gov' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setRole('gov')}>Government</button>
                        </div>
                    </div>
                    <button className="btn btn-primary w-full" type="submit">Continue</button>
                </form>
            </div>
        </div>
    )
}