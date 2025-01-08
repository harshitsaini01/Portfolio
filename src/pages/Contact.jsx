import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setLoading(true);
  
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwiElRUDReZHUjt90JN08EFg_Wsdbu5H4GciyEwRxdFLJKO15ba2Ms2F52y6HJCPbQUjQ/exec";
  
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // Critical!
        },
        body: new URLSearchParams(formData).toString(), // Proper encoding for Google Apps Script
      });
  
      if (response.ok) {
        alert("Thank you for reaching out! Your message has been sent.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error sending your message. Please check your network connection.");
    } finally {
      setLoading(false);
    }
  };
  


  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6">
      {/* Background Floating Dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, index) => (
          <div
            key={index}
            className="absolute bg-white rounded-full opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 4}px`,
              height: `${Math.random() * 6 + 4}px`,
            }}
          />
        ))}
      </div>

      {/* Contact Form uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuSection */}
      <div className="relative z-10 w-full max-w-3xl bg-gray-900 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-500 mb-6 text-center">
          Contact Me
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >
          {/* Name Input */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Message Input */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              rows="5"
              className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-purple-700 text-white px-8 py-3 rounded-lg text-lg hover:bg-purple-600 hover:scale-105 transition-transform duration-300"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
