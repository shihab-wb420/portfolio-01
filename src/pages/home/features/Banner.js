import "./styles/banner.css"
//import {StyledButton } from "../../../components/Button"

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
               fontSize:"1em", fontWeight:"440"
             }}> 
               A Fullstack Developer 
             </p>
             <p> 
                I’m a professional MERN Stack Developer with 
                <br/> UI/UX Designing Skills based in lagos. 
             </p>
             <button 
              className="btn-downloadCv"
              Click={DownloadCv}
             > 
              <a href="https://drive.google.com/file/d/1i58l4JFOGfEBE_gaZqNIVveo6fT1QA3y/view?usp=drivesdk" target="_blank" rel="noreferrer">
                  Download My Resume
              </a>
             </button>
           </div>
           <div className="bannerImg">
            <img src="./images/ceo.jpg" alt="CEO"/> 
            {/*
              <img src="./images/cat_img.jpg" alt="CEO"/>
            */}
           </div> 
        </div>
    )
}

export default Banner