import React from "react"
import {
  DetailsWrapper,
  DetailsContent,
  DetailsHeading,
  DetailsCardSuccess,
} from "./styles"

const DetailsSuccess = () => (
  <DetailsWrapper>
    <DetailsContent>
      <DetailsHeading>Card Added!</DetailsHeading>
      <DetailsCardSuccess>
        <p>Your card details have been saved.</p>
        <h3>Next Steps</h3>
        <ul>
          <li>Checkout the repo on Github!</li>
          <li>Schedule an interview and hire me.</li>
          <li>Work and party together forever.</li>
        </ul>
      </DetailsCardSuccess>
    </DetailsContent>
  </DetailsWrapper>
)

export default DetailsSuccess
