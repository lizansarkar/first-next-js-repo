import React from "react";

export default function FoodCardSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {/* 8 ta skeleton card loop kore dekhano hocche */}
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm animate-pulse"
        >
          {/* Image Skeleton */}
          <div className="h-48 bg-gray-200" />

          <div className="p-5 space-y-4">
            {/* Title & Price Skeleton */}
            <div className="flex justify-between items-start">
              <div className="h-6 bg-gray-200 rounded-md w-2/3" />
              <div className="h-6 bg-gray-200 rounded-md w-12" />
            </div>

            {/* Category/Description Skeleton */}
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded-md w-full" />
              <div className="h-4 bg-gray-200 rounded-md w-1/2" />
            </div>

            {/* Buttons Skeleton */}
            <div className="flex gap-3 pt-2">
              <div className="h-10 bg-gray-200 rounded-xl flex-1" />
              <div className="h-10 bg-gray-200 rounded-xl flex-[1.5]" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
