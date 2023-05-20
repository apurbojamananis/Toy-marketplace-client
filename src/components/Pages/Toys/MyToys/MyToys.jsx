import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import ToysDetails from "./ToysDetails";

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);
  const { user } = useContext(AuthContext);
  const email = user.email;

  useEffect(() => {
    fetch(`http://localhost:5000/user/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [email]);

  return (
    <div className="container mx-auto h-full">
      <hr />
      <div>
        <h2 className="text-center text-4xl my-10">
          Total Toys: {myToys.length}
        </h2>
      </div>
      <div className="mb-20 overflow-hidden">
        <div className="min-w-full overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>ToyName</th>
                <th>Photo URL</th>
                <th>Seller Name</th>
                <th>Seller Email</th>
                <th>SubCategory</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Rating</th>
                <th>Description</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {myToys.map((toy) => (
                <ToysDetails key={toy._id} toy={toy}></ToysDetails>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
