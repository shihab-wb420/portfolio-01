import "./footer.css"
/*import {StyledButton} from "../Button"*/

const Footer = () =>{
  
  return(
        <div className="footerWrapper">
           <p className="footer-header"> Contact </p>
           <div className="iconsWrapper">
             <div className="social-icon fb">
                <i class="fa-brands fa-facebook"></i>
             </div> 
             <div className="social-icon linkedin">
                <i class="fa-brands fa-linkedin"></i>
             </div>
              <div className="social-icon github">
                <i class="fa-brands fa-github"></i>
              </div>             
           </div>
           <p className="highlight-wrapper"> 
              Design and Developed by
             <span className="highlight"> MD Shihab Uddin. </span>
           </p>
        </div>
    )
}

export default Footer