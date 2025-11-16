import React from "react";
import Button from "../../../components/Button";
import { FaTimes } from "react-icons/fa";
import NewBlogForm from "./NewBlogForm";
import { Interface } from "readline";

interface NewBlogPostModalProps{
  initialData:any
  onClose:()=>void
}

const NewBlogPostModal = ({ initialData, onClose }:NewBlogPostModalProps) => {
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/10 backdrop-blur"></div>
      <div className="relative mx-4 max-h-[90vh] w-full max-w-3/4 overflow-y-auto rounded-lg bg-white shadow-lg dark:bg-gray-800">
        <div className="border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">
              {initialData ? 'Edit New Blog Post' : 'Create New Blog Post'}
            </h1>
            <Button onClick={onClose} className="cursor-pointer">
              <FaTimes className="text-sm font-medium text-gray-500 hover:text-gray-600" />
            </Button>
          </div>
        </div>

        <div className="border-b border-gray-200 px-4 pt-6">
          <NewBlogForm initialData={initialData} />
        </div>
      </div>
    </div>
  );
};

export default NewBlogPostModal;
