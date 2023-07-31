import React from "react";
import {FcSearch} from "react-icons/fc"
// import Select from "react-select"

import { useStateContext } from "../context/stateContext";


const regions = ["Americas","Africa","Asia","Europe","Oceania"];

const Searchbar = () => {
  
  const {isDarkmode,selectCountry,setSelectCountry,searchCountry,setSearchCountry} = useStateContext()
  
  return (
    <section className="w-full lg:flex lg:justify-between">
      <div className="w-full lg:w-[25rem] bg-gray-500 rounded-md p-3 gap-2 flex items-center">
        <span>
          <FcSearch fontSize={25} />
        </span>
        <input value={searchCountry} onChange={(e)=>setSearchCountry(e.target.value)} className="capitalize bg-slate-600 outline-none rounded-md w-full p-2 px-4" type="text" placeholder="input name of country " />
      </div>
      <div className="w-full flex rounded-md gap-2 lg:w-[24rem] p-3 items-center bg-gray-500 mt-5">
        <select className="w-full  focus:outline-none hover:cursor-pointer outline-none border-none bg-gray-600 rounded-md p-2" onChange={(e)=>setSelectCountry(e.target.value)}>
          <option className={` bg-white text-black rounded-md`} value="">Select Region</option>
          {regions.map((region,index)=> (
            <option key={index} className="hover:cursor-pointer rounded-md focus:outline-none text-black bg-white" value={region}>{region}</option>
          ))}
        </select>
      </div>

      
    </section>
  );
};

export default Searchbar;
