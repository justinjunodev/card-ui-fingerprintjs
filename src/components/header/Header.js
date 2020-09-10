import React from "react"
import Fade from "react-reveal/Fade"
import { HeaderWrapper, HeaderLogo } from "./styles"

const Header = () => (
  <HeaderWrapper>
    <Fade duration={2500}>
      <HeaderLogo>Fingerprint</HeaderLogo>
    </Fade>
  </HeaderWrapper>
)

export default Header
