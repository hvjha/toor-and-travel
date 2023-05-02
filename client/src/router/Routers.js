import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Tours from '../pages/Tours'
import TourDetails from '../pages/TourDetails'
import Login from '../pages/Login'
import Register from '../pages/Register'
import SearchResults from '../pages/SearchResults'
import EnterData from '../components/EnterData'
import Details from '../components/Details'


const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/tours' element={<Tours />} />
      <Route path='/tours/:id' element={<TourDetails />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/enterdata' element={<EnterData />} />
      <Route path='/tours/search' element={<SearchResults />} />
      <Route path='/tours/details' element={<Details/>} />
    </Routes>
  )
}

export default Routers