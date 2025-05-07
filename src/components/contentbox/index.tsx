import React from 'react';
import useStyles from './style';

interface ContentBoxProps {
  children?: React.ReactNode;
}

const ContentBox: React.FC<ContentBoxProps> = ({
  children
}) => {
  const classes = useStyles();

  return (
    <div className={classes.productContainer}>
      {children}
    </div>
  );
};

export default ContentBox;