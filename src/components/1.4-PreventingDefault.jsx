import { useState } from 'react'

function PreventingDefault() {
  const [email, setEmail] = useState('')
  // 3. TODO: Add a submitted state variable starting at false
  const [submitted, setSubmitted] = useState(false)

  // 1. TODO: Define handleSubmit(e) that:
  //    - calls e.preventDefault()        (step 2)
  //    - sets submitted to true           (step 3)
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  // 4. TODO: If submitted is true, return a confirmation <p> instead of the form
  if (submitted) {
    return (
      <div>
        <h2>Newsletter Signup</h2>
        <p>You're subscribed! Welcome to the Coffee Corner newsletter, {email}.</p>
      </div>
    )
  }

  return (
    <div>
      <h2>Newsletter Signup</h2>

      {/* 1. TODO: Add onSubmit={handleSubmit} to this form */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="newsletter-email">Email address</label>
        <br />
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
        <br />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  )
}

export default PreventingDefault
