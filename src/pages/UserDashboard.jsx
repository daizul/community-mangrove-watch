import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { getReportsByUser } from '../utils/api.js'


export default function UserDashboard() {
    const { user } = useAuth()
    const myReports = getReportsByUser(user.id)
    const points = myReports.length * 10
    const resolved = myReports.filter(r => r.status === 'Resolved').length


    return (
        <div className="space-y-6">
            <section className="grid md:grid-cols-3 gap-4">
                <div className="card p-5">
                    <p className="text-sm text-mangrove-700">Total Reports</p>
                    <p className="text-3xl font-bold">{myReports.length}</p>
                </div>
                <div className="card p-5">
                    <p className="text-sm text-mangrove-700">Resolved</p>
                    <p className="text-3xl font-bold">{resolved}</p>
                </div>
                <div className="card p-5">
                    <p className="text-sm text-mangrove-700">My Points</p>
                    <p className="text-3xl font-bold">{points}</p>
                </div>
            </section>


            <section className="card p-5 flex flex-col md:flex-row items-center gap-4">
                <div className="flex-1">
                    <h2 className="text-xl font-semibold">Submit a New Report</h2>
                    <p className="text-mangrove-700">Report mangrove cutting, dumping, or pollution with photos and location.</p>
                </div>
                <Link className="btn btn-primary" to="/user/new">Upload Report</Link>
            </section>


            <section className="card p-5">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Recent Reports</h3>
                    <Link className="btn btn-outline" to="/user/reports">View All</Link>
                </div>
                <div className="mt-4 grid gap-3">
                    {myReports.slice(0, 5).map(r => (
                        <div key={r.id} className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">{r.title}</p>
                                <p className="text-sm text-mangrove-700">{r.category} • {r.location?.state || 'Unknown'}</p>
                            </div>
                            <span className="text-xs px-2 py-1 rounded-full border bg-white">{r.status}</span>
                        </div>
                    ))}
                    {myReports.length === 0 && (
                        <p className="text-sm text-mangrove-700">No reports yet. Start by creating one!</p>
                    )}
                </div>
            </section>
        </div>
    )
}