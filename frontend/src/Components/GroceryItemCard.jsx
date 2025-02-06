function GroceryItemCard({ item }) {
  return (
    <div className="bg-white m-2 lg:p-4 p-2 flex-row  ">
      <div className="flex justify-center  ">
        <img src={item.image} alt="" />
      </div>
      <div className="p-2 flex-row  justify-center">
        <p className="text-xs flex justify-center font-semibold h-5">{item.model}</p>

        <div className="flex gap-4 max-sm:gap-2 justify-center  items-center">
          <h3 className="font-semibold py-2 max-sm:text-[13px] md:text-md sm:text-sm ">₹{item.sprice}</h3>
          <p className="text-gray-400 sm:text-xs max-sm:text-[12px] line-through ">
            ₹{item.cprice}
          </p>
          <h2 className="text-[#39D740] lg:text-md max-sm:text-[12px] font-semibold">{item.discount}%</h2>
        </div>
        <div className="flex gap-2 justify-center">
          <button className=" border-[#39D740] border font-semibold max-sm:text-[10px] sm:text-xs py-[2px] px-5">
            {item.weight}kg
          </button>
          <button className="border  font-semibold bg-[#3C2EDC] text-white max-sm:text-[10px]  sm:text-xs py-[2px] px-5">
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default GroceryItemCard;
