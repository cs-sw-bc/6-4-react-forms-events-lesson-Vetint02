import { useState } from 'react'

function BookingForm() {
  // 1. Individual state for each field
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tickets, setTickets] = useState('')

  // 2. State for errors and submission
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  // 3. TODO: Write validate — check name is filled, email contains '@', tickets is filled
  //    Set errors and return true if no errors, false if there are errors
  function validate() {
    let newErrors = {}
    let validate = true;
    if(!name)
    {
      newErrors.name = 'please provide a valid name'
      validate = false;
    }
    if(!email)
    {
      newErrors.email = 'Email is mandatory'
      validate = false;
    }else if (!email.includes('@'))
    {
      newErrors.email = 'Enter proper email'
      validate = false;
    }
    setErrors(newErrors);

    return true;
  }

  // 4. TODO: Write handleSubmit — prevent default, run validate, set submitted if valid
  function handleSubmit(e) {
    e.preventDefault();
    if(validate())
    {
      setSubmitted(true)
    }
  }

  // 5. TODO: Derive canSubmit — true only when name, email, and tickets all have a value
  const canSubmit = name && email && tickets;

  // 6. TODO: If submitted, return a confirmation message instead of the form
  if (submitted)
  {
    return(
      <div>
        <p>Thank you, {name}. We'll keep in touch shortly!</p>
      </div>
    )
  }

  return (
    <div>
      <h2>Book Tickets</h2>
      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Name</label><br />
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        <br />

        <label htmlFor="email">Email</label><br />
        <input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        <br />

        <label htmlFor="tickets">Tickets</label><br />
        <select
          id="tickets"
          value={tickets}
          onChange={(e) => setTickets(e.target.value)}
        >
          <option value="">— select —</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        {errors.tickets && <p style={{ color: 'red' }}>{errors.tickets}</p>}
        <br /><br />

        {/* 5. TODO: Add disabled prop using canSubmit */}
        <button type="submit" disabled={!canSubmit}>Book Now</button>
      </form>
    </div>
  )
}

export default BookingForm