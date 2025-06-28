import React, { useState } from "react";
import Button from "../../components/Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useProjectDetails } from "./useProjectDetails";
import Spinner from "../../components/Spinner";
import { getImageUrl } from "../../helpers/getImageUrl";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { project, isLoading } = useProjectDetails();
  if (isLoading) return <Spinner />;
  const { gallery = [] } = project;

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  const selectImage = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="mb-6 rounded-lg bg-white p-4 shadow-sm">
      <h1 className="mb-4 text-2xl font-bold text-gray-800">Gallery</h1>
      <div className="w-full">
        <div className="relative">
          <img src={getImageUrl(gallery[currentIndex])} alt='preview' className="w-full h-100 rounded-md" />
          {/* Navigation Buttons */}
          <Button
            onClick={goToPrev}
            className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white"
          >
            <FaChevronLeft />
          </Button>
          <Button
            onClick={goToNext}
            className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white"
          >
            <FaChevronRight />
          </Button>
        </div>

        {/* Thumbnails */}
        <div className="mt-4 flex gap-2 overflow-x-auto">
          {gallery.map((img, index) => (
            <img
              key={index}
              src={getImageUrl(img)}
              onClick={() => selectImage(index)}
              className={`h-20 w-20 cursor-pointer rounded-md border-2 object-cover ${
                index === currentIndex
                  ? "border-blue-500"
                  : "border-transparent"
              }`}
              alt={`Thumbnail ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
