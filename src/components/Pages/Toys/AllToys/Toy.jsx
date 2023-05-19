/* eslint-disable react/prop-types */
const Toy = ({ toy }) => {
  const { sellerName, ToyName, subCategory, price, quantity } = toy;
  return (
    <tr>
      <td>
        <div className="font-bold">{sellerName}</div>
      </td>
      <td>{ToyName}</td>
      <td>{subCategory}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <th>
        <button className="btn btn-neutral">details</button>
      </th>
    </tr>
  );
};

export default Toy;
