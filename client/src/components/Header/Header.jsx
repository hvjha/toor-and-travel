import React, { useRef, useEffect } from 'react'
import { Container, Row, Button } from 'reactstrap'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

import './Header.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Header = () => {

  const navigate = useNavigate();
  const headerRef = useRef(null)
  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  const user = localStorage.getItem("token")

  useEffect(() => {
    stickyHeaderFunc()

    return window.removeEventListener('scroll', stickyHeaderFunc)
  })

  const handlelogout = () => {
    localStorage.clear();
    toast("Logged Out successfully", {
      autoClose: 3000,
    })
  }

  return (

    <>

      <header className="header" ref={headerRef}>
        <Container>
          <Row>
            <div className="nav_wrapper d-flex align-items-center justify-content-between">
              <div className="logo">
                <img src={logo} alt="logo of the website" />
              </div>
              <div className="navigation">
                <ul className="menu d-flex align-items-center gap-5">
                  <li className="nav__item" >
                    <NavLink to={'/home'} className={navClass => navClass.isActive ? 'active__link' : ""}>Home</NavLink>
                  </li>

                  {user ?
                    <>
                      <li className="nav__item" >
                        <NavLink to={'/tours'} className={navClass => navClass.isActive ? 'active__link' : ""}>Tour</NavLink>
                      </li>
                      <li className="nav__item" >
                        <NavLink to={'/enterdata'} className={navClass => navClass.isActive ? 'active__link' : ""}>AddTour</NavLink>
                      </li>
                      <li className="nav__item" >
                        <NavLink onClick={handlelogout} to={'/home'}>Logout</NavLink>
                      </li>
                    </>
                    : ("")
                  }
                </ul>
              </div>
              <div className="nav__right d-flex align-items-center gap-4">
                <div className="nav__btns d-flex align-items-center gap-4">
                  <Button className='btn secondary__btn'><Link to='/login'>Login</Link></Button>
                  <Button className='btn primary__btn'><Link to='/register'>Register</Link></Button>
                </div>
                <span className="mobile_menu">
                  <i class="ri-menu-2-line"></i>
                </span>

              </div>
            </div>
          </Row>
        </Container>
      </header>
      <ToastContainer />
    </>
  )

}

export default Header