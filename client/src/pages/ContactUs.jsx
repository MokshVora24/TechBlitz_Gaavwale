import React, { useState } from 'react';
import { toast } from "react-hot-toast";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission (e.g., sending data to backend)
    console.log(formData);
    // Clear the form after submission
    setFormData({ name: '', email: '', message: '' });
    toast.success("Message sent successfully!");
  };

  return (
    <>
    <h1 className="text-3xl font-bold mb-1 text-center mt-14">Contact Us</h1>
    <div id="contact-us" className="container mx-auto mt-2 p-8 bg-white rounded-lg flex justify-center ">
      <form onSubmit={handleSubmit} className="space-y-4 w-96">
        <div>
          <label htmlFor="name" className="block font-semibold">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="border border-gray-300 px-4 py-2 rounded w-full focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-semibold">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="border border-gray-300 px-4 py-2 rounded w-full focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-semibold">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows="4"
            className="border border-gray-300 px-4 py-2 rounded w-full focus:outline-none focus:border-blue-500 resize-none"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
    </>
  );
};

export default ContactUs;
