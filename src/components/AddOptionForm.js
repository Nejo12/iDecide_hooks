import React, { useState, useContext } from "react";
import OptionsContext from "../context/options-context";

const AddOptionForm = () => {
  const { dispatch, options } = useContext(OptionsContext);
  const [text, setText] = useState("");

  const addOption = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_OPTION",
      text
    });
    setText("");
  };

  return (
    <div className="addOptionContainer">
      {options.length < 1 && <p>Write in your option to get started!</p>}
      <form className="addOptionForm" onSubmit={addOption}>
        <input
          className="addOptionInput"
          value={text}
          onChange={e => setText(e.target.value)}
          type="text"
          required
        />
        <button>Add option</button>
      </form>
    </div>
  );
};

export { AddOptionForm as default };
