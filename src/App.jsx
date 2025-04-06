import { useState } from "react";
import "./App.css";
import Blogs from "./componants/blogs/Blogs";
import Navbar from "./componants/navbar/Navbar";

function App() {
  const [bookmarked, setBookmarked] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmark = (blog) => {
    // console.log(blog);
    setBookmarked([...bookmarked, blog]);
  };
  const handleMarkAsRead = (blog)=>{
    // console.log(blog.readingTime);
    const time = blog.readingTime;
    setReadingTime(readingTime + time);
    const newBookmarked = bookmarked.filter((b) => b.id !== blog.id);
    setBookmarked(newBookmarked);
  }
  // console.log(bookmarked);

  return (
    <>
      <Navbar />
      <div className="main flex justify-around text-center">
        <div className="left w-[70%]">
          <Blogs handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead} />
        </div>

        <div className="right sidebar w-[30%] ">
          <h2>reading time:{readingTime} </h2>
          <h1>bookmarked count : {bookmarked.length}</h1>

          {bookmarked.map((blog) => (
            <h1 className="border bg-green-200 p-2 my-1 border-none rounded-md">
              {blog.blogTitle}
            </h1>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
