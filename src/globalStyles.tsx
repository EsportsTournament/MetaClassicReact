/* You can add global styles to this file, and also import other style files */
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body,html {
    margin: 0;
    padding: 0;
    --color-primary: rgb(34, 193, 185);
    --color-secondary: rgb(196, 247, 247);
    --color-complementary: rgb(23, 93, 32);
    --color-white: white;
    --color-black: black;
    --border-radius: 10px;
    --padding: 6px 10px;
    --border: 2px solid var(--color-secondary);
}
*,
*::before,
*::after { 
  box-sizing: border-box;
}
html, body { height: 100%; }
body { margin: 0; font-family: Roboto, "Helvetica Neue", sans-serif; }
`;
