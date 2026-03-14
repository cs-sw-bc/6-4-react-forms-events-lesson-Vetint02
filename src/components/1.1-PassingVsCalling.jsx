import { useState } from 'react'

function PassingVsCalling() {
  const [rang, setRang] = useState(false)

  // 1. TODO: Define a named handler function that sets rang to true
  function handleRing() {
    setRang(true);
  }

  return (
    <div>
      <h2>Ring for Service</h2>

      {/* 2. TODO: Pass handleRing as a reference (not a call) to onClick */}
      <button onClick={handleRing}>Ring the Bell</button>

      {/* 3. TODO: Use an inline arrow function on onClick instead */}
      <button onClick={() => handleRing()}>Ring (inline arrow)</button>

      {rang && <p>Ding! A barista will be right with you.</p>}
    </div>
  )
}

export default PassingVsCalling
