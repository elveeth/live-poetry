import { useState } from "react";
import "./App.css";
import WritePoetry from "./WritePoetry";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PoemDropdownMenu from "./components/PoemDropdownMenu";
import Haiku from "./poem-templates/Haiku";

export default function App() {
  const [poemTextInputs, setPoemTextInputs] = useState({});
  // User this state variable to dynamically set amount of lines
  const [numLines, setNumLines] = useState(6);

  const handleOnChange = (item, index) => {
  // using computed properties to set value
    setPoemTextInputs({ ...poemTextInputs, [`input${index}`]: item });
  };
  
  return (
    <div className="App">
      <Header />
      <h1 className="tool-textheader">write...</h1>
      <PoemDropdownMenu />
      <div className="tool-container">
        {/*https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n*/}
        {[...Array(numLines).keys()].map((i) => {
          return (
            <div key={`tool${i}`} className="tool-item">
              <div className="input-parent">
                <input
                  className="input-lines"
                  type="text-area"
                  value={poemTextInputs[`input${i}`]}
                  onChange={(e) => handleOnChange(e.target.value, i)}
                />
              </div>
              <div className="outputs-container">
                <div className="output-line">
                  <WritePoetry name={poemTextInputs[`input${i}`]} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}


