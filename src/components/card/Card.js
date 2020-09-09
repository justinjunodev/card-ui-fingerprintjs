import React from "react"
import { useOvermind } from "../../overmind"

const Card = () => {
  const { state } = useOvermind()
  if (state.cardDetails) {
    const { firstName } = state.cardDetails
    return (
      <section>
        <h3>Card Visual</h3>
        <p>{firstName}</p>
      </section>
    )
  }
  return <div>Placeholder for empty card.</div>
}

export default Card
