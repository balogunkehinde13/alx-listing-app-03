"use client";
import Image from "next/image";
import apartmentImg from "@/public/assets/apartment.jpeg";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PropertyDetail({ property }: any) {
  const address = property.PropertyAddress || {};

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white shadow rounded-xl overflow-hidden">
      <div className="relative w-full h-80">
        <Image
          src={apartmentImg}
          alt="Property image"
          className="object-cover w-full h-full"
          fill
        />
      </div>

      <div className="p-6 space-y-3">
        <h1 className="text-2xl font-semibold">
          {address.streetAddress || "Unnamed Property"}
        </h1>

        <p className="text-gray-600">
          {[address.city, address.state, address.zipcode].filter(Boolean).join(", ")}
        </p>

        <p className="text-blue-600 text-xl font-bold">
          ${property.Price?.toLocaleString()}
        </p>

        <div className="text-gray-700">
          <p>🛏️ Bedrooms: {property.Bedrooms}</p>
          <p>🛁 Bathrooms: {property.Bathrooms}</p>
          <p>📐 Area: {property["Area(sqft)"]} sqft</p>
          <p>🏗️ Built: {property.yearBuilt}</p>
        </div>

        <a
          href={property.PropertyZillowURL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline mt-3 inline-block"
        >
          View on Zillow
        </a>
      </div>
    </div>
  );
}
