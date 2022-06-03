import { useState } from 'react';
import './App.css';
import WritePoetry from './WritePoetry'
import Header from './components/Header';

export default function App() {
  const [poemTextInput, setPoetryTextInput] = useState('')

  const handleOnChange = (e) => {
    setPoetryTextInput(e.target.value)
  }

  return (
    <div className='App'>
      <Header />
      
      <h1 className='tool-textheader'>poetry and code</h1>
      <div className='tool-container'>
          <input value={poemTextInput} onChange={handleOnChange} />
          <WritePoetry name={poemTextInput} />
      </div>
    </div>
  );
}







// import React from 'react';
// import { useState } from 'react';
// import { Container, Navbar, NavbarBrand } from 'reactstrap';
// import MainLogo from './app/assets/img/logo-lore.svg';
// import './App.css';
// import WritePoetry from './WritePoetry'

// export default function App() {
//   const [poemTextInput, setPoetryTextInput] = useState('')

//   const handleOnChange = (e) => {
//     setPoetryTextInput(e.target.value)
//   }

//   return (
//     <div className='App'>
//       <h1>poetry and code</h1>
//       <input value={poemTextInput} onChange={handleOnChange} />
//       <WritePoetry name={poemTextInput} />
//     </div>
//   );
// }