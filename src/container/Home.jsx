import React, { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import { useStateContext } from "../context/stateContext";
import CountryCard from "../components/CountryCard";
import Spinner from "../components/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  const itemsPerPage = 10
  const {
    countryData,
    setCountryData,
    isDarkmode,
    isLoading,
    setIsLoading,
    page,
    setPage,
    hasMore,
    setHasMore,
    searchCountry,
    selectCountry,
    setSearchCountry,
    setSelectCountry,
    currentPage,
    setCurrentPage,
    currentPageData,
    setCurrentPageData
  } = useStateContext();

  const [searchedData, setSearchedData] = useState([]);

  // Function to fetch data based on the selected region
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
  };

  // Function to fetch all countries (default option)
  const fetchAllCountries = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountryData(data); // Update the countryData state with fetched data
      setIsLoading(false);
      
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);

    const fetchCountryData = async () => {
      try {
        if (selectCountry) {
          setSearchCountry("")
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
  }, [page, selectCountry]); // Add "searchCountry" and "selectCountry" as dependencies to trigger the fetch when they change

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
      // If there's no search term, set the searchedData to the original data (countryData)
      setSearchedData(countryData);
    }
  }, [searchCountry, countryData]);

  const fetchPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
   
    const newData = countryData?.slice(startIndex, endIndex);
    setCurrentPageData((prevData) => [...prevData, ...newData]);
  };

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  // Fetch data whenever currentPage changes
  useEffect( () => {

    if(countryData)
    fetchPageData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);


  if (isLoading) return <Spinner message="Made by Lahmzy" />;

  return (
    <div className={` ${isDarkmode ? "" : "bg-neutral-300"} w-full px-4 py-6`}>
      <Searchbar />

      

      {searchedData?.length ? (
        <InfiniteScroll
          dataLength={searchedData?.length}
          // next={() => setPage((prevPage) => prevPage + 1)}
          // hasMore={hasMore}
          // loader={<Spinner message="Made by Lahmzy" />}
        >
          {selectCountry && (
            <h1 className="text-2xl font-semibold pt-3">
              {selectCountry} - {countryData.length}
            </h1>
          )}
          <div className="flex flex-wrap gap-4 py-6 justify-evenly">
            {searchedData?.map((country, index) => (
              <CountryCard key={index} country={country} />
            ))}
          </div>
        </InfiniteScroll>
      ) : (
        countryData?.length && (
          <InfiniteScroll
            dataLength={countryData.length}
            next={()=>{handleLoadMore}}
            hasMore={currentPageData.length < countryData.length}
            loader={<Spinner message="Made by Lahmzy" />}
          >
            {selectCountry && (
              <h1 className="text-2xl font-semibold pt-3">
                {selectCountry} - {countryData.length}
              </h1>
            )}
            <div className="flex flex-wrap gap-4 py-6 justify-evenly">
              {countryData.map((country, index) => (
                <CountryCard key={index} country={country} />
              ))}
            </div>
          </InfiniteScroll>
        )
      )}
    </div>
  );
};

export default Home;
