import React from "react";

const CarCard = ({ car }) => {
  const { brand, image, carName, description, features } = car || {};

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img className="h-52 object-cover w-full" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {carName}
          <div className="badge bg-green-600 text-white">{brand}</div>
        </h2>
        <p className="font-mono">{description}</p>
        <div className="card-actions gap-3">
          {features.map((feature, i) => (
            <div key={i} className="badge text-green-600 bg-green-100 text-xs">
              #{feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarCard;
