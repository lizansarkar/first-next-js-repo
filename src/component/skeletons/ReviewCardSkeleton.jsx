import React from "react";

export default function ReviewCardSkeleton() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm animate-pulse">
      {/* User Info Section */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-200" />
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-24" />
            <div className="h-3 bg-gray-100 rounded w-16" />
          </div>
        </div>
        <div className="h-4 bg-gray-200 rounded w-16" />
      </div>

      {/* Review Text Lines */}
      <div className="space-y-3 mb-8">
        <div className="h-3 bg-gray-200 rounded w-full" />
        <div className="h-3 bg-gray-200 rounded w-full" />
        <div className="h-3 bg-gray-200 rounded w-2/3" />
      </div>

      {/* Action Bar */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-50">
        <div className="h-6 bg-gray-100 rounded-lg w-20" />
        <div className="h-4 bg-gray-100 rounded w-12" />
      </div>
    </div>
  );
}