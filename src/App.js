import { useState } from "react";
import "./App.css";
import WritePoetry from "./WritePoetry";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PoemDropdownMenu from "./components/PoemDropdownMenu";

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













// import { useState } from 'react';
// import './App.css';
// import WritePoetry1 from './WritePoetry';
// import WritePoetry2 from './WritePoetry';
// import WritePoetry3 from './WritePoetry';
// import WritePoetry4 from './WritePoetry';
// import WritePoetry5 from './WritePoetry';
// import WritePoetry6 from './WritePoetry';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import PoemDropdownMenu from './components/PoemDropdownMenu';

// export default function App() {
//   const [poemTextInput1, setPoetryTextInput] = useState('')
//   const [poemTextInput2, setPoetryTextInput2] = useState('')
//   const [poemTextInput3, setPoetryTextInput3] = useState('')
//   const [poemTextInput4, setPoetryTextInput4] = useState('')
//   const [poemTextInput5, setPoetryTextInput5] = useState('')
//   const [poemTextInput6, setPoetryTextInput6] = useState('')

//   const handleOnChange1 = (e) => {
//     setPoetryTextInput(e.target.value)
//   }
//   const handleOnChange2 = (e) => {
//     setPoetryTextInput2(e.target.value)
//   }
//   const handleOnChange3 = (e) => {
//     setPoetryTextInput3(e.target.value)
//   }
//   const handleOnChange4 = (e) => {
//     setPoetryTextInput4(e.target.value)
//   }
//   const handleOnChange5 = (e) => {
//     setPoetryTextInput5(e.target.value)
//   }
//   const handleOnChange6 = (e) => {
//     setPoetryTextInput6(e.target.value)
//   }

//   return (
//     <div className='App'>
//       <Header />
//       <h1 className='tool-textheader'>write...</h1>
//       <PoemDropdownMenu/>
//       <div className='tool-container'>
//         <div className='inputs-container'>
//           <input className='input-lines' type='text-area' value={poemTextInput1} onChange={handleOnChange1} />
//           <input className='input-lines' type='text-area' value={poemTextInput2} onChange={handleOnChange2} />
//           <input className='input-lines' type='text-area' value={poemTextInput3} onChange={handleOnChange3} />
//           <input className='input-lines' type='text-area' value={poemTextInput4} onChange={handleOnChange4} />
//           <input className='input-lines' type='text-area' value={poemTextInput5} onChange={handleOnChange5} />
//           <input className='input-lines' type='text-area' value={poemTextInput6} onChange={handleOnChange6} />
//         </div>
//         <div className='outputs-container'>
//           <WritePoetry1 name={poemTextInput1} className='output-line' />
//           <WritePoetry2 name={poemTextInput2} className='output-line' />
//           <WritePoetry3 name={poemTextInput3} className='output-line' />
//           <WritePoetry4 name={poemTextInput4} className='output-line' />
//           <WritePoetry5 name={poemTextInput5} className='output-line' />
//           <WritePoetry6 name={poemTextInput6} className='output-line' />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }
