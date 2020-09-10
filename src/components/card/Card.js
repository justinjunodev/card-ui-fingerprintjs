import React from "react"
import { useOvermind } from "../../overmind"
import CardSuccess from "./CardSuccess"
import CardPlaceholder from "./CardPlaceholder"

const Card = () => {
  const { state } = useOvermind()

  return state.cardCreated ? <CardSuccess /> : <CardPlaceholder />
}

export default Card
