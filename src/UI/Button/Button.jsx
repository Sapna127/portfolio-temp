import React from 'react'
import classes from './Button.module.css'
const Button = (props) => {
  const {url, children} = props;
  const handleClick = () => {
    window.open(url, '_blank');
  };
  return (
    <button className={classes.button} onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button