import { useEffect, useRef, useState } from 'react'

function UserById() {
  const [userId, setUserId] = useState('1')
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const requestId = useRef(0)

  useEffect(() => {
    const controller = new AbortController()
    const currentRequestId = requestId.current + 1
    requestId.current = currentRequestId

    if (!userId.trim()) {
      return () => {
        controller.abort()
      }
    }

    const loadUser = async () => {
      setLoading(true)
      setError('')
      setUser(null)

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
          { signal: controller.signal },
        )

        if (!response.ok) {
          throw new Error(`Could not load user ${userId}.`)
        }

        const nextUser = await response.json()

        if (requestId.current === currentRequestId) {
          setUser(nextUser)
        }
      } catch (requestError) {
        if (requestError.name !== 'AbortError' && requestId.current === currentRequestId) {
          setError(requestError.message)
        }
      } finally {
        if (requestId.current === currentRequestId) {
          setLoading(false)
        }
      }
    }

    loadUser()

    return () => {
      controller.abort()
    }
  }, [userId])

  const handleUserIdChange = (event) => {
    const nextUserId = event.target.value
    setUserId(nextUserId)

    if (!nextUserId.trim()) {
      setUser(null)
      setError('')
      setLoading(false)
    }
  }

  return (
    <section className="exercise">
      <h2>Exercise 3: Fetch when an ID changes</h2>
      <label>
        User ID
        <input
          type="number"
          min="1"
          value={userId}
          onChange={handleUserIdChange}
        />
      </label>
      {loading && <p>Loading...</p>}
      {error && <p role="alert">{error}</p>}
      {user && (
        <div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.company.name}</p>
        </div>
      )}
    </section>
  )
}

export default UserById
