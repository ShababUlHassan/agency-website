import React from "react";
import BlogCard from "./BlogCard"
const Blogs = () => {
  return (
    <div className="Blogs text-center bg-[#18191f] py-[120px] ">
      <div>
        <p className="text-[24px] uppercase tracking-[0.5em] text-[#7b61ff] font-semibold">
          Blogs
        </p>
        <h2 className="uppercase text-[70px] font-extrabold ">
        <span className="outline-text gray-text">latest</span> articles
        </h2> 
      </div>

        <BlogCard />
    </div>
  );
};

export default Blogs;
