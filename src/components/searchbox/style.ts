import { createUseStyles } from 'react-jss'

export const useStyles = createUseStyles({
  searchContainer: {
    position: 'relative',
    margin: 'auto',
    width: 'calc(100% - 32px)',
    height: '60px',
  },
  searchInput: {
    width: '100%',
    padding: '10px 40px 10px 15px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '16px',
    height: '100%',
    outline: 'none',
    '&:focus': {
      borderColor: '#007bff',
      boxShadow: '0 0 0 2px rgba(0,123,255,0.25)',
    },
    boxSizing: 'border-box',
  },
  searchIcon: {
    position: 'absolute',
    width: '20px',
    right: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#666',
    cursor: 'pointer'
  },
})