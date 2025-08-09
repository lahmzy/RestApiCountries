import React, { useState, useContext, createContext } from "react";

const Context = createContext();

const itemsPerPage = 10

export const StateContext = ({ children }) => {
  const [countryData, setCountryData] = useState(null);
  const [isLoading, setIsLoading] = useState("");
  const [selectCountry, setSelectCountry] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [isDarkmode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState([]);

  const fetchByRegion = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/region/${selectCountry}`
      );
      const data = await response.json();
      setCountryData(data); // Update the countryData state with fetched data
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  }

  const fetchAllCountries = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital");
      const data = await response.json();
      setCountryData(data); // Update the countryData state with fetched data
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  console.log(countryData)


  return (
    <Context.Provider
      value={{
        countryData,
        setCountryData,
        isLoading,
        setIsLoading,
        selectCountry,
        setSelectCountry,
        searchCountry,
        setSearchCountry,
        isDarkmode,
        setIsDarkMode,
        currentPage,
        setCurrentPage,
        currentPageData,
        setCurrentPageData,
        fetchByRegion,
        fetchAllCountries
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);

