import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="container mx-auto ">
        <div className="navbar">
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
                  <Link to="/">All Toys</Link>
                </li>

                <li>
                  <Link to="/">My Toys</Link>
                </li>
                <li>
                  <Link to="/">Add a Toys</Link>
                </li>
                <li>
                  <Link to="/">Blogs</Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-2">
              <img src="./logo.png" alt="Logo" className="w-20" />
              <h1 className="text-2xl font-bold">iLearnToys</h1>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">All Toys</Link>
              </li>

              <li>
                <Link to="/">My Toys</Link>
              </li>
              <li>
                <Link to="/">Add a Toys</Link>
              </li>
              <li>
                <Link to="/">Blogs</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <Link className="btn">Login</Link>
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://randomuser.me/api/portraits/thumb/men/20.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
