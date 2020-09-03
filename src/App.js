import React, { useState, useEffect } from 'react';
import { calculateSalaryFrom } from './components/Salary/Salary';
import InputFullSalary from './components/InputFullSalary';
import InputReadOnly from './components/InputReadOnly';
import ProgressBar from './components/ProgressBar.js';

export default function App() {
  const [salary, setSalary] = useState(1024);
  const [modificatedSalary, setModificatedSalary] = useState([]);

  useEffect(() => {
    const newSalary = calculateSalaryFrom(salary);

    setModificatedSalary({
      baseINSS: newSalary.baseINSS,
      discountINSS: newSalary.discountINSS,
      baseIRPF: newSalary.baseIRPF,
      discountIRPF: newSalary.discountIRPF,
      netSalary: newSalary.netSalary,
      percentageINSS: newSalary.percentINSS,
      percentageIRPF: newSalary.percentIRPF,
      percentageNetSalary: newSalary.percentNetSalary,
    });
  }, [salary]);

  const handleChangeData = (newSalary) => {
    setSalary(newSalary);
  };

  return (
    <div style={styles.background}>
      <div className="container">
        <div>
          <h1
            className="center"
            style={{ marginBottom: '50px', color: '#ffffff' }}
          >
            React Salary
          </h1>
        </div>
        <div>
          <InputFullSalary data={{ salary }} onChangeData={handleChangeData} />
        </div>
        <div>
          <InputReadOnly data={modificatedSalary} />
        </div>
        <div>
          <ProgressBar data={modificatedSalary} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  background: {
    backgroundColor: '#072023',
    display: 'flex',
    height: '800px',
  },
};
