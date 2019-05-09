import React, { useEffect, useReducer } from "react";
import OptionsContext from "../context/options-context";
import optionsReducer from "../reducers/options";
import AddOptionForm from "./AddOptionForm";
import RemoveOptions from "./RemoveOptions";
import OptionList from "./OptionList";
import OptionPick from "./OptionPick";
import Header from "./Header";

const App = () => {
  const [options, dispatch] = useReducer(optionsReducer, []);

  useEffect(() => {
    const optionData = JSON.parse(localStorage.getItem("options"));
    if (optionData) {
      dispatch({
        type: "POPULATE_OPTIONS",
        options: optionData
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("options", JSON.stringify(options));
  }, [options]);

  return (
    <OptionsContext.Provider value={{ options, dispatch }}>
      <Header />
      <OptionPick />
      <h1>Options...</h1>
      <RemoveOptions />
      <OptionList />
      <AddOptionForm />
    </OptionsContext.Provider>
  );
};

export { App as default };
