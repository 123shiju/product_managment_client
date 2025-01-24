import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify"; // Import Toastify

// Import Toastify CSS for styling
import "react-toastify/dist/ReactToastify.css";

const AddsubCategory = ({ show, onClose, categories }) => {
  const [categoryId, setCategoryId] = useState(""); // Store categoryId instead of categoryName
  const [subCategoryName, setSubCategoryName] = useState(""); // Updated field name to match server-side
  const [error, setError] = useState(""); // For error handling

  // Function to add subcategory
  const handleAddSubcategory = async () => {
    if (!categoryId || !subCategoryName) {
      setError("Please fill in both fields.");
      toast.error("Please fill in both fields."); // Show error toast
      return;
    }

    try {
      // API call to add subcategory
      const response = await axios.post(
        "https://product-management-server-1uuf.onrender.com/api/subcategory/Addsubcategories",
        {
          categoryId, // Sending categoryId instead of categoryName
          subCategoryName, // Updated field name
        }
      );

      if (response.status === 201) {
        toast.success("Subcategory added successfully!"); // Show success toast
        onClose(); // Close the modal after successful addition
      }
    } catch (err) {
      setError("Failed to add subcategory. Please try again.");
      toast.error("Failed to add subcategory. Please try again."); // Show error toast
      console.error("Error adding subcategory:", err);
    }
  };

  // Function to handle discard
  const handleDiscard = () => {
    setCategoryId(""); // Clear the input fields
    setSubCategoryName(""); // Updated field name
    setError(""); // Clear error message
    onClose(); // Close the modal
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-1/3">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Create Subcategory</h2>
          <button
            onClick={onClose}
            className="text-gray-500 font-semibold text-xl"
          >
            X
          </button>
        </div>

        {/* Error handling */}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <div className="mt-4">
          <label
            htmlFor="categoryId"
            className="block text-sm font-medium text-gray-700"
          >
            Category Name
          </label>
          <select
            id="categoryId"
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)} // Setting categoryId instead of categoryName
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.categoryName}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4">
          <label
            htmlFor="subCategoryName"
            className="block text-sm font-medium text-gray-700"
          >
            Subcategory Name
          </label>
          <input
            type="text"
            id="subCategoryName" // Updated field name to match server-side
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
            value={subCategoryName} // Updated field name
            onChange={(e) => setSubCategoryName(e.target.value)} // Updated field name
            placeholder="Enter subcategory name"
          />
        </div>

        <div className="mt-4 flex justify-end space-x-4">
          <button
            onClick={handleAddSubcategory}
            className="bg-[#eda415] text-white px-4 py-2 rounded-[14px] hover:bg-[#e88a10]"
          >
            Add
          </button>
          <button
            onClick={handleDiscard}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-[14px] hover:bg-gray-400"
          >
            Discard
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddsubCategory;
