import React from "react";
import useCarData from "../../Hooks/useCarData";
import { Search } from "lucide-react";
import CarCard from "../../Components/CarCard";
import SkeletonLoader from "../../Components/SkeletonLoader/SkeletonLoader";
import { Link } from "react-router";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";

const Home = () => {
  const {
    cars: featuredCars,
    loading,
    error,
  } = useCarData("../featuredCars.json");
  return (
    <section>
      <HeroBanner />
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-semibold">Featured Cars</h2>
        <div>
          <Link to={"cars"} className="btn btn-success">
            See All Cars
          </Link>
        </div>
      </div>

      {loading ? (
        <SkeletonLoader />
      ) : (
        <div className="py-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Home;
