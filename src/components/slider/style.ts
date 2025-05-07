import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  rangeContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
  },
  sliderLabels: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    fontSize: '14px',
  },
  priceValues: {
    marginLeft: '8px',
    fontWeight: 'bold',
  },
  sliderTrack: {
    position: 'relative',
    width: '100%',
    height: '4px',
    backgroundColor: '#444',
    borderRadius: '2px',
    margin: '20px 0',
  },
  sliderFill: {
    position: 'absolute',
    height: '4px',
    backgroundColor: '#007bff',
    borderRadius: '2px',
  },
  sliderThumb: {
    position: 'absolute',
    width: '100%',
    appearance: 'none',
    pointerEvents: 'all',
    height: '18px',
    outline: 'none',
    top: '-8px',
    margin: '0',
    backgroundColor: 'transparent',
    
    // Thumb styling
    '&::-webkit-slider-thumb': {
      appearance: 'none',
      width: '18px',
      height: '18px',
      borderRadius: '50%',
      backgroundColor: '#007bff',
      cursor: 'pointer',
      border: '2px solid white',
      transition: 'background-color 0.2s',
      '&:hover': {
        backgroundColor: '#0056b3',
      },
    },
    '&::-moz-range-thumb': {
      width: '18px',
      height: '18px',
      borderRadius: '50%',
      backgroundColor: '#007bff',
      cursor: 'pointer',
      border: '2px solid white',
      transition: 'background-color 0.2s',
      '&:hover': {
        backgroundColor: '#0056b3',
      },
    },
  },
  disabled: {
    opacity: 0.5,
    pointerEvents: 'none',
    '& $sliderFill': {
      backgroundColor: '#888',
    },
  },
});

export default useStyles;