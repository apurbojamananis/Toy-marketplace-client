import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container mx-auto">
      <img src="./404.jpg" alt="" className="w-6/12 mx-auto" />
      <div className="w-6/12 mx-auto">
        <button className="underline text-primary ">
          <Link to="/">Back to Home</Link>
        </button>
      </div>
    </div>
  );
};

export default Error;
