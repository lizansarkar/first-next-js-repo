import React from "react";
import Link from "next/link";

// Fetch single food data
const getSingleFood = async (id) => {
  try {
    const res = await fetch(
      `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.details;
  } catch (error) {
    console.error("Error fetching food details:", error);
    return null;
  }
};

export default async function FoodDetailsPage({ params }) {
  // Next.js 15+ a params await korte hoy
  const { id } = await params;
  const food = await getSingleFood(id);

  // Food na paile sundor ekta error message
  if (!food) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Food not found!</h2>
        <Link href="/foods" className="text-blue-600 hover:underline">
          Back to Foods
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Food Image */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
            <img
              src={food.foodImg}
              alt={food.title}
              className="w-full h-[400px] md:h-[500px] object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Right: Food Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full uppercase tracking-wide">
              {food.category} • {food.area}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight capitalize">
              {food.title}
            </h1>
            <p className="text-3xl font-bold text-green-600">${food.price}</p>
          </div>

          <div className="border-t border-b border-gray-100 py-6">
            <p className="text-gray-600 leading-relaxed">
              Experience the authentic taste of our {food.title}. Made with the
              finest {food.area} style ingredients, this {food.category} dish is
              prepared fresh to ensure the highest quality and flavor.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-gray-200">
              Add to Cart
            </button>

            {/* Recipe Video Button */}
            {food.video && (
              <a
                href={food.video}
                target="_blank"
                className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all active:scale-95"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Recipe
              </a>
            )}
          </div>

          <p className="text-xs text-gray-400">
            ID: {food.id} • Fast Delivery Available
          </p>
        </div>
      </div>
    </div>
  );
}
