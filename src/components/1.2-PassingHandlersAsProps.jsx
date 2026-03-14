import { useState } from 'react'

// 4. TODO: Accept the handler as a prop and attach it to the button's onClick
function LoyaltyButton({onStamp}) {
  return <button onClick={onStamp}>Stamp My Card</button>
}

function LoyaltyCard() {
  // 1. TODO: Add a points state variable starting at 0
    const [points, setPoints] = useState(0)

  // 2. TODO: Define a handleStamp function that adds 1 to points
  function handleStamp() {
    setPoints(points + 1);
  }

  return (
    <div>
      <h2>Loyalty Card</h2>
      <p>Points:  {points}</p>
      {/* 3. TODO: Pass handleStamp to LoyaltyButton as a prop called onStamp */}
      <LoyaltyButton buttonText='LoyaltyButton' onStamp={()=> {handleStamp()}}/>
    </div>
  )
}

export default LoyaltyCard
