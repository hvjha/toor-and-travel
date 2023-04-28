import React from 'react'
import {Container,Row,Col} from 'reactstrap'
import FeaturedTourList from '../components/Featured_tours/FeaturedTourList'
import Subtitle from './../shared/Subtitle';


const Tours = () => {
  return (

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
  )
}

export default Tours