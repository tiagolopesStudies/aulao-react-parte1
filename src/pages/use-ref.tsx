import { useEffect, useRef, useState } from 'react'

export function UseRefPage() {
  const inputElement = useRef<HTMLInputElement>(null)
  const [count, setCount] = useState(0)
  const intervalRef = useRef<number | null>(null)

  function handleClick() {
    if (inputElement.current) {
      inputElement.current.focus()
      inputElement.current.value = 'Tiago Lopes'
    }
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((c) => c + 1)
    }, 1000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  function stopCounting() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  function continueCounting() {
    intervalRef.current = setInterval(() => {
      setCount((c) => c + 1)
    }, 1000)
  }

  return (
    <div>
      <h1>UseRef Page</h1>
      <p>This is the UseRef Page!</p>

      <h2>Focus Input</h2>

      <input ref={inputElement} type="text" />
      <button type="button" onClick={handleClick}>
        Focus and write my name
      </button>

      <h2>Interval counter</h2>

      <p>Count: {count}</p>
      <button type="button" onClick={stopCounting}>
        Stop counting
      </button>
      <button type="button" onClick={continueCounting}>
        Continue counting
      </button>
    </div>
  )
}
