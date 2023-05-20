import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const SingleToy = () => {
  const toy = useLoaderData();
  console.log(toy);
  const {
    ToyName,
    description,
    email,
    photoURL,
    price,
    quantity,
    rating,
    sellerName,
  } = toy;
  return (
    <div className="container mx-auto">
      <hr />
      <div className="card lg:card-side bg-base-100 shadow-xl my-40 w-8/12 mx-auto">
        <figure>
          <img
            src={photoURL}
            alt={ToyName}
            className="max-h-[800px] py-10 px-5 border-r-2"
          />
        </figure>
        <div className="card-body bg-slate-300 rounded">
          <h2 className="card-title">Toy Name: {ToyName}</h2>
          <h3>Seller Name: {sellerName}</h3>
          <h3>Seller Email: {email}</h3>
          <h5>Price: ${price}</h5>
          <h5>Rating: {rating}</h5>
          <h5>Available Quantity: ${quantity}</h5>
          <p>Description: {description}</p>
          <div className="card-actions mt-5">
            <button
              className="btn btn-neutral"
              onClick={() => {
                Swal.fire({
                  title: `WOW! Your added ${ToyName} to your cart.`,
                  icon: "success",
                  showConfirmButton: false,
                  timer: 4000,
                });
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;