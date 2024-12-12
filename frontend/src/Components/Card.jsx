/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";


export default function Card({ title, imageSrc, altText }) {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col m-2 overflow-hidden justify-center items-center lg:w-40 md:w-36 sm:w-28 min-[320px]:w-20  "
    onClick={()=>navigate("/grocery/items")}>
      <img src={imageSrc} alt={altText} className="w-full  min-[320px]:h-20 " />
      <div className="flex justify-center items-center">
        <h3 className="lg:text-lg md:text-base text-wrap sm:text-sm min-[320px]:text-sm font-semibold text-center">{title}</h3>
      </div>
    </div>
  );
}
