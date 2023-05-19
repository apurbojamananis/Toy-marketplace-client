import { useLoaderData } from "react-router-dom";
import Toy from "./Toy";

const AllToys = () => {
  const toys = useLoaderData();
  console.log(toys);
  return (
    <div className="container mx-auto">
      <hr />
      <div className="py-16">
        <div>
          <h2 className="text-center text-4xl">
            Number of Available Toys: {toys.length}
          </h2>
        </div>
        <div>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>Seller Name</th>
                  <th>Toy Name</th>
                  <th>Sub-category</th>
                  <th>Price</th>
                  <th>Available Quantity</th>
                  <th>View Details</th>
                </tr>
              </thead>
              <tbody>
                {toys.map((toy) => (
                  <Toy key={toy._id} toy={toy}></Toy>
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
