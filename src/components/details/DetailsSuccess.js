import React from "react"
import Slide from "react-reveal/Slide"
import {
  DetailsWrapper,
  DetailsContent,
  DetailsHeading,
  DetailsCardSuccess,
} from "./styles"

const DetailsSuccess = () => (
  <DetailsWrapper>
    <Slide bottom>
      <DetailsContent>
        <DetailsHeading>Card Added!</DetailsHeading>
        <DetailsCardSuccess>
          <p>Your card details have been saved.</p>
          <h3>Next Steps</h3>
          <ul>
            <li>Checkout the repo on Github!</li>
            <li>Schedule an interview and hire me.</li>
            <li>Build some really cool stuff.</li>
          </ul>
        </DetailsCardSuccess>
      </DetailsContent>
    </Slide>
  </DetailsWrapper>
)

export default DetailsSuccess
