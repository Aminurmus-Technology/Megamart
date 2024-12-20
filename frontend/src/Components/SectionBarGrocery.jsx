import React from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const SectionBarGrocery = () => {
  return (
    <div className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-around">
        <div className="relative group">
          <span className="text-lg font-semibold cursor-pointer">Staples<ArrowDropDownIcon className="inline ml-1" /></span>
          <div className="absolute left-0 right-0 bg-gray-100 hidden group-hover:block rounded-md">
            {/* Dropdown items */}
          </div>
        </div>

        <div className="relative group">
          <span className="text-lg font-semibold cursor-pointer">Snacks & Beverages<ArrowDropDownIcon className="inline ml-1" /></span>
          <div className="absolute left-0 right-0 bg-gray-100 hidden group-hover:block rounded-md">
            {/* Dropdown items */}
          </div>
        </div>
        <div className="relative group">
          <span className="text-lg font-semibold cursor-pointer">Packaged Foods<ArrowDropDownIcon className="inline ml-1" /></span>
          <div className="absolute left-0 right-0 bg-gray-100 hidden group-hover:block rounded-md">
            {/* Dropdown items */}
          </div>
        </div>

        <div className="relative group">
          <span className="text-lg font-semibold cursor-pointer">
            Baby Care<ArrowDropDownIcon className="inline ml-1" />
          </span>
          <div className="absolute left-0 right-0 bg-gray-100 hidden group-hover:block rounded-md">
            {/* Dropdown items */}
          </div>
        </div>

        <div className="relative group">
          <span className="text-lg font-semibold cursor-pointer">
            Dairy<ArrowDropDownIcon className="inline ml-1" />
          </span>
          <div className="absolute left-0 right-0 bg-gray-100 hidden group-hover:block rounded-md">
            {/* Dropdown items */}
          </div>
        </div>

        <div className="relative group">
          <span className="text-lg font-semibold cursor-pointer">
            Household<ArrowDropDownIcon className="inline ml-1" />
          </span>
          <div className="absolute left-0 right-0 bg-gray-100 hidden group-hover:block rounded-md">
            {/* Dropdown items */}
          </div>
        </div>

        <div className="relative group">
          <span className="text-lg font-semibold cursor-pointer">Kitchen<ArrowDropDownIcon className="inline ml-1" /></span>
          <div className="absolute left-0 right-0 bg-gray-100 hidden group-hover:block rounded-md">
            {/* Dropdown items */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBarGrocery;



