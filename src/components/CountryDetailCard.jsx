import React from "react";
import { useStateContext } from "../context/stateContext";
import { Link, useNavigate } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";


const CountryDetailCard = ({
  name,
  population,
  region,
  capital,
  borders,
  flags,
  currenciesArray,
  subregion,

  languagesArray,
  demonyms,
}) => {
  const { isDarkmode } = useStateContext();
  const navigate = useNavigate();

  return (
    <section
      className={`p-3 max-h-max md:h-screen ${
        isDarkmode ? "" : "bg-neutral-300"
      } w-full`}
    >
      <button
        onClick={() => navigate(-1)}
        className="flex ml-2 shadow-sm pt-1 gap-1 items-center py-2 px-2 mt-5 mb-[100px] rounded-sm cursor-pointer font-semibold md:-mb-2 md:mt-7"
      >
        <BsFillArrowLeftSquareFill fontSize={18} />
        <span>back</span>
      </button>
      <div
        className={`justify-between md:h-full md:justify-evenly flex flex-col items-center md:items-center md:flex-row ${
          isDarkmode ? "" : "bg-neutral-300"
        } w-full px-4`}
      >
        <div className="md:w[50%] pt-4 md:py-0">
          <img
            src={flags?.png}
            alt={`${name} Flag`}
            className="w-full h-auto md:w-[300px] md:h-[200px] lg:w-[500px] object-contain md:object-cover lg:h-[300px]"
          />
        </div>
        <div className="md:w-[43%] md:pl-6 flex flex-col">
          <h2 className="text-2xl text-center md:-mt-10 lg:text-3xl font-bold py-6">
            {name?.common}
          </h2>
          <div className="md:flex">
            <div className="flex flex-col gap-1 space-y-2">
              <p className=" font-bold">
                Official Name :{" "}
                <span className="font-normal">{name?.official}</span>
              </p>
              <p className="font-semibold text-lg">
                Population: <span className="font-normal"> {population}</span>
              </p>
              <p className="text-normal font-semibold">
                Capital:<span className="font-normal"> {capital}</span>
              </p>
              <p className="font-semibold">
                Region:<span className=" font-normal"> {region}</span>
              </p>
              <p className="text-normal font-semibold">
                Sub region:<span className="font-normal"> {subregion}</span>
              </p>
            </div>

            <div className="flex flex-col space-y-2 md:ml-2">
              <p className="text-normal font-semibold mt-6 md:mt-0">
                Demonyms : <span className="font-normal">{demonyms.eng.m}</span>
              </p>
              <p className="text-normal font-semibold">
                {" "}
                Currency :
                <span className="font-normal"> {currenciesArray[0].name}</span>
              </p>
              <p className="text-normal font-semibold">
                Language :{" "}
                {languagesArray.map((language, index) => (
                  <span className="font-normal ml-1" key={index}>
                    {language}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div className="pt-3 mt-4">
            <div className="flex gap-2 font-semibold whitespace-nowrap">
              Border Countries:
              {borders ? (
                <ul className="gap-4 flex flex-wrap">
                  {borders.map((border, index) => {
                    return (
                      <Link key={index} to={`/border-countries/${border}`}>
                        <li className="shadow-md inline text-xl p-1 cursor-pointer ">
                          {border}
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              ) : (
                <span className="font-normal">None</span>
              )}{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetailCard;
