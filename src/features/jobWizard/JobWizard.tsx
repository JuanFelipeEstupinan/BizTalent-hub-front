import { useState } from 'react'

const steps = ['Job Details', 'Requirements', 'Review']

export default function JobWizard() {
  const [step, setStep] = useState(0)

  function next() {
    setStep((s) => Math.min(s + 1, steps.length - 1))
  }

  function prev() {
    setStep((s) => Math.max(s - 1, 0))
  }

  return (
    <div>
      <h2>Create Job Posting</h2>
      <p>Step {step + 1}: {steps[step]}</p>
      {/* Form fields for each step would go here */}
      <div style={{ marginTop: '1rem' }}>
        <button onClick={prev} disabled={step === 0}>Back</button>
        {step < steps.length - 1 ? (
          <button onClick={next}>Next</button>
        ) : (
          <button onClick={() => alert('Submit job')}>Submit</button>
        )}
      </div>
    </div>
  )
}
