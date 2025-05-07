import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  productContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '36px',
    flexDirection: 'row',
    width: 'calc(100% - 32px)',
    flexWrap: 'wrap',
    padding: '8px',
    '@media (max-width: 480px)': {
      justifyContent: 'center',
      width: '100%',
    }
  },
});

export default useStyles;
