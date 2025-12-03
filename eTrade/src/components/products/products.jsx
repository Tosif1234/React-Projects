import { ShoppingBasket, MoveLeft, MoveRight } from "lucide-react";
import img1 from "../../assets/products-main/product-01.png";
import img2 from "../../assets/products-main/product-02.png";
import img3 from "../../assets/products-main/product-03.png";
import img4 from "../../assets/products-main/product-04.png";
import img5 from "../../assets/products-main/product-05.png";
import img6 from "../../assets/products-main/product-06.png";
import img7 from "../../assets/products-main/product-07.png";
import img8 from "../../assets/products-main/product-08.png";
import { Eye, Heart, ShoppingCart } from "lucide-react";

import React, { useState } from "react";

// Example product data
const products = [
  {
    name: "Yantiti Leather & Canvas Bags",
    price: "29.99",
    oldPrice: "49.99",
    images: [img1, img2, img3], // multiple images
    badge: "20% Off",
    rating: 5,
    reviews: 64,
  },
  {
    name: "Level 20 RGB Cherry",
    price: "29.99",
    oldPrice: "49.99",
    images: [img2, img3, img4],
    badge: null,
    rating: 4,
    reviews: 52,
  },
  {
    name: "Logitech Streamcam",
    price: "29.99",
    oldPrice: "49.99",
    images: [img3, img4, img5],
    badge: "20% Off",
    rating: 4,
    reviews: 38,
  },
  {
    name: "3D™ wireless headset",
    price: "29.99",
    oldPrice: "49.99",
    images: [img4, img5, img6],
    badge: null,
    rating: 4,
    reviews: 44,
  },
  {
    name: "Yantiti Leather & Canvas Bags",
    price: "29.99",
    oldPrice: "49.99",
    images: [img5, img6, img7],
    badge: "20% Off",
    rating: 5,
    reviews: 64,
  },
  {
    name: "Level 20 RGB Cherry",
    price: "29.99",
    oldPrice: "49.99",
    images: [img6, img7, img8],
    badge: null,
    rating: 4,
    reviews: 52,
  },
  {
    name: "Logitech Streamcam",
    price: "29.99",
    oldPrice: "49.99",
    images: [img7, img8, img1],
    badge: "20% Off",
    rating: 4,
    reviews: 38,
  },
  {
    name: "3D™ wireless headset",
    price: "29.99",
    oldPrice: "49.99",
    images: [img8, img1, img2],
    badge: null,
    rating: 4,
    reviews: 44,
  },
];

export default function Products() {
  const [activeImage, setActiveImage] = useState({});

  function handleImageChange(index, total) {
    setActiveImage((prev) => ({
      ...prev,
      [index]: ((prev[index] || 0) + 1) % total,
    }));
  }
  function resetImage(index) {
    setActiveImage((prev) => ({
      ...prev,
      [index]: 0,
    }));
  }

  return (
    <section className="product mt-5">
      <div className="container">
        {/* TOP HEADER */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <div className="d-flex align-items-center gap-2 mb-3 text-pink fw-semibold">
              <ShoppingBasket className="bg-pink text-white rounded-5 p-1" />
              Our Products
            </div>
            <h2 className="cat-heading">Explore our Products</h2>
          </div>

          <div className="arrow-buttons">
            <button className="arrow-btn">
              <MoveLeft className="pb-1 arrow" />
            </button>
            <button className="arrow-btn">
              <MoveRight className="pb-1 arrow" />
            </button>
          </div>
        </div>

        {/* Products */}
        <div className="row g-4">
          {products.map((p, i) => (
            <div
              key={i}
              className="col-lg-3 col-md-4 col-sm-6"
              onMouseEnter={() => handleImageChange(i, p.images.length)}
              onMouseLeave={() => resetImage(i)}
              style={{ cursor: "pointer" }}
            >
              <div className="product-card h-100">
                {p.badge && <span className="badge-off">{p.badge}</span>}

                <div className="product-img-box mb-4">
                  {/* Static Image 1 */}
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="main-img img-fluid"
                  />

                  {/* Static Image 2 (Hidden until hover) */}
                  <img
                    src={p.images[1] ? p.images[1] : p.images[0]}
                    alt={p.name}
                    className="hover-img img-fluid"
                  />

                  <div className="overlay-buttons">
                    <button className="action-btn">
                      <Eye size={18} />
                    </button>
                    <button className="action-btn primary">
                      <ShoppingCart size={18} />
                    </button>
                    <button className="action-btn">
                      <Heart size={18} />
                    </button>
                  </div>
                </div>

                <div className="product-content my-2">
                  {/* Rating */}
                  {(i === 0 || i === 3 || i === 6) && (
                    <div className="mt-3 d-flex align-items-center gap-1">
                      <span className="text-warning">
                        {"⭐".repeat(p.rating)}
                      </span>
                      <small className="text-muted ms-1">({p.reviews})</small>
                    </div>
                  )}

                  {/* Title */}
                  <h6 className="mt-2 fw-bold">{p.name}</h6>

                  {/* Price */}
                  <h5 className="mt-2 fw-bold">
                    ${p.price}{" "}
                    <span className="text-muted text-decoration-line-through fs-6 ms-2">
                      ${p.oldPrice}
                    </span>
                  </h5>
                  {i !== 0 && i !== 3 && i !== 6 && (
                    <div className="d-flex gap-2 mt-3">
                      <span className="dot active"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-5 mb-5">
          <button className="view-all-btn">View All Products</button>
        </div>
      </div>
    </section>
  );
}
