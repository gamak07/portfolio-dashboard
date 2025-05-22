import React from "react";
import { FaEye, FaStar, FaTrashAlt } from "react-icons/fa";
import Button from "../../components/Button";

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

const TestimonialsList = () => {
  return (
    // <div className="rounded-lg bg-white p-4 shadow-sm">
    <div className="space-y-4">
      {testimonials.map((testimonial, i) => (
        <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800" key={i}>
          <div className="flex items-start">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="mr-4 h-12 w-12 rounded-full object-cover"
            />

            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <span className="mt-1 flex items-center">
                    <div className="flex">
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                    </div>
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-300">
                      {testimonial.date}
                    </span>
                  </span>
                </div>
                <span
                  className={`rounded-full px-2 py-1 text-xs font-medium ${testimonial.status === "Published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
                >
                  {testimonial.status}
                </span>
              </div>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{testimonial.comments}</p>
            </div>

            <div className="flex space-x-2 ml-4">
              <Button className="cursor-pointer rounded-full p-2 text-yellow-600 hover:bg-yellow-50">
                <FaEye />
              </Button>
              <Button className="cursor-pointer rounded-full p-2 text-red-600 hover:bg-red-50">
                <FaTrashAlt />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
    // </div>
  );
};

export default TestimonialsList;
