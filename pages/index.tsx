import React, { useState } from "react";
/* import { IMAGES } from "@/constants/images"; */
import Pill from "@/components/common/Pill";
import PropertyCard from "@/components/common/PropertyCard";
import { PROPERTYLISTINGSAMPLE } from "@/constants/index";

const filters = ["Top Villa", "Self Checkin", "Beachfront", "Pet Friendly", "Luxury", "Budget"];

const HomePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("");

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative w-full h-[60vh] flex flex-col justify-center items-center text-center text-white"
        /* style={{
          backgroundImage: `url(${IMAGES.HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} */
      >
        <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
        <div className="relative z-10 max-w-2xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {filters.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              active={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            />
          ))}
        </div>
      </section>

       {/* Listing Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
          Popular Properties
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
