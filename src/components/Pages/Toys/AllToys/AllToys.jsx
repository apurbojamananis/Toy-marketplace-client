import { useLoaderData } from "react-router-dom";
import Toy from "./Toy";
import { useState } from "react";

const AllToys = () => {
  const toys = useLoaderData();
  const [allToys, setAllToys] = useState(toys);

  const maxItem = 20;

  if (allToys.length >= maxItem) {
    const slicedToys = allToys.slice(0, maxItem);
    setAllToys(slicedToys);
  }

  const handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value.toLowerCase();

    if (value === "") {
      // If the value is empty, show all toys
      setAllToys(toys);
    } else {
      const filteredToys = toys.filter((toy) => {
        const items = toy.ToyName.toLowerCase();
        return items.includes(value);
      });

      setAllToys(filteredToys);
    }
  };

  return (
    <div className="container mx-auto">
      <hr />
      <div className="py-16">
        <div>
          <h2 className="text-center text-4xl">
            Number of Available Toys: {toys.length}
          </h2>
        </div>
        <div className="py-5 flex justify-end">
          <div className="form-control">
            <label className="input-group">
              <input
                type="text"
                placeholder="search here"
                className="input input-bordered"
                onChange={handleChange}
              />
              <span>Search</span>
            </label>
          </div>
        </div>
        <div>
          <div className="overflow-x-auto ">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Seller Name</th>
                  <th>Toy Name</th>
                  <th>Sub-category</th>
                  <th>Price</th>
                  <th>Available Quantity</th>
                  <th>View Details</th>
                </tr>
              </thead>
              <tbody>
                {allToys.map((toy, index) => (
                  <Toy key={toy._id} toy={toy} length={index}></Toy>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
