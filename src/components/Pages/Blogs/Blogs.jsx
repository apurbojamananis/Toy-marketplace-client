import { useLoaderData } from "react-router-dom";
import Blog from "./Blog";
import useTitle from "../../Hooks/useTitle";

const Blogs = () => {
  const blogs = useLoaderData();
  useTitle("Blog");

  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-4 gap-5  mt-10">
        {blogs.map((blog) => (
          <Blog key={blog._id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
