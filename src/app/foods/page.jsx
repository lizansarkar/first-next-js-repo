import Title from "@/component/Title";
import React from "react";
import Image from "next/image";

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

    const data = await res.json(); // <--- Ekhane 'await' add kora hoyeche
    return data.data || data.foods || []; // API structure onujayi data handle
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
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Image Placeholder - API te image thakle src={} e hobe */}
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src={
                    food.image ||
                    "https://via.placeholder.com/400x300?text=No+Image"
                  }
                  alt={food.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800 leading-tight capitalize">
                    {food.title || "Delicious Food"}
                  </h3>
                  <span className="text-green-600 font-bold">
                    ${food.price || "12.00"}
                  </span>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                  {food.category ||
                    "cooked"}
                </p>
                <button className="w-full py-2.5 bg-gray-900 text-white rounded-xl font-medium hover:bg-blue-600 transition-colors active:scale-95 transition-transform">
                  Order Now
                </button>
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
