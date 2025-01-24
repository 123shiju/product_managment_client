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
  const [searchQuery, setSearchQuery] = useState("");
   const [filteredProducts, setFilteredProducts] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [showsubModal, setSubShowModal] = useState(false);
  const [showproductModal, setShowproductModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  

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
    const fetchSubCategories = async () => {
      try {
        const response = await axios.get(
          "https://product-management-server-1uuf.onrender.com/api/subcategory/Getall"
        );
        setSubCategories(response.data.categoriesWithSubcategories);
      } catch (error) {
        console.error("Failed to fetch subcategories:", error);
      }
    };

    fetchSubCategories();
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

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value.trim() === "") {
      setFilteredProducts(products); 
    } else {
      setFilteredProducts(
        products.filter(
          (product) =>
            product.title &&
            product.title.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  const handleSubCategoryFilter = (subCategoryName) => {
    setFilteredProducts(
      products.filter((product) => {
        const subCategory = product.subCategoryName || ""; 
        return subCategory
          .toLowerCase()
          .includes(subCategoryName.toLowerCase());
      })
    );
  };
  
  return (
    <div>
      <Navbar />
      <div className="flex p-4">
        <div className="w-1/5 pr-4">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Categories</h2>
            <div className="space-y-2">
              {subCategories.map((subcategory) => (
                <div key={subcategory.subCategoryId}>
                  <div>
                    <input
                      type="checkbox"
                      id={subcategory.subCategoryId}
                      value={subcategory.subCategoryName}
                      onChange={() =>
                        handleSubCategoryFilter(subcategory.subCategoryName)
                      } // Set selected subcategory
                    />
                    <label htmlFor={subcategory.subCategoryId} className="ml-2">
                      {subcategory.subCategoryName}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-4/5">
          <div className="flex justify-between mb-4 items-center">
            <div className="relative w-[300px] flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch} // Handle search input change
                placeholder="Search by product name..."
                className="p-2 pl-10 rounded-[14px] h-10 w-[300px] bg-white text-black border-[1px] border-gray-300 focus:outline-none focus:border-[#eda415]"
              />
              <span className="absolute ml-[12.6rem] ml-6 top-1/2 transform -translate-y-1/2 text-white bg-[#eda415] rounded-[14px] h-10 w-[98px] flex items-center justify-center">
                Search
              </span>
            </div>

            <div className="flex space-x-4 ml-4">
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
                      src={`https://product-management-server-1uuf.onrender.com/${product.images[0]}`}
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


