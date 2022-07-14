import { useState } from 'react';
import Select from 'react-select';
import Haiku from '../poem-templates/Haiku';

const PoemDropdownMenu = () => {
  const [selectedPoem, setSelectedPoem] = useState('') // need to initialize as object later?

  return (
    <div className='container p-5'>
      <select
        className='custom-select'
        onChange={(e) => {
          const poem = e.target.value
          setSelectedPoem(poem)
        }}
      >
        <option value='haiku'>Haiku</option>
        <option value='sonnet'>Sonnet</option>
      </select>
      {selectedPoem}
    </div>
  )
}

export default PoemDropdownMenu;
















// const optionsPoems = [
//   { value: 'custom', label: 'Custom' },
//   { value: 'haiku', label: 'Haiku' },
//   { value: 'sonnet', label: 'Sonnet' },
//   { value: 'limerick', label: 'Limerick' },
//   { value: 'couplet', label: 'Couplet' },
//   { value: 'tercet', label: 'Tercet' },
//   { value: 'quatrain', label: 'Quatrain' },
//   ];
  
// export default function PoemDropdownMenu(data) { // props or no props?
//   const [selectedPoem, setSelectedPoem] = useState({}); // initialized as object, will be poem template objects?

//   const customTheme = (theme) => {
//     return {
//       ...theme,
//       colors: {
//         ...theme.colors,
//         primary25: 'orange',
//         primary: '#808080',
        
//       }
//     }
//   }

//   return (
//     <div className='dropdownMenu'>
//       <Select
//         placeholder='Select Poem Template'
//         defaultValue={selectedPoem}
//         // onChange={setSelectedPoem}
//         onChange={(e) => {
//           const poem = e.target.value;
//           setSelectedPoem(poem)
//         }}
//         options={optionsPoems}
//         noOptionsMessage={() => 'Create this poem via custom option'}
//         isSearchable
//         theme={customTheme}
//       />
//     </div>
//   )
// };