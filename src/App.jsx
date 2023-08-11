import { useState } from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./container/Home";
import { Navbar, CountryDetails,BorderCountries } from "./components";
import { useStateContext } from "./context/stateContext";



function App() {
 
    const {isDarkmode,setIsDarkMode} = useStateContext()



  return (
    <div className={`${isDarkmode? "dark-mode" : "light-mode"}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/country-details/:countryName" element={<CountryDetails/>} />
        <Route path="/border-countries/:borderName" element={<BorderCountries/>} />
      </Routes>
    </div>
  );
}

export default App;
