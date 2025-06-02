import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Breadcrum = () => {
  const navigate = useNavigate();
  return (
    <Button
      className="mb-6 flex cursor-pointer items-center gap-2 rounded-md p-4 transition-all hover:bg-white hover:text-indigo-600 hover:shadow-sm"
      onClick={() => navigate(-1)}
    >
      <FaArrowLeft /> Back to Projects
    </Button>
  );
};

export default Breadcrum;
