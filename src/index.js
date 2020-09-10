import React from "react"
import ReactDOM from "react-dom"
import { Global } from "@emotion/core"
import { createOvermind } from "overmind"
import { Provider } from "overmind-react"
import GlobalStyles from "./styles/globalStyles"
import { config } from "./overmind"
import Inject from "./components/inject"
import App from "./App"

const overmind = createOvermind(config)

ReactDOM.render(
  <React.StrictMode>
    <Provider value={overmind}>
      <Inject />
      <Global styles={GlobalStyles} />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
