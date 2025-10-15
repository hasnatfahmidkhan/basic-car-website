import { Star } from "lucide-react";
import { useNavigate } from "react-router";

const CarCard = ({ car }) => {
  const {
    carName,
    brand,
    modelYear,
    price,
    image,
    rating,
    features,
    id,
    condition,
  } = car || {};
  const navigate = useNavigate();

  return (
    <div className="card shadow-sm hover:scale-105 transition-all ease-in-out duration-300">
      {/* card Image  */}
      <figure className="relative">
        <img className="h-52 object-cover w-full" src={image} alt="Shoes" />
        <div className="absolute top-3 left-3 border-none badge bg-green-600 text-white">
          {brand}
        </div>
      </figure>

      <div className="card-body">
        {/* card title and model year  */}
        <div className="flex items-center justify-between">
          <h2 className="text-black card-title">{carName}</h2>
          <span className="text-gray-500 text-base font-medium">
            {modelYear}
          </span>
        </div>
        {/* conditon and rating */}
        <div className="flex items-center justify-between">
          <span className="badge text-green-700 bg-green-50 px-2 py-3">
            {condition}
          </span>
          <span className="badge text-gray-600 bg-green-50 px-2 py-3  text-base flex items-center">
            {rating}
            <span className="text-yellow-500">
              <Star size={15} fill="currentColor" />
            </span>{" "}
          </span>
        </div>
        {/* car features */}
        <div className="card-actions gap-3 py-3 border-b border-gray-300">
          {features.map((feature, i) => (
            <div key={i} className="badge text-green-600 bg-green-100 text-xs">
              #{feature}
            </div>
          ))}
        </div>
        {/* price and view deatials button */}
        <div className="px-2 py-3  flex justify-between w-full items-center">
          <p className="text-green-600 font-bold text-xl">৳ {price}</p>
          <button
            onClick={() => navigate(`/car-details/${id}`)}
            className="px-4 py-2 cursor-pointer bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
