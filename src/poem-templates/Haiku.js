import { useState } from "react";
import WritePoetry from "../WritePoetry";

export default function Haiku() {
    const [poemTextInputs, setPoemTextInputs] = useState({});
    // User this state variable to dynamically set amount of lines
    const [numLines, setNumLines] = useState(3);
  
    const handleOnChange = (item, index) => {
    // using computed properties to set value
      setPoemTextInputs({ ...poemTextInputs, [`input${index}`]: item });
    }

    return (
          <div className="tool-container">
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
      );
}