import { useState } from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./container/Home";
import { Navbar, CountryDetails } from "./components";
import { useStateContext } from "./context/stateContext";



function App() {
 
    const {isDarkmode,setIsDarkMode} = useStateContext()



  return (
    <div className={`${isDarkmode? "dark-mode" : "light-mode"}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/country-details/:countryName" element={<CountryDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
