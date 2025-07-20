import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/post-job" style={{ marginRight: '1rem' }}>Post Job</Link>
      <Link to="/candidates" style={{ marginRight: '1rem' }}>Candidates</Link>
      <Link to="/payment" style={{ marginRight: '1rem' }}>Payment</Link>
    </nav>
  )
}
