import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  checkboxContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    width: 'calc(100% - 32px)',
  },
  checkboxFilter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '8px',
    padding: '16px',
    borderRadius: '8px',
    boxSizing: 'border-box',
    flexWrap: 'wrap',
  },
  checkboxOptions: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '16px',
    flexWrap: 'wrap',
  },
  checkboxtag: {
    fontSize: '12px',
    fontWeight: 600,
    marginRight: '4px',
    color: 'white',
  },
  priceRangeContainer: {
    flex: '1 0 auto', // Allow the range slider to grow and take extra space
    minWidth: '200px', // Set a minimum width
    maxWidth: '400px', // Optional: limit maximum width
    marginLeft: '16px', // Add spacing from other elements
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '& button': {
      padding: '8px 16px',
      backgroundColor: 'transparent',
      margin: '0 8px',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      '&:hover': {
        textDecoration: 'underline',
      }
    },
  }
});

export default useStyles;