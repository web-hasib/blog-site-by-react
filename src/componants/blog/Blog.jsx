import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmark,handleMarkAsRead }) => {
  // console.log(handleBookmark);
  const {
    blogTitle,
    authorName,
    authorProfilePicture,
    blogCoverPicture,
    blogDescription,
    hashtags
  } = blog;
//   console.log(readingTime);
  return (
    <div>
      <div className="card bg-base-100 w-auto p-4 m-5 shadow-sm">
        <figure>
          <img src={blogCoverPicture} alt="blog" />
        </figure>
        <div className="author-info flex items-center justify-around gap-2 p-2">
          <img
            src={authorProfilePicture}
            alt="author"
            className="w-10 h-10 rounded-full"
          />
          <h2>{authorName}</h2>
          <button
            onClick={() => handleBookmark(blog)}
            className="btn btn-ghost btn-circle"
          >
            <FaBookmark size={25} />
          </button>
        </div>
        <div className="card-body">
          <h2 className="card-title">{blogTitle}</h2>
          <p> {blogDescription}</p>
          <div className="card-actions justify-end">
            <div className="hastags">
              {hashtags.map((hashtag, index) => (
                <button
                  key={index}
                  className="btn p-1 h-[60%] m-[2px] btn-outline btn-info hover:bg-red-50"
                >
                  {hashtag}
                </button>
              ))}
            </div>
            <button onClick={()=>handleMarkAsRead(blog)} className="btn btn-primary">make as read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
