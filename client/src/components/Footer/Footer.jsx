import React from 'react'
import './footer.css'
import {Container,Row,Col,ListGroup,ListGroupItem} from 'reactstrap'
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const quick__links=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tours'
  },

]

const quick__links2=[
  {
    path:'/gallery',
    display:'Gallery'
  },
  {
    path:'/login',
    display:'Login'
  },
  {
    path:'/register',
    display:'Register'
  },

]



const Footer = () => {

  const year=new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3'>
          <div className="logo">
            <img src={logo} alt="" />
            <p>This is only the place that will help you in your travel journey</p>
               <div className="social__links d-flex align-items-center gap-4">
                {/* <span>
                  <Link to="https://www.linkedin.com/in/aman-kumar-a5a7871b9/"><i class="ri-linkedin-box-line"></i></Link>
                </span> */}

                <span>
                  <a href="https://www.youtube.com/@Indian.Humsafar.Official"><i class="ri-youtube-line"  ></i></a>
                </span>

                <span>
                  <a href="https://instagram.com/indian.humsafar?igshid=ZDdkNTZiNTM="><i class="ri-instagram-line"></i></a>
                </span>

                <span>
                  <a href="https://www.facebook.com/profile.php?id=100092371210389&mibextid=ZbWKwL"><i class="ri-facebook-box-line"></i></a>
                </span>
               </div>
          </div>
          
          </Col>

          <Col lg='3'> 
          <h5 className='footer__link-title'>Discover</h5>

          <ListGroup className='footer__quick-links'>
            {
              quick__links.map((item,index)=>(
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }

          </ListGroup>
          </Col>
          <Col lg='3'> 
          
   <h5 className='footer__link-title'>Quick Links</h5>

<ListGroup className='footer__quick-links'>
  {
    quick__links2.map((item,index)=>(
      <ListGroupItem key={index} className='ps-0 border-0'>
        <Link to={item.path}>{item.display}</Link>
      </ListGroupItem>
    ))
  }

</ListGroup>
          
          </Col>
          <Col lg='3'>
          <h5 className='footer__link-title'>Contact</h5>

       <ListGroup className='footer__quick-links'>
  
   
      <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
        <h6 className='mb-0 d-flex align-item-center gap-2'>
          <span><i class="ri-map-pin-line"></i></span>
          Address:
        </h6>
        <p className='mb-0'>Jalandhar, Punjab 144021</p>
      </ListGroupItem>

      <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
        <h6 className='mb-0 d-flex align-item-center gap-2'>
          <span><i class="ri-mail-unread-line"></i></span>
          Email:
        </h6>
        <p className='mb-0'>Indian.humsafar@gmail.com</p>
      </ListGroupItem>

      <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
        <h6 className='mb-0 d-flex align-item-center gap-2'>
          <span><i class="ri-phone-fill"></i></span>
          Phone:
        </h6>
        <p className='mb-0'>+916239060459</p>
      </ListGroupItem>
  
  

</ListGroup>
            
             </Col>

             <Col lg='12' className='text-center pt-5'>
              <p className='copyright'>Copyright {year}, design and develop by Team Indian Humsafar. All right reserved.</p> 
             </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer