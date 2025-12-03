import React from 'react'
import { MoveRight , MoveLeft, Tags} from 'lucide-react';
import img1 from "../../assets/categories/1.png";
import img2 from "../../assets/categories/computer.png";
import img3 from "../../assets/categories/accessories.png";
import img4 from "../../assets/categories/laptop.png";
import img5 from "../../assets/categories/monitor.png";
import img6 from "../../assets/categories/network.png";
import img7 from "../../assets/categories/gaming.png";

const Category = () => {
    const categories = [
  { title: "Phones", img: img1 },
  { title: "Computers", img: img2 },
  { title: "Accessories", img: img3 },
  { title: "Laptops", img: img4 },
  { title: "Monitors", img: img5 },
  { title: "Networking", img: img6},
  { title: "PC Gaming", img: img7 },
];
  return (
    <div className="category-wrapper container my-5 py-5">

      {/* TOP HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <div className="d-flex align-items-center gap-2 mb-3 text-pink fw-semibold">
            <Tags className='bg-pink text-white rounded-5 p-1'/>
            Hot Deal In This Week
          </div>
          <h2 className="cat-heading">Browse by Category</h2>
        </div>

        <div className="arrow-buttons">
          <button className="arrow-btn"><MoveLeft  className='pb-1 arrow'/></button>
          <button className="arrow-btn"><MoveRight  className='pb-1 arrow'/></button>
        </div>
      </div>

      {/* CATEGORY CARDS */}
      <div className="row g-3">
        {categories.map((c, i) => (
          <div className="col-lg col-md-3 col-sm-4 col-6" key={i}>
            <div className="category-card">
              <img src={c.img} alt={c.title} className="cat-img" />
              <p className="cat-title mt-2">{c.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category