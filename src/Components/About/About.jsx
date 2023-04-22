import React from 'react'
import classes from './About.module.css'
import me from '../../Assets/me.gif'
const About = () => {
  return (
    <div className={classes.about}>
        <div className={classes.left}>
            <h1>Who am I?</h1>
            <p className={classes.abp}>A CSE student, year three<br/>
               With passion for coding, that's me<br/>
               Web development I'm currently learning<br/>
               UI/UX is a skill that's concerning<br/>
              Lover of problem solving, that's who I'll be.</p>
        </div>
        <div className={classes.right}>
              <img src={me} className={classes.me}></img>
        </div>
    </div>
  )
}

export default About