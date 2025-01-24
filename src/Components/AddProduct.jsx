// // import React, { useState } from "react";

// // const AddProduct = ({ isOpen, onClose }) => {
// //   const [variants, setVariants] = useState([
// //     { ram: "", price: "", quantity: "" },
// //   ]);
// //   const [images, setImages] = useState([null, null, null]);

// //   const handleVariantChange = (index, field, value) => {
// //     const newVariants = [...variants];
// //     newVariants[index][field] = value;
// //     setVariants(newVariants);
// //   };

// //   const handleAddVariant = () => {
// //     setVariants([...variants, { ram: "", price: "", quantity: "" }]);
// //   };

// //   const handleRemoveVariant = (index) => {
// //     if (variants.length > 1) {
// //       const newVariants = variants.filter((_, i) => i !== index);
// //       setVariants(newVariants);
// //     }
// //   };

// //   const handleImageChange = (index, event) => {
// //     const newImages = [...images];
// //     newImages[index] = event.target.files[0];
// //     setImages(newImages);
// //   };

// //   if (!isOpen) return null;

// //   return (
// //     <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
// //       <div
// //         className="bg-white p-6 rounded-lg w-[90%] max-h-[80vh] sm:w-[90%] md:w-[80%] lg:w-[70%] overflow-y-auto"
// //         style={{ maxHeight: "90vh" }}
// //       >
// //         <div className="flex justify-between items-center mb-4">
// //           <h2 className="text-md font-semibold text-center">Add Product</h2>
// //           <button
// //             onClick={onClose}
// //             className="text-gray-500 hover:text-gray-700"
// //           >
// //             &times;
// //           </button>
// //         </div>
// //         <form>
// //           {/* Title */}
// //           <div className="mb-1 flex flex-col">
// //             <label htmlFor="title" className="text-lg font-medium mb-1">
// //               Title
// //             </label>
// //             <input
// //               type="text"
// //               id="title"
// //               className="w-full p-2 border rounded"
// //               placeholder="Enter product title"
// //             />
// //           </div>

// //           {/* Variants */}
// //           <div className="mb-1">
// //             <div className="flex justify-between items-center">
// //               <h3 className="text-xl font-medium mb-1">Variants</h3>
// //               <button
// //                 type="button"
// //                 onClick={handleAddVariant}
// //                 className="bg-[#3c3c3c] text-white p-2 rounded mb-1 mt-1"
// //               >
// //                 Add Variant
// //               </button>
// //             </div>
// //             {variants.map((variant, index) => (
// //               <div key={index} className="flex space-x-4 items-center mb-2">
// //                 <input
// //                   type="text"
// //                   placeholder="RAM"
// //                   value={variant.ram}
// //                   onChange={(e) =>
// //                     handleVariantChange(index, "ram", e.target.value)
// //                   }
// //                   className="w-1/3 p-2 border rounded"
// //                 />
// //                 <input
// //                   type="number"
// //                   placeholder="Price"
// //                   value={variant.price}
// //                   onChange={(e) =>
// //                     handleVariantChange(index, "price", e.target.value)
// //                   }
// //                   className="w-1/3 p-2 border rounded"
// //                 />
// //                 <input
// //                   type="number"
// //                   placeholder="Quantity"
// //                   value={variant.quantity}
// //                   onChange={(e) =>
// //                     handleVariantChange(index, "quantity", e.target.value)
// //                   }
// //                   className="w-1/3 p-2 border rounded"
// //                 />
// //                 {variants.length > 1 && (
// //                   <button
// //                     type="button"
// //                     onClick={() => handleRemoveVariant(index)}
// //                     className="text-red-500 hover:text-red-700"
// //                   >
// //                     &times;
// //                   </button>
// //                 )}
// //               </div>
// //             ))}
// //           </div>

// //           {/* Subcategory */}
// //           <div className="flex flex-col mb-1">
// //             <label htmlFor="subcategory" className="block text-lg font-medium">
// //               Subcategory
// //             </label>
// //             <select id="subcategory" className="w-full p-2 border rounded mt-2">
// //               <option value="">Select Subcategory</option>
// //               <option value="subcategory1">Subcategory 1</option>
// //               <option value="subcategory2">Subcategory 2</option>
// //               <option value="subcategory3">Subcategory 3</option>
// //             </select>
// //           </div>

// //           {/* Description */}
// //           <div className="mb-1 flex flex-col">
// //             <label
// //               htmlFor="description"
// //               className="block text-lg font-medium mb-1"
// //             >
// //               Description
// //             </label>
// //             <textarea
// //               id="description"
// //               className="w-full p-2 border rounded mt-1"
// //               placeholder="Enter product description"
// //             ></textarea>
// //           </div>

// //           {/* Images */}
// //           <div className="mb-1">
// //             <label className="block text-lg font-medium">
// //               Upload Images (3 images)
// //             </label>
// //             <div className="flex space-x-4 mt-1">
// //               {images.map((image, index) => (
// //                 <div key={index} className="w-1/3">
// //                   <input
// //                     type="file"
// //                     accept="image/*"
// //                     onChange={(e) => handleImageChange(index, e)}
// //                     className="block w-full text-sm text-gray-500"
// //                   />
// //                   {image && (
// //                     <p className="text-xs text-gray-500 mt-1">{image.name}</p>
// //                   )}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Modal Buttons */}
// //           <div className="flex justify-end space-x-4">
// //             <button
// //               type="button"
// //               onClick={onClose}
// //               className="hover:bg-[#eda415] hover:text-white p-2 text-black rounded bg-[#eeeeee]"
// //             >
// //               Discard
// //             </button>
// //             <button
// //               type="submit"
// //               className="hover:bg-[#eda415] hover:text-white p-2 text-black rounded bg-[#eeeeee]"
// //             >
// //               Add Product
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AddProduct;

// import React, { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AddProduct = ({ isOpen, onClose }) => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [subCategory, setSubCategory] = useState("");
//   const [variants, setVariants] = useState([
//     { ram: "", price: "", quantity: "" },
//   ]);
//   const [images, setImages] = useState([null, null, null]);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Handle variant change
//   const handleVariantChange = (index, field, value) => {
//     const newVariants = [...variants];
//     newVariants[index][field] = value;
//     setVariants(newVariants);
//   };

//   // Add a new variant
//   const handleAddVariant = () => {
//     setVariants([...variants, { ram: "", price: "", quantity: "" }]);
//   };

//   // Remove a variant
//   const handleRemoveVariant = (index) => {
//     if (variants.length > 1) {
//       const newVariants = variants.filter((_, i) => i !== index);
//       setVariants(newVariants);
//     }
//   };

//   // Handle image change
//   const handleImageChange = (index, event) => {
//     const newImages = [...images];
//     newImages[index] = event.target.files[0];
//     setImages(newImages);
//   };

//   // Form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate form inputs
//     if (!title || !description || !subCategory) {
//       toast.error("Please fill out all required fields.");
//       return;
//     }

//     if (variants.some((v) => !v.ram || !v.price || !v.quantity)) {
//       toast.error("Please fill out all variant fields.");
//       return;
//     }

//     if (images.some((img) => img === null)) {
//       toast.error("Please upload all three images.");
//       return;
//     }

//     setIsSubmitting(true);

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("subcategory", subCategory);

//     formData.append("variants", JSON.stringify(variants));

//     images.forEach((image, index) => {
//       formData.append(`image${index + 1}`, image);
//     });
//     console.log("formdata", formData);
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/product/add",
//         formData,

//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       if (response.status === 201) {
//         toast.success("Product added successfully!");
//         onClose(); // Close the modal
//       }
//     } catch (error) {
//       toast.error("Failed to add product. Please try again.");
//       console.error(error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded-lg w-[90%] max-h-[80vh] sm:w-[90%] md:w-[80%] lg:w-[70%] overflow-y-auto">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-md font-semibold text-center">Add Product</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700"
//           >
//             &times;
//           </button>
//         </div>
//         <form onSubmit={handleSubmit}>
//           {/* Title */}
//           <div className="mb-1 flex flex-col">
//             <label htmlFor="title" className="text-lg font-medium mb-1">
//               Title
//             </label>
//             <input
//               type="text"
//               id="title"
//               className="w-full p-2 border rounded"
//               placeholder="Enter product title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </div>

//           {/* Variants */}
//           <div className="mb-1">
//             <div className="flex justify-between items-center">
//               <h3 className="text-xl font-medium mb-1">Variants</h3>
//               <button
//                 type="button"
//                 onClick={handleAddVariant}
//                 className="bg-[#3c3c3c] text-white p-2 rounded mb-1 mt-1"
//               >
//                 Add Variant
//               </button>
//             </div>
//             {variants.map((variant, index) => (
//               <div key={index} className="flex space-x-4 items-center mb-2">
//                 <input
//                   type="text"
//                   placeholder="RAM"
//                   value={variant.ram}
//                   onChange={(e) =>
//                     handleVariantChange(index, "ram", e.target.value)
//                   }
//                   className="w-1/3 p-2 border rounded"
//                 />
//                 <input
//                   type="number"
//                   placeholder="Price"
//                   value={variant.price}
//                   onChange={(e) =>
//                     handleVariantChange(index, "price", e.target.value)
//                   }
//                   className="w-1/3 p-2 border rounded"
//                 />
//                 <input
//                   type="number"
//                   placeholder="Quantity"
//                   value={variant.quantity}
//                   onChange={(e) =>
//                     handleVariantChange(index, "quantity", e.target.value)
//                   }
//                   className="w-1/3 p-2 border rounded"
//                 />
//                 {variants.length > 1 && (
//                   <button
//                     type="button"
//                     onClick={() => handleRemoveVariant(index)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     &times;
//                   </button>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Subcategory */}
//           <div className="flex flex-col mb-1">
//             <label htmlFor="subcategory" className="block text-lg font-medium">
//               Subcategory
//             </label>
//             <select
//               name="subCategory"
//               className="w-full p-2 border rounded mt-2"
//               value={subCategory} // Bind value to the state
//               onChange={(e) => setSubCategory(e.target.value)}
//             >
//               <option value="">Select Subcategory</option>
//               <option value="subcategory1">Subcategory 1</option>
//               <option value="subcategory2">Subcategory 2</option>
//               <option value="subcategory3">Subcategory 3</option>
//             </select>
//           </div>

//           {/* Description */}
//           <div className="mb-1 flex flex-col">
//             <label
//               htmlFor="description"
//               className="block text-lg font-medium mb-1"
//             >
//               Description
//             </label>
//             <textarea
//               name="description"
//               className="w-full p-2 border rounded mt-1"
//               placeholder="Enter product description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             ></textarea>
//           </div>

//           {/* Images */}
//           <div className="mb-1">
//             <label className="block text-lg font-medium">
//               Upload Images (3 images)
//             </label>
//             <div className="flex space-x-4 mt-1">
//               {images.map((image, index) => (
//                 <div key={index} className="w-1/3">
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={(e) => handleImageChange(index, e)}
//                     className="block w-full text-sm text-gray-500"
//                   />
//                   {image && (
//                     <div className="mt-1">
//                       <img
//                         src={URL.createObjectURL(image)}
//                         alt={`image-preview-${index}`}
//                         className="h-20 object-cover rounded-md"
//                       />
//                       <p className="text-xs text-gray-500 mt-1">{image.name}</p>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Modal Buttons */}
//           <div className="flex justify-end space-x-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="hover:bg-[#eda415] hover:text-white p-2 text-black rounded bg-[#eeeeee]"
//             >
//               Discard
//             </button>
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className={`hover:bg-[#eda415] hover:text-white p-2 text-black rounded ${
//                 isSubmitting ? "bg-gray-300 cursor-not-allowed" : "bg-[#eeeeee]"
//               }`}
//             >
//               {isSubmitting ? "Adding..." : "Add Product"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddProduct;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [subCategories, setSubCategories] = useState([]); // New state for subcategories
  const [variants, setVariants] = useState([
    { ram: "", price: "", quantity: "" },
  ]);
  const [images, setImages] = useState([null, null, null]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Fetch subcategories when the component mounts
    const fetchSubCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/subcategory/Getall"
        );
        setSubCategories(response.data.categoriesWithSubcategories);
      } catch (error) {
        toast.error("Failed to load subcategories.");
        console.error(error);
      }
    };

    if (isOpen) {
      fetchSubCategories();
    }
  }, [isOpen]);

  // Handle variant change
  const handleVariantChange = (index, field, value) => {
    const newVariants = [...variants];
    newVariants[index][field] = value;
    setVariants(newVariants);
  };

  // Add a new variant
  const handleAddVariant = () => {
    setVariants([...variants, { ram: "", price: "", quantity: "" }]);
  };

  // Remove a variant
  const handleRemoveVariant = (index) => {
    if (variants.length > 1) {
      const newVariants = variants.filter((_, i) => i !== index);
      setVariants(newVariants);
    }
  };

  // Handle image change
  const handleImageChange = (index, event) => {
    const newImages = [...images];
    newImages[index] = event.target.files[0];
    setImages(newImages);
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!title || !description || !subCategory) {
      toast.error("Please fill out all required fields.");
      return;
    }

    if (variants.some((v) => !v.ram || !v.price || !v.quantity)) {
      toast.error("Please fill out all variant fields.");
      return;
    }

    if (images.some((img) => img === null)) {
      toast.error("Please upload all three images.");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("subcategory", subCategory);

    formData.append("variants", JSON.stringify(variants));

    images.forEach((image, index) => {
      formData.append(`image${index + 1}`, image);
    });

    try {
      const response = await axios.post(
        "http://localhost:5000/api/product/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        toast.success("Product added successfully!");
        onClose(); // Close the modal
      }
    } catch (error) {
      toast.error("Failed to add product. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-[90%] max-h-[80vh] sm:w-[90%] md:w-[80%] lg:w-[70%] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-md font-semibold text-center">Add Product</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-1 flex flex-col">
            <label htmlFor="title" className="text-lg font-medium mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full p-2 border rounded"
              placeholder="Enter product title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Variants */}
          <div className="mb-1">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-medium mb-1">Variants</h3>
              <button
                type="button"
                onClick={handleAddVariant}
                className="bg-[#3c3c3c] text-white p-2 rounded mb-1 mt-1"
              >
                Add Variant
              </button>
            </div>
            {variants.map((variant, index) => (
              <div key={index} className="flex space-x-4 items-center mb-2">
                <input
                  type="text"
                  placeholder="RAM"
                  value={variant.ram}
                  onChange={(e) =>
                    handleVariantChange(index, "ram", e.target.value)
                  }
                  className="w-1/3 p-2 border rounded"
                />
                <input
                  type="number"
                  placeholder="Price"
                  value={variant.price}
                  onChange={(e) =>
                    handleVariantChange(index, "price", e.target.value)
                  }
                  className="w-1/3 p-2 border rounded"
                />
                <input
                  type="number"
                  placeholder="Quantity"
                  value={variant.quantity}
                  onChange={(e) =>
                    handleVariantChange(index, "quantity", e.target.value)
                  }
                  className="w-1/3 p-2 border rounded"
                />
                {variants.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveVariant(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    &times;
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Subcategory */}
          <div className="flex flex-col mb-1">
            <label htmlFor="subcategory" className="block text-lg font-medium">
              Subcategory
            </label>
            <select
              name="subCategory"
              className="w-full p-2 border rounded mt-2"
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
            >
              <option value="">Select Subcategory</option>
              {subCategories.map((subcategory) => (
                <option
                  key={subcategory.subCategoryId}
                  value={subcategory.subCategoryId}
                >
                  {subcategory.subCategoryName}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div className="mb-1 flex flex-col">
            <label
              htmlFor="description"
              className="block text-lg font-medium mb-1"
            >
              Description
            </label>
            <textarea
              name="description"
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter product description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          {/* Images */}
          <div className="mb-1">
            <label className="block text-lg font-medium">
              Upload Images (3 images)
            </label>
            <div className="flex space-x-4 mt-1">
              {images.map((image, index) => (
                <div key={index} className="w-1/3">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(index, e)}
                    className="block w-full text-sm text-gray-500"
                  />
                  {image && (
                    <div className="mt-1">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`image-preview-${index}`}
                        className="h-20 object-cover rounded-md"
                      />
                      <p className="text-xs text-gray-500 mt-1">{image.name}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Modal Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="hover:bg-[#eda415] hover:text-white p-2 text-black rounded bg-[#eeeeee]"
            >
              Discard
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`hover:bg-[#eda415] hover:text-white p-2 text-black rounded ${
                isSubmitting ? "bg-gray-300 cursor-not-allowed" : "bg-[#eeeeee]"
              }`}
            >
              {isSubmitting ? "Adding..." : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
