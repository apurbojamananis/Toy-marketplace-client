import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";

const Login = () => {
  const [error, setError] = useState(null);
  const { SignIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useTitle("login");
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setError(null);
    const user = {
      email,
      password,
    };

    SignIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          title: `Hi ${loggedUser.displayName}! Welcome to iLearnToys`,
          icon: "success",
          showConfirmButton: false,
          timer: 4000,
        });
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errText = error.message;
        const slicedErr = errText.split("/")[1].split(")")[0];
        setError(slicedErr);
      });

    console.log(user);
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        const errText = error.message;
        const slicedErr = errText.split("/")[1].split(")")[0];
        setError(slicedErr);
      });
  };
  return (
    <div>
      <div className="container mx-auto">
        <div className=" min-h-screen ">
          <div className="py-16">
            <div className="text-center py-5">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="max-w-sm shadow-2xl rounded-lg mx-auto">
              <div className="p-8 ">
                <form onSubmit={handleLogin}>
                  <div>
                    <p className="pb-5 text-red-600">{error}</p>
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
                    <input
                      type="submit"
                      value="Login"
                      className="btn btn-primary"
                    />
                  </div>
                </form>
                <div className="flex flex-col w-full border-opacity-50">
                  <div className="divider">OR</div>
                  <button
                    className="btn btn-neutral capitalize"
                    onClick={handleGoogleSignIn}
                  >
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
