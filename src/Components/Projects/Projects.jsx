import React from 'react'
import { ProjectData } from '../../Assets/ProjectData';
import classes from './Projects.module.css'
import Card from '../../UI/Card/Card';
const Projects = () => {
  return (
    <div id="projects">
      <h1>Work I've Done So Far</h1>
      <p>Few Projects I've created <br/>
         While exploring web development..</p>
      <div className={classes.project_section}>
        {
          ProjectData.map((project)=>{
            return<Card data={project}/>;
          })
        }
      </div>
    </div>
  )
}

export default Projects