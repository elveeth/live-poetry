import { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'custom', label: 'Custom' },
  { value: 'haiku', label: 'Haiku' },
  { value: 'sonnet', label: 'Sonnet' },
  { value: 'limerick', label: 'Limerick' },
  { value: 'couplet', label: 'Couplet' },
  { value: 'tercet', label: 'Tercet' },
  { value: 'quatrain', label: 'Quatrain' },
  ];
  
  export default function PoemDropdownMenu() {
    const [selectedOption, setSelectedOption] = useState(null);
  
    return (
      <div className='dropdownMenu'>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
      </div>
    );
  }