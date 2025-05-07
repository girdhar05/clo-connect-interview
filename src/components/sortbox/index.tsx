import { useState } from 'react';
import useStyles from './style';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../store/product/productSlice';

const options = [
  { value: '0', label: 'Item Name' },
  { value: '1', label: 'Price: Low to High' },
  { value: '2', label: 'Price: High to Low' },
];

const SortBox = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { tempProducts } = useSelector((state: any) => state.product)
  let [value, setValue] = useState('0');
  const onChange = (value: string) => {
    let sortedProducts = [...tempProducts];
    setValue(value);
    if(value === '0') {
      sortedProducts.sort((a: any, b: any) => a.title.localeCompare(b.title));
    }
    else if(value === '1') {
      sortedProducts.sort((a: any, b: any) => a.price - b.price);
    }
    else if(value === '2') {
      sortedProducts.sort((a: any, b: any) => b.price - a.price);
    }
    dispatch(setProducts(sortedProducts));
  }

  return (
    <div className={classes.selectContainer}>
      <span className={classes.selectLabel}>Sort By</span>
      <select
        className={classes.select}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortBox;