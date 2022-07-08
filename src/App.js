import { useState } from 'react';
import './App.css';
import WritePoetry1 from './WritePoetry';
import WritePoetry2 from './WritePoetry';
import WritePoetry3 from './WritePoetry';
import WritePoetry4 from './WritePoetry';
import WritePoetry5 from './WritePoetry';
import WritePoetry6 from './WritePoetry';
import Header from './components/Header';
import Footer from './components/Footer';
import PoemDropdownMenu from './components/PoemDropdownMenu';

export default function App() {
  const [poemTextInput1, setPoetryTextInput] = useState('')
  const [poemTextInput2, setPoetryTextInput2] = useState('')
  const [poemTextInput3, setPoetryTextInput3] = useState('')
  const [poemTextInput4, setPoetryTextInput4] = useState('')
  const [poemTextInput5, setPoetryTextInput5] = useState('')
  const [poemTextInput6, setPoetryTextInput6] = useState('')

  const handleOnChange1 = (e) => {
    setPoetryTextInput(e.target.value)
  }
  const handleOnChange2 = (e) => {
    setPoetryTextInput2(e.target.value)
  }
  const handleOnChange3 = (e) => {
    setPoetryTextInput3(e.target.value)
  }
  const handleOnChange4 = (e) => {
    setPoetryTextInput4(e.target.value)
  }
  const handleOnChange5 = (e) => {
    setPoetryTextInput5(e.target.value)
  }
  const handleOnChange6 = (e) => {
    setPoetryTextInput6(e.target.value)
  }

  return (
    <div className='App'>
      <Header />
      <h1 className='tool-textheader'>write...</h1>
      <PoemDropdownMenu/>
      <div className='tool-container'>
        <div className='inputs-container'>
          <input className='input-lines' type='text-area' value={poemTextInput1} onChange={handleOnChange1} />
          <input className='input-lines' type='text-area' value={poemTextInput2} onChange={handleOnChange2} />
          <input className='input-lines' type='text-area' value={poemTextInput3} onChange={handleOnChange3} />
          <input className='input-lines' type='text-area' value={poemTextInput4} onChange={handleOnChange4} />
          <input className='input-lines' type='text-area' value={poemTextInput5} onChange={handleOnChange5} />
          <input className='input-lines' type='text-area' value={poemTextInput6} onChange={handleOnChange6} />
        </div>
        <div className='outputs-container'>
          <WritePoetry1 name={poemTextInput1} />
          <WritePoetry2 name={poemTextInput2} />
          <WritePoetry3 name={poemTextInput3} />
          <WritePoetry4 name={poemTextInput4} />
          <WritePoetry5 name={poemTextInput5} />
          <WritePoetry6 name={poemTextInput6} />
        </div>
      </div>
      <Footer />
    </div>
  );
}











// import { useState } from 'react';
// import './App.css';
// import WritePoetry from './WritePoetry'
// import WritePoetry2 from './WritePoetry'
// import Header from './components/Header';
// import Footer from './components/Footer';

// export default function App() {
//   const [poemTextInput, setPoetryTextInput] = useState('')
//   const [poemTextInput2, setPoetryTextInput2] = useState('')

//   const handleOnChange = (e) => {
//     setPoetryTextInput(e.target.value)
//   }
//   const handleOnChange2 = (e) => {
//     setPoetryTextInput2(e.target.value)
//   }

//   return (
//     <div className='App'>
//       <Header />
      
//       <h1 className='tool-textheader'>write...</h1>
//       <div className='tool-container'>
//           <input className='input-lines' type='text-area' value={poemTextInput} onChange={handleOnChange} />
//           <input className='input-lines' type='text-area' value={poemTextInput2} onChange={handleOnChange2} />
//           <WritePoetry name={poemTextInput} />
//           <WritePoetry2 name={poemTextInput2} />
//       </div>
//       <Footer />
//     </div>
//   );
// }