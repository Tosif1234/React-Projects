import { useState , useEffect} from "react";
import React from "react";
import headphone from "../../assets/countdown/headphone.png"; // apni image path dalna
import { Headphones } from "lucide-react";

function Countdown() {
  const targetDate = new Date("2025-12-31T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
     <section className="countdown py-5">
        <div className="container mt-5 light-bg ">
      <div className="promo-box row align-items-center p-5 position-relative">

        {/* LEFT SIDE */}
        <div className="col-lg-6">
          <div className="d-flex align-items-center gap-2 mb-3 text-pink fw-semibold">
            <Headphones className='bg-pink text-white rounded-5 p-1'/>
            Don't Miss!!
          </div>
          <h2 className="fw-bold display-4">
            Enhance Your <br /> Music Experience
          </h2>

          {/* Timer */}
          <div className="d-flex gap-3 my-4 flex-wrap">
            <div className="rounded-circle bg-white p-2 px-4 d-flex flex-column justify-content-center align-items-center">
              <h3 className="fw-meduim mb-0 pt-2">{timeLeft.days}</h3>
              <small className="pb-2 px-2">Day</small>
            </div>
            <div className="rounded-circle bg-white p-2 px-4  d-flex flex-column justify-content-center align-items-center">
              <h3 className="fw-meduim mb-0 pt-2">{timeLeft.hours}</h3>
              <small className="pb-2 px-2">Hrs</small>
            </div>
            <div className="rounded-circle bg-white p-2 px-4  d-flex flex-column justify-content-center align-items-center">
              <h3 className="fw-meduim mb-0 pt-2">{timeLeft.minutes}</h3>
              <small className="pb-2 px-2">Min</small>
            </div>
            <div className="rounded-circle bg-white p-2 px-4 d-flex flex-column justify-content-center align-items-center">
              <h3 className="fw-meduim mb-0 pt-2">{timeLeft.seconds}</h3>
              <small className="pb-2 px-2">Sec</small>
            </div>
          </div>

          <button className="btn btn-primary px-4 py-3 rounded-3 fw-semibold">
            Check it Out!
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-lg-6 text-center mt-4 mt-lg-0 promo-img-wrapper">
          <img src={headphone} alt="Headphone" className="img-fluid promo-img" />
        </div>

      </div>
    </div>
     </section>
  );
}

export default Countdown;
