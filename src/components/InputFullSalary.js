import React from 'react';

export default function InputFullSalary({ data, onChangeData }) {
  const { salary } = data;

  const handleInputSalary = (event) => {
    onChangeData(event.target.value);
  };

  return (
    <div className="container">
      <div className=" input-field container" style={{ marginBottom: '50px' }}>
        <input
          autoFocus
          id="inputSalary"
          type="number"
          value={salary}
          min="100"
          step="100"
          onChange={handleInputSalary}
          style={{ color: '#ffffff' }}
        />
        <label htmlFor="inputSalary" className="active">
          Salário Bruto:
        </label>
      </div>
    </div>
  );
}
