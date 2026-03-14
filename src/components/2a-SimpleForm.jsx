import { useState } from 'react'

function SimpleForm() {
  // 1. Uncontrolled example — React cannot see this value, avoid this pattern
  // <input type="text" defaultValue="Espresso" />

  // 2. TODO: Add a controlled state variable for drink (start with empty string)
  const [drink, setDrink] = useState("");

  // 3. TODO: Add a controlled state variable for milk (start with 'whole')
  const [milk, setMilk] = useState("whole");

  // 4. TODO: Add a controlled state variable for notes (start with empty string)
  const [notes, setNotes] = useState("");

  return (
    <div>
      <h2>Barista Preference Survey</h2>

      {/* 2. TODO: Add value and onChange props to make this a controlled input */}
      <label htmlFor="drink">Favourite drink</label>
      <br />
      <input id="drink" type="text" value={drink} onChange={(e) => {setDrink(e.target.value)}}/>
      <br /><br />

      {/* 3. TODO: Add value and onChange props to make this a controlled select */}
      <label htmlFor="milk">Preferred milk</label>
      <br />
      <select id="milk" value={milk} onChange={(e) => {setMilk(e.target.value)}}>
        <option value="whole">Whole</option>
        <option value="oat">Oat</option>
        <option value="almond">Almond</option>
        <option value="soy">Soy</option>
      </select>
      <br /><br />

      {/* 4. TODO: Add value and onChange props to make this a controlled textarea */}
      <label htmlFor="notes">Any notes for your barista?</label>
      <br />
      <textarea id="notes" rows={3} value={notes} onChange={(e) => {setNotes(e.target.value)}}/>
      <br /><br />

      {/* 5. TODO: Display the live values of drink, milk, and notes below */}
      <div style={{ background: '#f5f0e8', padding: '0.75rem' }}>
        <strong>Your order preview:</strong>
        <p>Drink: {drink || "No drink selected"}</p>
        <p>Milk: {milk}</p>
        <p>Notes: {notes || "no special instructions"}</p>
      </div>
    </div>
  )
}

export default SimpleForm
