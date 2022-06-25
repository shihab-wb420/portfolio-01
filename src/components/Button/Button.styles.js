import Styled from "styled-components"

export const Button = Styled.button`
    color: #9393F6;
    padding: 7px;
    margin:1em 0em;
    border-radius:7px;
    background: none;
    border:1px solid #9393F6;
    font-size:1.2em;
    font-weight:400;
      & a{
       color: #9393F6;
      
      &:hover{
      color: #fff;
      }
   }
 &:hover{
      color: #fff;
      background: #9393F6;
 }
`

export const LinkButton = Styled.a`
    background:red;
    color:black;
`
  
