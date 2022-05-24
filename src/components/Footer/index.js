import "./footer.css"
import {StyledButton} from "../Button"

const Footer = () =>{
  
  return(
        <div className="footerWrapper">
           <p> SR-Portfolio </p>
           <div className="iconsWrapper">
             <StyledButton  mg="1.8em 0em 0em 0em"  pd="0.6em 1em"      br="1em" variant="outlined" >  
                Facebook 
             </StyledButton>
              <StyledButton  mg="1.8em 0em 0em 0em"  pd="0.6em 1em"      br="1em" variant="outlined" >  
                LinkedIn
             </StyledButton> 
              <StyledButton  mg="1.8em 0em 0em 0em"  pd="0.6em 1em"      br="1em" variant="outlined" >  
                Github
             </StyledButton>            
           </div>
           <p 
            style={{
              marginTop:"3em", fontWeight:"800"
            }}
           > 
            All Rights® Reserved 
            2019-{new Date().getFullYear()}
           </p>
        </div>
    )
}

export default Footer