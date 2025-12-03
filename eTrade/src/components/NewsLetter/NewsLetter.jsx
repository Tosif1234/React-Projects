import React from "react";
import { Mail } from "lucide-react";
import bgImg from "../../assets/NewsLatter/bg-image-5.jpg";

export default function Newsletter() {
  return (
    <>
      <style>{`
        .newsletter-wrapper {
          background-image: url(${bgImg});
          background-size: cover;
          background-position: center;
          border-radius: 25px;
          padding: 80px 50px;
          position: relative;
          overflow: hidden;
          min-height: 350px;
          display: flex;
          align-items: center;
        }

        .newsletter-wrapper::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #edf1f5 0%, #edf1f5 45%, rgba(255,255,255,0) 100%);
          z-index: 1;
        }

        .newsletter-content {
          position: relative;
          z-index: 2;
          max-width: 550px;
        }

        .badge-title {
          display: flex;
          align-items: center;
          color: #3577f0;
          font-weight: 600;
          font-size: 16px;
          margin-bottom: 12px;
        }

        .badge-icon {
          width: 32px;
          height: 32px;
          background: #3577f0;
          border-radius: 50%;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 10px;
        }

        .newsletter-heading {
          font-size: 48px;
          font-weight: 700;
          color: #222;
          margin-bottom: 35px;
          line-height: 1.2;
        }

        .form-container {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .input-box {
          background: white;
          display: flex;
          align-items: center;
          padding: 18px 22px;
          border-radius: 50px;
          width: 360px;
          box-shadow: 0px 10px 25px rgba(0,0,0,0.07);
        }

        .input-box input {
          border: none;
          outline: none;
          width: 100%;
          font-size: 18px;
          margin-left: 12px;
          color: #333;
        }

        .subscribe-btn {
          padding: 18px 40px;
          border-radius: 50px;
          font-size: 18px;
          font-weight: 600;
          color: #fff;
          background: #1c1c1e;
          border: none;
          transition: 0.3s;
        }

        .subscribe-btn:hover {
          background: #3577f0;
        }

        @media(max-width: 768px) {
          .newsletter-wrapper::before {
            background: rgba(255,255,255,0.9);
          }
          .newsletter-heading {
            font-size: 32px;
            text-align: center;
          }
          .newsletter-content {
            width: 100%;
            text-align: center;
          }
          .form-container {
            flex-direction: column;
            justify-content: center;
          }
          .input-box {
            width: 100%;
          }
          .subscribe-btn {
            width: 100%;
          }
          .badge-title {
            justify-content: center;
          }
        }
      `}</style>

      <section className="container py-5">
        <div className="newsletter-wrapper">

          <div className="newsletter-content">

            <div className="badge-title">
              <span className="badge-icon">
                <Mail size={18} />
              </span>
              Newsletter
            </div>

            <h2 className="newsletter-heading">Get weekly update</h2>

            <div className="form-container">
              <div className="input-box">
                <Mail size={20} strokeWidth={2} opacity={0.5} />
                <input type="email" placeholder="example@gmail.com" />
              </div>

              <button className="subscribe-btn">Subscribe</button>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}
