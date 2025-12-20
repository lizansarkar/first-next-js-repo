"use client"; // Date format browser e hobar jonno eta dorkar
import React, { useEffect, useState } from "react";

export default function ReviewCard({ review }) {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    // Shudhu browser e date format hobe, tahole ar server er sathe milbe na bole error dibe na
    const date = new Date(review.date).toLocaleDateString("bn-BD", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setFormattedDate(date);
  }, [review.date]);

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <img
            src={review.photo}
            alt={review.user}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-bold text-gray-900">{review.user}</h4>
            <span className="text-xs text-gray-400">{formattedDate}</span>
          </div>
        </div>

        {/* Rating Stars */}
        <div className="flex gap-0.5 text-yellow-400">
          {/* ... baki code thik ache ... */}
        </div>
      </div>

      <p className="text-gray-600 text-sm italic mb-6">"{review.review}"</p>

      <div className="flex items-center justify-between pt-4 border-t border-gray-50">
        <button className="flex items-center gap-2 text-gray-500">
          <span>{review.likes?.length || 0} Likes</span>
        </button>
        <button className="text-sm text-blue-600 font-medium">Reply</button>
      </div>
    </div>
  );
}
