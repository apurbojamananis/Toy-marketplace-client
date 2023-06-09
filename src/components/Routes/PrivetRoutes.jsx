import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const PrivetRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div>
        <div className="bg-gray-200 w-full min-h-screen flex justify-center items-center">
          <div className="flex min-h-screen w-full items-center justify-center bg-gray-200">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 animate-spin">
              <div className="h-9 w-9 rounded-full bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (user?.email) {
    return children;
  } else {
    Swal.fire("You have to log in first to view details");
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};

export default PrivetRoutes;
