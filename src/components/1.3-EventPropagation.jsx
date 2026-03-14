import { useState } from 'react'

function EventPropagation() {
  const [bannerVisible, setBannerVisible] = useState(true)
  const [log, setLog] = useState([])

  function addLog(msg) {
    setLog(prev => [...prev, msg])
  }

 // 1. Outer div handler — fires when the banner area is clicked
  function handleBannerClick() {
    addLog('Banner clicked → See full menu')
  }

 // 2. Inner button handler — fires when the X is clicked
  function handleDismissWithout() {
    addLog('X clicked (no stopPropagation) → banner handler also fires')
    // 3. Without stopPropagation, both this AND handleBannerClick fire
  }

  // 4. TODO: Define handleDismissWith — call e.stopPropagation(), hide the banner, log a message
  function handleDismissWith(e) {
    e.stopPropagation();
    addLog('X clicked - we dismiss event bubbling here')
  }

  return (
    <div>
      <h2>Daily Specials</h2>

      {bannerVisible && (
        // 1. TODO: Add onClick={handleBannerClick} to this div
        <div onClick={handleBannerClick} style={{ border: '2px solid #c8a96e', padding: '1rem', cursor: 'pointer' }}>
          <strong>Today: Lavender Latte & Oat Croissant</strong>

          {/* 2. TODO: Add onClick={handleDismissWithout} to this button */}
          <button onClick={() => handleDismissWithout()} style={{ marginLeft: '1rem' }}>✕ (no stop)</button>

          {/* 4. TODO: Add onClick={handleDismissWith} to this button */}
          <button onClick={(e) => handleDismissWith(e)} style={{ marginLeft: '0.5rem' }}>✕ (with stop)</button>
        </div>
      )}

      <ul>{log.map((entry, i) => <li key={i}>{entry}</li>)}</ul>
    </div>
  )
}

export default EventPropagation
