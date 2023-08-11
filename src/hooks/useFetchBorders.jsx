import React from "react";
import useSWR from "swr";

// https://restcountries.com/v3.1/alpha/bra

const useFetchBorders = (input) => {
  const fetcher = async (...args) => {
    const response = await fetch(...args);
    const data = await response.json();
    
    return data
  };

  const { data, isLoading, error } = useSWR(
    `https://restcountries.com/v3.1/alpha/${input}`,
    fetcher
  );

  return { data, isLoading, error };

};


export default useFetchBorders;
