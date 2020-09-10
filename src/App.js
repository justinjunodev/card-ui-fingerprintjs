import React from "react"
import Header from "./components/header"
import Card from "./components/card"
import Details from "./components/details/Details"
import Environment from "./components/environment"

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <Details />
      <Environment />
    </div>
  )
}

export default App
