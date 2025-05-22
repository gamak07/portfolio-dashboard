import React, { useState } from "react";
import { FaEdit, FaEye, FaStar, FaTrashAlt } from "react-icons/fa";
import Button from "../../components/Button";
import TestimonialDetails from "./TestimonialDetails";

const testimonials = [
  {
    image: "/human.jpg",
    name: "Walter Kenz",
    comments:
      "Working with this team has been an absolute pleasure. Their attention to detail and commitment to excellence exceeded all my expectations. I would highly recommend their services to anyone looking for top-notch quality.",
    date: "5/15/2025",
    status: "Published",
  },
  {
    image: "/human.jpg",
    name: "Walter Kenz",
    comments:
      "Working with this team has been an absolute pleasure. Their attention to detail and commitment to excellence exceeded all my expectations. I would highly recommend their services to anyone looking for top-notch quality.",
    date: "5/15/2025",
    status: "Published",
  },
  {
    image: "/human.jpg",
    name: "Walter Kenz",
    comments:
      "Working with this team has been an absolute pleasure. Their attention to detail and commitment to excellence exceeded all my expectations. I would highly recommend their services to anyone looking for top-notch quality.",
    date: "5/15/2025",
    status: "Published",
  },
  {
    image: "/human.jpg",
    name: "Walter Kenz",
    comments:
      "Working with this team has been an absolute pleasure. Their attention to detail and commitment to excellence exceeded all my expectations. I would highly recommend their services to anyone looking for top-notch quality.",
    date: "5/15/2025",
    status: "Pending",
  },
  {
    image: "/human.jpg",
    name: "Walter Kenz",
    comments:
      "Working with this team has been an absolute pleasure. Their attention to detail and commitment to excellence exceeded all my expectations. I would highly recommend their services to anyone looking for top-notch quality.",
    date: "5/15/2025",
    status: "Published",
  },
  {
    image: "/human.jpg",
    name: "Walter Kenz",
    comments:
      "Working with this team has been an absolute pleasure. Their attention to detail and commitment to excellence exceeded all my expectations. I would highly recommend their services to anyone looking for top-notch quality.",
    date: "5/15/2025",
    status: "Pending",
  },
];

const TestimonialsGrid = () => {
  const [showModal, setShowModal] = useState(null);
  const handleShowModal = (index) => {
    setShowModal((prev) => (prev === index ? null : index));
  };
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial, i) => (
        <div className="rounded-lg bg-white shadow-sm dark:bg-gray-800" key={i}>
          <div className="p-6">
            <div className="mb-4 flex items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="mr-4 h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {testimonial.name}
                </h3>
                <div className="mt-1 flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
              </div>
            </div>
            <div className="mb-4">
              <p className="line-clamp-4 text-gray-600 dark:text-gray-400">
                {testimonial.comments}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500 dark:text-gray-300">
                {testimonial.date}
              </div>
              <span
                className={`rounded-full px-2 py-1 text-xs font-medium ${testimonial.status === "Published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
              >
                {testimonial.status}
              </span>
            </div>
          </div>

          <div className="flex justify-end space-x-2 rounded-b-lg bg-gray-50 px-6 py-3 dark:bg-gray-700">
            <Button
              className="cursor-pointer rounded-full p-2 text-yellow-600 hover:bg-yellow-50"
              onClick={() => handleShowModal(i)}
            >
              <FaEye />
            </Button>
            <Button className="cursor-pointer rounded-full p-2 text-red-600 hover:bg-red-50">
              <FaTrashAlt />
            </Button>
            {showModal === i && <TestimonialDetails setShowModal={setShowModal} />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialsGrid;
