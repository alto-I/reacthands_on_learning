import React, { useMemo, useState } from 'react'
import { useCallback } from 'react'

const UseMemo = () => {
  const [count01, setCount01] = useState(0)
  const [count02, setCount02] = useState(0)

  const result01 = () => setCount01(count01 + 1)
  const result02 = () => setCount02(count02 + 1)

  const log = useCallback(() => {
    console.log('log実行！')
  }, [])

  const square = useMemo(() => {
    console.log('useMemo実行')
    log()
    return count02 * count02
  }, [count02, log])

  return (
    <>
      <div>result01: {count01}</div>
      <div>result02: {count02}</div>
      <div>square: {square}</div>
      <button onClick={result01}>increment</button>
      <button onClick={result02}>increment</button>
    </>
  )
}

export default UseMemo
