import ReportCard from '../components/ReportCard.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import { getReportsByUser } from '../utils/api.js'


export default function UserReports() {
    const { user } = useAuth()
    const myReports = getReportsByUser(user.id)


    return (
        <div className="space-y-4">
            <h1 className="text-xl font-semibold">My Reports</h1>
            <div className="grid gap-3">
                {myReports.map(r => (
                    <ReportCard key={r.id} report={r} />
                ))}
                {myReports.length === 0 && (
                    <p className="text-sm text-mangrove-700">No reports yet.</p>
                )}
            </div>
        </div>
    )
}