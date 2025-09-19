"use client";

import Image from "next/image";
import { CardProps } from "@/interfaces";

export default function Card({ title, description, imageUrl, onClick }: CardProps) {
  return (
    <div
      className="border rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
      onClick={onClick}
    >
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}
