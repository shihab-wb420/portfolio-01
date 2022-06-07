import "./styles/banner.css"
import {StyledButton } from "../../../components/Button"

const Banner = ()=>{

//---Handle CV Downloading 
const DownloadCv = ()=>{
  alert(" CV Coomming Soon....")
}

  return(
        <div  className="bannerWrapper">
           <div className="bannerTitle">
              <p className="hi_there">
                  HI THERE 👋 I'M,
              </p>
             <h2> 
               Md Shihab Uddin
             </h2> 
             <p 
             style={{
               color:"#3AFF9F", fontSize:"1em", fontWeight:"700"
             }}> 
                Frontend + Backend Developer 
                <br/>
                👨
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
              Download CV 
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