import React from 'react'
import classes from './Footer.module.css'
import insta from '../../Assets/socials/insta.svg'
import github from '../../Assets/socials/github.svg'
import linkedin from '../../Assets/socials/linkedin.svg'
import tweeter from '../../Assets/socials/tweeter.svg'
import arrow from '../../Assets/arrow.svg'
const Footer = () => {
  return (
    <footer>
        <div className={classes.footName}>
            <h1>Wish To Collaborate ?</h1>
            <div className={classes.title}>
                <h2>Contact Now</h2>
                <img src={arrow} className={classes.arrow}/>
            </div>
        </div>
        {/* <div className={classes.socials}>
            <img src={insta} className={classes.in}/>
            <img src={github} className={classes.git}/>
            <img src={tweeter} className={classes.tweet}/>
            <img src={linkedin} className={classes.link}/>
        </div> */}
    </footer>
  )
}

export default Footer