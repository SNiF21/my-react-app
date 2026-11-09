import { useEffect, useState } from 'react'

function KeyboardSearch() {
  const [search, setSearch] = useState('')

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        console.log('[KeyboardSearch] Escape pressed')
        setSearch('')
      }
    }

    console.log('[KeyboardSearch] adding keydown listener')
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      console.log('[KeyboardSearch] removing keydown listener')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <section className="exercise">
      <h2>Exercise 2: Keyboard subscription</h2>
      <label>
        Search
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Press Escape to clear"
        />
      </label>
      <p aria-live="polite">Search: {search || 'Nothing entered'}</p>
    </section>
  )
}

export default KeyboardSearch
