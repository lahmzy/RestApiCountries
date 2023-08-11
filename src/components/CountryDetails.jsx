import React from "react";
import { Link, useParams } from "react-router-dom";
import { useStateContext } from "../context/stateContext";
import CountryDetailCard from "./CountryDetailCard";

const CountryDetails = () => {
  const { countryName } = useParams();
  const decodedParams = decodeURIComponent(countryName);
  const { countryData } = useStateContext();

  const SpecficCountry = countryData.filter(
    (country) => country?.name?.common === decodedParams
  );

  const {
    name,
    population,
    region,
    capital,
    borders,
    flags,
    currencies,
    
    subregion,
    coatOfArms,
    languages,
    demonyms,
  } = SpecficCountry[0];

  const currenciesArray = Object.values(currencies);

  const languagesArray = Object.values(languages);

  return (
    <CountryDetailCard
     {...SpecficCountry[0]}
      currenciesArray={currenciesArray}
      languagesArray={languagesArray}
    />
  );
};

export default CountryDetails;
