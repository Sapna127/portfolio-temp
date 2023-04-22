import React from 'react'
import classes from './Blog.module.css'
import read from '../../Assets/read.gif'
import Button from '../../UI/Button/Button'

const Blog = () => {
  return (
    <div className={classes.blog}> 
        <div className={classes.right}>
            <img src={read} className={classes.read}/>
        </div>
        <div className={classes.left}>
            <h1>Checkout My Technical <br/> Articles</h1>
            <p>Check out my latest tech articles where I share my insights and experiences on various topics related to web development, programming. I cover a wide range of topics trends and best practices. Feel free to take a look and let me know what you think!</p>
            <Button className={classes.btn} url={'https://hashnode.com/@dream286'}>Blogs</Button>
        </div>
    </div>
  )
}

export default Blog