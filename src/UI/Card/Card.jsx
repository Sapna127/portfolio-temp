import React from 'react'
import Button from '../Button/Button'
import classes from './Card.module.css'
const Card = ({data}) => {
  const { title, url1, url2,color, description} = data;
  const cardStyle = {
    backgroundColor: color,
  };
  return (
    <div className={classes.card} style={cardStyle}>
        <h2 className={classes.title}>{title}</h2>
        <p className={classes.desc}>{description}</p>
        <div className={classes.btns}>
        <Button url={url1}>Live link</Button>
        <Button url={url2}>Github</Button>
        </div>
        
        
    </div>
  )
}

export default Card