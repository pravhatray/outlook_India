import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import ReadMore from '../Components/ReadMore'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';
import SearchedData from '../Components/SearchedData'
import Login from '../Components/Login'
import SignUp from '../Components/SignUp'
import PrivateRoute from './PrivateRoute'
import Politics from '../Components/Politics'
import Business from '../Components/Business'
import Crypto from '../Components/Crypto'
import Sports from '../Components/Sports'
import Technology from '../Components/Technology'
import Science from '../Components/Science'
import Entertainment from '../Components/Entertainment'
import Health from '../Components/Health'
import Others from '../Components/Others'
const AllRoute = () => {
  return (
   <>
<Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/business' element={<Business/>}/>
    <Route path='/:category/:id' element={<PrivateRoute><ReadMore/></PrivateRoute>}/>
    <Route path='/politics' element={<Politics/>}/>
    <Route path='/health' element={<Health/>}/>
    <Route path='/science' element={<Science/>}/>
    <Route path='/searched' element={<SearchedData/>}/>
    <Route path='/tech' element={<Technology/>}/>
    <Route path='/crypto' element={<Crypto/>}/>
    <Route path='/sports' element={<Sports/>}/>
    <Route path='/movies' element={<Entertainment/>}/>
    <Route path='/others' element={<Others/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signUp' element={<SignUp/>}/>

    <Route path="/*" element={<h1>404 page no data found</h1>} />
   </Routes>
  <Footer/>
   </>
  )
}

export default AllRoute