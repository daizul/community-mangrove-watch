import { useMemo, useState } from 'react'
import ReportCard from '../components/ReportCard.jsx'
import { getReportsByFilters, updateReportStatus } from '../utils/api.js'


export default function GovDashboard() {
    const [filters, setFilters] = useState({ country: 'India', state: '', district: '', category: 'All' })


    const reports = useMemo(() => getReportsByFilters(filters), [filters])


    const setField = (key, v) => setFilters(prev => ({ ...prev, [key]: v }))


    const handleAction = (id, status) => {
        updateReportStatus(id, status)
        // trigger refresh by updating filters (cheap trick)
        setFilters({ ...filters })
    }


    return (
        <div className="space-y-4">
            <h1 className="text-xl font-semibold">Government Dashboard</h1>


            <div className="card p-5 grid md:grid-cols-5 gap-3">
                <input className="input" placeholder="Country" value={filters.country} onChange={e => setField('country', e.target.value)} />
                <input className="input" placeholder="State" value={filters.state} onChange={e => setField('state', e.target.value)} />
                <input className="input" placeholder="District/City" value={filters.district} onChange={e => setField('district', e.target.value)} />
                <select className="input" value={filters.category} onChange={e => setField('category', e.target.value)}>
                    <option>All</option>
                    <option>Mangrove Cutting</option>
                    <option>Dumping</option>
                    <option>Pollution</option>
                </select>
                <button className="btn btn-outline" onClick={() => setFilters({ country: 'India', state: '', district: '', category: 'All' })}>Reset</button>
            </div>


            <div className="grid gap-3">
                {reports.map(r => (
                    <ReportCard key={r.id} report={r} onAction={handleAction} />
                ))}
                {reports.length === 0 && (
                    <p className="text-sm text-mangrove-700">No reports found for the selected filters.</p>
                )}
            </div>
        </div>
    )
}