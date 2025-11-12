"use client";

import { useState } from "react";
import axios from "axios";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // You can change this to your backend endpoint later
      await axios.post("/api/bookings", formData);
      setMessage("🎉 Booking confirmed successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
      });
    } catch (error) {
      console.error(error);
      setMessage("❌ Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto py-10 px-5">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Book Your Stay
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="firstName"
          placeholder="First Name"
          className="w-full border rounded p-2"
          onChange={handleChange}
          value={formData.firstName}
          required
        />
        <input
          name="lastName"
          placeholder="Last Name"
          className="w-full border rounded p-2"
          onChange={handleChange}
          value={formData.lastName}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border rounded p-2"
          onChange={handleChange}
          value={formData.email}
          required
        />
        <input
          name="phone"
          placeholder="Phone"
          className="w-full border rounded p-2"
          onChange={handleChange}
          value={formData.phone}
        />
        <input
          type="date"
          name="checkIn"
          placeholder="Check-in Date"
          className="w-full border rounded p-2"
          onChange={handleChange}
          value={formData.checkIn}
          required
        />
        <input
          type="date"
          name="checkOut"
          placeholder="Check-out Date"
          className="w-full border rounded p-2"
          onChange={handleChange}
          value={formData.checkOut}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Processing..." : "Confirm Booking"}
        </button>

        {message && (
          <p className="text-center mt-4 text-gray-700">{message}</p>
        )}
      </form>
    </div>
  );
}
