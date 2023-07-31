import React from "react";
import {Bars} from "react-loader-spinner";
import { useStateContext } from "../context/stateContext";

const Spinner = ({ message }) => {

  const {isDarkmode} = useStateContext()

  return (
    <section className={`flex ${isDarkmode?"":"bg-neutral-300"} py-6 w-full h-screen justify-center items-center`}>
      <div className="flex flex-col space-x-4 items-center">
        <Bars
          height="80"
          width="80"
          color="#f5c242"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass="w-50 h-50"
          visible={true}
        />
        <p>{message}</p>
      </div>
    </section>
  );
};

export default Spinner;
