import React, { useState, useEffect } from "react";
import SectionBarGrocery from "./../Components/SectionBarGrocery";
import GroceryItemCard from "../Components/GroceryItemCard";
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import { fetchProducts } from "../services/api";


function GroceryItemPage() {
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [openCategories, setOpenCategories] = useState({});
  const [filteredItems, setFilteredItems] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false); // State to manage filter modal visibility

  // Fetch products from the backend
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetchProducts();
        // Filter only grocery related items.
        // (Assumes each grocery item has a property `department` with value "grocery")
        const groceryItems = response.data.filter(
          (item) =>
            item.product &&
            item.product.toLowerCase() === "grocery"
        );
        setFilteredItems(groceryItems);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, []);

  // Toggle category open/close
  const toggleCategory = (category) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // Filter handler for subcategory
  const handleSubCategoryChange = (subCategory) => {
    setSelectedSubCategory(subCategory);
    setIsFilterOpen(false); // Close filter modal after selecting a subcategory
    fetchProducts().then((response) => {
      // Filter only grocery related items first
      const groceryItems = response.data.filter(
        (item) =>
          item.category &&
          item.category.toLowerCase().includes(subCategory)
      );
      if (subCategory === "") {
        setFilteredItems(groceryItems); // Show all grocery items if no subcategory is selected
      } else {
        const filtered = groceryItems.filter((item) =>
          item.category.toLowerCase().includes(subCategory.toLowerCase())
        );
        setFilteredItems(filtered);
      }
    });
  };

  return (
    <div>
      <div className="">
        {/* <SectionBarGrocery /> */}
      </div>
      <div className="flex flex-col lg:flex-row ">
        {/* Filter Button for Mobile */}
        <div className="flex justify-center">
          <button
            className="lg:hidden border border-gray-500 rounded-sm p-2 px-10 max-[620px]:text-sm max-[620px]:px-6 flex gap-2 justify-center bg-white m-2"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <FilterListOutlinedIcon />
            Filter
          </button>
        </div>
        {/* Filter Section */}
        <div
          className={`${
            isFilterOpen ? "block" : "hidden"
          } lg:block lg:basis-1/5 bg-white h-screen m-4 p-4 lg:static fixed inset-0 z-10 overflow-y-auto lg:z-auto lg:overflow-visible`}
        >
          <h3 className="font-semibold mb-4">Filters</h3>
          <button
            className="lg:hidden absolute top-4 right-4 text-xl"
            onClick={() => setIsFilterOpen(false)}
          >
            ✕
          </button>

          {/* Category Filter */}
          <div className="mb-4">
            {/* Dal & Pulses */}
            <div>
              <h4
                className="font-semibold cursor-pointer flex justify-between"
                onClick={() => toggleCategory("dalPulses")}
              >
                {openCategories["dalPulses"] ? "-" : "+"} Dal & Pulses
              </h4>
              {openCategories["dalPulses"] && (
                <ul className="ml-4">
                  <li
                    className={`cursor-pointer ${
                      selectedSubCategory === "dal" ? "text-blue-500" : ""
                    }`}
                    onClick={() => handleSubCategoryChange("dal")}
                  >
                    Dal
                  </li>
                  <li
                    className={`cursor-pointer ${
                      selectedSubCategory === "atta" ? "text-blue-500" : ""
                    }`}
                    onClick={() => handleSubCategoryChange("atta")}
                  >
                    Atta
                  </li>
                  <li
                    className={`cursor-pointer ${
                      selectedSubCategory === "pulses" ? "text-blue-500" : ""
                    }`}
                    onClick={() => handleSubCategoryChange("pulses")}
                  >
                    Pulses
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Grocery Items Display */}
        <div className="lg:basis-4/5 py-2 flex flex-wrap">
          {filteredItems.map((item) => (
            <div key={item._id} className="w-1/3 lg:w-1/4 max-[430px]:w-1/2">
              <GroceryItemCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GroceryItemPage;
