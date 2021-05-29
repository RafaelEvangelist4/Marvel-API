import './App.css';
import Header from "./components/Header"
import CharacterTable from "./components/CharacterTable"
import axios from "axios"
import React , {useEffect,useState} from "react"

const hash = "8dfe45761350544a26b0837e033c03fb"

function App() {
  const[items,setItems] = useState([])
  const[isLoading,setLoading] = useState(true)

  useEffect(()=>{
    const fetch = async()=>{
      const result = await axios(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=1e06e4a444f5a1990886ddbd0a78ac84&hash=${hash}`)
      console.log(result.data)
      setItems(result.data)
      setLoading(false)
    }

    fetch()
  },[])

  return (
    <div className="container">
        <Header />
        <CharacterTable items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
