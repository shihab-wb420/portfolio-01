import "./footer.css"
/*import {StyledButton} from "../Button"*/

const Footer = () =>{
  
  return(
        <div className="footerWrapper">
           <p className="footer-header"> Contact </p>
           <div className="iconsWrapper">
             <div className="social-icon fb">
                <a href="https://www.facebook.com/profile.php?id=100083454394058" target="_blank" rel="noreferrer">             
                    <i class="fa-brands fa-facebook"></i>
                </a>
             </div> 
             <div className="social-icon linkedin">
                <a href="https://www.linkedin.com/in/md-shihab-uddin-00b750201" target="_blank" rel="noreferrer">                
                   <i class="fa-brands fa-linkedin"></i>
                </a>
             </div>
              <div className="social-icon github">
                <a href="https://github.com/wb505" target="_blank" rel="noreferrer"> 
                   <i class="fa-brands fa-github"></i>
                </a>
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