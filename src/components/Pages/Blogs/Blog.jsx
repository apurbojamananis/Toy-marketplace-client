/* eslint-disable react/prop-types */
const Blog = ({ blog }) => {
  const { img, question, answer } = blog;

  return (
    <div className="pb-5">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Image..." className="p-12" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{question}</h2>
          <p>{answer}</p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Read More</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Blog;
