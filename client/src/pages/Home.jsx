import React from 'react'
import '../styles/home.css'
import {Container,Row,Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'
import Subtitle from './../shared/Subtitle';
import SearchBar from "./../shared/SearchBar";
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured_tours/FeaturedTourList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import NewsLetter from '../shared/NewsLetter'

const Home = () => {
  return (
    <>
    {/* hero start section */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
             <div className="hero__subtitle d-flex align-items-center">
              <Subtitle Subtitle={'Know before You Go'}/>
              <img src={worldImg} alt="" />
             </div>
             <h1>Traveling opens the door to creating <span className='highlight'>memories</span>
             </h1>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
               ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l
               aboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre
               henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaeca
              t cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </div>
          </Col>
          <Col lg="2">
            <div className="hero__image-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>

          <Col lg="2">
            <div className="hero__image-box mt-4">
              <video src={heroVideo} alt="" controls />
            </div>
          </Col>

          <Col lg="2">
            <div className="hero__image-box mt-5">
              <img src={heroImg02} alt="" />
            </div>
          </Col>
          <SearchBar/>
        </Row>
      </Container>

    </section>
     {/* hero end section */}
     <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services__subtitle">What We Serve</h5>
            <h2 className='services__title'>We offer our best services</h2>
          </Col>
          <ServiceList/>
        </Row>
      </Container>
     </section>

     {/* //////////////////////////////////feature tour section start/////////////////////// */}
        <section>
          <Container>
            <Row>
              <Col lg='12' className='mb-5'>
                <Subtitle Subtitle={'Explore'}/>
                <h2 className="featured__tour-title">Our featured tours</h2> 
              </Col>
              <FeaturedTourList/>
            </Row>
          </Container>
        </section>
       {/* //////////////////////////////////feature tour section end/////////////////////// */}

        {/* //////////////////////////////////Experience section start/////////////////////// */}

         <section>
          <Container>
            <Row>
             <Col  lg='6'>
              <div className="experience__content">
                <Subtitle Subtitle={'Experience'}/>

                <h2>with our all Experinece <br/>we will serve you</h2>
                <p>this is experience section where we try to serve you best for your best journey
                  <br/>
                  with all the research and term and condition
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successfull Trip</h6>
                </div>

                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Clients</h6>
                </div>

                <div className="counter__box">
                  <span>15+</span>
                  <h6>Year Experience</h6>
                </div>

              </div>
             </Col>

             <Col  lg='6'>
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
             </Col>
            </Row>
          </Container>
         </section>


          {/* //////////////////////////////////Experinece section end/////////////////////// */}

           {/* //////////////////////////////////Gallery section start/////////////////////// */}



           <section>


            <Container>
              <Row>
                <Col lg='12'>
                <Subtitle Subtitle={'Gallery'}/>
                <h2 className="gallery__title">Visit our customers tour gallery</h2>
                </Col>

                <Col lg='12'>
                  <MasonryImagesGallery/>
                </Col>
              </Row>
            </Container>
           </section>



           {/* //////////////////////////////////Gallery section end/////////////////////// */}

           {/* /////////////////////////////////////testomonial section start////////////////////// */}

           <section>
            <Container>
              <Row>
                <Col lg='12'>
                  <Subtitle Subtitle={'Fans Love'}/>
                  <h2 className="testimonial__title">
                    What our fans says about us😊
                  </h2>
                </Col>
                <Col lg='12'>
                  <Testimonials/>
                </Col>
              </Row>
            </Container>
           </section>


           {/* /////////////////////////////////////////testomonial section end/////////////////////// */}
      
          {/* ///////////////////////////////////////////////newletter section start//////////////////////// */}


          <NewsLetter/>
          {/* ///////////////////////////////////////////////////newletter section end//////////////////////////   */}
        
    </>
  )
}

export default Home