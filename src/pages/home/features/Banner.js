import "./styles/banner.css"

const Banner = ()=>{

  return(
        <div  className="bannerWrapper">
           <div className="bannerTitle">
             <h2> 
               Hi, Welcome to my world 
               I am a fullstack Developer
             </h2> 
             <p> Md Shihab Uddin</p>
           </div>
           <div className="bannerImg">
              image
           </div> 
           <button className="commonButton"> 
             Download My Resume
           </button>
        </div>
    )
}

export default Banner