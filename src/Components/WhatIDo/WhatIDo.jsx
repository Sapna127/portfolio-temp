import React from 'react'
import whatido from '../../Assets/whatido.svg'
import classes from './WhatIDo.module.css';

const WhatIDo = () => {
  return (
    <div id="about">  
        <h1 className={classes.title}>What I Do ?</h1>
        <img src={whatido} className={classes.whati}/>
    </div>
  )
}

export default WhatIDo