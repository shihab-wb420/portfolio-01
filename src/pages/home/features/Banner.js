import "./styles/banner.css"

const Banner = ()=>{

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
             <button className="commonButton"> 
                Download CV
             </button>
           </div>
           <div className="bannerImg">
              <img src="./images/ceo.jpg" alt="bbanner"/>
           </div> 
        </div>
    )
}

export default Banner