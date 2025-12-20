"use client";
import ReviewCard from "@/component/card/ReviewCard";
import ReviewCardSkeleton from "@/component/skeletons/ReviewCardSkeleton";
import Title from "@/component/Title";
import React, { useEffect, useState } from "react";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state add koro

  useEffect(() => {
    fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(Array.isArray(data) ? data : data.reviews || []);
        setLoading(false); // Data ashar por loading false
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Title>Reviews Page</Title>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {loading ? (
          // Loading thakle 8 ta skeleton card dekhabe main grid er bhetore
          [...Array(8)].map((_, index) => (
            <ReviewCardSkeleton key={index} />
          ))
        ) : reviews.length > 0 ? (
          reviews.map((rev) => (
            <ReviewCard review={rev} key={rev.id || rev._id} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No reviews found.</p>
        )}
      </div>
    </div>
  );
}