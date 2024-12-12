import React, { useState } from "react";
import SectionBarGrocery from "./../Components/SectionBarGrocery";
import { GroceryItemData } from "../Data/GroceryItemData";
import GroceryItemCard from "../Components/GroceryItemCard";
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';

function GroceryItemPage() {
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [openCategories, setOpenCategories] = useState({});
  const [filteredItems, setFilteredItems] = useState(GroceryItemData);
  const [isFilterOpen, setIsFilterOpen] = useState(false); // State to manage filter modal visibility

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
    if (subCategory === "") {
      setFilteredItems(GroceryItemData); // Show all if no subcategory is selected
    } else {
      const filtered = GroceryItemData.filter((item) =>
        item.name.toLowerCase().includes(subCategory.toLowerCase())
      );
      setFilteredItems(filtered);
    }
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
          className="lg:hidden border border-gray-500 rounded-sm p-2 px-10 max-[620px]:text-sm max-[620px]:px-6 flex gap-2 justify-center  bg-white  m-2  "
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        > 
          <FilterListOutlinedIcon/>
          Filter
        </button>
        </div>
        {/* Filter Section */}
        <div
          className={`${
            isFilterOpen ? "block" : "hidden"
          } lg:block lg:basis-1/5 bg-white h-screen m-4 p-4 lg:static fixed inset-0 z-10 overflow-y-auto   lg:z-auto lg:overflow-visible`}
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
                      selectedSubCategory === "Dal" ? "text-blue-500" : ""
                    }`}
                    onClick={() => handleSubCategoryChange("Dal")}
                  >
                    Dal
                  </li>
                  <li
                    className={`cursor-pointer ${
                      selectedSubCategory === "Atta" ? "text-blue-500" : ""
                    }`}
                    onClick={() => handleSubCategoryChange("Atta")}
                  >
                    Atta
                  </li>
                  <li
                    className={`cursor-pointer ${
                      selectedSubCategory === "Pulses" ? "text-blue-500" : ""
                    }`}
                    onClick={() => handleSubCategoryChange("Pulses")}
                  >
                    Pulses
                  </li>
                </ul>
              )}
            </div>

            {/* Beverages */}
            <div>
              <h4
                className="font-semibold cursor-pointer flex justify-between"
                onClick={() => toggleCategory("beverages")}
              >
                {openCategories["beverages"] ? "-" : "+"} Beverages
              </h4>
              {openCategories["beverages"] && (
                <ul className="ml-4">
                  <li
                    className={`cursor-pointer ${
                      selectedSubCategory === "Tea" ? "text-blue-500" : ""
                    }`}
                    onClick={() => handleSubCategoryChange("Tea")}
                  >
                    Tea
                  </li>
                  <li
                    className={`cursor-pointer ${
                      selectedSubCategory === "Coffee" ? "text-blue-500" : ""
                    }`}
                    onClick={() => handleSubCategoryChange("Coffee")}
                  >
                    Coffee
                  </li>
                  <li
                    className={`cursor-pointer ${
                      selectedSubCategory === "Juice" ? "text-blue-500" : ""
                    }`}
                    onClick={() => handleSubCategoryChange("Juice")}
                  >
                    Juice
                  </li>
                </ul>
              )}
            </div>

            {/* Snacks */}
            <div>
              <h4
                className="font-semibold cursor-pointer flex justify-between"
                onClick={() => toggleCategory("snacks")}
              >
                {openCategories["snacks"] ? "-" : "+"} Snacks
              </h4>
              {openCategories["snacks"] && (
                <ul className="ml-4">
                  <li
                    className={`cursor-pointer ${
                      selectedSubCategory === "Chips" ? "text-blue-500" : ""
                    }`}
                    onClick={() => handleSubCategoryChange("Chips")}
                  >
                    Chips
                  </li>
                  <li
                    className={`cursor-pointer ${
                      selectedSubCategory === "Cookies" ? "text-blue-500" : ""
                    }`}
                    onClick={() => handleSubCategoryChange("Cookies")}
                  >
                    Cookies
                  </li>
                  <li
                    className={`cursor-pointer ${
                      selectedSubCategory === "Namkeen" ? "text-blue-500" : ""
                    }`}
                    onClick={() => handleSubCategoryChange("Namkeen")}
                  >
                    Namkeen
                  </li>
                </ul>
              )}
            </div>

            {/* Personal Care */}
            <div>
              <h4
                className="font-semibold cursor-pointer flex justify-between"
                onClick={() => toggleCategory("personalCare")}
              >
                {openCategories["personalCare"] ? "-" : "+"} Personal Care
              </h4>
              {openCategories["personalCare"] && (
                <ul className="ml-4">
                  <li
                    className={`cursor-pointer ${
                      selectedSubCategory === "Shampoo" ? "text-blue-500" : ""
                    }`}
                    onClick={() => handleSubCategoryChange("Shampoo")}
                  >
                    Shampoo
                  </li>
                  <li
                    className={`cursor-pointer ${
                      selectedSubCategory === "Soap" ? "text-blue-500" : ""
                    }`}
                    onClick={() => handleSubCategoryChange("Soap")}
                  >
                    Soap
                  </li>
                  <li
                    className={`cursor-pointer ${
                      selectedSubCategory === "Toothpaste" ? "text-blue-500" : ""
                    }`}
                    onClick={() => handleSubCategoryChange("Toothpaste")}
                  >
                    Toothpaste
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Grocery Items Display */}
        <div className="lg:basis-4/5 py-2 flex flex-wrap">
          {filteredItems.map((item) => (
            <div key={item.id} className="w-1/3 lg:w-1/4 max-[430px]:w-1/2">
              <GroceryItemCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GroceryItemPage;
