import React from "react"
import Fade from "react-reveal/Fade"
import { CardWrapper, CardPlaceholderPreview } from "./styles"

const CardPlaceholder = () => (
  <CardWrapper>
    <Fade duration={2500}>
      <CardPlaceholderPreview />
    </Fade>
  </CardWrapper>
)

export default CardPlaceholder
