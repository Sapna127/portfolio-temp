import React from 'react'
import classes from './Blog.module.css'
import blog from '../../Assets/blog.svg'
import Button from '../../UI/Button/Button'
const Blog = () => {
  return (
    <div className={classes.blog}>
       
        <div className={classes.right}>
            <img src={blog}/>
        </div>
        <div className={classes.left}>
            <h2>Checkout My Technical <br/> Articles</h2>
            <p>Lorem ipsum dolor sit amet consectetur<br/>
               Lorem ipsum dolor sit amet consectetur..</p>
            <Button className={classes.btn} url={'https://hashnode.com/@dream286'}>Blogs</Button>
        </div>
    </div>
  )
}

export default Blog