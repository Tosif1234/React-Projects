import React from "react";
import { MoveLeft, MoveRight, Eye, Heart, ShoppingCart } from "lucide-react";
import img1 from "../../assets/products-main/product-01.png";
import img2 from "../../assets/products-main/product-02.png";
import img3 from "../../assets/products-main/product-03.png";
import img4 from "../../assets/products-main/product-04.png";

const arrivals = [
  {
    img: img1,
    name: "Demon's Souls",
    oldPrice: 40,
    price: 30,
    offer: "10% OFF",
  },
  {
    img: img2,
    name: "Google Home",
    oldPrice: 50,
    price: 40,
    offer: "15% OFF",
  },
  {
    img: img3,
    name: "Netflix Remot",
    oldPrice: 60,
    price: 45,
    offer: "15% OFF",
  },
  {
    img: img4,
    name: "Digital Accessories",
    oldPrice: 30,
    price: 20,
    offer: "30% OFF",
  },
];

export default function NewArrivals() {
  return (
    <>
      <style>{`
  .new-arrivals .text-purple { color:#6d4dfc; }
.bg-purple { background:#6d4dfc; }

.arr-btn {
  width:45px;
  height:45px;
  border:none;
  background:#f1f3f7;
  border-radius:12px;
  cursor:pointer;
}
.arr-btn:hover { background:#6d4dfc; color:white; }

.product-circle {
  width: 270px;
  height: 270px;
  background:#f7f9ff;
  border-radius:50%;
  margin:auto;
  display:flex;
  justify-content:center;
  align-items:center;
  transition:0.4s ease;
  position:relative;
  overflow: hidden;
}

.product-main-img {
  width:75%;
  transition:0.4s ease;
}
.product-circle:hover .product-main-img { transform:scale(1.2);  }

.offer-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background:#6d4dfc;
  color:#fff;
  padding:3px 12px;
  border-radius: 5px;
  font-size:12px;
  z-index: 20; /* above everything */
}



.dot {
  width:10px; height:10px;
  background:#bcd3ff;
  border-radius:50%;
}
.dot.active { background:#6d4dfc; }

.old-price {
  text-decoration: line-through;
  color:#999;
  margin-right:6px;
}
.price { font-weight:700; }

/* action buttons */
.action-buttons button {
  transition:0.3s;
}
.ic-btn {
  background:white;
  border:none;
  padding : 10px 13px;
  border-radius:5px;
  box-shadow:0 4px 12px rgba(0,0,0,0.1);
}
.cart-btn {
  background:#ff497c;
  border:none;
  color:white;
  padding:10px 18px;
  border-radius:5px;
  font-weight:600;
}
.cart-btn:hover { opacity:0.8;  }

`}</style>
      <section className="container new-arrivals py-5">
        {/* HEADER SECTION */}
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div>
            <h6 className="text-purple fw-semibold d-flex gap-2 align-items-center">
              <ShoppingCart
                size={20}
                className="bg-purple text-white p-1 rounded-circle"
              />
              This Week’s
            </h6>
            <h2 className="fw-bold display-5">New Arrivals</h2>
          </div>

          <div className="d-flex gap-2">
            <button className="arr-btn">
              <MoveLeft size={20} />
            </button>
            <button className="arr-btn">
              <MoveRight size={20} />
            </button>
          </div>
        </div>

        {/* PRODUCT CARDS */}
        <div className="row g-4">
          {arrivals.map((p, i) => (
            <div key={i} className="col-lg-3 col-md-6 text-center">
              <div className="position-relative">
                <div className="product-circle">
                  <img src={p.img} alt={p.name} className="product-main-img" />
                </div>
                <span className="offer-badge">{p.offer}</span>
              </div>

              {/* Dots */}
              <div className="d-flex justify-content-center gap-2 my-3">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>

              {/* Product Name */}
              <h6 className="fw-semibold">{p.name}</h6>

              {/* Price */}
              <h5 className="price mt-2">
                <span className="old-price">${p.oldPrice}</span> ${p.price}
              </h5>

              {/* HOVER BUTTONS */}
              <div className="action-buttons d-flex justify-content-center gap-3 mt-3">
                <button className="ic-btn">
                  <Eye size={18} />
                </button>
                <button className="cart-btn">Add to Cart</button>
                <button className="ic-btn">
                  <Heart size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
