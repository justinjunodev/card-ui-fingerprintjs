import React from "react"
import { useOvermind } from "../../overmind"
import DetailsSuccess from "./DetailsSuccess"
import DetailsForm from "./DetailsForm"

const Details = () => {
  const { state } = useOvermind()

  return state.cardCreated ? <DetailsSuccess /> : <DetailsForm />
}

export default Details
