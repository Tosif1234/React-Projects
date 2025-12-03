import React from "react";
import { Star, ShoppingCart, Heart } from "lucide-react";
import img1 from "../../assets/products-main/product-01.png";
import img2 from "../../assets/products-main/product-02.png";
import img3 from "../../assets/products-main/product-03.png";
import img4 from "../../assets/products-main/product-04.png";
import img5 from "../../assets/products-main/product-04.png";
import img6 from "../../assets/products-main/product-04.png";

const soldProducts = [
  {
    img: img1,
    name: "Media Remote",
    rating: 5,
    reviewCount: 100,
    price: "29.99",
    oldPrice: "49.99",
  },
  {
    img: img2,
    name: "HD Camera",
    rating: 4,
    reviewCount: 50,
    price: "49.99",
    oldPrice: null,
  },
  {
    img: img3,
    name: "Gaming Controller",
    rating: 5,
    reviewCount: 120,
    price: "50.00",
    oldPrice: null,
  },
  {
    img: img4,
    name: "Wall Mount",
    rating: 4,
    reviewCount: 30,
    price: "19.00",
    oldPrice: null,
  },
  {
  img: img5,
    name: "Media Remote",
    rating: 5,
    reviewCount: 100,
    price: "29.99",
    oldPrice: "49.99",
  },
  {
    img: img6,
    name: "HD Camera",
    rating: 4,
    reviewCount: 50,
    price: "49.99",
    oldPrice: null,
  },
];

export default function MostSold() {
  return (
    <>
      <style>{`.mostSold-tag {
  background: #f1eaff;
  color: #6D4DFC;
  padding: 6px 14px;
  font-weight: 600;
  border-radius: 25px;
}
.text-purple{
        color: #6D4DFC;
}
.sold-card {
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 15px;
  transition: 0.3s ease;
}
.sold-card:hover {
  box-shadow: 0 15px 35px rgba(0,0,0,0.08);
  transform: translateY(-4px);
}

.sold-img {
  width: 110px;
  height: 110px;
  object-fit: contain;
  background: #f7f9ff;
}

.old-price {
  text-decoration: line-through;
  color: #b5b5b5;
}

.icon-box {
  width: 40px;
  height: 40px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 10px;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  transition:0.3s;
}
.icon-box:hover {
  background:#6D4DFC;
  border-color:#6D4DFC;
  color:white;
}
`}</style>
      <section className="container py-5">
        {/* Heading */}
        <div className="text-center mb-5">
          <h6 className="text-purple fw-semibold d-flex gap-2 align-items-center justify-content-center">
            <Star
              size={20}
              className="bg-purple text-white p-1 rounded-circle"
            />
            Most Sold
          </h6>
          <h2 className="fw-bold display-6 mt-3">Most Sold in eTrade Store</h2>
        </div>

        {/* Products Grid */}
        <div className="row g-4">
          {soldProducts.map((item, index) => (
            <div key={index} className="col-lg-6">
              <div className="sold-card d-flex align-items-center gap-3 p-4">
                {/* Product Image */}
                <img
                  src={item.img}
                  alt={item.name}
                  className="sold-img rounded-3"
                />

                <div className="flex-grow-1">
                  {/* Rating */}
                  <div className="d-flex align-items-center gap-1 mb-2">
                    {Array(5)
                      .fill()
                      .map((_, i) =>
                        i < item.rating ? (
                          <Star
                            key={i}
                            size={16}
                            fill="#FFD65A"
                            color="#FFD65A"
                          />
                        ) : (
                          <Star key={i} size={16} color="#999" /> // unfilled star
                        )
                      )}
                    <span className="text-muted ms-2 fw-semibold small">
                      {item.reviewCount}+ Reviews
                    </span>
                  </div>

                  {/* Name */}
                  <h6 className="fw-semibold mb-1">{item.name}</h6>

                  {/* Price */}
                  <h5 className="mt-1">
                    <span className="old-price">
                      {item.oldPrice && `$${item.oldPrice}`}
                    </span>
                    <span className="text-dark fw-bold ms-2">
                      ${item.price}
                    </span>
                  </h5>
                </div>

                {/* Right Icons */}
                <div className="d-flex flex-column gap-3">
                  <button className="icon-box">
                    <ShoppingCart size={18} />
                  </button>
                  <button className="icon-box">
                    <Heart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
