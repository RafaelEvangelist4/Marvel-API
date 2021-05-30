import './App.css';
import Header from "./components/Header"
import CharacterTable from "./components/CharacterTable"
import Search from "./components/Search"
import axios from "axios"
import React , {useEffect,useState} from "react"

const hash = "8dfe45761350544a26b0837e033c03fb"

function App() {
  const[items,setItems] = useState([])
  const[isLoading,setLoading] = useState(true)
  const [query,setQuery] = useState("")

  useEffect(()=>{
    const fetch = async()=>{
      const result = await axios(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=1e06e4a444f5a1990886ddbd0a78ac84&hash=${hash}`)
      console.log(result.data.data.results)
      setItems(result.data.data.results)
      setLoading(false)
    }

    fetch()
  },[])

  return (
    <div className="container">
        <Header />
        <Search Search = {(q)=>setQuery(q)}></Search>
        <CharacterTable items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
