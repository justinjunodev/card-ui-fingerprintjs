import React from "react"
import Card from "./components/card"
import Form from "./components/form"
import Fingerprint from "./components/fingerprint"

function App() {
  return (
    <div className="App">
      <h1>Hello, Fingerprint!</h1>
      <Card />
      <Form />
      <Fingerprint />
    </div>
  )
}

export default App
