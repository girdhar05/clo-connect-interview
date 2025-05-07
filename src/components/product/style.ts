import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  productCard: {
    display: 'flex',
    flexDirection: 'column',
    width: 'calc(25% - 32px)', // Default: 4 columns
    borderRadius: '8px',
    minHeight: '500px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(1, 1, 1, 0.6)',
    overflow: 'hidden',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
    },
    '@media (max-width: 1200px)': {
      width: 'calc(33.333% - 32px)', // 3 colunms
    },
    '@media (max-width: 768px)': {
      width: 'calc(50% - 32px)', // 2 columns
    },
    '@media (max-width: 480px)': {
      width: 'calc(100% - 32px)', // 1 column
    }
  },
  productImage: {
    width: '100%',
    height: '480px',
    objectFit: 'cover',
  },
  productInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '16px',
  },
  leftInfo: {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
  },
  productTitle: {
    fontSize: '18px',
    fontWeight: 600,
    marginBottom: '8px',
    color: '#333333',
  },
  creator: {
    fontSize: '14px',
    color: '#666666',
    marginBottom: '8px',
  },
  price: {
    fontSize: '20px',
    fontWeight: 700,
    color: '#2c2c2c',
  },
  pricingOption: {
    fontSize: '12px',
    color: '#888888',
    marginTop: '4px',
  },
});

export default useStyles;