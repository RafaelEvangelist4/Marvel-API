import React, {useState} from 'react'

const Search = ({search}) => {
  const [text,setText] = useState("")

  const onSearch= (q)=>{
    setText(q)
    search(q)
  }

  return (
    <section className = "search">
      <form>
        <input type = "text"  style={{color: 'white'}}
        className = "form-control"
        placeholder = "Encontre um herói"
        autoFocus
        onChange={(e)=>onSearch(e.target.value)}
        value={text}/>
      </form>
    </section>
  )
}

export default Search
