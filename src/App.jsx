import { useState } from "react"
import NavBar from "./components/navbar/navbar.jsx"
import ItemListContainer from "./components/itemListContainer/itemListContainter.jsx"

function App() {
  const [cartCount, setCartCount] = useState(5)

  return (
    <>
      <NavBar cartCount={cartCount} title="OASIS"/>
      <ItemListContainer greetings="Bienvenido a Nuestro Vivero"/>
    </>
  )
}

export default App