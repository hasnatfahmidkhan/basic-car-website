import { Star, ClipboardList, PhoneOutgoing } from "lucide-react";
import { Link, useParams } from "react-router";
import { setWishList } from "../../Utitlity/localStorage";
import { useState } from "react";
// import swiper and swiperslide
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
// Navigation for the arrow and Thumbs to link the two swippers
import { Navigation, Thumbs, Autoplay, FreeMode } from "swiper/modules"; // Added FreeMode import for clarity

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import "swiper/css/free-mode"; // Added free-mode CSS import
import useCarData from "../../Hooks/useCarData";

const CarDetails = () => {
  const { id: carId } = useParams();
  const { cars, loading } = useCarData("/carsData.json");
  const carDetail = cars.find((car) => car.id == carId);

  // Corrected state variable name to standard React convention (thumbsSwiper)
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // destructuring the car data's
  const {
    id,
    carName,
    brand,
    modelYear,
    type,
    fuelType,
    transmission,
    rating,
    review,
    price,
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
  } = carDetail || {};

  if (loading) {
    return console.log("Loading");
  }

  return (
    <div>
      <section className="bg-white rounded-2xl shadow-md p-4 sm:p-6 md:p-10 mt-6 border border-gray-100">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Images */}
          <div className="w-full max-w-full">
            {/* 1. MAIN IMAGE SLIDER: Added responsive height classes */}
            <Swiper
              thumbs={{ swiper: thumbsSwiper }}
              slidesPerView={1}
              loop={true}
              // navigation={true}
              modules={[Navigation, Thumbs, Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false, // Ensure autoplay continues after manual swipe
                pauseOnMouseEnter: true, // Pause on hover for better UX
              }}
              // ADDED CLASS: Responsive height for the main slider container
              className="w-full h-56 sm:h-64 md:h-80 lg:h-96 main-image-swiper"
            >
              {images.map((image, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={image}
                    // CHANGED CLASS: Use h-full to fill the responsive container height
                    className="rounded-xl w-full h-full object-cover shadow-md"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* 2. THUMBNAIL SLIDER: Added breakpoints for responsive slide count */}
            <Swiper
              onSwiper={setThumbsSwiper}
              // REMOVED slidesPerView here to use breakpoints below
              spaceBetween={10}
              freeMode={true}
              slidesPerView={3}
              watchSlidesProgress={true}
              modules={[Navigation, Thumbs, FreeMode]} // Added FreeMode
              className="mt-4 w-full thumbnail-swiper"
            >
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="w-full h-full cursor-pointer">
                    <img
                      src={img}
                      // CHANGED CLASS: Ensure uniform thumbnail size
                      className="w-full h-20 sm:h-24 object-cover rounded-lg border hover:scale-105 transition"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right: Main Info - Grid is already md:grid-cols-2 responsive */}
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

            {/* CHANGED CLASS: Added xl:grid-cols-4 for extra large screens */}
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-y-3 pt-3 text-sm text-gray-600">
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

        {/* feature section */}
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
              <button
                onClick={() => setWishList(id)}
                className="cursor-pointer flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition"
              >
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
