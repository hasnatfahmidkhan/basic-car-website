import React, { useEffect, useState } from "react";
import { getWishList, removeFromWishList } from "../../Utitlity/localStorage";
import useCarData from "../../Hooks/useCarData";

const WishList = () => {
  const { cars } = useCarData("../carsData.json");
  const [wishList, setWishList] = useState([]);
  const [sortWish, setSortWish] = useState("none");
  useEffect(() => {
    const wishListId = getWishList();
    const filteredWish = cars.filter((car) => wishListId.includes(car.id));
    setWishList(filteredWish);
  }, [cars]);

  const handleRemove = (id) => {
    // remove from localStorage
    removeFromWishList(id);

    // for ui update
    setWishList((prev) => prev.filter((p) => p.id !== id));
  };
  if (sortWish === "price-asc") {
    wishList.sort((a, b) => a.price - b.price);
  } else if (sortWish === "price-dsc") {
    wishList.sort((a, b) => b.price - a.price);
  }

  return (
    <section>
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-semibold">WishList</h2>
        <div>
          <select
            value={sortWish}
            onChange={(e) => setSortWish(e.target.value)}
            className="w-full md:w-auto bg-green-600 text-white font-medium px-4 py-2.5 rounded-lg shadow-md outline-none "
          >
            <option value="none" disabled>
              Sort by Price
            </option>
            <option value="price-asc">Low → High</option>
            <option value="price-dsc">High → Low</option>
          </select>
        </div>
      </div>

      <div className="py-5 space-y-5">
        {wishList.length === 0 ? (
          <div className="flex flex-col items-center">
            <p className="text-gray-500 text-center">
              No cars added to wishlist yet.
            </p>
            <img className="w-md" src="/empty.gif" alt="" />
          </div>
        ) : (
          wishList.map((car) => (
            <div
              key={car.id}
              className="w-full bg-white shadow-md rounded-2xl overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-4 p-4 border border-gray-100"
            >
              <img
                src={car.image}
                alt={car.carName}
                className="w-full md:w-60 h-40 object-cover rounded-xl"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold">{car.carName}</h3>
                <p className="text-gray-500">{car.brand}</p>
                <p className="text-lg font-semibold mt-2">
                  ${car.price.toLocaleString()}
                </p>
              </div>
              <button
                className="btn bg-red-500 text-white rounded-xl hover:bg-red-600"
                onClick={() => handleRemove(car.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default WishList;
