import React, { useEffect, useContext } from "react";
import OptionsContext from "../context/options-context";

const RemoveOption = ({ option }) => {
  const { dispatch } = useContext(OptionsContext);

  useEffect(() => {
    console.log("useEffect setting up effect");
    return () => {
      console.log("useEffect Cleaning up effect");
    };
  }, []);

  return (
    <div className="optionsList">
      <p>{option.text}</p>
      <button
        className="deleteOption"
        onClick={() => dispatch({ type: "REMOVE_OPTION", text: option.text })}
      >
        remove
      </button>
    </div>
  );
};

export { RemoveOption as default };
