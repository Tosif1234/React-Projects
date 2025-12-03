import { useState } from "react";
import React from 'react'
import img1 from "../../assets/others/author1.png";
import img2 from "../../assets/others/author2.png";
import img3 from "../../assets/others/author3.png";
import img4 from "../../assets/others/author4.png";
import product1 from "../../assets/products/product-38.png"
import product2 from "../../assets/products/product-39.png"
import {Flame , ShoppingBag ,Star,ShoppingCart} from 'lucide-react';

const Banner = () => {
   const slides = [
    { big: product1, small: product2 },
    { big: product2, small: product1 },
  ];

  const [index, setIndex] = useState(0);
  return (
    <div className="banner">
      <div className="container py-5">
      <div className="row align-items-center">

        {/* Left Section */}
        <div className="col-lg-5">
          <div className="d-flex align-items-center gap-2 mb-3 text-pink fw-semibold">
            <Flame className='bg-pink text-white rounded-5 p-1'/>
            Hot Deal In This Week
          </div>

          <h1 className="display-3 fw-bold text-dark mb-5">
            Roco Wireless <br /> Headphone
          </h1>

          <div className='banner-content d-flex gap-5 align-items-center'>
            {/* BUTTON */}
          <button className="btn btn-light shadow-lg px-4 py-3 fs-5 d-flex align-items-center gap-2">
            <ShoppingCart size={22} /> Shop Now
          </button>

          {/* REVIEW SECTION */}
          <div className="d-flex align-items-center gap-3 mt-4">

            {/* Profile Overlapping */}
            <ul>
              <li className='d-inline-block pe-1'>
                <img src={img1} alt="" className="profile-img rounded-5" style={{marginLeft:"-26px", border:"2px solid #f3f9f0"}}/>
              </li>
              <li className='d-inline-block ps-1'>
                <img src={img2} alt="" className="profile-img rounded-5" style={{marginLeft:"-26px",
                  border:"2px solid #f3f9f0"}}/>
              </li>
              <li className='d-inline-block ps-1'>
                <img src={img3} alt="" className="profile-img rounded-5" style={{marginLeft:"-26px",border:"2px solid #f3f9f0"}}/>
              </li>
              <li className='d-inline-block ps-1'>
                <img src={img4} alt="" className="profile-img rounded-5" style={{marginLeft:"-26px",border:"2px solid #f3f9f0"}}/>
              </li>
            </ul>

            <div className="banner-rating">
              {/* Star Ratings */}
            <div className="d-flex align-items-center gap-1 text-warning">
              <Star size={14} fill="gold" />
              <Star size={14} fill="gold" />
              <Star size={14} fill="gold" />
              <Star size={14} fill="gold" />
              <Star size={14} />
            </div>

            <span className="fw-medium text-muted" style={{fontSize:"14px"}}><b className='text-dark'>100+</b> Reviews</span>
            </div>
          </div>
        </div>
          </div>

        {/* Right side product image (if needed later) */}
        {/* RIGHT CAROUSEL */}
          {/* RIGHT - INNER SLIDER */}
          <div className="col-lg-7 d-flex justify-content-start">
        <div className="slider-container w-100 d-flex flex-column align-items-center">
        <div
          className="slide-wrapper"
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: "0.7s ease-in-out",
            width: `${slides.length * 100}%`,
          }}
        >
          {slides.map((s, i) => (
            <div className="slide" key={i}>

              <div className="product-price bg-white rounded-circle d-flex align-items-center     justify-content-center flex-column ">
                <span className='text'>From</span>
                <span className='price-amount text-primary fw-medium'>$49.00</span>
             </div>

              <img src={s.big} alt="" className="big-img" />
              <img src={s.small} alt="" className="small-img" />
            </div>
          ))}
        </div>

    <div className="d-flex justify-content-center gap-3 mt-3">
      {slides.map((_, i) => (
        <button
          key={i}
          onClick={() => setIndex(i)}
          className={`indicator ${index === i ? "active" : ""}`}
        />
      ))}
    </div>
  </div>
        </div>



        </div>

        </div>

      </div>

  )
}

export default Banner