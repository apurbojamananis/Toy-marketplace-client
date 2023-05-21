import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";
import useTitle from "../../../Hooks/useTitle";

const AddToys = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { user } = useContext(AuthContext);
  useTitle("AddToys");
  const handleAddToys = (event) => {
    event.preventDefault();

    const form = event.target;
    const ToyName = form.ToyName.value;
    const photoURL = form.photoURL.value;
    const sellerName = form.sellerName.value;
    const email = user ? user.email : form.email.value;
    const subCategory = selectedCategory;
    const price = parseFloat(form.price.value);
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const toysInfo = {
      ToyName,
      photoURL,
      sellerName,
      email,
      subCategory,
      price,
      rating,
      quantity,
      description,
    };

    fetch("https://b7a11-toy-marketplace-server-kappa.vercel.app/allToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toysInfo),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Data saved Successfully",
            icon: "success",
            showConfirmButton: false,
            timer: 4000,
          });
          form.reset();
        }
      });
  };

  return (
    <div className="container mx-auto">
      <hr />
      <div>
        <h1 className="text-4xl text-center py-10">Add a Toy</h1>
      </div>
      <div className="w-8/12 mx-auto pb-20">
        <form onSubmit={handleAddToys}>
          <div className="grid grid-cols-2 gap-10">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Name</span>
              </label>
              <input
                type="text"
                name="ToyName"
                placeholder="Toy name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Photo URL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="https://www.photoURL.com"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                defaultValue={user && user.displayName}
                name="sellerName"
                placeholder="Seller name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <input
                type="email"
                placeholder={user && user.email}
                defaultValue={user && user.email}
                name="email"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toys Category</span>
              </label>
              <select
                className="select select-bordered"
                name="subCategory"
                defaultValue={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                required
              >
                <option disabled value="">
                  Pick a Category
                </option>
                <option value="Math Toys">Math Toys</option>
                <option value="Language Toys">Language Toys</option>
                <option value="Science Toys">Science Toys</option>
                <option value="Engineering Toys">Engineering Toys</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="$ Price "
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Rating</span>
              </label>
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available quantity</span>
              </label>
              <input
                type="text"
                name="quantity"
                placeholder="Available quantity"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Detail description</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Description"
                name="description"
                required
              ></textarea>
            </div>
          </div>
          <div className="py-5">
            <input
              type="submit"
              value="Add Toy"
              className="btn btn-block normal-case"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToys;
