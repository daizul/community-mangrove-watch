import { useAuth } from '../context/AuthContext.jsx'
import { getReportsByUser } from '../utils/api.js'


export default function Profile() {
    const { user } = useAuth()
    const myReports = getReportsByUser(user.id)
    const points = myReports.length * 10


    return (
        <div className="max-w-xl">
            <div className="card p-6 space-y-3">
                <h1 className="text-xl font-semibold">My Profile</h1>
                <div>
                    <p className="text-sm text-mangrove-700">Name</p>
                    <p className="font-medium">{user.name}</p>
                </div>
                <div>
                    <p className="text-sm text-mangrove-700">Role</p>
                    <p className="font-medium capitalize">{user.role}</p>
                </div>
                <div>
                    <p className="text-sm text-mangrove-700">Points</p>
                    <p className="font-medium">{points}</p>
                </div>
            </div>
        </div>
    )
}