import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className=" min-h-screen ">
          <div className="pt-32">
            <div className="text-center py-5">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="max-w-sm shadow-2xl rounded-lg mx-auto">
              <div className="p-8 ">
                <form>
                  <div>
                    <p className="pb-5 text-red-600">
                      Error has been occurred!
                    </p>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="input input-bordered"
                      required
                    />
                    {/* <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label> */}
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                  </div>
                </form>
                <div className="flex flex-col w-full border-opacity-50">
                  <div className="divider">OR</div>
                  <button className="btn btn-neutral capitalize">
                    <FaGoogle className="mr-2"></FaGoogle> Continue with Google
                  </button>
                </div>
                <div className="mt-4 text-center">
                  <p>
                    New user?{" "}
                    <Link to="/register" className="text-primary underline">
                      {" "}
                      Please Register Here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
