import { useState } from 'react'

function ShoppingList() {
  const [items, setItems] = useState([])
  const [itemName, setItemName] = useState('')

  const addItem = (event) => {
    event.preventDefault()
    const name = itemName.trim()

    if (!name) {
      return
    }

    setItems((currentItems) => [
      ...currentItems,
      {
        id: crypto.randomUUID(),
        name,
        purchased: false,
      },
    ])
    setItemName('')
  }

  const togglePurchased = (id) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, purchased: !item.purchased } : item,
      ),
    )
  }

  const removeItem = (id) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id))
  }

  const unpurchasedCount = items.filter((item) => !item.purchased).length

  return (
    <section className="exercise">
      <h2>Exercise 3: Shopping list</h2>
      <form className="shopping-form" onSubmit={addItem}>
        <label>
          Add an item
          <input
            type="text"
            value={itemName}
            onChange={(event) => setItemName(event.target.value)}
          />
        </label>
        <button type="submit">Add</button>
      </form>
      <p aria-live="polite">Unpurchased items: {unpurchasedCount}</p>
      <ul className="shopping-list">
        {items.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.purchased}
                onChange={() => togglePurchased(item.id)}
              />
              <span className={item.purchased ? 'purchased' : ''}>{item.name}</span>
            </label>
            <button type="button" onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ShoppingList
