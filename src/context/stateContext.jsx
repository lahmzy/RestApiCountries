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
        setCurrentPageData
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);

