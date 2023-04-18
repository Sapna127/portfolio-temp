import React from 'react'
import { ProjectData } from '../../Assets/ProjectData';
import classes from './Projects.module.css'
import Card from '../../UI/Card/Card';
const Projects = () => {
  return (
    <>
      <h1>Work I've Done So Far</h1>
      <p>Lorem ipsum dolor sit amet consectetur<br/>
         Lorem ipsum dolor sit amet consectetur..</p>
      <div className={classes.project_section}>
        {/* Render our cards using map here. */}
        {
          ProjectData.map((project)=>{
            return<Card data={project}/>;
          })
        }
      </div>
    </>
  )
}

export default Projects