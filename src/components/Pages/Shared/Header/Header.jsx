import { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { FaUserAlt } from "react-icons/fa";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "logOut Successfully",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="container mx-auto ">
        <div className="navbar min-h-[100px]">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <GiHamburgerMenu className=" text-2xl"></GiHamburgerMenu>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/alltoys">All Toys</Link>
                </li>

                {user && (
                  <li>
                    <Link to="/myToys">My Toys</Link>
                  </li>
                )}
                {user && (
                  <li>
                    <Link to="/addtoys">Add a Toys</Link>
                  </li>
                )}
                <li>
                  <Link to="/">Blogs</Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-2">
              <Link to="/">
                <img src="./logo.png" alt="Logo" className="w-20" />
              </Link>
              <Link>
                <h1 className="text-2xl font-bold">iLearnToys</h1>
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/alltoys">All Toys</Link>
              </li>

              {user && (
                <li>
                  <Link to="/myToys">My Toys</Link>
                </li>
              )}
              {user && (
                <li>
                  <Link to="/addtoys">Add a Toys</Link>
                </li>
              )}
              <li>
                <Link to="/">Blogs</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {user && (
              <div className="avatar  mr-3">
                <div className="w-10 rounded-full">
                  {user.photoURL ? (
                    <img src={user.photoURL} />
                  ) : (
                    <FaUserAlt className="mx-auto mt-4 "></FaUserAlt>
                  )}
                </div>
              </div>
            )}
            {user ? (
              <Link onClick={handleLogOut} to="/login" className="btn btn-sm">
                LogOut
              </Link>
            ) : (
              <Link to="/login" className="btn btn-sm">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
