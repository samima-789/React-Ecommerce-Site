import React from 'react';
import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";

const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
    title: "Free Shipping",
    description: "free shipping on all orders .",
  },
  {
    id: 2,
    icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
    title: "24/7 Support",
    description: "Our team is available anytime to assist you with queries.",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
    title: "Secure Payment",
    description: "100% safe and secure payment options for peace of mind.",
  },
  {
    id: 4,
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
    title: "Quality Guarantee",
    description: "We guarantee top-quality products with every purchase.",
  },
];

const Services = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ServiceData.map((data) => (
            <div
              key={data.id}
              className="flex flex-col items-center text-center gap-4 p-8 
                         rounded-3xl bg-white dark:bg-gray-800 shadow-lg 
                         hover:shadow-2xl hover:-translate-y-2 
                         transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Icon */}
              <div className="text-primary">
                {data.icon}
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold">{data.title}</h2>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
