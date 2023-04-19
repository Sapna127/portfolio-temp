import React from 'react'
import classes from './About.module.css'
import me from '../../Assets/me.gif'
const About = () => {
  return (
    <div className={classes.about}>
        <div className={classes.left}>
            <h1>Who am I?</h1>
            <p>Lorem ipsum dolor sit amet consectetur<br/>
               Lorem ipsum dolor sit amet consectetur..</p>
        </div>
        <div className={classes.right}>
              <img src={me} className={classes.me}></img>
        </div>
    </div>
  )
}

export default About