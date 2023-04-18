import React from 'react'
import Button from '../Button/Button'
import classes from './Card.module.css'
const Card = (props) => {
  const { title, url,color, description} = props;
  const cardStyle = {
    backgroundColor: color,
  };
  return (
    <div className={classes.card} style={cardStyle}>
        <h2 className={classes.title}>{title}</h2>
        <p className={classes.desc}>{description}</p>
        <Button url={url}>Live link</Button>
        
    </div>
  )
}

export default Card