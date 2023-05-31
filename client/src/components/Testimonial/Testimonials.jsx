import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'


const Testimonials = () => {

  const settings={
    dots:true,
    Infinite:true,
    autoplay:true,
    speed:1000,
    swipeToSlide:true,
    autoplaySpeed:2000,
    slidesToShow:3,

    responsive:[
        {
            breakpoint:992,
            settings:{
                slidesToShow:2,
                slideToScroll:1,
                Infinite:true,
                dots:true,
            },
        },

        {
            breakpoint:576,
            settings:{
                slidesToShow:2,
                slideToScroll:1,
                
            },
        },
     
    ]


  }

  return <Slider {...settings}>
    <div className="testimonial py-4 px-3">
        <p>This website helped me in planning my trip and it reduces my travel expenses </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>surya yadav</h6>
                    <p>Traveler</p>
                </div>
            </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p>I am a hosteller and as a hosteller our budget is super tight and this website helped in planning the expenses in a right way.</p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Vikki </h6>
                    <p>Traveler</p>
                </div>
            </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p>This helped me to figure out new place in my area </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Rishi</h6>
                    <p>Traveler</p>
                </div>
            </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p>Booking through you was very easy and made our lives so much easier. I have nothing bad to say! Thank you for giving us tips and guidance before we left on what to bring and such, that was very helpful! Thanks again</p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Golu Kumar</h6>
                    <p>Traveler</p>
                </div>
            </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p>I had a fantastic experience with both my Greece and Turkey trip. In Greece I was in Athens and Santorini ( the hotel in Santorini is one the best I have ever stayed). Our travel partner was Mercury Travel and Grace Solomon was the person to go'.</p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Sonu kumar</h6>
                    <p>Traveler</p>
                </div>
            </div>
    </div>
  </Slider>
   
  
}

export default Testimonials