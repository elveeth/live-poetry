import React from 'react';
import { useState } from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import MainLogo from './app/assets/img/logo-lore.svg';
import './App.css';
import WritePoetry from './WritePoetry'

export default function App() {
  const [poemTextInput, setPoetryTextInput] = useState('')

  const handleOnChange = (e) => {
    setPoetryTextInput(e.target.value)
  }

  return (
    <div className='App'>
      <Navbar dark sticky='top' expand='md'>
        <Container>
          <NavbarBrand href='/'>
              <img src = {MainLogo} alt='poetry logo' />
          </NavbarBrand>
        </Container>
      </Navbar>
      
      <h1>poetry and code</h1>
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