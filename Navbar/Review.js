import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import './Review.css'
 function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
const Review = () => {
    var settings = {
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          }
        ]
      };
  return (
    <>
      <div>
        <br />
   <h1 className="review-heading">Customer Reviews</h1>
   
  <Slider {...settings} style={{margin:"3rem"}}>
   <div>
   <div className="card">
   <img src="pic1.png"  height={100} width={100} alt="" />
   <h3>Xyz Girl</h3> 
   <FaStar style={{color:"green",}} />
   <FaStar style={{color:"green",}} />
   <FaStar style={{color:"green",}} />
   <FaStar style={{color:"green",}} />
   <FaStarHalfAlt  style={{color:"green",}}/>
    <p>Lorem, ipsum dolont perspiciatis reiciendis impedittetur adipisiciur nesciunt perspiciatis reiciendis impedit!</p>
   </div>
  </div>
   <div>    
   <div className="card">
   <img src="pic2.png"  height={100} width={100} alt="" />
   <h3>Average Man</h3> 
   <FaStar style={{color:"green",}} />
   <FaStar style={{color:"green",}} />
   <FaStar style={{color:"green",}} />
   <FaStar style={{color:"green",}} />
   <FaStarHalfAlt  style={{color:"green",}}/>
     <p>Lorem, ipsum dolont perspiciatis reiciendis impedittetur adipisiciur nesciunt perspiciatis reiciendis impedit!</p>
     </div>
    </div>
   <div>
   <div className="card">
   <img src="pic3.png"  height={100} width={100} alt="" />
   <h3>Abc Girl</h3> 
   <FaStar style={{color:"green",}} />
   <FaStar style={{color:"green",}} />
   <FaStar style={{color:"green",}} />
   <FaStar style={{color:"green",}} />
   <FaStarHalfAlt  style={{color:"green",}}/>
     <p>Lorem, ipsum dolont perspiciatis reiciendis impedittetur adipisiciur nesciunt perspiciatis reiciendis impedit!</p> 
    </div>
    </div>
   <div>
   <div className="card">
   <img src="pic3.png"  height={100} width={100} alt="" />
   <h3>Abc Girl</h3> 
   <FaStar style={{color:"green",}} />
   <FaStar style={{color:"green",}} />
   <FaStar style={{color:"green",}} />
   <FaStar style={{color:"green",}} />
   <FaStarHalfAlt  style={{color:"green",}}/>
     <p>Lorem, ipsum dolont perspiciatis reiciendis impedittetur adipisiciur nesciunt perspiciatis reiciendis impedit!</p>
      </div>
     </div>
        </Slider>
      </div>   
    </>
  )
}
export default Review
