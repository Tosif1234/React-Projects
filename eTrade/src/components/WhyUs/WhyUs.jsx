import React from "react";
import gift from "../../assets/whyus/1.png";
import discount from "../../assets/whyus/2.png";
import return2 from "../../assets/whyus/3.png";
import homeReturn from "../../assets/whyus/4.png";
import support from "../../assets/whyus/5.png";
import {Headphones, ThumbsUp} from "lucide-react"

function WhyUs() {
  const features = [
    {
      img: gift,
      title: "Fast & Secure",
      text: "Delivery",
    },
    {
      img: discount,
      title: "100% Guarantee",
      text: "On Product",
    },
    {
      img: return2,
      title: "24 Hour Return",
      text: "Policy",
    },
    {
      img: homeReturn,
      title: "24 Hour Return",
      text: "Policy",
    },
    {
      img: support,
      title: "Next Level Pro",
      text: "Quality",
    },
  ];

  return (
    <>
      <style>{`
    .whyUs-section {
    background: #fffff;
    }

.why-text {
  color: #f54748;
  font-weight: 600;
}

.why-icon {
  font-size: 18px;
}

.why-card {
  border: 1px solid #f1f1f1;
  border-radius: 6px;
  transition: 0.3s ease;
  background: #fff;
  margin-bottom: 30px;
  padding : 50px 40px;
}

.why-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

    `}</style>
      <section className="whyUs-section py-5">
        <div className="container text-center">
          <div className="d-flex align-items-center gap-2 mb-3 text-pink fw-semibold justify-content-center">
            <ThumbsUp className='bg-pink text-white rounded-5 p-1'/>
            Don't Miss!!
          </div>
          <h2 className="fw-bold mb-5">Why People Choose Us</h2>

          <div className="row justify-content-center g-4">
            {features.map((item, index) => (
              <div className="col-6 col-md-4 col-lg" key={index}>
                <div className="why-card">
                  <img src={item.img} className="img-fluid mb-3 pb-1" alt="" />
                  <h6 className="fw-semibold mb-0">{item.title}</h6>
                  <p className="mb-0">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyUs;
