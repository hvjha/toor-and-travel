import React from 'react'
import './newsletter.css'
import { Container,Row,Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const NewsLetter = () => {
  return <section className='newsletter'>
    <Container >
        <Row>
            <Col lg='6'> 
            <div className="newsletter__content">
                 <h2>subscribe now to get traveling information😉</h2>
                 <div className="newsletter__input">
                    <input type="email" placeholder='abc@gmail.com' />
                    <button className="btn newsletter__btn">Subcribe</button>
                 </div>
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente laborum
                     error ipsum vel ipsa autem dicta repellat voluptate
                      eius assumenda nulla, officia quos quae? Minus minima aut 
                      modi excepturi quod.
                      </p>
                </div> 
            </Col>

            <Col lg='6'> 
             <div className="newsletter__img">
              <img src={maleTourist} alt="" />
             </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default NewsLetter