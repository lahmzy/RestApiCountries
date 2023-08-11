import React from "react";
import { Link } from "react-router-dom";
import {BsFillArrowLeftSquareFill} from "react-icons/bs"



const CountryCard = ({ country }) => {
  const { name, population, region, capital, flags } = country;
  
  const encodedParams = encodeURIComponent(name?.common)


  return (
    <Link to={`/country-details/${encodedParams}`}>
      <div className=" min-h-[380px] w-[270px] flex flex-col rounded-md shadow-lg overflow-hidden">
      
      <img src={flags?.png} alt={`${name} Flag`} className="w-full h-40 object-cover" />

      
      <div className="p-4 flex flex-col space-y-4 mt-1">
        <h2 className="text-lg font-semibold mb-2">{name?.official}</h2>
        <p>
          <strong>Population:</strong> {population}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong>Capital:</strong> {capital}
        </p>
      </div>
    </div>
    </Link>
  );
};

export default CountryCard;


