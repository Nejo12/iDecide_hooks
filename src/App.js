import React from "react";
import Header from "./components/Header";
import Action from "./components/Action";
import Options from "./components/Options";
import AddOptionForm from "./components/AddOptionForm";

const App = () => {
  return (
    <div>
      <Header />
      <Action />
      <Options />
      <AddOptionForm />
    </div>
  );
};

export default App;
