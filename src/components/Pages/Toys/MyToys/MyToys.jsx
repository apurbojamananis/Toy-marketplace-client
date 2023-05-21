/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import ToysDetails from "./ToysDetails";
import Swal from "sweetalert2";
import useTitle from "../../../Hooks/useTitle";

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const { user } = useContext(AuthContext);
  const email = user.email;
  const url = `https://b7a11-toy-marketplace-server-kappa.vercel.app/user/${email}`;
  const ascendingUrl = `https://b7a11-toy-marketplace-server-kappa.vercel.app/ascending/${email}`;
  const descendingUrl = `https://b7a11-toy-marketplace-server-kappa.vercel.app/descending/${email}`;
  const [apiURL, setApiURL] = useState(url);
  useTitle("MyToys");

  const handleChange = (e) => {
    let value = e.target.value;
    if (value === "low to high") {
      setApiURL(ascendingUrl);
    } else {
      setApiURL(descendingUrl);
    }
  };
  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [apiURL]);

  const handleDelete = (id) => {
    // alert(` you have delete the product id is:  ${id}`);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://b7a11-toy-marketplace-server-kappa.vercel.app/toy/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Data has been deleted.", "success");
            }
            const remaining = myToys.filter((toys) => toys._id !== id);
            setMyToys(remaining);
          });
      }
    });
  };

  return (
    <div className="container mx-auto h-full">
      <hr />
      <div>
        <h2 className="text-center text-4xl my-10">
          Total Toys: {myToys.length}
        </h2>
      </div>
      <div className="my-5">
        <select
          className="select select-info w-full max-w-xs"
          defaultValue={selectedOption}
          onChange={handleChange}
        >
          <option disabled value="">
            Filter by Price
          </option>
          <option value="low to high">Low to high</option>
          <option value="high to low">High to Low</option>
        </select>
      </div>
      <div className="mb-20 ">
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
              {myToys.map((toy, index) => (
                <ToysDetails
                  key={toy._id}
                  toy={toy}
                  index={index}
                  handleDelete={handleDelete}
                ></ToysDetails>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
