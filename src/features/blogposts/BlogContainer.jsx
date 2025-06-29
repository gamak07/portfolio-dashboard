import React, { useState } from "react";

import BlogTable from "./BlogTable";
import BlogGrid from "./BlogGrid";
import NewBlogPostModal from "./addNewBlogPost/NewBlogPostModal";
import Header from "./Header";
import { useBlogPosts } from "./useBlogPosts";

const BlogContainer = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeView, setActiveView] = useState("list");
  const [showNewBlogModal, setShowNewBlogModal] = useState(false);
  const {getBlog, isFetching} = useBlogPosts()

  const handleShowDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleViewType = (view) => {
    setActiveView(view);
  };

  const handleNewBlogModal = () => {
    setShowNewBlogModal((prev) => !prev);
  };
  return (
    <>
      <Header
        showDropdown={showDropdown}
        handleShowDropdown={handleShowDropdown}
        handleViewType={handleViewType}
        handleNewBlogModal={handleNewBlogModal}
        activeView={activeView}
      />
      {activeView === "list" && <BlogTable data={getBlog} isLoading={isFetching} />}
      {activeView === "grid" && <BlogGrid data={getBlog} isLoading={isFetching} />}
      {showNewBlogModal && (
        <NewBlogPostModal onClose={() => setShowNewBlogModal(false)} />
      )}
    </>
  );
};

export default BlogContainer;
