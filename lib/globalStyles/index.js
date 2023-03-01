import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
}
body{
    font-family: 'Nunito', sans-serif;
    background: ${({ theme }) => theme.primaryColor};
    transition: all 1.5s;
    position:relative ;
}
`;
