import React, { useContext } from "react";
import OptionsContext from "../context/options-context";

const RemoveOptions = () => {
  const { dispatch } = useContext(OptionsContext);

  return (
    <div className="deleteAll">
      <p>Your Options</p>
      <button onClick={() => dispatch({ type: "REMOVE_OPTIONS" })}>
        Remove All
      </button>
    </div>
  );
};

export { RemoveOptions as default };
