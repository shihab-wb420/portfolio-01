import Styled from "styled-components"

export const Button = Styled.button`
  background:${props => props.bg? props.bg : props.variant === "outlined" ? props.theme.color.secondaryMain : props.theme.color.primaryMain};
  
  color:${props => props.color? props.color : props.variant === "outlined" ?  props.theme.color.primaryMain : "black"};
  
  border: 1px solid ${props=>props.variant === "outlined" ? props.theme.color.primaryMain : "none"};
  
  padding:${props=>props.pd ? props.pd : "0.6em"};
  margin: ${props=>props.mg};
  border-radius:${props=>props.br ? props.br : "7px"};
  &:hover{
    background:${props => props.variant === "outlined" ? props.theme.color.primaryMain : props.theme.color.secondaryMain };
    color: ${props=> props.variant !== "outlined" ? "#fff" : props.theme.color.text}
`

export const LinkButton = Styled.a`
    background:red;
    color:black;
`
  
