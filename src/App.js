import { Input, Bttn, Output, Article, Title } from "./components";
import logic from "./components/logic";
import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  const [res, setRes] = useState("");

  const solve = (e) => {
    e.preventDefault();
    if (logic.solveAnagram(input, input2)) {
      setRes("I'm an Anagram!");
    } else {
      setRes("Not an Anagram :(");
    }
  };

  return (
    <div className="App">
      <Title />
      <div className="field-cont">
        <Input
          lbl={"First word: "}
          input={input}
          setInput={setInput}
          setRes={setRes}
        />
        <Input
          lbl={"Second word: "}
          input={input2}
          setInput={setInput2}
          setRes={setRes}
        />
        <Bttn solve={solve} />
      </div>
      <Output res={res} />
      <Article />
    </div>
  );
}

export default App;
