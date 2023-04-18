import React from 'react'
import classes from './About.module.css'
import about from '../../Assets/about.svg'
const About = () => {
  return (
    <div className={classes.about}>
        <div className={classes.left}>
            <h1>Who am I?</h1>
            <p>Lorem ipsum dolor sit amet consectetur<br/>
               Lorem ipsum dolor sit amet consectetur..</p>
        </div>
        <div className={classes.right}>
              <img src={about}></img>
        </div>
    </div>
  )
}

export default About