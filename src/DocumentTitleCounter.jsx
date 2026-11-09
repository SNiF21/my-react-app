import { useEffect, useState } from 'react'

function DocumentTitleCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const previousTitle = document.title
    document.title = `Count: ${count}`

    return () => {
      document.title = previousTitle
    }
  }, [count])

  return (
    <section className="exercise">
      <h2>Exercise 1: Synchronize the document title</h2>
      <p className="score">Count: {count}</p>
      <div className="controls">
        <button type="button" onClick={() => setCount((currentCount) => currentCount + 1)}>
          Increment
        </button>
        <button type="button" onClick={() => setCount((currentCount) => currentCount - 1)}>
          Decrement
        </button>
      </div>
    </section>
  )
}

export default DocumentTitleCounter
