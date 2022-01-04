import React, { useReducer } from 'react'

const Checkbox = () => {
  // const [checked, toggle] = useReducer((checked) => !checked, false)
  const [number, setNumber] = useReducer(
    (number, newNumber) => number ** newNumber,
    10,
  )

  return (
    <>
      {/* <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? 'checked' : 'not checked'} */}
      <h1 onClick={() => setNumber(2)}>{number}</h1>
    </>
  )
}

export default Checkbox
