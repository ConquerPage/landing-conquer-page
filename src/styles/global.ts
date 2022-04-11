import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  //font-size: 16px (Desktop Default)
  html {
    width: 100%;
    height: 100%;
    @media (max-width: 1080px){
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px){
      font-size: 87.5%; // 14px
    }
  }

  :root {
    scroll-behavior: smooth !important;
  }

  body {
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    -webkit-font-smoothing: antialiased;
    /* overflow-x: hidden; */
  }

  body, input,textarea, select, button {
    font: 400 1rem "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
   cursor: not-allowed;
  }

  :root {
    --font-xxs: max(0.875rem, 0.6vw);
    --font-xs: max(0.875rem, 0.8vw);
    --font-sm: max(1rem, 0.9vw);
    --font-md: clamp(1rem, 0.9vw, 1.125rem);
    --font-lg: clamp(1.125rem, 1.5vw, 1.25rem);
    --font-xl: clamp(1.5rem, 2vw, 1.75rem);
    --font-xxl: clamp(1.8rem, 3vw, 3rem);
  }
`;
