import Title from "@/component/Title";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { resolve } from "styled-jsx/css";
import CartButton from "@/component/buttons/CartButton";

const getFoods = async () => {
  try {
    const res = await fetch(
      "https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
      {
        cache: "no-store", // Fresh data pawar jonno
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return data.data || data.foods || [];
  } catch (error) {
    console.error("Error fetching foods:", error);
    return [];
  }
};

export default async function FoodsPage() {
  const foods = await getFoods();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Title>Explore Our Foods</Title>

      <div className="flex justify-between items-end mb-8 border-b pb-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Special Recipes</h2>
          <p className="text-gray-500">
            Discover delicious meals for your next dev session.
          </p>
        </div>
        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold">
          Total {foods.length} Items
        </span>
      </div>

      {/* Food Grid Design */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {foods.length > 0 ? (
          foods.map((food, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Image Section */}
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img
                  src={
                    food.foodImg ||
                    "https://via.placeholder.com/400x300?text=No+Image"
                  }
                  alt={food.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Category Badge */}
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-bold px-2 py-1 rounded-lg shadow-sm z-20 capitalize">
                  {food.category || "cooked"}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                {/* Title & Price */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-gray-800 leading-tight capitalize min-h-[3rem] line-clamp-2">
                    {food.title || "Delicious Food"}
                  </h3>
                  <span className="text-green-600 font-bold text-lg">
                    ${food.price || "12.00"}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  {/* View Details Button */}
                  <Link
                    href={`/foods/${food.id || index}`}
                    className="flex-1 text-center py-2.5 border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors active:scale-95"
                  >
                    View Details
                  </Link>

                  {/* Order Now Button */}
                  <CartButton></CartButton>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <p className="text-gray-400 text-xl font-medium">
              No food found at this moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
