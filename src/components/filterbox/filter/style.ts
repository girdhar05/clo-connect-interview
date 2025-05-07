import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    margin: '8px 0',
  },
  checkboxInput: {
    position: 'absolute',
    opacity: 0,
    cursor: 'pointer',
  },
  checkboxButton: {
    position: 'relative',
    display: 'inline-block',
    width: 18,
    height: 18,
    marginRight: 10,
    border: '2px solid #666',
    borderRadius: '5px',
    '&::after': {
      content: '""',
      position: 'absolute',
      display: 'none',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 10,
      height: 10,
      borderRadius: '2px', // Changed from '50%' to '2px'
      backgroundColor: '#666',
    },
    '$checkboxInput:checked + &': {
      borderColor: '#007bff',
      '&::after': {
        display: 'block',
        backgroundColor: '#007bff',
      },
    },
  },
  checkboxLabel: {
    fontSize: 14,
    color: 'white',
  },
});