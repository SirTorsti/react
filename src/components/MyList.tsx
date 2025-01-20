import React from 'react'

type TItem = {
    id: string  
    text: string
    clicked: boolean
}

interface Listprops {
    header: string
    items: TItem[]
    onItemClick: (id: string) => void

}
const MyList: React.FC<Listprops> =({header, items, onItemClick}) => {
  return (
    <div>
        <h2>{header}</h2>
        <ol>
            {items.map(item => (
                <li 
                key={item.id}
                onClick={() => onItemClick(item.id)}
                style={{ textDecoration: item.clicked ? 'line-through' : 'none' }}
                >
                {item.text}
                </li>
            ))}
        </ol>
    </div>
  )
}

export default MyList;