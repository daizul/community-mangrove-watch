/**
* Simple localStorage-based API for demo/hackathon.
* Replace with real backend later.
*/


const LS_REPORTS_KEY = 'cmw_reports'


export function getAllReports() {
    const raw = localStorage.getItem(LS_REPORTS_KEY)
    return raw ? JSON.parse(raw) : []
}


export function saveAllReports(list) {
    localStorage.setItem(LS_REPORTS_KEY, JSON.stringify(list))
}


export function addReport(report) {
    const list = getAllReports()
    list.unshift({ ...report, id: crypto.randomUUID(), createdAt: new Date().toISOString(), status: 'Submitted' })
    saveAllReports(list)
    return list[0]
}


export function getReportsByUser(userId) {
    return getAllReports().filter(r => r.userId === userId)
}


export function getReportsByFilters({ country, state, district, category }) {
    let list = getAllReports()
    if (country) list = list.filter(r => (r.location?.country || '').toLowerCase() === country.toLowerCase())
    if (state) list = list.filter(r => (r.location?.state || '').toLowerCase() === state.toLowerCase())
    if (district) list = list.filter(r => (r.location?.district || '').toLowerCase() === district.toLowerCase())
    if (category && category !== 'All') list = list.filter(r => r.category === category)
    return list
}


export function updateReportStatus(id, status) {
    const list = getAllReports()
    const idx = list.findIndex(r => r.id === id)
    if (idx >= 0) {
        list[idx].status = status
        saveAllReports(list)
    }
}