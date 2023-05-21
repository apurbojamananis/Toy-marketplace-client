import { useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const params = useParams();

  console.log(params.id);

  const handleUpdateToys = (event) => {
    event.preventDefault();

    const form = event.target;
    const ToyName = form.ToyName.value;
    const photoURL = form.photoURL.value;
    const subCategory = selectedCategory;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const UpdatedToysInfo = {
      ToyName,
      photoURL,
      subCategory,
      price,
      rating,
      quantity,
      description,
    };

    // console.log(toysInfo);
    // console.log(params);

    fetch(`http://localhost:5000/updateToy/${params.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdatedToysInfo),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Data Updated Successfully",
            icon: "success",
            showConfirmButton: false,
            timer: 4000,
          });
        }
      });
  };

  return (
    <div className="container mx-auto">
      <hr />
      <div>
        <h1 className="text-4xl text-center py-10">
          Update your Toy Information
        </h1>
      </div>
      <div className="w-8/12 mx-auto pb-20">
        <form onSubmit={handleUpdateToys}>
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
                  Update a Category
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
              value="Update Toy Information"
              className="btn btn-block normal-case"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToy;
