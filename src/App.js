import React from 'react';
import './App.css';
import { useState } from 'react';
import WritePoetry from './WritePoetry'

export default function App() {
  const [poemTextInput, setPoetryTextInput] = useState('')

  const handleOnChange = (e) => {
    setPoetryTextInput(e.target.value)
  }

  return (
    <div className='App'>
      <h1>poetry and code</h1>
      <input value={poemTextInput} onChange={handleOnChange} />
      <WritePoetry name={poemTextInput} />
    </div>
  );
}
