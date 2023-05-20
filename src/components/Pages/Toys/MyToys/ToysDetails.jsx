/* eslint-disable react/prop-types */
const ToysDetails = ({ toy }) => {
  const {
    ToyName,
    photoURL,
    sellerName,
    email,
    subCategory,
    price,
    quantity,
    rating,
    description,
  } = toy;
  return (
    <tr className="hover">
      <th className="whitespace-normal">1</th>
      <td className="whitespace-normal">{ToyName}</td>
      <td className="whitespace-normal">{photoURL}</td>
      <td className="whitespace-normal">{sellerName}</td>
      <td className="whitespace-normal">{email}</td>
      <td className="whitespace-normal">{subCategory}</td>
      <td className="whitespace-normal">${price}</td>
      <td className="whitespace-normal">{quantity}</td>
      <td className="whitespace-normal">{rating}</td>
      <td className="whitespace-normal">{description}</td>
      <td className="whitespace-normal">
        <button className="btn btn-sm btn-neutral">Update</button>
      </td>
      <td className="whitespace-normal">
        <button className="btn btn-sm btn-neutral">Delete</button>
      </td>
    </tr>
  );
};

export default ToysDetails;
