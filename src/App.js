import { useState } from 'react';
import './App.css';
import WritePoetry from './WritePoetry'
import WritePoetry2 from './WritePoetry'
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  const [poemTextInput, setPoetryTextInput] = useState('')
  const [poemTextInput2, setPoetryTextInput2] = useState('')

  const handleOnChange = (e) => {
    setPoetryTextInput(e.target.value)
  }
  const handleOnChange2 = (e) => {
    setPoetryTextInput2(e.target.value)
  }

  return (
    <div className='App'>
      <Header />
      
      <h1 className='tool-textheader'>write...</h1>
      <div className='tool-container'>
        <div className='inputs-container'>
          <input className='input-lines' type='text-area' value={poemTextInput} onChange={handleOnChange} />
          <input className='input-lines' type='text-area' value={poemTextInput2} onChange={handleOnChange2} />
        </div>
        <div className='outputs-container'>
          <WritePoetry name={poemTextInput} />
          <WritePoetry2 name={poemTextInput2} />
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