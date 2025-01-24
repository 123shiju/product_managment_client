import React, { useState, useEffect } from "react";
import Navbar from "./NavBar.jsx";
import AddCategory from "./AddCategory.jsx";
import AddsubCategory from "./AddsubCategory.jsx";
import AddProduct from "./AddProduct.jsx";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [showsubModal, setSubShowModal] = useState(false);
  const [showproductModal, setShowproductModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);

  const openModal = () => {
    setShowModal(true);
  };
  const openSubModal = () => {
    setSubShowModal(true);
  };
  const openproductModal = () => {
    setShowproductModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const closeSubModal = () => {
    setSubShowModal(false);
  };
  const closepeoductModal = () => {
    setShowproductModal(false);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://product-management-server-1uuf.onrender.com/api/product/displayAll"
        );
        setProducts(response.data.products);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://product-management-server-1uuf.onrender.com/api/category/GetAll"
        );
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchSubCategories = async () => {
      if (!selectedCategory) return; // Avoid fetching when no category is selected

      try {
        const response = await axios.get(
          `https://product-management-server-1uuf.onrender.com/api/subcategory/${selectedCategory}`
        );
        setSubCategories(response.data.subcategories);
      } catch (error) {
        console.error("Failed to fetch subcategories:", error);
      }
    };

    fetchSubCategories();
  }, [selectedCategory]);

  return (
    <div>
      <Navbar />
      <div className="flex p-4">
        <div className="w-1/5 pr-4">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Filter Categories</h2>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category._id}>
                  {" "}
                  <input
                    type="checkbox"
                    id={category._id}
                    value={category.categoryName}
                  />
                  <label htmlFor={category._id} className="ml-2">
                    {category.categoryName}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-4/5">
          <div className="flex space-x-4 mb-4 justify-end mr-10">
            <button
              onClick={openModal}
              className="bg-[#eda415] p-2 rounded-[14px] text-[#fff]"
            >
              Add Category
            </button>
            <button
              onClick={openSubModal}
              className="bg-[#eda415] p-2 rounded-[14px] text-[#fff]"
            >
              Add Subcategory
            </button>
            <button
              onClick={openproductModal}
              className="bg-[#eda415] p-2 rounded-[14px] text-[#fff]"
            >
              Add Product
            </button>
          </div>
          <AddCategory show={showModal} onClose={closeModal} />
          <AddsubCategory
            show={showsubModal}
            onClose={closeSubModal}
            categories={categories}
          />
          <AddProduct isOpen={showproductModal} onClose={closepeoductModal} />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 w-[95%]">
            {Array.isArray(products) ? (
              products.map((product) => (
                <Link to={`/productDetails/${product._id}`} key={product._id}>
                  <div key={product._id} className="border p-4 rounded">
                    <img
                      src={`http://localhost:5000/${product.images[0]}`}
                      alt={product.title}
                      className="w-full h-48 object-cover mb-4"
                    />
                    <h3 className="text-lg font-semibold text-[#205776]">
                      {product.title}
                    </h3>
                    <p className="text-[#4a4a4a] font-semibold">
                      ${product.variants[0].price}
                    </p>
                    <div className="flex items-center">
                      <span className="text-gray-400">★ ★ ★ ★ ★</span>
                      <span className="ml-2 text-gray-700">5.0</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-400"> </span>
                      <span className="ml-2 text-gray-700">5.0</span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p>Loading products...</p>
            )}
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="text-gray-700">
              <span className="font-bold">2</span> of{" "}
              <span className="font-bold">10</span> items
            </div>

            <div className="flex space-x-2">
              <button className="relative text-[#eda415] text-lg font-bold p-4 w-6 h-6 rounded-full hover:bg-[#eda415] hover:text-white flex items-center justify-center">
                1
              </button>
              <button className="relative text-[#eda415] text-lg font-bold p-4 w-6 h-6 rounded-full hover:bg-[#eda415] hover:text-white flex items-center justify-center">
                2
              </button>
              <button className="relative text-[#eda415]  text-lg  font-bold p-4 w-6 h-6 rounded-full hover:bg-[#eda415] hover:text-white flex items-center justify-center">
                3
              </button>
            </div>

            <div className="flex items-center text-black space-x-2">
              <span>show</span>
              <select
                className="text-[#eda415] rounded  font-bold px-2 py-1"
                defaultValue="10Rows"
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

// import React, { useState, useEffect } from "react";
// import Navbar from "./NavBar.jsx";
// import AddCategory from "./AddCategory.jsx";
// import AddsubCategory from "./AddsubCategory.jsx";
// import AddProduct from "./AddProduct.jsx";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [showModal, setShowModal] = useState(false);
//   const [showsubModal, setSubShowModal] = useState(false);
//   const [showproductModal, setShowproductModal] = useState(false);
//   const [categories, setCategories] = useState([]);
//   const [subCategories, setSubCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   // State for selected filters
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [selectedSubCategories, setSelectedSubCategories] = useState([]);

//   const openModal = () => {
//     setShowModal(true);
//   };
//   const openSubModal = () => {
//     setSubShowModal(true);
//   };
//   const openproductModal = () => {
//     setShowproductModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };
//   const closeSubModal = () => {
//     setSubShowModal(false);
//   };
//   const closepeoductModal = () => {
//     setShowproductModal(false);
//   };

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:5000/api/product/displayAll"
//         );
//         setProducts(response.data.products);
//         setLoading(false);
//       } catch (err) {
//         setError(err);
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:5000/api/category/GetAll"
//         );
//         setCategories(response.data.categories);
//       } catch (error) {
//         console.error("Failed to fetch categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     const fetchSubCategories = async () => {
//       if (!selectedCategory) return;

//       try {
//         const response = await axios.get(
//           `http://localhost:5000/api/subcategory/${selectedCategory}`
//         );
//         setSubCategories(response.data.subcategories);
//       } catch (error) {
//         console.error("Failed to fetch subcategories:", error);
//       }
//     };

//     fetchSubCategories();
//   }, [selectedCategory]);

//   // Handle category checkbox toggle
//   const handleCategoryChange = (e) => {
//     const { value, checked } = e.target;
//     setSelectedCategories((prev) =>
//       checked ? [...prev, value] : prev.filter((cat) => cat !== value)
//     );
//   };

//   // Handle subcategory checkbox toggle
//   const handleSubCategoryChange = (e) => {
//     const { value, checked } = e.target;
//     setSelectedSubCategories((prev) =>
//       checked ? [...prev, value] : prev.filter((sub) => sub !== value)
//     );
//   };

//   // Filtered products
//   const filteredProducts = products.filter((product) => {
//     const categoryMatch =
//       selectedCategories.length === 0 ||
//       selectedCategories.includes(product.category);

//     const subCategoryMatch =
//       selectedSubCategories.length === 0 ||
//       selectedSubCategories.some((sub) => product.subcategories.includes(sub));

//     return categoryMatch && subCategoryMatch;
//   });

//   return (
//     <div>
//       <Navbar />
//       <div className="flex p-4">
//         <div className="w-1/5 pr-4">
//           <div className="mb-4">
//             <h2 className="text-xl font-semibold">Filter Categories</h2>
//             <div className="space-y-2">
//               {categories.map((category) => (
//                 <div key={category._id}>
//                   <input
//                     type="checkbox"
//                     id={category._id}
//                     value={category.categoryName}
//                     onChange={handleCategoryChange}
//                   />
//                   <label htmlFor={category._id} className="ml-2">
//                     {category.categoryName}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="mb-4">
//             <h2 className="text-xl font-semibold">Filter Subcategories</h2>
//             <div className="space-y-2">
//               {subCategories.map((subCategory) => (
//                 <div key={subCategory._id}>
//                   <input
//                     type="checkbox"
//                     id={subCategory._id}
//                     value={subCategory.subcategoryName}
//                     onChange={handleSubCategoryChange}
//                   />
//                   <label htmlFor={subCategory._id} className="ml-2">
//                     {subCategory.subcategoryName}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="w-4/5">
//           {/* Buttons for modals */}
//           <div className="flex space-x-4 mb-4 justify-end mr-10">
//             <button
//               onClick={openModal}
//               className="bg-[#eda415] p-2 rounded-[14px] text-[#fff]"
//             >
//               Add Category
//             </button>
//             <button
//               onClick={openSubModal}
//               className="bg-[#eda415] p-2 rounded-[14px] text-[#fff]"
//             >
//               Add Subcategory
//             </button>
//             <button
//               onClick={openproductModal}
//               className="bg-[#eda415] p-2 rounded-[14px] text-[#fff]"
//             >
//               Add Product
//             </button>
//           </div>
//           <AddCategory show={showModal} onClose={closeModal} />
//           <AddsubCategory
//             show={showsubModal}
//             onClose={closeSubModal}
//             categories={categories}
//           />
//           <AddProduct isOpen={showproductModal} onClose={closepeoductModal} />

//           {/* Filtered products */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 w-[95%]">
//             {filteredProducts.length > 0 ? (
//               filteredProducts.map((product) => (
//                 <Link to={`/productDetails/${product._id}`} key={product._id}>
//                   <div key={product._id} className="border p-4 rounded">
//                     <img
//                       src={`http://localhost:5000/${product.images[0]}`}
//                       alt={product.title}
//                       className="w-full h-48 object-cover mb-4"
//                     />
//                     <h3 className="text-lg font-semibold text-[#205776]">
//                       {product.title}
//                     </h3>
//                     <p className="text-[#4a4a4a] font-semibold">
//                       ${product.variants[0].price}
//                     </p>
//                   </div>
//                 </Link>
//               ))
//             ) : (
//               <p>No products found for the selected filters.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
