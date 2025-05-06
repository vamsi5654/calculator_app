import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '=') {
      if (input.trim() === '') {
        setResult('Error');
      } else {
        try {
          // eslint-disable-next-line no-eval
          const evalResult = eval(input);
          if (isNaN(evalResult)) {
            setResult('NaN');
          } else if (!isFinite(evalResult)) {
            setResult('Infinity');
          } else {
            setResult(evalResult);
          }
        } catch (error) {
          setResult('Error');
        }
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    '7', '8', '9', '+',
    '4', '5', '6', '-',
    '1', '2', '3', '*',
    'C', '0', '=', '/'
  ];

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Calculator</h1>
      <input
        type="text"
        value={input}
        readOnly
        style={{ width: '200px', fontSize: '20px', textAlign: 'center' }}
      />
      <div style={{ margin: '10px', fontSize: '20px' }}>
        {result}
      </div>
      <div style={{ display: 'inline-grid', gridTemplateColumns: 'repeat(4, 50px)', gap: '10px' }}>
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            style={{ width: '50px', height: '50px', fontSize: '18px' }}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
