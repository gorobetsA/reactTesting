import React from 'react'
import Character from './Character'

const App = ({side}) => {
  if (!side) {
    side = 'light'
  }

  const characters = [
    {name: 'Luke Skywalker', side: 'light'},
    {name: 'Yoda', side: 'light'},
    {name: 'Obi-Wan Kenobi', side: 'light'},
    {name: 'Palpatine', side: 'dark'},
    {name: 'Darth Vader', side: 'dark'}
  ]

  const filteredChars = characters.filter(char => char.side === side)

  return (
      <ul>
        {filteredChars.map((char, index) => (
            <Character key={char.name + index} name={char.name} side={char.side} />
        ))}
      </ul>
  )
}

export default App