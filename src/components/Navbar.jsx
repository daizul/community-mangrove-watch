import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'


export default function Navbar() {
    const { user, logout } = useAuth()
    const { pathname } = useLocation()


    return (
        <header className="bg-white border-b border-mangrove-100">
            <div className="container-max py-3 flex items-center gap-4">
                <Link to={user ? (user.role === 'user' ? '/user' : '/gov') : '/login'} className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-xl bg-mangrove-600 text-white grid place-items-center font-bold">CW</div>
                    <span className="font-semibold">Community Mangrove Watch</span>
                </Link>
                <nav className="ml-auto flex items-center gap-3">
                    {!user && (
                        <Link className={`btn btn-outline ${pathname === '/login' ? 'ring-2 ring-mangrove-400' : ''}`} to="/login">Login</Link>
                    )}
                    {user && user.role === 'user' && (
                        <>
                            <Link className="btn btn-outline" to="/user/reports">My Reports</Link>
                            <Link className="btn btn-primary" to="/user/new">New Report</Link>
                            <Link className="btn btn-outline" to="/user/profile">Profile</Link>
                            <button className="btn btn-outline" onClick={logout}>Logout</button>
                        </>
                    )}
                    {user && user.role === 'gov' && (
                        <>
                            <Link className="btn btn-outline" to="/gov">Dashboard</Link>
                            <button className="btn btn-outline" onClick={logout}>Logout</button>
                        </>
                    )}
                </nav>
            </div>
        </header>
    )
}