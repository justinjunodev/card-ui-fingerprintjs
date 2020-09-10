import React from "react"
import { useOvermind } from "../../overmind"
import { CardWrapper, CardSuccessPreview, CardSuccessDetails } from "./styles"

function formatCardNumber(num) {
  return num.toString().replace(/\d{4}(?=.)/g, "$& ")
}

const CardSuccess = () => {
  const { state } = useOvermind()
  const { firstName, lastName, cardNumber, expYear } = state.cardDetails

  return (
    <CardWrapper>
      <CardSuccessPreview>
        <CardSuccessDetails>
          <li>{formatCardNumber(cardNumber)}</li>
          <li>
            {firstName} {lastName}
          </li>
          <li>
            <small>Expires {expYear}</small>
          </li>
        </CardSuccessDetails>
      </CardSuccessPreview>
    </CardWrapper>
  )
}

export default CardSuccess
