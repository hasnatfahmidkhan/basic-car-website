import { Star, ClipboardList, PhoneOutgoing } from "lucide-react";
import { Link, useLocation } from "react-router";

const CarDetails = () => {
  const { state } = useLocation();
  const {
    carName,
    brand,
    modelYear,
    type,
    fuelType,
    transmission,
    rating,
    review,
    price,
    image,
    images,
    available,
    location,
    mileage,
    engine,
    seats,
    color,
    condition,
    registrationYear,
    ownership,
    chassisNumber,
    features,
    description,
    sellerInfo,
    serviceHistory,
    postedDate,
    views,
  } = state;

  return (
    <div>
      <section className="bg-white rounded-2xl shadow-md p-6 md:p-10 mt-6 border border-gray-100">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Images */}
          <div>
            <img
              src={image}
              alt={carName}
              className="rounded-xl w-full h-72 object-cover shadow-md"
            />
            <div className="flex gap-3 mt-4">
              {images?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${carName} ${i}`}
                  className="w-24 h-20 object-cover rounded-lg border hover:scale-105 transition"
                />
              ))}
            </div>
          </div>

          {/* Right: Main Info */}
          <div className="space-y-3">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 playfair-font">
              {carName}
              <span className="text-sm text-green-600 font-semibold">
                ({brand})
              </span>{" "}
              {modelYear}
            </h1>
            <p className="text-gray-500 text-sm">
              Posted on {postedDate} • {views} views
            </p>

            <div className="flex items-center gap-2 text-yellow-500">
              <Star size={18} fill="currentColor" />
              <span className="text-gray-700 font-medium">{rating}</span>
              <span className="text-gray-400">({review})</span>
            </div>

            <p className="text-xl font-bold text-green-600">
              ৳ {price.toLocaleString()}
            </p>

            <p className="text-gray-600">{description}</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 pt-3 text-sm text-gray-600">
              <p>
                <strong>🚗 Type:</strong> {type}
              </p>
              <p>
                <strong>⚙ Engine:</strong> {engine}
              </p>
              <p>
                <strong>🛞 Transmission:</strong> {transmission}
              </p>
              <p>
                <strong>🪑 Seats:</strong> {seats}
              </p>
              <p>
                <strong>⛽ Fuel:</strong> {fuelType}
              </p>
              <p>
                <strong>🎨 Color:</strong> {color}
              </p>
              <p>
                <strong>🛣 Mileage:</strong> {mileage}
              </p>
              <p>
                <strong>📅 Reg. Year:</strong> {registrationYear}
              </p>
              <p>
                <strong>👤 Owner:</strong> {ownership}
              </p>
              <p>
                <strong>📍 Location:</strong> {location}
              </p>
              <p>
                <strong>🔖 Condition:</strong> {condition}
              </p>
              <p>
                <strong>🔢 Chassis:</strong> {chassisNumber}
              </p>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        {/* feature section  */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Features</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {features.map((feature, i) => (
              <div
                key={i}
                className="rounded-md text-green-600 bg-green-100 px-4 py-3"
              >
                #{feature}
              </div>
            ))}
          </div>
        </div>

        <div className="divider"></div>
        {/* Seller Info */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Seller Information
          </h2>
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="font-semibold text-gray-800">{sellerInfo.name}</p>
              <p className="text-sm text-gray-600">
                📅 Service: {serviceHistory}
              </p>
              <p className="text-sm text-gray-600">
                📦 Availability:{" "}
                <span
                  className={`font-medium ${
                    available ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {available ? "Available" : "Sold"}
                </span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Link
                to={`tel:${sellerInfo.phone}`}
                className="flex items-center justify-center gap-2 border border-green-600 text-green-700 px-4 py-2 rounded-lg text-sm hover:bg-green-50 transition"
              >
                <PhoneOutgoing size={16} /> Call Seller
              </Link>
              <button className="cursor-pointer flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition">
                <ClipboardList size={16} /> Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarDetails;
