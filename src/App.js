import { useState } from 'react';
import './App.css';
import WritePoetry from './WritePoetry'
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  const [poemTextInput, setPoetryTextInput] = useState('')

  const handleOnChange = (e) => {
    setPoetryTextInput(e.target.value)
  }

  return (
    <div className='App'>
      <Header />
      
      <h1 className='tool-textheader'>write...</h1>
      <div className='tool-container'>
          <input type='text-area' value={poemTextInput} onChange={handleOnChange} />
          <WritePoetry name={poemTextInput} />
      </div>
      <Footer />
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