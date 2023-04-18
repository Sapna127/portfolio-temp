import React from 'react'
import classes from './Navbar.module.css'
import About from '../About/About';
const Navbar = () => {
    const handleClick = () => {
        const link = document.createElement('a');
        link.href = '/path/to/resume.doc';
        link.download = 'resume.doc';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
  return (
      <nav>
        <h1>SAPNA KUL</h1>
        <div className={classes.low}>
            <div className={classes.left}><ul>
                <li><a link={About}>About</a></li>
                <li>Projects</li>
                <li>Experience</li>
            </ul></div>
            <div className={classes.right}>
            <button className={classes.contactbtn}>CONTACT</button>
            <button className={classes.resume} onClick={handleClick}>RESUME</button>
            </div>
        </div>
      </nav>
  )
}

export default Navbar