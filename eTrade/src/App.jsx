import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Category from './components/category/category';
import Countdown from './components/Countdown/Countdown';
import Products from './components/products/products';
import Feedback from './components/Feedback/Feedback';
import NewArrivals from './components/New-Arrivals/NewArrivals';
import MostSold from './components/Sold-Products/MostSold';
import WhyUs from './components/WhyUs/WhyUs';
import Poster from './components/Poster/Poster';
import NewsLetter from './components/NewsLetter/NewsLetter';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <Category />
      <Countdown />
      <Products />
      <Feedback />
      <NewArrivals />
      <MostSold />
      <WhyUs />
      <Poster />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default App
