import React from "react";
import { MoveLeft, MoveRight, Quote } from "lucide-react";
import user1 from "../../assets/feedback/1.png"
import user2 from "../../assets/feedback/2.png"
import user3 from "../../assets/feedback/3.png"

const testimonials = [
  {
    text: "It's amazing how much easier it has been to meet new people and create instantly non connections. I have the exact same personal the only thing that has changed is my mind set and a few behaviors.",
    name: "James C. Anderson",
    role: "Head Of Idea",
    image: user1,
  },
  {
    text: "It's amazing how much easier it has been to meet new people and create instantly non connections. I have the exact same personal the only thing that has changed is my mind set and a few behaviors.",
    name: "James C. Anderson",
    role: "Head Of Idea",
    image: user2,
  },
  {
    text: "It's amazing how much easier it has been to meet new people and create instantly non connections. I have the exact same personal the only thing that has changed is my mind set and a few behaviors.",
    name: "James C. Anderson",
    role: "Head Of Idea",
    image: user3,
  },
];

export default function Feedback() {
  return (
    <>

      <style>{`
        /* Section Background matching the image */
        .feedback-section {
          background-color: #f9f3f0;
          font-family: sans-serif;
        }

        /* Tag Styling (The red "Testimonials" badge) */
        .tag-badge {
          display: inline-flex;
          align-items: center;
          color: #ff497c;
          font-weight: 600;
          font-size: 14px;
        }
        .icon-circle {
          background-color: #ff497c;
          color: white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 8px;
          font-size: 12px;
        }

        /* Speech Bubble Card */
        .speech-card {
          background: #ffffff;
          border-radius: 10px;
          padding: 40px;
          position: relative;
          border: none;
          foont-size : 16px;
          box-shadow: 0px 16px 32px 0 rgba(0,0,0,0.-04);
          margin-bottom: 25px; /* space for the tail */
        }

        /* The Triangle (Tail) below the card */
        .speech-card::after {
          content: '';
          position: absolute;
          bottom: -25px; /* Push it below card */
          left: 100px;    /* Position from left */
          width: 0; 
          height: 0; 
        //   border-left: 15px solid transparent;
          border-right: 50px solid transparent;
          border-top: 25px solid white; /* The color of the tail */
        }

        /* User Avatar */
        .user-img {
          width: 60px;
          height: 60px;
          border-radius: 8px; /* Slightly rounded square as per design */
          object-fit: cover;
        }

        /* Nav Buttons */
        .nav-btn {
          width: 45px;
          height: 45px;
          background: white;
          border: none;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: 0.3s;
          color: #555;
        }
        .nav-btn:hover {
          background: #ff497c;
          color: white;
        }
        
        .mt-4-adjust {
            position: relative;
            top: 40px;
            }
            

      `}</style>

      <section className="feedback-section py-5 my-5">
        <div className="container pb-5">
          
          {/* Header & Navigation */}
          <div className="d-flex justify-content-between align-items-end mb-5">
            <div>
              <div className="tag-badge mb-2">
                <span className="icon-circle"><Quote size={12} fill="white" /></span>
                Testimonials
              </div>
              <h2 className="fw-bold display-6 mb-0">Users Feedback</h2>
            </div>
            
            {/* Arrows */}
            <div className="d-flex gap-2">
              <button className="nav-btn shadow-sm"><MoveLeft size={20} /></button>
              <button className="nav-btn shadow-sm"><MoveRight size={20} /></button>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="row g-4">
            {testimonials.map((item, index) => (
              <div key={index} className={`col-lg-4 col-md-6 ${index === 1 ? "mt-4-adjust pb-3" : ""}`}>
                
                {/* Speech Bubble Card */}
                <div className={`speech-card mb-5 ${index === 1 ? "mx-2" : ""}`}>
                  <p className="text-secondary mb-0" style={{lineHeight: '1.8',}}>
                    " {item.text} "
                  </p>
                </div>

                {/* User Info (Below the tail) */}
                <div className="d-flex align-items-center gap-3 mt-2 ms-3">
                  <img src={item.image} alt={item.name} className="user-img" />
                  <div>
                    <span className="d-block text-secondary small mb-0">{item.role}</span>
                    <h6 className="fw-bold mb-0">{item.name}</h6>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}