import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Toy = ({ toy, length }) => {
  const { _id, sellerName, ToyName, subCategory, price, quantity } = toy;
  return (
    <tr>
      <td>{length + 1}</td>
      <td>
        <div className="font-bold">{sellerName}</div>
      </td>
      <td>{ToyName}</td>
      <td>{subCategory}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <th>
        <Link to={`/toy/${_id}`}>
          <button className="btn btn-neutral">details</button>
        </Link>
      </th>
    </tr>
  );
};

export default Toy;
