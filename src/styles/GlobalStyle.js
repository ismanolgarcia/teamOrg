import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  font-family: 'Prata', serif;
}
a {
  text-decoration: none;
  color: inherit;
}
`;

export default GlobalStyle;
