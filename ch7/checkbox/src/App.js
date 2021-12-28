// import React, { useEffect, useMemo } from 'react'
// import useAnyKeyToRender from './UseAnyKeyToRender'
// import UseMemo from './square'
// import Counter from './Counter'
import React, { useEffect, useLayoutEffect } from 'react'
import { useState } from 'react'

// function WordCount({ children = '' }) {
//   useAnyKeyToRender()

//   const words = useMemo(() => {
//     const words = children.split(' ')
//     return words
//   }, [])

//   useEffect(() => {
//     console.log('fresh render')
//   }, [words])

//   return (
//     <>
//       <h1>{children}</h1>
//       <p>
//         <strong>{words.length} - words</strong>
//       </p>
//     </>
//   )
// }

function UseWindowSize() {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const resize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useLayoutEffect(() => {
    window.addEventListener('resize', resize)
    resize()
    return () => window.removeEventListener('resize', resize)
  })

  return [width, height]
}

function App() {
  useEffect(() => console.log('useEffect実行！'))
  useLayoutEffect(() => console.log('useLayoutEffect実行！'))
  return (
    <>
      レンダリング
      <UseWindowSize />
    </>
  )
}

export default App
