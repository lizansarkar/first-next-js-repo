import React from "react";

export default function loading() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image Skeleton */}
        <div className="aspect-square md:h-[500px] bg-gray-200 rounded-2xl w-full" />

        {/* Right: Content Skeleton */}
        <div className="space-y-6">
          <div className="space-y-4">
            {/* Category Badge Skeleton */}
            <div className="h-6 bg-gray-200 rounded-full w-32" />

            {/* Title Skeleton */}
            <div className="h-12 bg-gray-200 rounded-xl w-full" />
            <div className="h-12 bg-gray-200 rounded-xl w-3/4" />

            {/* Price Skeleton */}
            <div className="h-8 bg-gray-200 rounded-lg w-24 mt-4" />
          </div>

          {/* Description Lines */}
          <div className="border-y border-gray-100 py-6 space-y-3">
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-2/3" />
          </div>

          {/* Buttons Skeleton */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <div className="h-14 bg-gray-200 rounded-xl flex-1" />
            <div className="h-14 bg-gray-200 rounded-xl flex-1" />
          </div>

          {/* ID/Small text skeleton */}
          <div className="h-3 bg-gray-100 rounded w-40" />
        </div>
      </div>
    </div>
  );
}
