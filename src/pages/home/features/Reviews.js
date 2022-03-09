import "./styles/reviews.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Reviews = ()=>{
  
 const datas = [
      {
        img:"./images/user_icon.png",
        name:"Md Sohan uddin",
        star:"*****",
        review:"This is good website",
      },
      {
        img:"./images/user_icon.png",
        name:"Md jovan uddin",
        star:"*****",
        review:"This is nice website",
      },
      {
        img:"./images/user_icon.png",
        name:"Md Rohan uddin",
        star:"*****",
        review:"This is well website",
      },
      {
        img:"./images/user_icon.png",
        name:"Md Khogen uddin",
        star:"*****",
        review:"This is too good website",
      },
   ]
  
  return(
        <div  className="reviewsWrapper">
           <h3> Testimonials </h3>
         {/*  <div className="reviewsContainer"> */}
           <Carousel 
           className="reviewsContainer"
           infiniteLoop={true}
           centerMode={true}
           centerSlidePercentage={50}
           autoPlay={true}>
              {
                datas.map((data,i) =>{
                  return(
                      <div className="reviewBox" key={i}>
                         <div className="reviewImg">
                           <img src={data.img} alt="rv_icon"/>
                         </div>
                         <p className="fiveStar"> {data.star} </p>
                         <h4> {data.name} </h4>
                         <p className="review"> {data.review} </p>
                      </div>
                   )
                })
              }
           </Carousel>
         
        </div>
    )
}

export default Reviews