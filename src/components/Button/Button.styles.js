import Styled from "styled-components"

export const Button = Styled.button`
    color: var(--secondary-color);
    padding: 7px;
    margin:1em 0em;
    border-radius:7px;
    background: none;
    border:1px solid var(--secondary-color);
    font-size:1.2em;
    font-weight:400;
      & a{
       color: var(--secondary-color);
      
      &:hover{
      color: #fff;
      }
   }
 &:hover{
      color: #fff;
      background: var(--secondary-color);
 }
`

export const LinkButton = Styled.a`
    background:red;
    color:black;
`
  
