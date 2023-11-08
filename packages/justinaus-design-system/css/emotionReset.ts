import { css } from '@emotion/react';

export const emotionReset = css`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
    outline: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    font: inherit;
    font-size: 100%;

    margin: 0;
    padding: 0;

    vertical-align: baseline;

    border: 0;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1.5;
    font-family:
      Spoqa Han Sans Neo,
      sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    font-smooth: antialiased;
    text-rendering: optimizeLegibility;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }
  q:before,
  q:after {
    content: '';
    content: none;
  }

  sub,
  sup {
    font-size: 75%;
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

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  input,
  textarea,
  button,
  select {
    border: 0;
    margin: 0;
    outline: none;
    font-family: inherit;
    font-weight: 400;
    font-size: inherit;
    color: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  select {
    text-indent: 0.01px;
    text-overflow: '';
    border: 0;
    border-radius: 0;
  }

  select::-ms-expand {
    display: none;
  }

  code,
  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  a {
    display: block;
    color: inherit;
    text-decoration: inherit;
    cursor: pointer;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    display: none;
  }

  /* button,
span,
p,
a,
div {
    user-select: none;
} */

  button {
    background-color: transparent;
    cursor: pointer;
    border: none;
    padding: 0;
  }
  button:disabled {
    pointer-events: none;
  }

  /* 크롬 브라우저 인풋 자동완성 시 배경색상 변경되는 것 방지 */
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 100px #fff inset;
    box-shadow: 0 0 0 100px #fff inset;
  }
`;
