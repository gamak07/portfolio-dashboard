import React, { useState } from "react";
import Button from "../../components/Button";
import Spinner from "../../components/Spinner";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { formatDate } from "../../helpers/formateDate";
import { useNavigate } from "react-router-dom";
import NewBlogPostModal from "./addNewBlogPost/NewBlogPostModal";

const BlogTableList = ({ blogs, isFetching }) => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const handleShowEditModal = (blog) => {
    setSelectedBlog(blog);
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setSelectedBlog(null);
    setShowEditModal(false);
  };
  if (isFetching) return <Spinner />;
  return (
    <>
      <tbody className="divide-y divide-gray-200">
        {blogs?.map((blog) => (
          <tr className="hover:bg-gray-50 dark:hover:bg-gray-700" key={blog.id}>
            <td className="px-4 py-4">
              <input type="checkbox" className="cursor-pointer rounded" />
            </td>
            <td className="px-4 py-4">
              <span className="font-medium">{blog.title}</span>
            </td>
            <td className="px-4 py-4">
              <span
                className={`inline-flex rounded-full px-3 py-1 text-xs leading-5 font-semibold ${blog.is_published ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}
              >
                {blog.is_published ? "Published" : "Draft"}
              </span>
            </td>
            <td className="px-4 py-4">{blog.views}</td>
            <td className="px-4 py-4">{blog.estimated_read_time}</td>
            <td className="px-4 py-4 text-sm">{blog.published_at}</td>
            <td className="px-4 py-4">{formatDate(blog.updated_at)}</td>
            <td className="px-4 py-4">
              <div className="flex space-x-2">
                <Button className="cursor-pointer rounded-full p-1 hover:bg-gray-100">
                  <FaEdit
                    className="text-blue-500"
                    onClick={()=>handleShowEditModal(blog)}
                  />
                </Button>
                <Button className="cursor-pointer rounded-full p-1 hover:bg-gray-100">
                  <FaEye className="text-green-500" />
                </Button>
                <Button className="cursor-pointer rounded-full p-1 hover:bg-gray-100">
                  <FaTrashAlt className="text-red-500" />
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
      {showEditModal && (
        <NewBlogPostModal
          initialData={selectedBlog}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default BlogTableList;
