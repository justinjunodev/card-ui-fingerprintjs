import React from "react"
import Header from "./components/header"
import Card from "./components/card"
import Details from "./components/details/Details"
import Fingerprint from "./components/fingerprint"

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <Details />
      <Fingerprint />
    </div>
  )
}

export default App
