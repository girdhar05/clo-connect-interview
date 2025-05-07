import React from 'react';
import useStyles from './style';
import { Data } from '../../interface/data';
import { pricingOptions } from '../../constants/product';

const Product: React.FC<Data> = ({
  title,
  imagePath,
  creator,
  price,
  pricingOption,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.productCard}>
      <img
        src={imagePath}
        alt={title}
        className={classes.productImage}
      />
      <div className={classes.productInfo}>
        <div className={classes.leftInfo}>
          <div className={classes.productTitle}>{title}</div>
          <div className={classes.creator}>By {creator}</div>
        </div>
        
        {
          pricingOption === 0 ?
            <div className={classes.price}>${price.toFixed(2)}</div> :
            <div className={classes.price}>{pricingOptions[pricingOption]}</div>
        }
      </div>
    </div>
  );
};

export default Product;