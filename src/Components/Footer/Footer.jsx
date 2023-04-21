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
        <div className={classes.socials}>
            <img src={insta} className={classes.in} onClick={()=>window.open('https://www.instagram.com/_dr.ea.m_/')}/>
            <img src={github} className={classes.git} onClick={()=>window.open('https://github.com/Sapna127')}/>
            <img src={tweeter} className={classes.tweet} onClick={()=>window.open('https://twitter.com/sapna_kul')}/>
            <img src={linkedin} className={classes.link} onClick={()=>window.open('https://www.linkedin.com/in/sapna-kul-84453a215/')}/>
        </div>
    </footer>
  )
}

export default Footer
