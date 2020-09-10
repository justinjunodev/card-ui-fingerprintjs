import "reset-css"
import { css } from "@emotion/core"

const GlobalStyles = css`
  :root {
    --primary: #4947ab;
    --accent: #0ebdca;
    --dark: #1c1c1f;
    --mid: #797979;
    --light: #f8f9fa;
    --xxl: 2.441rem;
    --xl: 1.953rem;
    --lg: 1.563rem;
    --md: 1.25rem;
    --sm: 1rem;
    --xs: 0.75rem;
    --xxs: 0.25rem;
  }
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 17px;
    text-size-adjust: 100%;
  }
  body {
    font-family: "Nunito", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: var(--lg);
    color: var(--dark);
    background-color: var(--light);
  }
  h1 {
    font-size: var(--xxl);
    font-weight: 600;
    line-height: var(--xl);
  }
  h2 {
    font-size: var(--xl);
    font-weight: 600;
    line-height: var(--xl);
    margin: var(--lg) 0;
  }
  h3 {
    font-size: var(--lg);
    font-weight: 600;
    margin: var(--lg) 0;
  }
  h4 {
    font-size: var(--md);
    font-weight: 600;
    margin: var(--lg) 0;
  }
  h5 {
    font-size: var(--sm);
    font-weight: 600;
    margin: var(--lg) 0 0;
  }
  p,
  ul,
  ol,
  pre,
  table,
  blockquote,
  img {
    margin: 0 0 var(--lg);
  }
  ul ul,
  ol ol,
  ul ol,
  ol ul {
    margin: 0;
  }
  hr {
    border: 1px solid var(--mid);
    margin: -1px 0 var(--lg);
  }
  a,
  b,
  i,
  strong,
  em,
  small,
  code {
    line-height: 0;
  }
  strong,
  b {
    font-weight: 500;
  }
  em,
  i {
    font-style: italic;
  }
  small {
    font-size: var(--xs);
  }
  sub,
  sup {
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sup {
    top: -0.5em;
  }
  sub {
    bottom: -0.25em;
  }
`

export default GlobalStyles
