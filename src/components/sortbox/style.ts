import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  selectContainer: {
    position: 'relative',
    width: 'calc(100% - 32px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
  },
  selectLabel: {
    fontSize: '14px',
    fontWeight: 600,
    marginRight: '8px',
    color: 'white',
  },
  select: {
    width: '10%',
    padding: '8px 12px',
    fontSize: '14px',
    border: 'none',
    borderBottom: '1px solid #ccc',
    backgroundColor: 'transparent',
    outlineColor: 'transparent',
    cursor: 'pointer',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    '@media (max-width: 480px)': {
      minWidth: '40%',
    },
    '@media (max-width: 768px)': {
      minWidth: '30%',
    },
    '@media (max-width: 1200px)': {
      minWidthidth: '20%',
    },
    '& option': {
      backgroundColor: 'black',
      color: 'white',
    }
  }
});

export default useStyles;