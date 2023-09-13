import React, { useState } from "react";
import { Link } from "react-router-dom";
import blog from './blog.json';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogData, setFilteredBlogData] = useState(blog);

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter the data based on the search query and set it in state
    const filteredResults = blog.filter((data) =>
      data.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredBlogData(filteredResults);
  };

  return (
    <div>
      <main>
        <section>
          <div className="container">
            <div className="blogHeader mb-4">
              <h1>
                The <strong>Blog</strong>
              </h1>
            </div>
          </div>
        </section>
        <section>
          <div className="container mb_60">
            <form
              action=""
              className="d-flex justify-content-between align-items-center blogForm"
            >
              <input
                type="text"
                className="form-control w-100 d-inline"
                placeholder="Search our blog"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
              <button type="submit" className="btn btn-dark d-inline" value="">
                SEARCH
              </button>
            </form>
          </div>
        </section>
        <section>
          <div className="container">
            {filteredBlogData.map((data, index) => (
              <div key={index} className="blogInner">
                <div className="mb-4">
                  <h2 className="mb-2">
                    <Link to={`/blog/${data.id}`}>{data.title}</Link>
                  </h2>
                  {data.greyText.map((text, idx) => (
                    <Link key={idx} to="#" className="label">
                      <i className="fa fa-dot-circle-o"></i> {text}
                    </Link>
                  ))}
                </div>
                <p>{data.details}</p>
                <div className="mt-5 readBtn">
                  <Link to={`/blog/${data.id}`} className="btn btn-xs">
                    <i className="fa fa-sign-out"></i> READ MORE
                  </Link>
                </div>
              </div>
            ))}
            <div className="d-flex justify-content-center mb_60">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <Link className="page-link active" to="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      3
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;
