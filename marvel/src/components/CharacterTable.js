import React from 'react'
import CharacterItem from "./CharacterItem"

const CharacterTable = ({items,isLoading}) => {
  return  isLoading ? <h1  style={{color: 'white', position: 'absolute', top: 0, left: 0}}>Carregando</h1>:
  <section className = "contents">
    {
      items.map(item=>(
            <CharacterItem key={item.id} item={item}></CharacterItem>
      ))
    }

  </section>
}

export default CharacterTable

