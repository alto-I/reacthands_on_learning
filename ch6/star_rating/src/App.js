import React, { useState } from 'react'
import Star from './Star'

function App({ style = {}, totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(3)
  return (
    <div style={{ padding: "5px", ...style}}>
      {[...Array(totalStars)].map((n, i) => (
        <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  )
}

export default App
