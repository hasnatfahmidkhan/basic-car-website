import React, { useState } from "react";
import useCarData from "../../Hooks/useCarData";
import { Search } from "lucide-react";
import SkeletonLoader from "../../Components/SkeletonLoader/SkeletonLoader";
import CarCard from "../../Components/CarCard";

const Cars = () => {
  const { cars, loading } = useCarData("../carsData.json");
  const [search, setSearch] = useState("");

  const term = search.trim().toLocaleLowerCase();
  const searchedCars = term
    ? cars.filter((car) => car.carName.toLocaleLowerCase().includes(term))
    : cars;

  return (
    <section>
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-semibold">
          Available Cars{" "}
          <span className="text-sm text-gray-600">
            ({searchedCars.length} cars found)
          </span>
        </h2>
        <div>
          <label className="input">
            <Search size={14} color="gray" />
            <input
              defaultValue={search}
              onChange={(e) => setSearch(e.target.value)}
              name="search"
              type="search"
              placeholder="Search"
            />
          </label>
        </div>
      </div>

      {loading ? (
        <SkeletonLoader count={20} />
      ) : (
        <div className="py-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {searchedCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Cars;
