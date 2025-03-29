// CycleButton.jsx
import React, { useState } from 'react';

export default function CycleButton({ onChange }) {
  const [currentOption, setCurrentOption] = useState('Dative'); // Default option

  const handleClick = () => {
    // Cycle through the options
    const nextOption = currentOption === 'Dative' ? 'Prepositional' :
                       currentOption === 'Prepositional' ? 'Genitive' : 'Dative';
    
    setCurrentOption(nextOption);
    onChange(nextOption);  // Pass the updated option to the parent component
  };

  return (
    <button
      onClick={handleClick}
      className="px-3 py-1.5 mt-3 bg-neutral-800 text-white text-sm inter-bold rounded-full transition"
    >
      {currentOption}
    </button>
  );
}
