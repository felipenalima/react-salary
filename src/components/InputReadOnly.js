import React from 'react';

export default function InputReadOnly({ data }) {
  const {
    baseINSS,
    discountINSS,
    baseIRPF,
    discountIRPF,
    netSalary,
    percentageINSS,
    percentageIRPF,
    percentageNetSalary,
  } = data;

  return (
    <div className="center row ">
      <div className="col input-field">
        <input value={baseINSS} style={styles.fontBaseInss} readOnly />
        <label htmlFor="baseINSS" className="active">
          Base INSS:
        </label>
      </div>
      <div className="col input-field">
        <input
          value={`${discountINSS} (${percentageINSS} %)`}
          style={styles.fontDiscountInss}
          readOnly
        />
        <label htmlFor="discountINSS" className="active">
          Desconto INSS:
        </label>
      </div>
      <div className="col input-field">
        <input value={baseIRPF} style={styles.fontBaseIrpf} readOnly />
        <label htmlFor="baseIRPF" className="active">
          Base IRPF:
        </label>
      </div>
      <div className="col input-field">
        <input
          value={`${discountIRPF} (${percentageIRPF} %)`}
          style={styles.fontDiscountIrpf}
          readOnly
        />
        <label htmlFor="discountIRPF" className="active">
          Desconto IRPF:
        </label>
      </div>
      <div className="col input-field">
        <input
          value={`${netSalary} (${percentageNetSalary} %)`}
          style={styles.fontNetSalary}
          readOnly
        />
        <label htmlFor="netSalary" className="active">
          Salário Líquido:
        </label>
      </div>
    </div>
  );
}

const styles = {
  fontBaseInss: {
    color: '#ffffff',
  },
  fontBaseIrpf: {
    color: '#ffffff',
  },
  fontDiscountInss: {
    color: '#e67e22',
  },
  fontDiscountIrpf: {
    color: '#c0392b',
  },
  fontNetSalary: {
    color: '#16a085',
  },
};
