import "./styles/reviews.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel, } from 'react-bootstrap'

const Reviews = ()=>{
  
 const datas = [
      {
        img:"./images/ceo.jpg",
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
        img:"./images/ceo.jpg",
        name:"Md Rohan uddin",
        star:"*****",
        review:"This is well website",
      },
      {
        img:"./images/thumb.png",
        name:"Md Khogen uddin",
        star:"*****",
        review:"This is too good website",
      },
   ]
  
  return(
 <div  className="reviewsWrapper">
     <p className="common-green-title">
        <div> Clients Reviews </div>
        <hr/> 
      </p>
      <h3> Testimonials </h3>
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
               <h3>{data.name} </h3>
               <p>
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

