import React, { useState, useEffect } from "react";

const AddOptionForm = () => {
  const [options, setOptions] = useState([]);
  const [text, setText] = useState("");

  const addOption = e => {
    e.preventDefault();
    setOptions([...options, { text }]);
    setText("");
  };

  const removeOption = text => {
    setOptions(options.filter(option => option.text !== text));
  };

  const removeOptions = () => {
    setOptions([]);
  };

  useEffect(() => {
    const optionData = JSON.parse(localStorage.getItem("options"));
    if (optionData) {
      setOptions(optionData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("options", JSON.stringify(options));
  }, [options]);

  const selected = () => {
    const randomNum = Math.floor(Math.random() * options.length);
    const option = options[randomNum];
    alert(option.text);
  };

  return (
    <div>
      <button onClick={selected}>Choose for me</button>
      <h3>Your options</h3>
      <button onClick={removeOptions}>Remove all</button>
      {options.map(option => (
        <Options
          key={option.text}
          option={option}
          removeOption={removeOption}
        />
      ))}
      <h3>Add options</h3>
      <form onSubmit={addOption}>
        <input value={text} onChange={e => setText(e.target.value)} />
        <button>Add option</button>
      </form>
    </div>
  );
};
// dont add when empty input

const Options = ({ option, removeOption }) => {
  useEffect(() => {
    console.log("useEffect setting up effect");
    return () => {
      console.log("useEffect Cleaning up effect");
    };
  }, []);
  return (
    <div>
      <h3>{option.text}</h3>
      <button
        onClick={() => {
          removeOption(option.text);
        }}
      >
        x
      </button>
    </div>
  );
};

export { AddOptionForm as default };
