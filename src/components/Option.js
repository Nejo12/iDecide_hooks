import React, { useEffect, useContext } from "react";
import OptionsContext from "../context/options-context";

const Option = ({ option }) => {
  const { dispatch } = useContext(OptionsContext);

  useEffect(() => {
    console.log("useEffect setting up effect");
    return () => {
      console.log("useEffect Cleaning up effect");
    };
  }, []);

  return (
    // Note: display disabled when option < 1

    <>
      <h3>{option.text}</h3>
      <button
        onClick={() => dispatch({ type: "REMOVE_OPTION", text: option.text })}
      >
        x
      </button>
    </>
  );
};

export { Option as default };
