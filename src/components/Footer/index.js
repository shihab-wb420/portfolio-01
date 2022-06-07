import "./footer.css"
import {StyledButton} from "../Button"

const Footer = () =>{
  
  return(
        <div className="footerWrapper">
           <p className="footer-header"> Contact </p>
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
           <p className="highlight-wrapper"> 
              Design and Developed by
             <span className="highlight"> MD Shihab Uddin. </span>
           </p>
        </div>
    )
}

export default Footer