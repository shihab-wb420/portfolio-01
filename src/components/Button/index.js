import {Button } from "./Button.styles.js"

export const StyledButton = ({mg,pd,br,bg,color,variant,children, Click })=>{
  return(
      <Button 
      mg={mg}
      pd={pd}
      br={br}
      bg={bg}
      color={color}
      variant={variant}
      onClick={Click}
      > 
        {children} 
      </Button>
    )
}

//------Documentations ---------
/*
    mg = margin, 
    pd = padding, 
    br = border-radius
    bg = background-color
    color = text-color
*/