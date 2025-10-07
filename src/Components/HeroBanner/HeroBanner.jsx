import React from "react";

const HeroBanner = () => {
  return (
    <div
      className="hero min-h-[85vh] mb-10 rounded-xl overflow-hidden"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-xl mx-auto">
          <h1 className="mb-5 text-5xl font-bold playfair-font">Welcome to Ghorer Gari</h1>
          <p className="mb-5 max-w-md mx-auto">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-success">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
