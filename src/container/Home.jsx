import React, { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import { useStateContext } from "../context/stateContext";
import CountryCard from "../components/CountryCard";
import Spinner from "../components/Spinner";

const Home = () => {
  const {
    countryData,
    isDarkmode,
    isLoading,
    selectCountry,
    setIsLoading,
    searchCountry,
    fetchByRegion,
    fetchAllCountries,
    setSearchCountry,
  } = useStateContext();

  const [searchedData, setSearchedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedCountries, setDisplayedCountries] = useState([]);
  const countriesPerPage = 20;

  // Function to fetch data based on the selected region

  // Function to fetch all countries (default option)

  useEffect(() => {
    setIsLoading(true);

    const fetchCountryData = async () => {
      try {
        if (selectCountry) {
          setSearchCountry("");
          // Fetch data based on region if selectCountry is not empty
          fetchByRegion();
        } else {
          // Fetch all countries if both searchCountry and selectCountry are empty
          fetchAllCountries();
        }
      } catch (e) {
        console.error("Error fetching data:", e);
        setIsLoading(false);
      }
    };

    fetchCountryData();
  }, [selectCountry]);

  useEffect(() => {
    if (searchCountry) {
      const filteredData = countryData?.filter((countries) => {
        return countries?.name?.common
          .toString()
          .toLowerCase()
          .includes(searchCountry.toLowerCase());
      });

      setSearchedData(filteredData);
    } else {
      // If there's no search term, set the searchedData to null
      setSearchedData(null);
    }
  }, [searchCountry, countryData]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (currentPage > 1) {
      const startIndex = (currentPage - 1) * countriesPerPage;
      const finalIndex = startIndex + countriesPerPage;

      setDisplayedCountries((prevData) => [
        ...prevData,
        ...countryData.slice(startIndex, finalIndex),
      ]);
    } else if (countryData) {
      setDisplayedCountries(countryData.slice(0, countriesPerPage));
    }
  }, [currentPage, countryData, countriesPerPage]);

  if (isLoading) return <Spinner message="Made by Lahmzy" />;

  // Use searchedData if searchCountry is not empty, otherwise use countryData
  const dataToPaginate = searchCountry ? searchedData : displayedCountries;

  return (
    <div className={` ${isDarkmode ? "" : "bg-neutral-300"} w-full px-4 py-6`}>
      <Searchbar />

      {displayedCountries?.length && (
        <div className="md:flex md:flex-col items-center">
          {selectCountry && (
            <h1 className="text-2xl self-start font-semibold pt-3">
              {selectCountry} - {dataToPaginate.length}
            </h1>
          )}
          <div className="flex flex-wrap gap-4 py-6 justify-evenly">
            {displayedCountries?.map((country, index) => (
              <CountryCard key={index} country={country} />
            ))}
          </div>
          {dataToPaginate.length < countryData.length && (
            <button
              className="bg-blue-500 w-full md:w-[200px] text-white px-4 py-2 rounded-md"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
