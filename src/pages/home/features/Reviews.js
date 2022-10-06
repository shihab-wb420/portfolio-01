import "./styles/reviews.css"
// eslint-disable-next-line
//import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'

const Reviews = ()=>{
  
 const datas = [
      {
        img:"./images/vector-avatar/avatar1.png",
        name:"Jhon Doy",
        star:"★★★★★",
        review:"This is good website",
      },
      {
        img:"./images/vector-avatar/avatar2.png",
        name:"Jhon Smith",
        star:"★★★★★",
        review:"This is nice website",
      },
      {
        img:"./images/vector-avatar/avatar3.png",
        name:"Jhon Abraham",
        star:"★★★★★",
        review:"This is well website",
      },
      {
        img:"./images/vector-avatar/avatar4.png",
        name:"Jhon DK ",
        star:"★★★★★",
        review:"This is too good website",
      },
   ]
  
  return(
 <div  className="reviewsWrapper">
     <p className="common-sub-heading">
        <div> Clients Reviews </div>
        <hr/> 
      </p>
      <h3 className="review-heading muted"> Testimonials </h3>
   <Carousel className="reviewsContainer">
    {
     datas.map((data,i)=>{
      return(
         <Carousel.Item interval={1000} key={i} 
         className="reviewBox"
         >
           <div className="reviewImg">
              <img
              className="d-block"
              src={data.img}
              alt="First slide first"
              />
           </div>
             <div className="caption">
               <p className="fiveStar"> {data.star} </p>
               <h3 className="review-name muted">{data.name} </h3>
               <p className="review-desc muted">
                {data.review}
               </p>
             </div>
          </Carousel.Item>
        )
       }) 
       }
   </Carousel>
  </div>
    )
}

export default Reviews 

