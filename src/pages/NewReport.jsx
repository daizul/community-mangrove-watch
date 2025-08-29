// src/pages/NewReport.jsx
import React from "react";

export default function NewReport() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-xl font-semibold mb-4">New Report</h1>

      <form className="space-y-4">
        {/* Report Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Report Title</label>
          <input
            type="text"
            placeholder="Enter report title"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            placeholder="Enter description"
            className="w-full border border-gray-300 rounded-lg p-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium mb-1">Upload Image</label>
          <input type="file" className="w-full" />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
}
