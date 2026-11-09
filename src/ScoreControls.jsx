import { useState } from 'react'

function ScoreControls() {
  const [score, setScore] = useState(0)

  const increment = (amount = 1) => {
    setScore((currentScore) => currentScore + amount)
  }

  const decrement = () => {
    setScore((currentScore) => Math.max(0, currentScore - 1))
  }

  const incrementThreeTimes = () => {
    setScore((currentScore) => currentScore + 1)
    setScore((currentScore) => currentScore + 1)
    setScore((currentScore) => currentScore + 1)
  }

  return (
    <section className="exercise">
      <h2>Exercise 1: Score controls</h2>
      <p className="score" aria-live="polite">
        Score: {score}
      </p>
      <div className="controls">
        <button type="button" onClick={() => increment()}>
          +1
        </button>
        <button type="button" onClick={decrement}>
          -1
        </button>
        <button type="button" onClick={() => increment(5)}>
          +5
        </button>
        <button type="button" onClick={incrementThreeTimes}>
          +3
        </button>
        <button type="button" onClick={() => setScore(0)} disabled={score === 0}>
          Reset
        </button>
      </div>
    </section>
  )
}

export default ScoreControls
