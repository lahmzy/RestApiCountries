import React from "react";
import { useParams } from "react-router-dom";

import useFetchBorders from "../hooks/useFetchBorders";
import Spinner from "./Spinner";
import CountryDetailCard from "./CountryDetailCard";

const BorderCountries = () => {
  const { borderName } = useParams();
  const { data, isLoading } = useFetchBorders(borderName);

  if (isLoading) return <Spinner message="loading border countries" />;

  const {
    currencies,

    languages,
  } = data ? data[0] : {};

  const dataObject = data ? data[0] : {};

  const currenciesArray = Object.values(currencies);

  const languagesArray = Object.values(languages);

  return (
    <CountryDetailCard
      {...dataObject}
      currenciesArray={currenciesArray}
      languagesArray={languagesArray}
    />
  );
};

export default BorderCountries;
