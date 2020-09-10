import styled from "@emotion/styled"
import fpjs from "../../assets/fpjs-logo.png"

export const CardWrapper = styled.section`
  background-color: var(--primary);
  padding: var(--xxl) 0;
  > div {
    margin: var(--xs) auto;
    height: 251px;
    max-width: 468px;
    width: calc(100 % - (var(--md) * 2));
    background-image: url(${fpjs});
    background-repeat: no-repeat;
    background-blend-mode: lighten;
    background-size: 20%;
    box-shadow: var(--shadow);
    border-radius: var(--xs);
    border: 2px solid var(--light);
  }
`

export const CardPlaceholderPreview = styled.div`
  background-position: center center;
`

export const CardSuccessPreview = styled.div`
  background-position: top right;
`

export const CardSuccessDetails = styled.ul`
  color: white;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: flex-end;
  height: 100%;
  padding: var(--md);
  li:not(:last-of-type) {
    font-size: var(--md);
    margin-bottom: var(--xs);
  }
`
