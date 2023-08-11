import React from "react";
import { useStateContext } from "../context/stateContext";
import { BsMoonFill, BsSun} from "react-icons/bs";
import { useEffect } from "react";

const Navbar = () => {
  const { isDarkmode, setIsDarkMode } = useStateContext();
 
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  return (
    <header className="px-6 md:py-6 py-2 shadow-md flex justify-between items-center">
      <h1 className="text-xl text-blue-500 capitalize font-semibold md:text-2xl">
        Where in the world?
      </h1>
      <div onClick={toggleDarkMode}>
        {isDarkmode ? (
          <div className="flex items-center gap-2 cursor-pointer">
            <BsMoonFill className="text-indigo-600" fontSize={28} />
            <span className="font-medium">Dark mode</span>
          </div>
        ) : (
          <div className="flex items-center cursor-pointer gap-2">
            <BsSun className="text-yellow-500" fontSize={28}/> <span className="font-medium">Light Mode</span>
          </div>
        )}
    </div>
    </header>
  );
};

export default Navbar;
