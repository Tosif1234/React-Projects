import React from "react";
import img1 from "../../assets/poster/poster-01.png";
import img2 from "../../assets/poster/poster-02.png";
import "./Poster.css"

const Poster = () => {
  return (
    <section className="poster py-5">
      <div className="container">
        <div className="row g-4">
          
          {/* POSTER 1 */}
          <div className="col-12 col-md-6">
            <div className="poster-box">
              <img src={img1} alt="poster1" className="poster-img" />
              <div className="poster-content-left ">
                <h2>Rich sound, <br /> for less.</h2>
                <p>Collections →</p>
              </div>
            </div>
          </div>

          {/* POSTER 2 */}
          <div className="col-12 col-md-6">
            <div className="poster-box">
              <img src={img2} alt="poster2" className="poster-img" />
              <div className="poster-content">
                <small>50% Offer In Winter</small>
                <h2>Get VR <br /> Reality Glass</h2>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Poster;
