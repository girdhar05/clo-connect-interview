import useStyles from './style';
import Checkbox from './filter';
import { useSelector } from 'react-redux';
import { useUrlParams } from '../../hooks/useUrlParams';
import RangeSlider from '../slider/index';
import { useState, useEffect } from 'react';

let options = [
  { id: '1', label: 'Paid', value: '0', name: 'paid' },
  { id: '2', label: 'Free', value: '1', name: 'free' },
  { id: '3', label: 'View Only', value: '2', name: 'view_only' },
]

const FilterBox = () => {
  const classes = useStyles();
  const { tempProducts } = useSelector((state: any) => state.product)
  const { filterValues, updateParams } = useUrlParams(tempProducts)
  const [_, setPriceRange] = useState({ min: 0, max: 999 });
  const [isPaidSelected, setIsPaidSelected] = useState(false);

  // Check if the "Paid" option is selected
  useEffect(() => {
    setIsPaidSelected(filterValues.includes('0'));
  }, [filterValues]);

  const onChange = (value: string) => {
    const newFilterValues = filterValues.includes(value)
      ? filterValues.filter(item => item !== value)
      : [...filterValues, value];
      
    updateParams(undefined, newFilterValues);
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    setPriceRange({ min, max });
    
    // Update URL with price range
    const params = new URLSearchParams(window.location.search);
    params.set('minPrice', min.toString());
    params.set('maxPrice', max.toString());
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
    
    // Apply price range filter only if the products exist
    if (tempProducts && tempProducts.length > 0) {
      // Re-apply all filters including price range
      updateParams(undefined, filterValues);
    }
  };

  const onreset = () => {
    // Reset filter values and price range
    updateParams(undefined, []);
    setPriceRange({ min: 0, max: 999 });
    
    // Remove price range params from URL
    const params = new URLSearchParams(window.location.search);
    params.delete('minPrice');
    params.delete('maxPrice');
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
  };

  return (
    <div className={classes.checkboxContainer}>
      <div className={classes.checkboxFilter}>
        <span className={classes.checkboxtag}>Pricing Options</span>
        {options.map((option) => (
          <Checkbox
            label={option.label} 
            key={option.id} 
            checkboxname={option.name}
            value={option.value}
            checked={filterValues.includes(option.value)}
            onChange={(value) => onChange(value)}
          />
        ))}
        
        {/* Price range slider - only visible when "Paid" is selected */}
        {isPaidSelected && (
          <div className={classes.priceRangeContainer}>
            <RangeSlider
              min={0}
              max={999}
              onChange={handlePriceRangeChange}
              disabled={!isPaidSelected}
            />
          </div>
        )}
      </div>
      <div className={classes.buttonContainer}>
        <button onClick={onreset}>Reset</button>
      </div>
    </div>
  );
};

export default FilterBox;