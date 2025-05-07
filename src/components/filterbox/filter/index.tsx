import React from 'react';
import { useStyles } from './style';


interface checkboxProps {
  label: string;
  checked: boolean;
  value: string;
  checkboxname: string;
  onChange: (value: string) => void;
}

const Checkbox: React.FC<checkboxProps> = ({ label, checked, checkboxname, value, onChange }) => {
  const classes = useStyles();

  return (
    <label className={classes.checkboxContainer}>
      <input
        className={classes.checkboxInput}
        type="checkbox"
        value={value}
        name={checkboxname}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
      />
      <span className={classes.checkboxButton} />
      <span className={classes.checkboxLabel}>{label}</span>
    </label>
  );
};

export default Checkbox;