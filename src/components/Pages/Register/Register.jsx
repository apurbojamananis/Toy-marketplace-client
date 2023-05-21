import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";

const Register = () => {
  const [error, setError] = useState(null);
  const { SignUp, ProfileUpdate, logOut, googleSignIn } =
    useContext(AuthContext);
  const navigate = useNavigate();
  useTitle("Register");
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photo.value;

    // const user = {
    //   name,
    //   email,
    //   password,
    //   photoUrl,
    // };

    setError(null);
    SignUp(email, password)
      .then((result) => {
        const CreatedUser = result.user;

        ProfileUpdate(CreatedUser, name, photoUrl);
        Swal.fire({
          title: "Awesome! User Created Successfully",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
        logOut();
        navigate("/login");
        form.reset();
      })
      .catch((error) => {
        const errText = error.message;
        const slicedErr = errText.split("/")[1].split(")")[0];
        setError(slicedErr);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        logOut();
        navigate("/login");
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
              <h1 className="text-5xl font-bold">Register now!</h1>
            </div>
            <div className="max-w-sm shadow-2xl rounded-lg mx-auto">
              <div className="p-8 ">
                <form onSubmit={handleRegister}>
                  <div>
                    <p className="pb-5 text-red-600">{error}</p>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="name"
                      className="input input-bordered"
                      required
                    />
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
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Photo URL</span>
                      </label>
                      <input
                        type="text"
                        name="photo"
                        placeholder="photo URL"
                        className="input input-bordered"
                      />
                    </div>
                    {/* <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label> */}
                  </div>
                  <div className="form-control mt-6">
                    <input
                      type="submit"
                      value="Register"
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
                    Already Register?{" "}
                    <Link to="/login" className="text-primary underline">
                      {" "}
                      Please Login Here
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

export default Register;
