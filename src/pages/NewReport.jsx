import { useState } from 'react'


return (
    <div className="max-w-3xl">
        <h1 className="text-xl font-semibold mb-4">New Report</h1>
        <form className="card p-6 space-y-4" onSubmit={onSubmit}>
            <div>
                <label className="label">Title</label>
                <input className="input" placeholder="Illegal cutting near creek" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div>
                <label className="label">Category</label>
                <select className="input" value={category} onChange={e => setCategory(e.target.value)}>
                    <option>Mangrove Cutting</option>
                    <option>Dumping</option>
                    <option>Pollution</option>
                </select>
            </div>
            <div>
                <label className="label">Description</label>
                <textarea className="input min-h-[120px]" placeholder="Describe the issue…" value={description} onChange={e => setDescription(e.target.value)} />
            </div>
            <div>
                <label className="label">Location</label>
                <LocationPicker value={location} onChange={setLocation} />
            </div>
            <div>
                <label className="label">Photos</label>
                <div className="grid gap-3">
                    <input type="file" accept="image/*" multiple onChange={e => onFiles(e.target.files)} />
                    {photos.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {photos.map((p, i) => (
                                <img key={i} src={p} className="h-24 w-full object-cover rounded-xl border" />
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="flex gap-3">
                <button className="btn btn-primary" type="submit">Submit Report</button>
            </div>
        </form>
    </div>
)
}