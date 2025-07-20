import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import JobWizard from './features/jobWizard/JobWizard'
import CandidateManagement from './features/candidates/CandidateManagement'
import StripeCheckout from './features/payments/StripeCheckout'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post-job" element={<JobWizard />} />
          <Route path="/candidates" element={<CandidateManagement />} />
          <Route path="/payment" element={<StripeCheckout />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
