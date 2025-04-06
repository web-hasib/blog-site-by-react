import React, { useEffect, useState } from 'react';
import Blog from '../blog/Blog';

const Blogs = ({handleBookmark, handleMarkAsRead}) => {
    const [blogs,setBlogs]= useState([])
    useEffect(() =>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
// console.log(blogs);
    return (
        <div>
           <h1 className='text-3xl'>blog: {blogs.length}</h1>
           <div className="blogs flex flex-wrap gap-5 justify-center mt-5">

            {
        blogs.map((blog) => <Blog handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead} key={blog.id} blog={blog}></Blog>)
            }
           </div>
        </div>
    );
};

export default Blogs;