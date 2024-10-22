/* eslint-disable react/prop-types */
import ToppicksCarousel from './ToppicksCarousel';
import {CategoryData} from './../Data/CategoryData'
import {BeautyData} from './../Data/BeautyData'
import { ToppicksData } from '../Data/ToppicksData';
import {TeaCoffeeData} from './../Data/TeaCoffeeData'

export default function beautySection({ sectionTitle, dataFile }) {
    
    const dataFiles = {
        ToppicksData: ToppicksData,
        BeautyData: BeautyData, 
        CategoryData: CategoryData,
        TeaCoffeeData: TeaCoffeeData,
        
      };
    

    const filteredItems = dataFiles[dataFile] || [];

  return (
    <div className="px-[100px]">
      <h2 className="text-3xl font-semibold text-customBrown ">{sectionTitle}</h2>
      <ToppicksCarousel items={filteredItems} />
    </div>
  );
}
