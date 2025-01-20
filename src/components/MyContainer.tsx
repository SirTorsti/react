import React, { useState } from 'react'
import MyList from './MyList'

const MyContainer: React.FC = () => {
  const [items, setItems] = useState([
    { id: '1', text: 'Item 1', clicked: false },
    { id: '2', text: 'Item 2', clicked: false }
  ])
  const [newItemText, setNewItemText] = useState('')

  const addItem = () => {
    const newItem = {
      id: (items.length + 1).toString(),
      text: newItemText,
      clicked: false
    }
    setItems([...items, newItem])
    setNewItemText('')
  }

  const updateClickedItem = (id: string): void => {
    setItems(items.map(item =>
      item.id === id ? { ...item, clicked: !item.clicked } : item
    ))
  }

  return (
    <div>
      <MyList header="My List" items={items.map(({ clicked, ...rest }) => rest)} />
      <textarea
        value={newItemText}
        onChange={(e) => setNewItemText(e.target.value)}
        placeholder="Enter new item text"
      />
      <button onClick={addItem}>Add Item</button>
      <ol>
        {items.map(item => (
          <li
            key={item.id}
            onClick={() => updateClickedItem(item.id)}
            style={{ textDecoration: item.clicked ? 'line-through' : '' }}
          >
            {item.text}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default MyContainer