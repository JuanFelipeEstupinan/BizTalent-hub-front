import { useState } from 'react'

export default function CandidateManagement() {
  const [search, setSearch] = useState('')

  return (
    <div>
      <h2>Candidate Search &amp; Management</h2>
      <input
        placeholder="Search candidates"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* Candidate list would be rendered here based on search */}
      <p style={{ marginTop: '1rem' }}>
        Searching for: <strong>{search}</strong>
      </p>
    </div>
  )
}
