import styled from "@emotion/styled"

export const DetailsWrapper = styled.main`
  margin: 0 auto;
  background: linear-gradient(
    to Bottom,
    var(--primary) calc(var(--xl) * 2),
    transparent 0
  );
`

export const DetailsContent = styled.div`
  margin: 0 auto var(--xl);
  max-width: 468px;
  width: calc(100% - (var(--md) * 2));
  padding: var(--xl) var(--md);
  background: white;
  border-radius: var(--xs);
  border: 2px solid var(--primary);
  box-shadow: var(--shadow);
`

export const DetailsHeading = styled.h2`
  color: var(--primary);
  margin-bottom: var(--md);
`

export const DetailsCardSuccess = styled.div`
  h3 {
    color: var(--primary);
  }
  ul {
    margin-bottom: 0;
    li::before {
      content: "•";
      color: var(--accent);
      font-weight: bold;
      display: inline-block;
      width: var(--sm);
      margin-left: var(-sm);
    }
  }
  a {
    color: var(--primary);
    text-decoration: none;
  }
`

export const DetailsCardForm = styled.form`
  display: flex;
  flex-flow: column;
`

export const DetailsCardFormLabel = styled.label`
  font-size: var(--sm);
  color: var(--primary);
  margin-top: var(--sm);
  :first-of-type {
    margin-top: 0;
  }
`

export const DetailsCardFormInput = styled.input`
  border: 1px solid var(--mid);
  border-radius: var(--xxs);
  padding: var(--xxs);
  color: var(--dark);
  font-family: "Nunito", sans-serif;
  outline: none;
  -webkit-appearance: none;
`

export const DetailsCardFormError = styled.span`
  background-color: var(--accent);
  font-weight: 600;
  font-style: italic;
  font-size: var(--xs);
  text-align: center;
  text-transform: uppercase;
  line-height: var(--md);
  color: white;
  padding: var(--xxs);
  border-radius: var(--xxs);
  margin-top: var(--xs);
`

export const DetailsCardFormButton = styled.button`
  background-color: var(--primary);
  border: none;
  border-radius: var(--xxs);
  font-family: "Nunito", sans-serif;
  font-size: var(--sm);
  font-weight: 600;
  color: white;
  padding: var(--xs) var(--xxs);
  cursor: pointer;
  margin-top: var(--xl);
  outline: none;
  -webkit-appearance: none;
  transition: transform 150ms ease-in-out;
  :hover {
    transform: scale(1.025);
  }
  :active {
    transform: scale(0.975);
  }
`
