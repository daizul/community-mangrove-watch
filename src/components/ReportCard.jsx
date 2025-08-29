export default function ReportCard({ report, onAction }) {
    return (
        <div className="card p-4 flex gap-4">
            {report.photos?.[0] && (
                <img src={report.photos[0]} alt={report.title} className="h-24 w-24 object-cover rounded-xl border" />
            )}
            <div className="flex-1">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">{report.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full border ${report.status === 'Resolved' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-yellow-50 text-yellow-700 border-yellow-200'}`}>
                        {report.status}
                    </span>
                </div>
                <p className="text-sm text-mangrove-700 mt-1">{report.category} • {(report.location?.state || 'Unknown State')}, {(report.location?.country || 'Unknown Country')}</p>
                <p className="text-sm mt-2 line-clamp-2">{report.description}</p>
                <p className="text-xs text-mangrove-600 mt-2">Reported: {new Date(report.createdAt).toLocaleString()}</p>
                {onAction && (
                    <div className="mt-3 flex gap-2">
                        <button onClick={() => onAction(report.id, 'In Review')} className="btn btn-outline">Mark In Review</button>
                        <button onClick={() => onAction(report.id, 'Resolved')} className="btn btn-primary">Mark Resolved</button>
                    </div>
                )}
            </div>
        </div>
    )
}