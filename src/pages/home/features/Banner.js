import "./styles/banner.css"
import {StyledButton } from "../../../components/Button"

const Banner = ()=>{

//---Handle CV Downloading 
const DownloadCv = ()=>{
 
}

  return(
        <div  className="bannerWrapper">
           <div className="bannerTitle">
              <p className="hi_there">
                  Hi I'm,
              </p>
             <h2> 
               Md Shihab Uddin
             </h2> 
             <p 
             style={{
               color:"#7A7BE3", fontSize:"1em", fontWeight:"440"
             }}> 
               A Fullstack Developer 
             </p>
             <p> 
                I’m a professional MERN Stack Developer with 
                <br/> UI/UX Designing Skills based in lagos. 
             </p>
             <StyledButton 
              mg="1.8em 0em 0em 0em"
              pd="0.6em 1em"
              br="1.6em" variant="outlined"
              Click={DownloadCv}
             > 
              <a href="https://drive.google.com/file/d/1i58l4JFOGfEBE_gaZqNIVveo6fT1QA3y/view?usp=drivesdk" target="_blank" rel="noreferrer">
                  Download CV
              </a>
             </StyledButton>
           </div>
           <div className="bannerImg">
              <img src="./images/vector-avatar/avatar3.png" alt="Banner"/>
            {/*  <img src="./images/ceo.jpg" alt="bbanner"/> */}
           </div> 
        </div>
    )
}

export default Banner