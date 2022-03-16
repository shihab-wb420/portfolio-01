import "./styles/footer.css"


const Footer = () =>{
  
  return(
        <div className="footerWrapper">
           <h2> Portfolio </h2>
           <div className="iconsWrapper">
              <div>Facebook</div>
              <div>Tweeter</div>
              <div>LinkedIn </div>
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