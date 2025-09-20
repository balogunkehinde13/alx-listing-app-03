import React from "react";
import { PropertyProps } from "@/interfaces/index";
import { Star } from "lucide-react";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
      {/* Property Image */}
      <div className="relative h-48">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
        />
        {property.discount && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {property.discount}
          </span>
        )}
      </div>

      {/* Property Info */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{property.name}</h3>
        <p className="text-sm text-gray-500">
          {property.address.city}, {property.address.country}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="text-sm font-medium">{property.rating}</span>
        </div>

        {/* Price */}
        <p className="text-blue-600 font-bold">${property.price}/night</p>
      </div>
    </div>
  );
};

export default PropertyCard;
