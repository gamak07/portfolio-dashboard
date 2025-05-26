import React, { useState } from "react";
import {
  FaBold,
  FaFileUpload,
  FaImage,
  FaItalic,
  FaLink,
} from "react-icons/fa";
import { FiBold, FiItalic, FiLink, FiImage, FiX } from "react-icons/fi";

const ComposeNewsletter = ({ isOpen, onClose }) => {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [sendImmediately, setSendImmediately] = useState(true);
  const [scheduleDate, setScheduleDate] = useState("");
  const [attachments, setAttachments] = useState(null);

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    setAttachments(e.target.files);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/10 backdrop-blur"
        onClick={onClose}
      />

      {/* modal content */}
      <div className="relative mx-4 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white shadow-lg dark:bg-gray-800">
        <div className="p-6">
          <div>
            {/* close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 dark:text-gray-300"
            >
              <FiX size={20} />
            </button>

            <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
              Compose Newsletter
            </h2>
          </div>

          <div className="mt-6">
            {/* Subject */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="mt-1 block w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400"
                placeholder="Enter subject here"
              />
            </div>

            {/* Content with toolbar */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                Content
              </label>
              {/* toolbar */}
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={12}
                className="mt-1 block w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400"
                placeholder="Write your newsletter content here..."
              />
              <div className="mt-2 flex space-x-2">
                <button className="flex cursor-pointer items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700">
                  <FaBold className="mr-1" /> Bold
                </button>
                <button className="flex cursor-pointer items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700">
                  <FaItalic className="mr-1" /> Italic
                </button>
                <button className="flex cursor-pointer items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700">
                  <FaLink className="mr-1" /> Link
                </button>
                <button className="flex cursor-pointer items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700">
                  <FaImage className="mr-1" /> Image
                </button>
              </div>
            </div>

            {/* Attachments */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                Attachments
              </label>
              <div className="mt-1 flex flex-col items-center justify-center space-y-1 border-2 border-dashed border-gray-300 px-6 pt-5 pb-6 text-center">
                <FaFileUpload className="mb-2 text-3xl text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-none hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      type="file"
                      id="file-upload"
                      name="file-upload"
                      multiple
                      onChange={handleFileChange}
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF, PDF up to 10MB
                </p>
              </div>
            </div>

            {/* Schedule */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                Schedule
              </label>
              <div className="mt-2 flex flex-col space-y-4">
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="schedule"
                    checked={sendImmediately}
                    onChange={() => setSendImmediately(true)}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Send Immediately
                  </span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="schedule"
                    checked={!sendImmediately}
                    onChange={() => setSendImmediately(false)}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Schedule for Later
                  </span>
                </label>
              </div>

              {!sendImmediately && (
                <input
                  type="datetime-local"
                  value={scheduleDate}
                  onChange={(e) => setScheduleDate(e.target.value)}
                  className="ml-7 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                />
              )}
            </div>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="flex gap-3 bg-gray-50 px-4 py-3">
          <button
            onClick={onClose}
            className="inline-flex w-full cursor-pointer justify-center rounded border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-indigo-600"
          >
            Cancel
          </button>
          <button className="inline-flex w-full cursor-pointer justify-center rounded border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-indigo-600">
            Save Draft
          </button>
          <button className="inline-flex w-full cursor-pointer justify-center rounded border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-indigo-600">
            Send Test
          </button>
          <button className="inline-flex w-full cursor-pointer justify-center rounded border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white">
            {sendImmediately ? "Send" : "Schedule"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComposeNewsletter;
