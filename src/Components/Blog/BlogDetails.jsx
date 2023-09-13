import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import blogData from "../Blog/blog.json";

const BlogDetails = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const selectedBlog = blogData.find((blog) => blog.id === parseInt(blogId));
    if (selectedBlog) {
      setBlog(selectedBlog);
    } else {
      console.error(`Blog with ID ${blogId} not found.`);
    }
  }, [blogId]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5 mx-auto">
      {/*     <h2>{blog.title}</h2>
      <p>{blog.details}</p> */}
      <div key={blog.id} className="blogInner">
        <div className="mb-4">
          <h2 className="mb-2">
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          </h2>
          {blog.greyText.map((text, idx) => (
            <Link key={idx} to="#" className="label">
              <i className="fa fa-dot-circle-o"></i> {text}
            </Link>
          ))}
        </div>
        <p>{blog.details}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
