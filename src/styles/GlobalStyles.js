import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-success: #32d15d;
    --color-attention: #e8dc2e;
    --color-danger: #eb4034;
    --color-dark: #2e2e2e;
    --color-info: #24b0e3;
    --color-light: #f5f5f5;
    --color-primary: #1e73be;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  html,
  body,
  #__next {
    min-height: 100%;
  }

  body {
    line-height: 1.3;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased !important;
    background: var(--color-light);
    font-family: "Nunito", sans-serif !important;
    font-size: 14px;
  }

  body,
  input,
  button {
    color: var(--color-dark);
  }

  a {
    text-decoration: none;
    color: var(--color-dark);

    &.whatsAppButton{
      position: fixed;
      background: var(--color-success);
      right: 15px;
      bottom: 15px;
      padding: 12px;
      color: #fff;
      border-radius: 100%;
      z-index: 4444;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s;

      &:hover {
        background: var(--bs-green);
      }

      svg {
        font-size: 25px;
      }

      
    }
  }

`;
