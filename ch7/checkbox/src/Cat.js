import { useState, memo } from 'react'

const Cat = ({ name }) => {
  console.log(`rendering ${name}`)
  return <p>{name}</p>
}

const PureCat = memo(Cat)

export default PureCat
