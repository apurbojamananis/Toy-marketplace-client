/* eslint-disable react/prop-types */
const ToysCard = ({ toy }) => {
  const { photoURL, ToyName, price, rating } = toy;
  return (
    <div>
      <div className="card max-w-72 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 mb-4">
          <img src={photoURL} alt={ToyName} className="rounded-xl" />
        </figure>
        <hr />
        <div className="card-body items-center bg-slate-300 rounded">
          <div className="flex justify-between items-center  w-full">
            <div>
              <h2 className="card-title">{ToyName}</h2>
            </div>
            <div>
              <p>${price}</p>
            </div>
          </div>
          <div className="w-full">
            <p>Rating: {rating}</p>
          </div>
          <div className="card-actions mt-5">
            <button className="btn btn-sm btn-neutral">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToysCard;