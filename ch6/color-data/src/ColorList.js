import React from 'react'
import { useContext } from 'react/cjs/react.production.min'
import { ColorContext } from '.'
import Color from './Color'

export default function ColorList() {
  const { colors } = useContext(ColorContext)
  if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>
  return (
    <div>
      {colors.map((color) => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  )
}
