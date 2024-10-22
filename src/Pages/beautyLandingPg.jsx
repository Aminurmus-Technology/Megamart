import React from "react";
import { useState } from "react";


import { CategoryData } from "../Data/CategoryData";
import { TeaCoffeeData } from "../Data/TeaCoffeeData";
import BeautySection from "../Components/beautySection";
import ToppicksSection from "../Components/Toppicks";
import BeautyCarousel from "../Components/beautyCarousel";
export default function Landingpg(){
   
    return(
        <section className="bg-gray-100">
            <div className="h-[70px] max-[540px]:text-[12px] grid grid-cols-5 gap-5 place-items-center mx-[20px] ">
                <div className="">
                    Skin Care
                </div>
                <div className="">
                    Body Care
                </div>
                <div className="">
                    Hair Care
                </div>
                <div className="">
                    Fragrance
                </div>
                <div className="">
                    Makeup Products
                </div>

            </div>

            <div className="w-full h-[437px] bg-[url('Group15.svg')] mb-7 ">
            <div className="flex items-center justify-center flex-col">
                <div className="mt-[80px] ">
                <h1 className="text-[#FFD600] xl:text-[30px] lg:text-[40px] md:text-[40px] sm:text-[35px] min-[540px]:text-[33px] min-[320px]:text-[30px]">DAFTARI</h1>
                <h2 className="text-white font-semibold xl:text-[50px] lg:text-[30px] md:text-[30px] sm:text-[20px]">MEGA MART</h2>
                <h3 className="text-white sm:text-[30px] min-[540px]:text-[25px] min-[320px]:text-[20px]">The best stock at best prices</h3>
                    <div className="grid grid-cols-2 gap-1 sm:ml-[120px] max-[640px]:ml-[80px]">
                    <button className="text-[#552667] min-[540px]:text-[13px] sm:text-[15px] min-[320px]:text-[12px]  font-semibold max-[640px]:w-[100px] mt-5 w-[120px] h-[50px] border-4 border-[#FFD600] bg-white rounded-full">SHOP AGAIN</button>
                    </div>
                </div>
            </div>
            </div>

            {/* <div className="mt-8 w-full h-[735px] bg-cover bg-no-repeat bg-[url('Rectangle_248.png')] ">
            <div className="mr-[60px] grid grid-cols-6 gap-10 p-10 place-items-center">
        {Beautydata.map((person, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="rounded-full w-[120px] h-[120px] bg-cover bg-center"
              style={{ backgroundImage: `url(${person.img})` }}
            ></div>
            
            <p className="mt-2 text-sm text-center">{person.name}</p>
          </div>
        ))}
       </div>
       
     </div> */}
     <div className="bg-[url('Rectangle_248.png')] bg-no-repeat bg-cover mb-7 ">
     <BeautySection dataFile="BeautyData" />
     </div>
     <div className="drop-shadow-lg ">
      <h1 className="text-[40px] ml-[90px] font-bold mb-7 ">Top picks</h1>
{/*  */}
<ToppicksSection dataFile="ToppicksData"/>
            </div>
        </section>
    )
}