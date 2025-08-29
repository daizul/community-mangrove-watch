import { useState } from 'react'


export default function LocationPicker({ value, onChange }) {
    const [loading, setLoading] = useState(false)


    const setField = (key, v) => {
        onChange({ ...value, [key]: v })
    }


    const useMyLocation = () => {
        if (!navigator.geolocation) return alert('Geolocation not supported')
        setLoading(true)
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setLoading(false)
                const { latitude, longitude } = pos.coords
                onChange({ ...value, lat: latitude, lng: longitude })
            },
            () => { setLoading(false); alert('Unable to fetch location') }
        )
    }


    return (
        <div className="grid md:grid-cols-3 gap-4">
            <div>
                <label className="label">Country</label>
                <input className="input" placeholder="India" value={value.country || ''} onChange={e => setField('country', e.target.value)} />
            </div>
            <div>
                <label className="label">State</label>
                <input className="input" placeholder="Gujarat" value={value.state || ''} onChange={e => setField('state', e.target.value)} />
            </div>
            <div>
                <label className="label">District/City</label>
                <input className="input" placeholder="Surat" value={value.district || ''} onChange={e => setField('district', e.target.value)} />
            </div>
            <div>
                <label className="label">Latitude</label>
                <input className="input" placeholder="21.1702" value={value.lat || ''} onChange={e => setField('lat', e.target.value)} />
            </div>
            <div>
                <label className="label">Longitude</label>
                <input className="input" placeholder="72.8311" value={value.lng || ''} onChange={e => setField('lng', e.target.value)} />
            </div>
            <div className="flex items-end">
                <button type="button" className="btn btn-outline w-full" onClick={useMyLocation} disabled={loading}>
                    {loading ? 'Fetching…' : 'Use My Location'}
                </button>
            </div>
        </div>
    )
}