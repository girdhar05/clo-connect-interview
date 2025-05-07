import React, { useState, useEffect } from 'react';
import useStyles from './style';

interface RangeSliderProps {
  min: number;
  max: number;
  onChange: (minValue: number, maxValue: number) => void;
  disabled?: boolean;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ 
  min = 0, 
  max = 999, 
  onChange,
  disabled = false
}) => {
  const classes = useStyles();
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  useEffect(() => {
    onChange(minValue, maxValue);
  }, []);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMinValue = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(newMinValue);
    
    // Update URL parameters
    const params = new URLSearchParams(window.location.search);
    params.set('minPrice', newMinValue.toString());
    params.set('maxPrice', maxValue.toString());
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
    
    onChange(newMinValue, maxValue);
  };
  
  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(newMaxValue);
    
    // Update URL parameters
    const params = new URLSearchParams(window.location.search);
    params.set('minPrice', minValue.toString());
    params.set('maxPrice', newMaxValue.toString());
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
    
    onChange(minValue, newMaxValue);
  };

  // Calculate the percentage position for the fill track
  const leftPercentage = ((minValue - min) / (max - min)) * 100;
  const rightPercentage = 100 - ((maxValue - min) / (max - min)) * 100;

  return (
    <div className={`${classes.rangeContainer} ${disabled ? classes.disabled : ''}`}>
      <div className={classes.sliderLabels}>
        <span className={classes.priceValues}>${minValue}</span>
      </div>
      
      <div className={classes.sliderTrack}>
        <div 
          className={classes.sliderFill}
          style={{ 
            left: `${leftPercentage}%`, 
            right: `${rightPercentage}%` 
          }}
        ></div>
        
        <input
          type="range"
          min={min}
          max={max}
          value={minValue}
          onChange={handleMinChange}
          className={classes.sliderThumb}
          disabled={disabled}
        />
        
        <input
          type="range"
          min={min}
          max={max}
          value={maxValue}
          onChange={handleMaxChange}
          className={classes.sliderThumb}
          disabled={disabled}
        />
      </div>

      <div className={classes.sliderLabels}>
        <span className={classes.priceValues}>${maxValue}</span>
      </div>

    </div>
  );
};

export default RangeSlider;