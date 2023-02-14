import React, { useState } from 'react';

const RegenerateButton = () => {
  const [number, setNumber] = useState(0);

  const handleClick = async () => {
    try {
      const response = await fetch('http://localhost:3000/regenerate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      setNumber(data.number);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleClick}>
      Regenerate Number: {number}
    </button>
  );
};

export default RegenerateButton;
