/* You can add global styles to this file, and also import other style files */
import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

body,html {
    margin: 0;
    padding: 0;
    --color-primary: white;
    --color-secondary: black;
    --color-complementary: cyan;
    --color-white: white;
    --color-black: black;
    --border-radius: 10px;
    --padding: 6px 10px;
    --border: 2px solid var(--color-complementary);
    --h1: 12px 12px;
    --v1: 16px 0;
    --h2: -8px -8px;
    --v2: 12px 0;
    --color-dark: rgba(0, 0, 0, 0.25);
    --color-light: rgba(255, 255, 255, 0.3);
    --bg-angle: -45deg;
    --bg-start: rgba(0, 0, 0, 0.22);
    --bg-end: rgba(255, 255, 255, 0.25);
}
*,
*::before,
*::after { 
  box-sizing: border-box;
}
html, body { height: 100%; }
body { margin: 0; font-family: Roboto, "Helvetica Neue", sans-serif; }
`;
