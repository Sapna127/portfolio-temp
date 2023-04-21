import React, { useState, useRef } from 'react'
import classes from './Navbar.module.css'
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';

const Navbar = () => {
    const [showContact, setShowContact] = useState(false);

    const handleClick = () => {
        setShowContact(true);
    };

    const handleCloseContact = () => {
        setShowContact(false);
    };
    const handleResumeClick = () => {
        const link = document.createElement('a');
        link.href = 'https://docs.google.com/document/d/1pnEFPafrjjkPJMXegtub5wvn_0ZMwN_HUpjA03wdBN8/edit?usp=sharing';
        // link.href = '{Resume (Sapna_Kul)}';
        link.download = 'Resume(Sapna_Kul).doc';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

      

    return (
        <nav>
            <h1>SAPNA KUL</h1>
            <div className={classes.low}>
                <div className={classes.left}>
                    <ul>
                        <li><a href={About}>About</a></li>
                        <li>Projects</li>
                        <li>Experience</li>
                    </ul>
                </div>
                <div className={classes.right}>
                    <button className={classes.contactbtn} onClick={handleClick}>CONTACT</button>
                    <button className={classes.resume} onClick={handleResumeClick}>RESUME</button>
                </div>
            </div>
            {showContact && (
                <Contact onClose={handleCloseContact} />
            )}
        </nav>
    )
}

export default Navbar
